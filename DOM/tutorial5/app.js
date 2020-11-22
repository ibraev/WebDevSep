// selectors

//////////// -----birinchi jolu

// var firstname = document.querySelector('.firstname')- birinchi jolu

///////////// -----ekinchi jolu

//var input = document.querySelectorAll('input');// ekinchi jolu
//var firstname = input[0]
// console.log(firstname.placeholder)

//////////// ---uchunchu jolu

// var [input1] = document.querySelectorAll('input');

// function myArray(){
//     return ['name1', 'name2', 'name3']
// }
//  var [n1,n2,n3]= myArray();

//  console.log(n2)

/////////// example

var [fistname, lastname, email, street, city, zipcode, birthday,phone, pass, confirm_pass, term] = document.querySelectorAll('input');

var [country, gender, countery_code]= document.querySelector('select')

var submitBtn = document.querySelector('button')

let formDatas=[]

submitBtn.addEventListener('click', function(e) {
    if (term.checked == true){
        console.log('accepted')
        let formObj ={
            firstname:firstname.value,
            lastname:lastname.value,
            email:email.value,
            street:street.value,
            city:city.value,
            country:country.selectedOption[0].value,
            zipcode:zipcode.value,
            gender:gender.selectedOption[0].value,
            phone:countery_code.selectedOption[0].value + phone.value // +322 +4555626 // +324416641
            password:pass.value,
            confirm:confirm_pass.value
        }
        //console.log(formObj)
        let temp = formDatas 
        temp.push(formObj) // update
        formDatas = temp; // updated array with new obj
    }else {
        console.log('not accepted')
    }
    console.log(formDatas)

    e.preventDefault();
})


//console.log(term.checked)
//console.log(input1)