//criar variavel constante com a chave da API
const key = 'e0283766cee7e7e70be7e75409ae8042'

function Coletar() {
   let cidade = document.querySelector('.input-cidade').value
   console.log(cidade)
   Dados(cidade)
}

//Consumindo dados da API OpenWeather
async function Dados(cidade) {
   let Dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Response => Response.json())
   console.log(Dados)
   ExibirDados(Dados)
}

//Função Trocar Dados na Tela
function ExibirDados(Dados) {
   document.querySelector('.Cidade').innerHTML = "Tempo em " + Dados.name
   document.querySelector('.Temperatura').innerHTML = Math.floor(Dados.main.temp) + " C°"
   document.querySelector('.Previsao').innerHTML = Dados.weather[0].description
   document.querySelector('.Umidade').innerHTML = Dados.main.humidity + " %"
   document.querySelector('.Img_Previsao').src = `https://openweathermap.org/img/wn/${Dados.weather[0].icon}.png`
   document.querySelector('.Nivel_do_mar').innerHTML = Dados.main.sea_level + " m"
}