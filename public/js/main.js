const submitbtn = document.getElementById("submitbtn")
const citynam = document.getElementById("citynam")
const city = document.getElementById("city")
const temp = document.getElementById("temp")
const temps = document.getElementById("temp_st")
const day = document.getElementById("day")
const tdate = document.getElementById("today_date")
const datahide = document.querySelector(".data_hide")
let days = new Date()
day.innerText = days.toLocaleTimeString()
tdate.innerText = days.toDateString()


const getInfo = async (e)=>{
    e.preventDefault()
    let cityval = citynam.value
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=cb5551e9cd7f32a098eab05006265978`
    if(cityval===""){
        alert("city name is empty....")

    }else{
        try{
    
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=cb5551e9cd7f32a098eab05006265978`

            const res = await fetch(url)
            const data = await res.json()
            const arrdata = [data]
            city.innerText = `${arrdata[0].name} ${arrdata[0].sys.country}`
            temp.innerText = arrdata[0].main.temp
            temps.innerText = arrdata[0].weather[0].main
            datahide.classList.remove("data_hide")
        }catch(e){
            city.innerText = "enter valid location.."
            datahide.classList.add("data_hide")
            console.log(e)
        }
        
        
    }
}
submitbtn.addEventListener("click",getInfo)