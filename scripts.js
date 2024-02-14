

let chave = "9777d2e738bea6297d0bddd2d90cb9a7"


    function colocarDadosnaTela (dados) {

        console.log (dados)
        document.querySelector(".cidade").innerHTML = " Tempo em " + dados.name
        document.querySelector(".tempo").innerHTML = Math.floor (dados.main.temp) + " Max " + "°C"
        document.querySelector(".condiçao-tempo").innerHTML= dados.weather[0].description
        document.querySelector(".umidade").innerHTML = " Umidade " + (dados.main.humidity) + "%"
        document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
        document.querySelector(".temp-minima"). innerHTML = Math.floor (dados.main.temp_min) +  " Min " + "°C"
    

    }


   async function buscarCidade(cidade){ 

    const dados = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${ chave}&lang=pt_br&units=metric`).then (resposta => resposta.json() )

     colocarDadosnaTela(dados)


    }





 function cliqueinoBotao () {
    
    const cidade = document.querySelector(".digite-cidade").value

       buscarCidade(cidade)

 }






