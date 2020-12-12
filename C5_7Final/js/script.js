
//Находим нужные элементы DOM
const targetDiv=document.getElementById('target')
const input1=document.getElementById('input1')
const input2=document.getElementById('input2')
const nextButton=document.getElementById('nextButton')
const previewDiv=document.getElementById('previewdiv')
const alertDiv=document.getElementById('alert-wrap')

async function useFetch(url,cb){
//Асинхронная функция , получает запрос по аргументу url и парсит в обьект json ,
//вызывает callback с результатом запроса, а так же очищает и записывает объект в localStorage 	
	const response=await fetch(url)
	const arrayPictures=await response.json()
	localStorage.clear()
	localStorage.setItem('current',JSON.stringify(arrayPictures))
	cb(arrayPictures,targetDiv)

}

function throwPictures(arrayPictures,target){
//Принимает объект запроса и размещает в target элементе	
	let allPictures=''
	for (let item of arrayPictures){
		let element=`<div class="cards"><img src="${item.download_url}"/><p>${item.author}</p></div> `
		allPictures+=element}
		target.innerHTML=allPictures		 
}
function throwAlert(p){
//Формирует и размещает текстовое предупреждение с текстом аргумента p	
	let warning=document.createElement('div')
		warning.className = "alert"
		warning.innerHTML=p
		
		alertDiv.append(warning)
		setTimeout(()=>{
			warning.remove()
		},1500)
}

function validInput(input1,input2){
//Валидирует инпуты	
	const validObject={
	inp1Text:'<p>Номер страницы вне диапазона от 1 до 10</p>',
	inp2Text:'<p>Лимит вне диапазона от 1 до 10</p>',
	inpBothText:'<p>Номер страницы и лимит вне диапазона от 1 до 10</p>',
	inp1:true,
	inp2:true
	}
//Проверяет инпуты на корректность ввода и отмечает , в  объекте validObject
//соответствующие поля , затем проверяет поля и дает соответствующее сообщение в фуекцию throwAlert 	
	if (isNaN(Number(input1.value))||Number(input1.value)>10||Number(input1.value)<1){
		validObject.inp1=false
	}
	if ((isNaN(Number(input2.value))||Number(input2.value)>10||Number(input2.value)<1)){
		validObject.inp2=false
	}
	if (validObject.inp1==false&&validObject.inp2==false){
		throwAlert(validObject.inpBothText)
		return false
	}else if(validObject.inp1==false&&validObject.inp2==true){
		throwAlert(validObject.inp1Text)
		return false
	}else if(validObject.inp1==true&&validObject.inp2==false){
		throwAlert(validObject.inp2Text)
		return false
	}else	{
		return true
	}
	
}


nextButton.addEventListener('click',()=>{
	
	if (validInput(input1,input2)){
		
	url=` https://picsum.photos/v2/list?page=${input1.value}&limit=${input2.value}`
	useFetch(url,throwPictures)
	
		}

})


//Проверяем localStorage , если есть  выводим из него картинки
if (localStorage.current){
	
	const oldSession=localStorage.getItem('current')
	
	throwPictures(JSON.parse(oldSession),targetDiv)
}
