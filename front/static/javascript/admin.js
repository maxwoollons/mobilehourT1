// http://localhost:8000/api/products/all
// http://localhost:8000/api/users/all

let products = document.getElementById("products-admin");
let users = document.getElementById("users");


//get all products query
fetch("http://localhost:8000/api/products/all")
.then(res => res.json()).then(productlist => {
    for (let product of productlist) {
        let productHTML = `
        <div class="productbox">
         <a href="/product.html?product=${product.product_id}">
            <h3>${product.product_id}: ${product.product_name} $${product.price}</h3>
            </a> 
          <input class="product-del-button" onclick="deleteProduct(${product.product_id})" id="delete" type="button" value="Delete Product ${product.product_id}"></input> 
          <a href="/productedit.html?product=${product.product_id}"><input class="product-del-button" id="edit" type="button" value="Edit Product ${product.product_id}"></input></a>
        </div>  
        `
        products.innerHTML += productHTML
    }
})

//get all users query
fetch("http://localhost:8000/api/users/all")
.then(res => res.json()).then(userlist => {
    for (let user of userlist) {
        let userHTML = `
        <div class="userbox">
         
            <h3>ID: ${user.id} ${user.firstname} ${user.lastname}</h3>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard2-fill" viewBox="0 0 16 16">
            <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z"/>
            <path d="M3.5 1h.585A1.498 1.498 0 0 0 4 1.5V2a1.5 1.5 0 0 0 1.5 1.5h5A1.5 1.5 0 0 0 12 2v-.5c0-.175-.03-.344-.085-.5h.585A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1Z"/>
          </svg> ${user.role}</p> <input class="del-users-license" onclick="deleteuser(${user.id})" id="delete" type="button" value="Delete User ${user.id}"></input>
          <a href="/useredit.html?user=${user.id}"><input class="product-del-button" id="edit" type="button" value="Edit User ${user.id}"></input></a>
           
        </div>  
        `
        users.innerHTML += userHTML
    }
})


function deleteuser(id){
  if(confirm("Are you sure you would like to delete user id " + id + "?")){
    fetch("http://localhost:8000/api/users/" + id, {
      method: "DELETE",
      
    }).then(response => response.json())
    .then(data => {
      console.log("Success:", data);
      location.reload();
     
   
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
  else{
    return false;
  }

}


function deleteProduct(id){
  if(confirm("Are you sure you would like to delete product id " + id + "?")){
    fetch("http://localhost:8000/api/products/" + id, {
      method: "DELETE",
      
    }).then(response => response.json())
    .then(data => {
      console.log("Success:", data);
      location.reload();
     
   
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
  else{
    return false;
  }

}



function limitupdate(){
  
}