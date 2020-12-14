 function ElectricalAppliance(power){
 	//Класс родитель электрических приборовб
 	//принимает аргумент power
 	this.power=power
 	
 }
 ElectricalAppliance.prototype.getOn=function(){
 	//Добавляем через делегирующую связь prototype в класс 
 	//электроприборов функцию включения
 	console.log(`${this.name} is on `)

 	return this.condition=true
 }
 ElectricalAppliance.prototype.getOff=function(){
 	//Добавляем через делегирующую связь prototype в класс 
 	//электроприборов функцию выключения
 	if (this.condition){
 	console.log(`${this.name} is off `)
 	return this.condition=false}
 	else {
 	console.log(`${this.name} is not working `)	
 	}
 }
 function Lamp(name){
 	//Класс будующий наследник со своим name и состоянием condition
 	this.name=name
 	this.condition=false
 }
 Lamp.prototype=new ElectricalAppliance(350)
 //Создаем делегирующую связь(прототипируем) Lamp от прототипа ElectricalAppliance
 // с мощностью 350
 const lamp= new Lamp('Siyanie')
 //Создаем экземпляр lamp с помощью new от родителя Lamp с именем Siyanie
 console.log(lamp)
 lamp.getOff()
 lamp.getOn()
 console.log(lamp)
 lamp.getOff()
 console.log(lamp)
 lamp.getOff()
 console.log(lamp)
 lamp.getOn()
 console.log(lamp)
