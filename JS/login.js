// document.getElementById("formLogin").addEventListener('submit',
// function(event){
//     alert('Olá Mundo')
// }) 

function ola(){

    let email = document.getElementById("email-form").value
    let senha =  document.getElementById("senha-form").value

    console.log(email,senha)

    if(email=="" || senha=="" ){
        alert('Login Recusado')
    } else {
        alert('Login Autorizado')
    }
}

console.log("teste", 123 , 10.99, true, )