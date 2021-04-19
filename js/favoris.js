

function favorisModal(){
    let favorisItems=localStorage.getItem('productsInFavoris');
    favorisItems =JSON.parse(favorisItems);
    let favorisSection = document.querySelector(".favoris-products");
    if (favorisItems && favorisSection){
        favorisSection.innerHTML=''; 
        Object.values(cardItems).map(item => {
          favorisSection.innerHTML+=
          `
           <div class="container mt-4">
            <div class="d-flex justify-content-between align-items-center p-3">
            <div> 
            <img src="images/Produits/${item.imageSrc}" class="product-image my-auto";">
            </div>
            <div class=""> <h4 class = "product-name my-auto">${item.name}</h4></div>
            <div class=""> <p class = "product-price my-auto">${item.price} Dt</p></div>
            <hr>
          </div> 
          `  
      })
      
      favorisSection.innerHTML +=
      `
      <div class="d-flex justify-content-end p-5 me-5">
       <div>
        <button type="button" href="#" class="btn-cart clear-favoris">
          Vider le panier
        </button>
       </div>  
      </div>
      `
 
      let clearFavoris = document.querySelector(".clear-favoris")
      clearFavoris.addEventListener("click", () => {
      localStorage.removeItem("productsInfavoris")
      localStorage.removeItem("favorisNumbers")
      favorisSection.innerHTML = ''
      document.querySelector('#badge-favoris').innerHTML = 0
      }) 
      
       }
 }
 favorisModal()