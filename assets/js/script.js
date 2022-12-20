// TO ACCESS DOM ELEMENTS

const productContainer = document.querySelector('.product-container'),
      productPreview = document.querySelector('.product-preview'),
      authorLinkContainer = document.querySelector('.author-link'),
      productDescription = document.querySelector('.product-description');



// APPENDING CLASSES FOR ELEMENTS ( TO ADD ANIMATIONS)

productContainer.classList.add('reveal-down');
productPreview.classList.add('product-reveal');
authorLinkContainer.classList.add('reveal-top');
for (const child of productDescription.children) {
    console.log(child);
    child.classList.add('reveal-top');
}


// USING JS LIBRARY FOR ANIMATIONS

if(window.innerWidth < 450){           // Checks whether the user agent is mobile or not with help of Device width
    ScrollReveal().reveal('.product-reveal', { distance: '150%',origin: 'top', opacity: 0, delay: 200, duration: 1000});
}else{
    ScrollReveal().reveal('.product-reveal', { distance: '150%',origin: 'left', opacity: 0, duration: 1000});
}

ScrollReveal().reveal('.reveal-top', { distance: '150%',origin: 'bottom', opacity: 0, delay: 200, duration: 1000, interval: 200});
ScrollReveal().reveal('.reveal-down',{ distance: '150%',origin: 'top', opacity: 0, duration: 1000});
