let listCate = [
    {
        title: 'Design',
        img: 'https://s.udemycdn.com/home/top-categories/lohp-category-design.jpg'
    },
    {
        title: 'Development',
        img: 'https://s.udemycdn.com/home/top-categories/lohp-category-development.jpg'
    },
    {
        title: 'Marketing',
        img: 'https://s.udemycdn.com/home/top-categories/lohp-category-marketing.jpg'
    },
    {
        title: 'IT and Software',
        img: 'https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software.jpg'
    },
    {
        title: 'Personal Development',
        img: 'https://s.udemycdn.com/home/top-categories/lohp-category-personal-development.jpg'
    },
    {
        title: 'Business',
        img: 'https://s.udemycdn.com/home/top-categories/lohp-category-business.jpg'
    },
    {
        title: 'Photography',
        img: 'https://s.udemycdn.com/home/top-categories/lohp-category-photography.jpg'
    },
    {
        title: 'Music',
        img: 'https://s.udemycdn.com/home/top-categories/lohp-category-music.jpg'
    },
]

let category = document.getElementById('category')

const addCate = (obj) => {
    for ( let item of obj ){
        category.innerHTML += `<div class="card">
        <img src=${item.img}  alt="">
        <span class="card__title">${item.title}</span>
        </div>`
    }
}
addCate(listCate)

  
window.addEventListener('load', function () {
    let url = `https://5fbfc296fd14be0016749137.mockapi.io/api/caigido`;
     fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (arr) {
        for (let i = 0; i < arr.length; i++) {
          document.getElementById('chua-may-cai-card').insertAdjacentHTML(
            'beforeend',
            `<div class="cai-card">
            <img id="hinh-trong-students-viewing" src="${arr[i].ava}">
            <h4 id="ten-trong-students-viewing" class="ten-khoa-hoc">${arr[i].name}</h4>
            <p id="tacgia-trong-students-viewing" class="tac-gia">${arr[i].author}</p>
            <h4 id="gia-trong-students-viewing" class="gia">${arr[i].price}</h4>
        </div>`
          );
        }
      });
  });
  

let yourCart = []
let cart = document.getElementById('cart')
let dataContent = cart.getAttribute('data-content')
let newContent = `${dataContent} + <br> <a>Keep shopping</a>`
cart.setAttribute('data-content',newContent )