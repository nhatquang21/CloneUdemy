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