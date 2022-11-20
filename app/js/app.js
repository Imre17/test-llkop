// Navigation bar declarations
const buttonToggle = document.querySelector('.nav-bar__hamburger-button');
const overlay = document.querySelector('.overlay');
const lists = document.querySelector('.nav-bar__lists');
const links = document.querySelectorAll('.nav-bar__lists li')

// Change carousel height when is portview
function resizeHeight() {
  if(window.outerHeight < 660 && window.outerWidth <= 1025) {
    carousel.style.height = '540px'
  } else if(window.outerHeight > 660 && window.outerWidth <= 1025) {
    if(window.outerWidth <= 1025) {
      carousel.style.height = 'calc(100vh - 150px)'
    }
    if(window.outerWidth >= 1025) {
      carousel.style.height = '100vh'
    }
  }
}
document.body.onresize = resizeHeight

// Make an image full sceen on click
const imgs = document.querySelectorAll('.gallery-img')
const fullPage = document.querySelector('.fullpage')

imgs.forEach(img => {
  img.addEventListener('click', () => {
      fullPage.style.backgroundImage = `url( ${img.src} )`;
      fullPage.style.display = 'block';
  })
})

// If the link is clicked then the overlay will disapear
links.forEach(link => {
  link.addEventListener('click', () => {
    buttonToggle.classList.remove('nav-bar__toggle')
    overlay.style.clipPath = 'circle(70.7% at 150% -60%)';
    overlay.style.transition = 'all 0.3s ease-in-out 500ms'
    lists.style.top = '-380px'
    document.body.style.position = 'relative'
  })
})

// Carousel declarations
const pagination = document.querySelectorAll('.ball');
const carousel = document.querySelector('.hero__carousel');

// Interaction for mobile view lists
buttonToggle.addEventListener('click', () => {
  if(!buttonToggle.classList.contains('nav-bar__toggle')) {
    buttonToggle.classList.add('nav-bar__toggle')
    overlay.style.clipPath = 'circle(70.7% at 50% 50%)';
    overlay.style.transition = 'all 0.3s ease-in-out'
    lists.style.top = '100px'
    document.body.style.position = 'fixed'
  } else {
    buttonToggle.classList.remove('nav-bar__toggle')
    overlay.style.clipPath = 'circle(70.7% at 150% -60%)';
    overlay.style.transition = 'all 0.3s ease-in-out 500ms'
    lists.style.top = '-380px'
    document.body.style.position = 'relative'
  }  
})

// Interaction for carousel
let section = 0

// Changing the width for the ball button
const updatePag = () => {
  pagination.forEach((el) => el.style.width = '12px');
  pagination[section].style.width = '25px'
}

// Slide the carousel with simple click
  pagination.forEach((curItem, index) => {
    curItem.addEventListener('click', () => {
      section = index;
      updatePag() 
      carousel.scrollLeft = (index * window.innerWidth) + (index * 10)
    })
  })

// Setting the interval for the carousel
setInterval(() => {
  if(section < 1) {
    section++
    updatePag()
    carousel.scrollLeft = (section * window.innerWidth) + (section * 10)
  } else if(section > 0) {
    section--
    updatePag()
    carousel.scrollLeft = (section * window.innerWidth) + (section * 10)
  }
},8000);

// Form control
let inputField = document.querySelectorAll(".input-field");

inputField.forEach(input => {
    if(input.value.trim() !== '') {
      input.parentElement.classList.add('input--filled')
    }

    input.addEventListener('focus', (e) => {
      e.target = input.parentElement.classList.add('input--filled')
    })

    input.addEventListener('blur', (e) => {
      if(e.target.value.trim() === '') {
        input.parentElement.classList.remove('input--filled')
      }
    })
})

// Get the button:
const scrollBtn = document.getElementById('return-to-top');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()}

function scrollFunction() {
  if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrollBtn.style.display = 'block'
  } else {
    scrollBtn.style.display = 'none'
  }
}

// When the user clicks on the button, scroll to the top of the document
scrollBtn.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})
