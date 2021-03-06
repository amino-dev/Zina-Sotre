
const addToCart = document.querySelectorAll(".btn-cart")
const addToFavoris = document.querySelectorAll(".btn-favoris")

//          products object           
var products = [
   {
      name : 'Anneaux',
      price : 40,
      imageSrc : 'Anneau.jpg',
      inCart : 0,
      favoris : 0
   },
   {
      name : 'Bracelet',
      imageSrc : 'Bracelet-homme.jpg',
      price : 80,
      inCart : 0,
      favoris : 0
   },
   {
      name : 'Boucle',
      imageSrc : 'Boucle-femme.jpg',
      price : 120,
      inCart : 0,
      favoris : 0
   },
   {
      name : 'Collier',
      imageSrc : 'Collier-femme.jpg',
      price : 60,
      inCart : 0,
      inCart : 0,
      favoris : 0
   },
   {
      name : 'Lunettes',
      imageSrc : 'Lunettes-homme.jpg',
      price : 70,
      inCart : 0,
      favoris : 0
   },
   {
      name : 'Bracelet',
      imageSrc : 'Bracelet2-femme.jpg',
      price : 150,
      inCart : 0,
      favoris : 0
   },
   {
      name : 'Bracelet',
      imageSrc : 'Bracelet1-femme.jpg',
      price : 45,
      inCart : 0,
      favoris : 0
   },
   {
      name : 'Montre',
      imageSrc : 'Montre-homme.jpg',
      price : 100,
      inCart : 0,
      favoris : 0 
   },
   {
      name : 'Montre bracelet',
      imageSrc : 'Montre-bracelet-femme.jpg',
      price : 65,
      inCart : 0,
      favoris : 0
   }
]


//      adding to cart           
for(let i = 0; i < addToCart.length; i++) {
   addToCart[i].addEventListener("click", () => {
        cartNumbers(products[i])
        totalPrice(products[i])
    })
}


//          adding to favoris           
for(let i = 0; i < addToFavoris.length; i++) {
   addToFavoris[i].addEventListener("click", () => {
        cartfavoris(products[i])
    })
}


//        cart favoris          
function cartfavoris(product) {
   let favorisNumbers = localStorage.getItem("favorisNumbers")
   favorisNumbers = parseInt(favorisNumbers)
   if (favorisNumbers) {
      localStorage.setItem("favorisNumbers" , favorisNumbers + 1)
      document.querySelector('#badge-favoris').innerHTML = favorisNumbers + 1
   }
   else {
      localStorage.setItem("favorisNumbers" , 1)
      document.querySelector('#badge-favoris').innerHTML = 1
   }
  //addFavoris(product)
}

/*function addFavoris(product) {
   let cartFavoris = localStorage.getItem("productsInFavoris")
   cartFavoris = JSON.parse(cartFavoris)
   if(cartFavoris != null) {
      if(cartFavoris[product.imageSrc] == undefined) {
         cartFavoris = {
            ...cartFavoris,
            [product.imageSrc]: product
         }
      cartFavoris[product.imageSrc].favoris += 1
      } else {
      cartFavoris[product.imageSrc].favoris =  1
      cartFavoris = {
         [product.imageSrc]: product
      }
    }
   } else {
      product.favoris = 1
      cartFavoris = {
         [product.imageSrc]: product
      }
   }
   localStorage.setItem("productsInFavoris",JSON.stringify(cartFavoris))
}*/

//       loading page         
function onLoadPage(){
   let productNumbers = localStorage.getItem('cardNumbers')
   if(productNumbers){
      document.querySelector('#badge-cart').innerHTML = productNumbers
  }
   let favorisNumbers = localStorage.getItem("favorisNumbers")
   if(favorisNumbers){
      document.querySelector('#badge-favoris').innerHTML = favorisNumbers
  }
}

//        cart numbers          
function cartNumbers(product) {
   let productNumbers = localStorage.getItem("cardNumbers")
   productNumbers = parseInt(productNumbers)
   if (productNumbers) {
      localStorage.setItem("cardNumbers" , productNumbers + 1)
      document.querySelector('#badge-cart').innerHTML = productNumbers + 1
   }
   else {
      localStorage.setItem("cardNumbers" , 1)
      document.querySelector('#badge-cart').innerHTML = 1
   }
   addItems(product)
}

//          add items to cart         
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

//         total price         
function totalPrice(product) {
     let cartCost = localStorage.getItem("totalPrice")
     if(cartCost != null) {
      cartCost  = parseInt(cartCost)
      localStorage.setItem("totalPrice", cartCost + product.price)
     } else {
      localStorage.setItem("totalPrice", product.price)
     }
}


//          add items to cart page       
function cartPage(){
   let cardItems=localStorage.getItem('productsInCart');
   cardItems=JSON.parse(cardItems);
   let productSection=document.querySelector(".added-products");
   let cartCost=localStorage.getItem("totalPrice")
   if (cardItems && productSection){
       productSection.innerHTML=''; 
       Object.values(cardItems).map(item => {
         productSection.innerHTML+=
         `
          <div class="container mt-4">
           <div class="d-flex justify-content-between align-items-center p-3">
           <div> 
           <img src="images/Produits/${item.imageSrc}" class="product-image my-auto";">
           </div>
           <div class=""> <h4 class = "product-name my-auto">${item.name}</h4></div>
           <div class=""> <p class = "product-price my-auto">${item.price} Dt</p></div>
           <div class="">
             <button type="button" class="btn">
               <i class="fas fa-minus-circle my-auto" style="font-size: 1rem;"></i>
             </button>
             <span class="product-quantity my-auto" id="quantity">${item.inCart}</span>
             <button type="button" class="btn">
               <i class="fas fa-plus-circle my-auto" style="font-size: 1rem;"></i>
             </button>
           </div>
           <div class="total"><p class="total-product-price my-auto">${item.inCart*item.price} Dt</p></div>
           </div>
           <hr>
         </div> 
         `  
     })
     
     
     //     add total cost and clear button         
     productSection.innerHTML +=
     `
     <div class="d-flex justify-content-end pt-5 px-5 me-5"> 
      <h4 class = "total-price"> Total : ${cartCost}, Dt</h4>
     </div>
     <div class="d-flex justify-content-end p-5 me-5">
      <div>
       <button type="button" href="#" class="btn-cart clear-cart">
         Vider le panier
       </button>
      </div>  
     </div>
     `

     //         clear button       
     let clearCart = document.querySelector(".clear-cart")
     clearCart.addEventListener("click", () => {
     localStorage.removeItem("productsInCart")
     localStorage.removeItem("cardNumbers")
     localStorage.removeItem("totalPrice")
     productSection.innerHTML = ''
     document.querySelector('#badge-cart').innerHTML = 0
     }) 
     /*
     var i = 0 
    document.getElementById("quantity").innerHTML = i;
    var  prix = document.querySelector('.prix').textContent

    function incNumber() {
        if (i < 10) {
            i++;
        } else if (i = 10) {
            i = 0;
        }
        document.getElementById("quantity").innerHTML = i;



        prix = prix * i ; 
        document.querySelector('.prix').innerHTML = prix;
    }

    function decNumber() {
        if (i > 0) {
            --i;
        } else if (i = 0) {
            i = 10;
        }

    }
*/
  
  }
}

cartPage()
onLoadPage()

/*let filter = document.querySelector('.filter').children
let category = document.querySelector('.categories').children.children

for (let i = 0; i < filter.length; i++){
   filter[i].onclick = function(){
      for (let x = 0; x < filter.length; x++){
         filter[x].classList.remove('active')
      }
      this.classList.add('active')
      const dsiplayItems = this.getAttribute('data-filter')
      for (let z = 0; z < category.length; z++) {
         category[z].style.transform = 'scale(0)'
         setTimeout(() => {
            category[z].style.display = 'none'
         }, 500)
         if ((category[z].getAttribute('data-category') == dsiplayItems) || (dsiplayItems == 'all'))
         {
            category[z].style.transform = 'scale(1)'
            setTimeout(() => {
               category[z].style.display = 'block'
            }, 500)
         }
      }

   }
}*/