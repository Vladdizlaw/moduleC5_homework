
 	
 	console.log(document.readyState)
 	let check=false
 	let span=document.getElementById('a1')
 	console.log(span)
 	let div=document.getElementsByClassName("inner_div")
 	console.log(div)
 	let count=1
 	function time (el){
 	let t=setTimeout(function(){
 	el.style="background-color:blue;"	
 	},1000)
 
 	let t1=setTimeout(()=>{
 	el.style="background-color:yellow;"
 	},2000)
 	
 	let t2=setTimeout(function(){
 	el.style="background-color:green;"
 	},3000)
 	
 	}
 	let ti=setInterval(function(){
 		time(div[0])
 		clearTimeout()
 		count++
 		if (count==20){
 			clearInterval(ti)
 		}
 	}

 		,1000)
 	console.log(document.readyState)
 	document.addEventListener("DOMContentLoaded",function(){
 	const div1=document.createElement('div')
 	div1.style="display:flex;color:cyan;"
 	div1.innerHTML='<span id="a2">TEXTAREA</span>'
 	div1.setAttribute('onclick', "alert('click')")
 	
 	span=document.getElementsByTagName('p')
 	console.log(span[0].innerHTML)
 	span[0].append(div1)
 	div1.append('HALLO')
 	let divOuter=document.getElementsByClassName("outer_div")
 	let clone=div[0].cloneNode(true)
 	divOuter[0].append(clone)
 	clone=div[0].cloneNode(true)
 	divOuter[0].prepend(clone)
 	 ti=setInterval(function(){
 		time(div[1])
 		clearTimeout()
 		count++
 		if (count==20){
 			clearInterval(ti)
 		}
 	},1000)
 	 console.log(document.readyState)
 	})
 	setInterval(()=>{
 	if (check===true){
 		console.log('event is done')
 		
 		document.getElementById("div").removeEventListener('click',clickMe)
 	}
 	if (check==false){
 		console.log('event is not done')
 	}},5000)
 	window.onbeforeunload=function(){
 		window.alert("are you shure?")
 	}
 	inp=document.getElementById('search')
 	inp.addEventListener('click',function(){
 		console.log(inp)
 		console.log(inp.data)
 	})

 
 	//divOuter[0].after(clone)
 	//divOuter[0].before(clone)
 	
 	//span[0].removeChild(div1)
 	
 		
 	
 	
