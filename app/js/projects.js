// Navigation bar declarations
const buttonToggle = document.querySelector('.nav-bar__hamburger-button');
const overlay = document.querySelector('.overlay');
const lists = document.querySelector('.nav-bar__lists');
const links = document.querySelectorAll('.nav-bar__lists li')


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


// Make an image full sceen on click
const imgs = document.querySelectorAll('.gallery-img')
const fullPage = document.querySelector('.fullpage')

imgs.forEach(img => {
  img.addEventListener('click', () => {
      fullPage.style.backgroundImage = `url( ${img.src} )`;
      fullPage.style.display = 'block';
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


//Filter pictures
const items =  document.querySelectorAll('.gallery__item');

filterSelection('all');
function filterSelection(c) {
  if(c === 'all') c = '';
  
  items.forEach(item => {
    removeC(item, 'show');
    if(item.className.indexOf(c) > -1) addC(item, 'show')
  })
}

function addC(element, name) {
  let arr1, arr2;
  arr1 = element.className.split(' ');
  arr2 = name.split(' ');
    for(let i = 0; i < arr2.length; i++) {
      if(arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i]
      }
    }
}

function removeC(element, name) {
  let arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
const btnContainer = document.querySelector('.myButton');
const btns = document.querySelectorAll('.myButton__button');
const current = document.getElementsByClassName('active')

btns.forEach(btn => {
  btn.addEventListener('click', function() {
    current[0].className = current[0].className.replace('active', '');
    this.className += ' active'
  })
})

const imagesJSON = '../images.json'

// Add images dynamicaly
async function addImages() {
  const result = await fetch('../images.json')
  const data = await result.json()

  console.log(data.images[0])
}

addImages();