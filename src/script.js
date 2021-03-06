import { type } from 'os'
import 'regenerator-runtime/runtime'
import './style.css'

// Getting Images from pixabay
const api_key = process.env.API_KEY
const pixabay_API = `https://pixabay.com/api/?key=${api_key}&q=wildfire`

async function getImages() {
   const imagesPromise = await fetch( pixabay_API )

   if( imagesPromise.ok ) {
      const images = await imagesPromise.json()
      let slideshowWrapper = document.getElementById('slideshow')
      images.hits.forEach( hit => {
         // Creating image wrapper and setting class to it
         const imageWrapperElement = document.createElement('div')
         imageWrapperElement.classList.add('carousel-item')   

         // Creating image element and adding src and alt attributes to it
         const imgElement = document.createElement('img')
         imgElement.src = hit.largeImageURL
         imgElement.alt = hit.tags

         // Adding slideshow caption
         const captionElement = document.createElement('div')
         captionElement.classList.add('caption')
         captionElement.innerHTML = `
            <span>pixabay @${hit.user}</span>
            <span>${hit.tags}</span>`

         // Appending image wrapper and image element to the slideshow
         slideshowWrapper.prepend(imageWrapperElement)
         imageWrapperElement.append(imgElement,captionElement)
      })
      // Making the fist retrieved image visible, since all images are hidden in css
      slideshowWrapper.firstChild.classList.add('carousel-item-visible')
   } else {
      console.error(`Error: ${imagesPromise.status}`)
   }
}

// Calling carousel function when images are retrieved, and if they're not - handling error
getImages()
   .then( () => carousel())
   .catch((error) => console.error(error))

// Image Carousel
function carousel() {
   const slides = document.querySelectorAll('.carousel-item')
   const prevBtn = document.querySelector('.carousel-actions .previous')
   const nextBtn = document.querySelector('.carousel-actions .next')

   let slidePosition = 0
   const totalSlides = slides.length

   // Automate slide transition
   setInterval(() => { 
      moveToNextSlide() 
   }, 4000)
   
   // Add click eventlistener to the next and prev buttons as well as keylistener to slide images
   prevBtn.addEventListener('click', moveToPrevSlide)
   nextBtn.addEventListener('click', moveToNextSlide)
   window.addEventListener('keyup', e => {
      if ( e.keyCode === 37 ) {
         moveToPrevSlide();
         return false
     } else if ( e.keyCode === 39 ) {
         moveToNextSlide ();
         return false
     }
   })

   // Show previous slide
   function moveToPrevSlide() {
      slides[slidePosition].classList.remove('carousel-item-visible')

      if( slidePosition === 0 ) {
         slidePosition = totalSlides - 1
      } else {
         slidePosition--
      }
      
      slides[slidePosition].classList.add('carousel-item-visible') 
   };

   // Show next slide
   function moveToNextSlide() {
      slides[slidePosition].classList.remove('carousel-item-visible')

      if ( slidePosition === totalSlides - 1 ) {
         slidePosition = 0
      } else {
         slidePosition++
      }
      
      slides[slidePosition].classList.add('carousel-item-visible')
   }
}

// END Image Carousel