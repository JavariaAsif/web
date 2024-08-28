/* Common functions used all across the website */
// On-Off overlays
function ovrOn(ovrToDisplay) {
    let doc = document.getElementById(ovrToDisplay);
    if (doc != null) {
        doc.style.display = "block";
        document.body.style.overflow = "hidden";
    }
}

function ovrOff(ovrToHide) {
    let doc = document.getElementById(ovrToHide)
    if (doc != null) {
        doc.style.display = "none";
        document.body.style.overflow = "";
    }

}


/* Slideshow section controls
The slideshow implementation is based on the w3school slideshow https://www.w3schools.com/howto/howto_js_slideshow.asp  */

// Slideshow loader after DOMContentLoaded
let slideIndex = 1;
document.addEventListener("DOMContentLoaded", function () {
    showSlides(slideIndex);
});

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
    }
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].className += " active";
    }
}

/* footer loader on event DOMContentLoaded - allows to use the same footer sitewise */
document.addEventListener("DOMContentLoaded", function () {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('pageHeader').innerHTML = data;
            setTimeout(function () {
                $('.pr').click(function () {
                    translate('pr');
                });
                $('.es').click(function () {
                    translate('es');
                });
                $('.en').click(function () {
                    translate('en');
                });
                loadDefaultContent();
                setupLoginModalDialog();
                let cartIcon=document.querySelector('#cart-icon');
                let cart = document.querySelector('.cart');
                let closeCart = document.querySelector('#close-cart');

                // Check if elements are found before adding event listeners
                if (cartIcon && cart && closeCart) {
                    cartIcon.onclick = () => {
                        cart.classList.add('active');
                    };

                    closeCart.onclick = () => {
                        cart.classList.remove('active');
                    };
                } else {
                    console.error('Element(s) not found:', { cartIcon, cart, closeCart });
                }
         
        
          function ready()
          {
            //remove items from cart
            var removecartButtons=document.querySelectorAll('.cart-remove');
  removecartButtons.forEach(button =>
{
button.addEventListener('click',removecartItem);
})
          //quantity changes
        var quantityInputs=document.querySelectorAll('.cart-quantity');
        quantityInputs.forEach(input=>
        {
            input.addEventListener('change',quantityChanged);
        })

//Add to cart
var AddCart=document.querySelectorAll(".backcardbutton");
AddCart.forEach(button=>
{
    button.addEventListener('click',addCartClicked);
})

//Buy Button
document.getElementsByClassName('btn-buy')[0].addEventListener('click',buyButtonClicked)
        updateTotal();
          }

          //Buy Button
          function buyButtonClicked()
          {
            alert('Your Order is placed');
            var cartContent=document.getElementsByClassName('cart-content')[0];
            while(cartContent.hasChildNodes())
            {
                cartContent.removeChild(cartContent.firstChild);
            }
            updateTotal();
          }
        //removecart item
          function removecartItem(event)
          {
              var buttonClicked= event.target;
          buttonClicked.closest('.cart-box').remove();
           updateTotal();
          }
          //quantity changed
          function quantityChanged(event)
          {
            var input=event.target;
            if(isNaN(input.value || input.value<=0))
            {
                input.value=1;
            }
            updateTotal();
          }
          //add cart
          function addCartClicked(event)
          {
            var button=event.target;
            var shopProduct= button.closest(".back");
           
            var titleElement=shopProduct.querySelector(".card-name");
            var priceElement=shopProduct.querySelector(".price");
            var imageElement=shopProduct.querySelectorAll(".backcard-img ");
          
    
            var title=titleElement.textContent.trim();
         
            var price=priceElement.textContent.trim();
       
            console.log(title,price);
            imageElement.forEach(imageSource=>
            {
                var image=imageSource.getAttribute('src');
                addProductToCart(title,price,image);
            })
       
          
            updateTotal();
          }
          function addProductToCart(title,price,imageSource)
          {
            var cartShopBox=document.createElement("div");
            cartShopBox.classList.add('cart-box');
            var cartBoxContent = `
            <img src="${imageSource}" alt="" class="cart-img">
            <div class="detail-box">
                <div class="cart-product-title">${title}</div>
                <div class="cart-price">${price}</div>
                <input type="number" value="1" class="cart-quantity">
            </div>
            <i class="bx bxs-trash-alt cart-remove"></i>
        `;
        cartShopBox.innerHTML=cartBoxContent;

cartShopBox.querySelector('.cart-remove').addEventListener('click',removecartItem);
cartShopBox.querySelector('.cart-quantity').addEventListener('change',quantityChanged);
 var cartContent=document.querySelector('.cart-content');
 if(cartContent)
 {
    cartContent.appendChild(cartShopBox);
 }
 else
 {
    console.error('Cart content element not found');
 }
          }
        







       
         function updateTotal()
         {
            var cartContent=document.querySelector('.cart-content');
            var cartBoxes=cartContent.querySelectorAll('.cart-box');
            var total=0;
            cartBoxes.forEach(cartBox=>
            {
                var priceElement = cartBox.querySelector('.cart-price');
                var quantityElement = cartBox.querySelector('.cart-quantity');
    
                var price = parseFloat(priceElement.innerText.replace("$", ""));
                var quantity = quantityElement.value;
                total += price * quantity;
                //if price contain some Cents Value
                total=Math.round(total*100)/100;
            });
            document.querySelector('.total-price').innerText = '$' + total.toFixed(2);
         }
      
        if (document.readyState == "loading") {
            document.addEventListener("DOMContentLoaded", ready);
        } else {
            ready();
        }
         
      
            }, 1);
        });
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footerDiv').innerHTML = data;
        });
});

function loadDefaultContent() {
  translate();
}

function setupLoginModalDialog() {
    const wrapper = document.querySelector('.wrapper');
    const loginlink = document.querySelector('.login-link');
    const registerlink = document.querySelector('.register-link');
    const btnPop = $('.btnlogin-popup');
    const iconClose = document.querySelector('.icon-close');
    if (registerlink) {
        registerlink.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            wrapper.classList.add('active');
        });
    }

    if (loginlink) {
        loginlink.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            wrapper.classList.remove('active');
        });
    }

    if (btnPop && btnPop.length > 0) {
        btnPop.click(function(e) {
            e.preventDefault(); // Prevent default anchor behavior
            wrapper.classList.add('active-popup');
        });
    }
    if(iconClose)
    {
        iconClose.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            wrapper.classList.remove('active-popup');
        });
    }
}
  

document.addEventListener('DOMContentLoaded', () => {
  const flipButtons = document.querySelectorAll('[data-card="flip"]');
  
  flipButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = button.closest('.card-article');
      card.classList.toggle('flip');
    });
  });
});

  
  