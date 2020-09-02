const name=document.getElementById("name")
const email=document.getElementById("email")
const msg=document.getElementById("msg")
const submit=document.getElementById("submit")

const database = firebase.database()

submit.addEventListener('click',(e)=>{
    e.preventDefault();

    database.ref('/contacts/' + name.value).set({
        name : name.value,
        email : email.value,
        msg : msg.value,
    })
})