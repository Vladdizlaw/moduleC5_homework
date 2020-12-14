 class Parent{
 	//Создаем родительский класс
 	constructor(ownCity){
 	//конструктор с принимаемым аргументом	
 		this.ownCity=ownCity ;
 		this.hadFlat=true;
 	}
 	getinfo (){
 	//метод	класа Parent, щбъявление метода только такой формой
 		return `${this.ownCity},${this.hadFlat}`
 	}
 }
 
 
 class Child extends Parent{
 	//Создаем наследуемый класс от Parent(прототипа)
 	constructor(isStudent,city,ownCity){
 		super('Moscow');
 	//super - это ссылка на родительский класс внутри него
 	//передаем аргумент ownCity 	
 		this.isStudent=isStudent;
 		this.city = isStudent ? city : ownCity;
 	}
 	getinfo (){
 	//Переписываем метод getinfo с условиями	
 		if (this.isStudent){
 			return `I live and study in the ${this.city}`
 		} 
 		else {
 			return super.getinfo()
 	//Если не true то вызываем метод родителя		
 		}
 	}
 }

 let child = new Child(true,"Pieter")
 console.log(child)
 console.log(child.getinfo())
 const employee = new Child(false, 'New York')
 console.log(employee)
 console.log(employee.getinfo())
 console.log(child instanceof Parent)