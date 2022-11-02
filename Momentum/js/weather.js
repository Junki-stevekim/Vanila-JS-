//Weather API 사용

const API_KEY ="bde141b2523724967f54c09f924e3610";





function onGeoOk(position){
    const lat =position.coords.latitude;
    const lng =position.coords.longitude;
    console.log("You live in",lat,lng);
   const url= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) =>{
            const weather= document.querySelector("#weather span:first-child");
            const city= document.querySelector("#weather span:last-child");
            // API 값을 queryselector로 호출한뒤 값을 담아준다
            city.innerText =data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;

    });// javascript 가 url을 부른다 그후 원하는 데이터를 추출

}
function onGeoError(){
 alert("Can't find you. No Weather for you. ")
}


// 현재위치를 알려주는 함수들. getCurrentPosition 은 2개의 argument를 받는다
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
