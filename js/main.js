let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => item.classList.remove("hovered"));
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// menu toggle

let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = () => {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};


window.addEventListener('click', (e) => {
    e.preventDefault()
})

const dashboard = document.querySelector('#dashboard')
const addProducts = document.querySelector('#addProducts')
const addCategory = document.querySelector('#addCategory')
const orders = document.querySelector('#orders')

const products = document.querySelector('.products')
const category = document.querySelector('.category')
const order = document.querySelector('.order')
const cardBox = document.querySelector('.cardBox')
const details = document.querySelector('.details')


dashboard.addEventListener('click', () => {
    products.style.display = 'none'
    category.style.display = 'none'
    order.style.display = 'none'
    cardBox.style.display = 'grid'
    details.style.display = 'grid'
})
addProducts.addEventListener('click', () => {
    products.style.display = 'block'
    category.style.display = 'none'
    order.style.display = 'none'
    cardBox.style.display = 'none'
    details.style.display = 'none'
})
addCategory.addEventListener('click', () => {
    category.style.display = 'block'
    products.style.display = 'none'
    order.style.display = 'none'
    cardBox.style.display = 'none'
    details.style.display = 'none'
})
orders.addEventListener('click', () => {
    order.style.display = 'block'
    products.style.display = 'none'
    category.style.display = 'none'
    cardBox.style.display = 'none'
    details.style.display = 'none'
})