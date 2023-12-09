const current = document.querySelector('.main-img img')
const images = document.querySelectorAll('.images img')
const opacity = 0.6
images.forEach(img => img.addEventListener('click',changeImage))

function changeImage(e){
    images.forEach(img => img.style.opacity = 1)
    current.src = e.target.src

    current.classList.add('opacity-increase')
    setTimeout(() => current.classList.remove('opacity-increase'),500)
    e.target.style.opacity = opacity
    
}