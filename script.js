window.addEventListener('load', function () {
  let url = `https://5fbfc296fd14be0016749137.mockapi.io/api/caigido`;
  let get = fetch(url)
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
