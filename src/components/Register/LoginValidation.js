function Validation(values){
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const senha_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.email === ""){
        error.email = "Email é obrigatório"
    }

    else if(!email_pattern.test(values.email)){
        error.email = "Email não está igual"
    } else {
        error.email = ""
    }

    if(values.senha === "") {
        error.senha = "Senha é obrigatória"
    }
    else if(!senha_pattern.test(values.senha)){
        error.senha = "Senha não está igual"
    } else {
        error.senha = ""
    }

    return error;
}

export default Validation;