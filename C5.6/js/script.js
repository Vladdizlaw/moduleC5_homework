//Находим нужные элементы
const inputLimit1=document.querySelector(".input1")
const inputLimit2=document.querySelector(".input2")
let url=''
const btn=document.querySelector(".btn")

function getUrl(limit1,limit2){
	//Простая функция получения url
	let url=`https://picsum.photos/${limit1}/${limit2}`
	
	return url
}

 async function useRequest(url,callback){
 	//Асинхронная функция с запросом и колбэком
	try {
		const response = await fetch(url) 
		console.log(response)
		
		callback(response) 

	} catch(e) {
		console.error(e)
	
}}
function displayResult(item,limit1,limit2){
	//Функция вывода на экран, вызывается в useRequest
	const forPictures=document.querySelector(".forpictures")
	
		let cardBlock= `
		<div class="card" ><style>width:${limit1}px;height:${limit2}px;</style>
		
		<img   src="${item.url}"
		class="card-image"/><style>width:${limit1}px;height:${limit2}px;</style>
		
		</div>`
		
	forPictures.innerHTML=cardBlock
	}



btn.addEventListener('click',function (){
	//Вешаем обработчик на кнопку и валидируем инпуты
	if (isNaN(Number(inputLimit1.value)) || isNaN(Number(inputLimit2.value)) )   {
		alert('Error of input.Please,enter digit from 100 to 300')
	}else if (Number(inputLimit1.value)<100 || Number(inputLimit1.value)>300) {
		alert('Error of input.Please,enter digit from 100 to 300')
	}else if (Number(inputLimit2.value)<100 || Number(inputLimit2.value)>300) {
		alert('Error of input.Please,enter digit from 100 to 300')
	}else{
	//Округляем на всякий случай 	
		const limit1=Math.round(Number(inputLimit1.value))
		const limit2=Math.round(Number(inputLimit2.value))
		url=getUrl(limit1,limit2)
		useRequest(url,displayResult,limit1,limit2)
	}
})




