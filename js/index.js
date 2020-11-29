let listCate = [
  {
    title: 'Design',
    img: 'https://s.udemycdn.com/home/top-categories/lohp-category-design.jpg',
  },
  {
    title: 'Development',
    img:
      'https://s.udemycdn.com/home/top-categories/lohp-category-development.jpg',
  },
  {
    title: 'Marketing',
    img:
      'https://s.udemycdn.com/home/top-categories/lohp-category-marketing.jpg',
  },
  {
    title: 'IT and Software',
    img:
      'https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software.jpg',
  },
  {
    title: 'Personal Development',
    img:
      'https://s.udemycdn.com/home/top-categories/lohp-category-personal-development.jpg',
  },
  {
    title: 'Business',
    img:
      'https://s.udemycdn.com/home/top-categories/lohp-category-business.jpg',
  },
  {
    title: 'Photography',
    img:
      'https://s.udemycdn.com/home/top-categories/lohp-category-photography.jpg',
  },
  {
    title: 'Music',
    img: 'https://s.udemycdn.com/home/top-categories/lohp-category-music.jpg',
  },
];

let category = document.getElementById('category');

const addCate = (obj) => {
  for (let item of obj) {
    category.innerHTML += `<div class="card">
        <img src=${item.img}  alt="">
        <span class="card__title">${item.title}</span>
        </div>`;
  }
};
addCate(listCate);

let cartStatus = document.getElementById('cartStatus');
let cartItem = document.getElementById('cartItem');
let yourCart = [];


$(document).hover(function () {
  $('[data-toggle="popover"]').popover();
});
let obj = []
window.addEventListener('load', function (e) {
  let url = `https://5fbfc296fd14be0016749137.mockapi.io/api/caigido`;
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (arr) {
      for (let i = 0; i < arr.length; i++) {
          obj.push(arr[i])
        document.getElementById('chua-may-cai-card').insertAdjacentHTML(
          'beforeend',
          `<div class="cai-card">
            <img id="hinh-trong-students-viewing" src="${arr[i].ava}">
            <h4 id="ten-trong-students-viewing" class="ten-khoa-hoc">${arr[i].name}</h4>
            <p id="tacgia-trong-students-viewing" class="author">${arr[i].author}</p>
            <h4 id="gia-trong-students-viewing" class="price">${arr[i].price}$</h4>
            <div class="card-info"><button id="addCart${i}" class="card-btn">Add to cart</button></div>
        </div>`
        );
      }
    });
});

document.getElementById('input').addEventListener('keypress', function (event) {
  if (event.key == 'Enter') {
    document.getElementById('cho-tim-kiem').innerHTML = '';
    let input = event.target.value;
    let url = `https://5fbfc296fd14be0016749137.mockapi.io/api/caigido`;
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (arr) {
        let check = 0;
        for (let i = 0; i < arr.length; i++) {
          if (
            arr[i].keyword.includes(input) &&
            arr[i].keyword.length == input.length
          ) {
            document.getElementById('cho-tim-kiem').insertAdjacentHTML(
              'beforeend',
              `<div class="cai-card">
            <img id="hinh-trong-students-viewing" src="${arr[i].ava}">
            <h4 id="ten-trong-students-viewing" class="ten-khoa-hoc">${arr[i].name}</h4>
            <p id="tacgia-trong-students-viewing" class="author">${arr[i].author}</p>
            <h4 id="gia-trong-students-viewing" class="price">${arr[i].price}$</h4>
            <div class="card-info"><button id="addCart${i}" class="card-btn">Add to cart</button></div>
        </div>`
            );
            check++;
           
            }
        }

        if (check == 0) {
          document.getElementById(
            'cho-tim-kiem'
          ).innerHTML = `Không có khóa học với từ khóa ${input}`;
        }
      });
    event.preventDefault();
  }
});
document.getElementById('input2').addEventListener('keypress', function (event) {
  if (event.key == 'Enter') {
    document.getElementById('cho-tim-kiem').innerHTML = '';
    let input = event.target.value;
    let url = `https://5fbfc296fd14be0016749137.mockapi.io/api/caigido`;
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (arr) {
        let check = 0;
        for (let i = 0; i < arr.length; i++) {
          if (
            arr[i].keyword.includes(input) &&
            arr[i].keyword.length == input.length
          ) {
            document.getElementById('cho-tim-kiem').insertAdjacentHTML(
              'beforeend',
              `<div class="cai-card">
            <img id="hinh-trong-students-viewing" src="${arr[i].ava}">
            <h4 id="ten-trong-students-viewing" class="ten-khoa-hoc">${arr[i].name}</h4>
            <p id="tacgia-trong-students-viewing" class="author">${arr[i].author}</p>
            <h4 id="gia-trong-students-viewing" class="price">${arr[i].price}$</h4>
            <div class="card-info"><button id="addCart${i}" class="card-btn">Add to cart</button></div>
        </div>`
            );
            check++;
           
            }
        }

        if (check == 0) {
          document.getElementById(
            'cho-tim-kiem'
          ).innerHTML = `Không có khóa học với từ khóa ${input}`;
        }
      });
    event.preventDefault();
  }
});

//Xử lý cart





window.addEventListener('click', (e) => {
    let idCard = e.target.id 
    for ( let item of obj){
        if(idCard.includes(parseInt(item.id) - 1) ){
            yourCart.push(item)
        }
    }
    for ( let i = 0 ; i < yourCart.length ; i++){
        for ( let j = 0 ; j < yourCart.length ; j++){
            if(yourCart[i].id == yourCart[j].id && (i != j)){
                yourCart.splice(i,1)
                i++
            }
        }
    }
    console.log(yourCart)
})

cartItem.addEventListener('mouseover', () => {
    cartStatus.style.display = 'block';
    let noContent = `<p>Your cart is empty</p> <br> <a style="color: #0f7c90;" class="keepShp" href="">Keep shopping</a>`;
    if (yourCart.length == 0) {
      cartStatus.innerHTML = noContent;
    }else {
        cartStatus.innerHTML = ''
        let total = 0
        for(let item of yourCart){

            let content = `
            <div class="cartItem row" >

            <div class="col-3">
            <img class="cartImg" src=${item.ava}>
            </div>
            <div class="col-9">
            <p class="cartName">${item.name}</p>
            <p>Giá ${item.price}</p></div>
    
            </div>
           `
            cartStatus.innerHTML += content
            total += item.price
        }
    
    }
    // console.log("ss")
  });

  cartStatus.addEventListener('mouseleave', () => {
    //   if (yourCart.length == 0) {
    //     cartStatus.innerHTML = '';
    //   }
      cartStatus.style.display = 'none';
    });
    