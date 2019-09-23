const select = document.getElementById("selection");
const wrapper = document.getElementById("wrapper");
const btnSave = document.getElementsByClassName("save")[0];
const btnClear= document.getElementsByClassName("clear")[0];
const info = document.getElementsByClassName("info")[0]
const inputName = '<p>Имя</p><input type = "text" class = "name" }>';
const inputSurname = '<p>Фамилия</p> <input type = "text" class = "Surname">';
const inputPatronymic = '<p>Отчество</p> <input type = "text" class = "patronymic">';
const inputAge = '<p>Возраст</p> <input type = "text" class = "age">';
const inputSpecialty = '<p>Специальность</p> <input type = "text" class = "specialty">';
const inputEducation = '<p>Образование</p> <input type = "text" class = "education">';
const inpuOrganization = '<p>Организация</p><input type = "text" class = "organization">';
const inputPlaceWork = '<p>Прошлое место работы</p><input type = "text" class = "placeWork">';
const inputDateDismissal = '<p>Дата увольнения</p><input type = "text" class = "dateDismissal">';
const inputDrivingExperience = '<p>Стаж вождения</p><input type = "text" class = "drivingExperience">';
const inputDriverLicense = '<p>Водительские права</p><input type = "text" class = "driverLicense">';
let allInput = document.getElementsByTagName("input")
let btnInfo = document.getElementById('btnRemove')

function Person(name, surname, patronymic, age){
    this.name = name;
    this.surname = surname;
    this.patronymic = patronymic;
    this.age = age;
}
select.onclick = () => {
    if(!select.selectedIndex) {
        wrapper.innerHTML = `${inputName}${inputSurname}${inputPatronymic}${inputAge}${inputSpecialty}
                            ${inputEducation}${inpuOrganization}${inputPlaceWork}${inputDateDismissal}`
        let user1 = new Person()
        allInput[0].onchange = e =>user1.name = e.target.value
        allInput[1].onchange = e => user1.surname = e.target.value
        allInput[2].onchange = e => user1.atronymic = e.target.value
        allInput[3].onchange = e => user1.age = e.target.value
        allInput[4].onchange = e => user1.specialty = e.target.value
        allInput[5].onchange = e => user1.education = e.target.value
        allInput[6].onchange = e => user1.organization = e.target.value
        allInput[7].onchange = e => user1.lastPlaceWork = e.target.value
        allInput[8].onchange = e => user1.dateDismissal = e.target.value
        btnSave.onclick = () => {
            let getData = [];
            localStorage.setItem(user1.name, JSON.stringify(user1));
            let v = [];
            Object.values(localStorage).map(function(obj, str) { 
              obj[str] = localStorage.getItem(str); 
                return v.push(obj)
            }, {});
            for(let i = 0; i < v.length; i++){
                getData.push(JSON.parse(v[i]))
            }
            info.innerHTML = ''
            getData.map( (item, index) => {
                let elemName = document.createElement('div')
                let elemSurname = document.createElement('div')
                let elemAge = document.createElement('div')
                let elemOrganization = document.createElement('div')
                let btnRedact = document.createElement('button')
                let btnRemove = document.createElement('button')
                info.append(elemName)
                info.append(elemSurname)
                info.append(elemAge)
                info.append(elemOrganization)
                info.append(btnRedact)
                info.append(btnRemove)
                elemName.append(getData[index].name)
                elemSurname.append(getData[index].surname)
                elemAge.append(getData[index].age)
                elemOrganization.append(getData[index].organization)
                btnRedact.append('Редактировать')
                btnRemove.append('Удалить')
                elemName.id = "elemName";
                elemSurname.id = "elemSurname"
                elemAge.id = "elemAge"
                elemOrganization.id = "elemOrganization"
                btnRemove.id = getData[index].name
                btnRedact.id = 'btnRedact'
                btnRemove.onclick = (el) => {
                    console.log(getData)  
                    getData = getData.filter((item, index) => {
                        return getData[index].name != btnRemove.id 
                    })
                    
                    localStorage.setItem(user1.name,JSON.stringify(getData));
                    
                }
            })  
            console.log(btnInfo)
        }
    } else {
        wrapper.innerHTML = `${inputName}${inputSurname}${inputPatronymic}${inputAge}${inputEducation}
                            ${inputDriverLicense}${inputDrivingExperience}`
        let user2 = new Person()
        allInput[0].onchange = e =>user2.name = e.target.value
        allInput[1].onchange = e => user2.surname = e.target.value
        allInput[2].onchange = e => user2.atronymic = e.target.value
        allInput[3].onchange = e => user2.age = e.target.value
        allInput[4].onchange = e => user2.education = e.target.value
        allInput[5].onchange = e => user2.inputDriverLicense = e.target.value
        allInput[6].onchange = e => user2.inputDrivingExperience = e.target.value
        btnSave.onclick = () => {
            let getData = [];
            localStorage.setItem(user2.name, JSON.stringify(user2));
            let v = [];
            Object.values(localStorage).map(function(obj, str) { 
              obj[str] = localStorage.getItem(str); 
                return v.push(obj)
            }, {});
            for(let i = 0; i < v.length; i++){
                getData.push(JSON.parse(v[i]))
            }
            console.log(v)
            info.innerHTML = ''
            getData.map( (item, index) => {
                let elemName = document.createElement('div')
                let elemSurname = document.createElement('div')
                let elemAge = document.createElement('div')
                let elemOrganization = document.createElement('div')
                let btnRedact = document.createElement('button')
                let btnRemove = document.createElement('button')
                info.append(elemName)
                info.append(elemSurname)
                info.append(elemAge)
                info.append(elemOrganization)
                info.append(btnRedact)
                info.append(btnRemove)
                elemName.append(getData[index].name)
                elemSurname.append(getData[index].surname)
                elemAge.append(getData[index].age)
                elemOrganization.append(getData[index].organization)
                btnRedact.append('Редактировать')
                btnRemove.append('Удалить')
                elemName.id = "elemName";
                elemSurname.id = "elemSurname"
                elemAge.id = "elemAge"
                elemOrganization.id = "elemOrganization"
            })   
        }
    }
    
}





// var hst = document.getElementById("highscores");

// var highScores = [
//   { id: "1",name: "Maximillian", score: 1000 },
//   { id: "2",name: "The second guy", score: 700 },
//   { id: "3",name: "The newbie!", score: 50 }
// ];

// localStorage.setItem("highscores", JSON.stringify(highScores));

// var retrievedScores = JSON.parse(localStorage.getItem("highscores"));

// var deleteById = function ( self ){
//   retrievedScores = retrievedScores.filter(function(elem) {
//       debugger
//       return elem.id !== self.id;

//   });
  
//   localStorage.setItem("highscores",JSON.stringify(retrievedScores));
//   self.parentNode.parentNode.removeChild(self.parentNode);
// }

//   for (var i = 0; i < retrievedScores.length; i++) {
//     hst.innerHTML +=
//       "<li >" +"<a id="+retrievedScores[i].id + " href='#' onclick='deleteById(this)'>x</a>" +
//       retrievedScores[i].name +
//       " -- " +
//       retrievedScores[i].score +
//       "</li>";
//   }


