// https://api.openweathermap.org/data/2.5/weather?q=tokio&appid=321d7133613c8fbdfcef9d26d316a902
const list = document.querySelector(".list")
const elForm = document.querySelector(".form")
const elinput = document.querySelector(".input")
 


const Frag = new DocumentFragment()


async function renderData(url) {
  
  try {
    const elTemp = document.querySelector(".template").content.cloneNode(true)
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${url}&units=metric&appid=321d7133613c8fbdfcef9d26d316a902`)
    const data = await res.json()
   
    elTemp.querySelector(".citi").textContent = data.name
    elTemp.querySelector(".gradus").textContent = Math.floor(data.main.temp)
    
    let geolocation = Object.values(data.coord)
    let lat = geolocation[0];
    let lon = geolocation[1];
    
    
    elTemp.querySelector(".hreftJs").href = `https://openweathermap.org/weathermap?basemap=map&cities=false&layer=windspeed&lat=${lon}&lon=${lat}&zoom=5`
    
    
    
    let  arr = data.weather
    arr.forEach(item => {
       
      elTemp.querySelector(".cool").textContent = item.main
    });
    
    Frag.appendChild(elTemp)
    list.appendChild(Frag)
    
  } catch (error) {
    console.log(error);
  }
}

async function renderSearch(url) {
  
  try {
 list.innerHTML = ""
    
    const elTemp = document.querySelector(".templateSearch").content.cloneNode(true)
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${url}&units=metric&appid=321d7133613c8fbdfcef9d26d316a902`)
    const data = await res.json()
 

    let myDate = new Date( data.sys.sunrise *1000);
    (myDate.toGMTString()+"<br>"+myDate.toLocaleString());
    let dataTimes = myDate.toLocaleString()
    dataTimes.slice(11 , 18)
    console.log(dataTimes);

    elTemp.querySelector(".citiMod").textContent = data.name
    elTemp.querySelector(".dataTime").textContent = dataTimes
    elTemp.querySelector(".gradusJs").textContent = Math.floor(data.main.temp)
    elTemp.querySelector(".butons").addEventListener("click" , evt => {
 list.innerHTML = ""

 renderData("tokio")
renderData("london")
renderData("tashkent")
renderData("Paris")
renderData("Moscow")

    })
    

    // setTimeout(() => {
    //   elTemp.innerHTML = ""
    //   console.log("assasa");
    // }, "8000")
  
    let  arr = data.weather
    arr.forEach(item => {
     
      elTemp.querySelector(".coolMod").textContent = item.main
    });
    
    Frag.appendChild(elTemp)
    list.appendChild(Frag)
  
    


  } 
  catch (error) {
    console.log(error);
  }
}





elForm.addEventListener("submit", evt => {
  evt.preventDefault()
  const inputValue = elinput.value
  renderSearch(inputValue)
 
})

renderData("tokio")
renderData("london")
renderData("tashkent")
renderData("Paris")
renderData("Moscow")



// const elTemp = document.querySelector(".templateSearch").content.cloneNode(true)
// elTemp.querySelector(".elButton").textContent = "QQ"
// elButton.addEventListener("click", evt=> {
//   evt.preventDefault()
//   console.log("AAA");
//   const itemBtn = elTemp.querySelector(".itemSearch")
//   console.log(itemBtn);
// })