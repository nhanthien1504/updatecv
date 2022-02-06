function callApi(url) {
    return new Promise((resolve) => {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            resolve(this.responseText)
        }
        xhttp.open("GET", url, true);
        xhttp.send();
    })
       
}

let url = "ajax-info.txt"




let nameEle = document.querySelector(".js-name")
let phoneEle = document.querySelector(".js-phone")
let emailEle = document.querySelector(".js-email")
let adressEle = document.querySelector(".js-adress")
let birthEle = document.querySelector(".js-birth")
 



// console.log(nameEle, phoneEle, emailEle, adressEle, birthEle);

callApi(url).then(dataText => {
    let data = JSON.parse(dataText)
    let User = data[data.length  - 1 ]
    console.log(User);


   
    nameEle.innerHTML = User.name
    phoneEle.innerHTML = User.tel
    emailEle.innerHTML = User.email
    adressEle.innerHTML = User.address
    birthEle.innerHTML = User.birth
    
})
