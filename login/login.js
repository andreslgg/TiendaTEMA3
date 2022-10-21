 function log(){

    let incorrect = document.getElementById('incorrect')
    let userField = document.querySelector('[name="uname"]')

    let user=document.querySelector('[name="uname"]').value
    let pass=document.querySelector('[name="psw"]').value

    let correctUser="admin"
    let correctPass="password"
    
    if(user == correctUser && pass==correctPass){
        document.location='../store.html'
    }else{
        incorrect.removeAttribute('hidden')
        userField.focus()
    }
}