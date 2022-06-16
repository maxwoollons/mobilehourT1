let btn = document.getElementById("btn");

btn.addEventListener("click", sendData);



// fetch features
let select = document.getElementById("feature_id");
fetch("/api/features/all")
.then(res => res.json()).then(features => {
  for (features of features){
    let option = document.createElement("option");
    option.text = `ID: ${features.feature_id} - ${features.width}mm x ${features.length}mm, ${features.weight}g, ${features.charge}MWH, ${features.cameraspecs}`;
    option.value = features.feature_id;
    select.add(option);
  }
    
});




function sendData(e){
  e.preventDefault();






  let name = document.querySelector("#name").value;
  let feature_id = document.querySelector("#feature_id").value;
  let colour = document.querySelector("#colour").value;
  let year = document.querySelector("#year").value;
  let price = document.querySelector("#price").value;
  let image = document.querySelector("#image").value;
  let stock = document.querySelector("#stock").value;
  let body = {
    "name": name,
    "feature_id": feature_id,
    "price": price,
    "colour": colour,
    "year": year,
    "image": image,
    "stock": stock
  }
  

  fetch("/api/products/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
  .then(res => res.json()).then(data => {
    console.log(data);
    document.querySelector("#name").value = "";
    document.querySelector("#feature_id").value = "1";
    document.querySelector("#colour").value = "";
    document.querySelector("#year").value = "";
    document.querySelector("#price").value = "";
    document.querySelector("#image").value = "";
    document.querySelector("#stock").value = "";
    window.alert("Product created!");
    window.href = "/products";
  })




}