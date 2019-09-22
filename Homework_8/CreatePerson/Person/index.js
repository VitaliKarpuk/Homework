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
        let a = document.getElementsByTagName("input")
        a[0].onchange = (e) => {
            user1.name = e.target.value
        }
        a[1].onchange = (e) => {
            user1.surname = e.target.value
        }
        a[1].onchange = (e) => {
            user1.surname = e.target.value
        }
        a[2].onchange = (e) => {
            user1.atronymic = e.target.value
        }
        a[3].onchange = (e) => {
            user1.age = e.target.value
        }
        a[4].onchange = (e) => {
            user1.specialty = e.target.value
        }
        a[5].onchange = (e) => {
            user1.education = e.target.value
        }
        a[6].onchange = (e) => {
            user1.organization = e.target.value
        }
        a[7].onchange = (e) => {
            user1.lastPlaceWork = e.target.value
        }
        a[8].onchange = (e) => {
            user1.dateDismissal = e.target.value
        }
        btnSave.onclick = () => {
            localStorage.setItem(user1.name, JSON.stringify(user1));
            let v = [];
            Object.values(localStorage).map(function(obj, str) { 
              obj[str] = localStorage.getItem(str); 
                return v.push(obj)
            }, {});
            console.log(v)
        }
    } else {
        wrapper.innerHTML = `${inputName}${inputSurname}${inputPatronymic}${inputAge}${inputEducation}
                            ${inputDriverLicense}${inputDrivingExperience}`
        let user2 = new Person("Vadim", 28)
        // console.log(user2.getName(item => item. ))
    }
    
}

