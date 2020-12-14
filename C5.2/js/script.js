//XML to Object
const xmlString=`<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`

const parser=new DOMParser()
const xmlDOM=parser.parseFromString(xmlString,"text/xml")
const listNode=xmlDOM.querySelector("list")
const student1Node=listNode.children[0]
const student2Node=listNode.children[1]
const student1NameNode=student1Node.querySelector("name")
const student1NameAttr=student1NameNode.getAttribute('lang')
const student1FirstName=student1NameNode.querySelector('first')
const student1SecondtName=student1NameNode.querySelector('second')
const student1Age=student1Node.querySelector("age")
const student1Prof=student1Node.querySelector("prof")

const student2NameNode=student2Node.querySelector("name")
const student2NameAttr=student2NameNode.getAttribute('lang')
const student2FirstName=student2NameNode.querySelector('first')
const student2SecondtName=student2NameNode.querySelector('second')
const student2Age=student2Node.querySelector("age")
const student2Prof=student2Node.querySelector("prof")

const resultXml={
	[listNode.tagName]  : [
	{name:`${student1FirstName.textContent} ${student1SecondtName.textContent}`,
	 age:Number(student1Age.textContent),prof:student1Prof.textContent,lang:student1NameAttr},
	 {name:`${student2FirstName.textContent} ${student2SecondtName.textContent}`,
	 age:Number(student2Age.textContent),prof:student2Prof.textContent,lang:student2NameAttr}
	]


}
console.log(resultXml)

//JSON to Object
const JSONString=`{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`
const data=JSON.parse(JSONString)
console.log(data)