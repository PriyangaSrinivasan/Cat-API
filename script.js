//Class selector
const image=document.querySelector('.image')
const button = document.querySelector('.btn')
// fetch and promise
const response = fetch("https://api.thecatapi.com/v1/images/search?limit=10")
response.then((data)=>data.json())
.then((result)=>{
    image.src = result[0].url

}).catch((error)=>console.log(error))
// event function
button.addEventListener("click",()=>{
    window.location.reload();
})