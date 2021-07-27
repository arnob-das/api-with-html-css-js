let userHtml = ''
const main = document.getElementById('main')

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => userInfo(data))

function userInfo(data) {
    for (let i = 0; i < data.length; i++) {
        userHtml = userHtml +
        `<div class="card-group col-lg-4 mt-3">
            <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Name: ${data[i].name}</h5>
                  <p class="card-text">Email: ${data[i].email}</p>
                  <p class="card-text">User ID: ${data[i].id}</p>
                </div>
            </div>
        </div>`
    }
    main.innerHTML = userHtml
}