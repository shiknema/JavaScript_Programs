/**fetch("https://www.metaweather.com/api/location/search/?query=london")
.then((res)=>res.json())
.then((x)=> {
console.log(res);
document.getElementById("demo").innerHTML=res.title;
})
.catch(err => {
	console.error(err);
});*/


function getWeather(){
    $.ajax({
        url:"http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29",
        type:'GET',
        dataTypes:'json',
        success:function(data){
            console.log(data.cod);
		
			$('#demo').append(
		   "Name: " +data.city.name +"</br>"+
		   "population : " + data.city.population +"</br>"+"TimeZone : " + data.cod
				)
		}
	})
}
