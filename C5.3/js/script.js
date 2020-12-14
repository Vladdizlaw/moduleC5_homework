
const inputLimit=document.querySelector(".input")
/*setInterval(function(){
	console.log(inputLimit.value)
}, 500)*/
let url=''
const btn=document.querySelector(".btn")

function getUrl(limit){
	let url=`https://picsum.photos/v2/list?limit=${limit}`
	
	return url
}

function useRequest(url,callback){
	let xhr= new XMLHttpRequest()
	xhr.open('GET',url,true)
	xhr.onload=function(){
		if (xhr.status!=200){
		alert(`Status: ${xhr.status}`)	
	}else{
		const result=JSON.parse(xhr.response)
		if (callback) {
			callback(result)
		}
	}

}
xhr.onerror=function(){
	alert(`Status: ${xhr.status}`)
}
xhr.send()
}
function displayResult(result,limit){
	const forPictures=document.querySelector(".forpictures")
	let cards=''
	
	result.forEach(item =>{
		let cardBlock= `
		<div class="card" >
		
		<img   src="${item.download_url}"
		class="card-image"/>
		<p>${item.author}</p>
		</div>
		`
		cards=cards+cardBlock
	})
	forPictures.innerHTML=cards	
	}



btn.addEventListener('click',function (){
	if (isNaN(Number(inputLimit.value)))   {
		alert('Error of input.Please,enter digit from 1 to 10')
	}else if (Number(inputLimit.value)>10) {
		alert('Error of input.Please,enter digit from 1 to 10')
	}else if (Number(inputLimit.value)<1) {
		alert('Error of input.Please,enter digit from 1 to 10')
	}else{
		var limit=Math.round(Number(inputLimit.value))
		
		url=getUrl(limit)
		useRequest(url,displayResult)
	}
})

console.log(url)


