const addToCart = document.querySelectorAll(".btn-cart")

var products = [
   {
      name : 'Anneaux',
      price : 40,
      imageSrc : 'Anneau.jpg',
      inCart : 0
   },
   {
      name : 'Bracelet',
      imageSrc : 'Bracelet-homme.jpg',
      price : 80,
      inCart : 0 
   },
   {
      name : 'Boucle',
      imageSrc : 'Boucle-femme.jpg',
      price : 120,
      inCart : 0 
   },
   {
      name : 'Collier',
      imageSrc : 'Collier-femme.jpg',
      price : 60,
      inCart : 0 
   },
   {
      name : 'Lunettes',
      imageSrc : 'Lunettes-homme.jpg',
      price : 70,
      inCart : 0 
   },
   {
      name : 'Bracelet',
      imageSrc : 'Bracelet2-femme.jpg',
      price : 150,
      inCart : 0 
   },
   {
      name : 'Armin Bracelet Ensemble B202 - Bohême - 5 Pcs',
      imageSrc : 'Bracelet1-femme.jpg',
      price : 45,
      inCart : 0 
   },
   {
      name : 'Casio Montre Hommes - MCW-110H-2A',
      imageSrc : 'Montre-homme.jpg',
      price : 100,
      inCart : 0 
   },
   {
      name : 'Montre bracelet femme',
      imageSrc : 'Montre-bracelet-femme.jpg',
      price : 65,
      inCart : 0 
   }
]


for(let i = 0; i < addToCart.length; i++) {
   addToCart[i].addEventListener("click", () => {
        cartNumbers(products[i])
        totalPrice(products[i])
    })
}

function onLoadCartPage(){
   let productNumbers = localStorage.getItem('cardNumbers')
   if(productNumbers){
       document.querySelector('.badge').innerHTML = productNumbers
   }
}

function cartNumbers(product) {
   let productNumbers = localStorage.getItem("cardNumbers")
   productNumbers = parseInt(productNumbers)
   if (productNumbers) {
      localStorage.setItem("cardNumbers" , productNumbers + 1)
      document.querySelector('.badge').innerHTML = productNumbers + 1
   }
   else {
      localStorage.setItem("cardNumbers" , 1)
      document.querySelector('.badge').innerHTML = 1
   }
   addItems(product)
}

function addItems(product) {
   let cartItems = localStorage.getItem("productsInCart")
   cartItems = JSON.parse(cartItems)
   if(cartItems != null) {
      if(cartItems[product.imageSrc] == undefined) {
         cartItems = {
            ...cartItems,
            [product.imageSrc]: product
         }
      }
      cartItems[product.imageSrc].inCart += 1
   } else {
      product.inCart = 1
      cartItems = {
         [product.imageSrc]: product
      }
   }
   localStorage.setItem("productsInCart",JSON.stringify(cartItems))
}

function totalPrice(product) {
     let cartCost = localStorage.getItem("totalPrice")
     if(cartCost != null) {
      cartCost  = parseInt(cartCost)
      localStorage.setItem("totalPrice", cartCost + product.price)
     } else {
      localStorage.setItem("totalPrice", product.price)
     }
}

function cartPage(){
   let cardItems=localStorage.getItem('productsInCart');
   cardItems=JSON.parse(cardItems);
   let productSection=document.querySelector(".added-products");
   let cartCost=localStorage.getItem("totalPrice")
   if (cardItems && productSection){
       productSection.innerHTML=''; 
       Object.values(cardItems).map(item=>{
         productSection.innerHTML+=
         `
          <div class="container mt-4">
           <div class="d-flex justify-content-between align-items-center p-3">
           <div> 
           <img src="images/Produits/${item.imageSrc}" style="width: 130px;">
           </div>
           <div class="name my-auto"> <h4>${item.name}</h4></div>
           <div class="price my-auto" style="font-size: 1.5rem;"> <p>${item.price} Dt</p></div>
           <div class="quantity my-auto">
           <i class="fas fa-minus-circle me-1" style="font-size: 1.5rem;"></i><span style="font-size: 1.5rem;">${item.inCart}</span><i class="fas fa-plus-circle ms-1" style="font-size: 1.5rem;"></i>
           </div>
           <div class="total my-auto" style="font-size: 1.5rem;"><p>${item.inCart*item.price} Dt</p></div>
           <div><i class="fas fa-times-circle" style="font-size: 1.5rem;"></i></div>
           </div>
           <hr>
         </div> 
         `
     })

     productSection.innerHTML +=`
     <div class="d-flex justify-content-end p-5 me-3"> 
     <h5> Total : ${cartCost}, Dt</h5>
     </div>
    </div>
     `
 }
}

cartPage()
onLoadCartPage()


