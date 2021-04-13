const addToCart = document.querySelectorAll(".btn-cart")

var products = [
   {
      name : 'Armin Anneaux Ensemble A006 - 5 Pcs',
      price : 40,
      tag : 'anneaux',
      inCart : 0
   },
   {
      name : 'Armin Bracelet Vintage H124 - Homme - 4 Pcs',
      tag : 'bracelet-homme',
      price : 80,
      inCart : 0 
   },
   {
      name : 'Armin Boucle oreille B103 - Argent',
      tag : 'boucle',
      price : 120,
      inCart : 0 
   },
   {
      name : 'Collier pendentif fleur - Doré',
      tag : 'collier',
      price : 60,
      inCart : 0 
   },
   {
      name : 'Lunettes Homme - 6 En 1 - Monture + 5 Appliques Polarisées',
      tag : 'lunettes-homme',
      price : 70,
      inCart : 0 
   },
   {
      name : 'Armin Bracelet Ensemble B212 - Vintage - Femme -  4 Pcs',
      tag : 'bracelet-femme',
      price : 150,
      inCart : 0 
   },
   {
      name : 'Armin Bracelet Ensemble B202 - Bohême - 5 Pcs',
      tag : 'bracelet-femme',
      price : 45,
      inCart : 0 
   },
   {
      name : 'Casio Montre Hommes - MCW-110H-2A',
      tag : 'montre-homme',
      price : 100,
      inCart : 0 
   },
   {
      name : 'Montre bracelet femme',
      tag : 'montre-femme',
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

/*
function onLoadPage() {
   let productNumbers = localStorage.getItem("cardNumbers")
   if  (productNumbers) {
      document.querySelector('.badge').innerHTML = productNumbers 
   }
} */


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
      if(cartItems[product.tag] == undefined) {
         cartItems = {
            ...cartItems,
            [product.tag]: product
         }
      }
      cartItems[product.tag].inCart += 1
   } else {
      product.inCart = 1
      cartItems = {
         [product.tag]: product
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

function pageCart() {
   let cartItems = localStorage.getItem("productsInCart")
   cartItems = JSON.parse(cartItems)
   let productCartPage = document.querySelector(".cart-section")
   if (cartItems && productCartPage) {
     productCartPage.innerHTML = ' '
     Object.values(cartItems).map(item => {
        productCartPage.innerHTML +=
        `
        <div class="product">

        <ion-icon name="close-circle"></ion-icon>
    
        <img src="images/$(item.tag).jpg"></img>
    
        <span>$(item.name)</span>
    
        </div>
    
        `
     }) 
   }
}

/* onLoadPage() */
pageCart()


