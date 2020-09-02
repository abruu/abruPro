
const name=document.getElementById("name")
const email=document.getElementById("email")
const msg=document.getElementById("msg")
const submit=document.getElementById("submit")
const contact=document.getElementById("contact")

const database = firebase.database()


contact.addEventListener('input',()=>{
    if(name.value.lenght>3 && email.value.lenght>0 ){
        submit.setAttribute('disabled',);

    }else{
        submit.removeAttribute('disabled','disabled')
    }
}

)

submit.addEventListener('click',(e)=>{
    e.preventDefault();

    database.ref('/contacts/' + name.value).set({
        name : name.value,
        email : email.value,
        msg : msg.value,
    })
})