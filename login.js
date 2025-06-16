let username = document.getElementById('username')
let password = document.getElementById('password')
let loginBtn = document.getElementById('loginBtn') 
let loginDialog = document.getElementById('loginDialog') 
let closeLoginDialog = document.getElementById('closeLoginDialog')

function showMessage(msg) {
    alert(msg)
}


function validateLogin() {
    
    if (!username.value) {
        showMessage("Campo Usuário é obrigatório!Verifique!")
        return
    }
    if (!password.value) {
        showMessage("Campo Senha é obrigatório!Verifique!")
        return
    }

    if (username.value === "nina" && password.value === "senhaDanina") {
        loginDialog.showModal()
    } else {
        showMessage("Usuario ou senha incorretos!")
    }
}

loginBtn?.addEventListener('click', function() {
    validateLogin()
})

closeLoginDialog?.addEventListener('click', function() {
    loginDialog.close()
})