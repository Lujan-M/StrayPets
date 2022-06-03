
    document.addEventListener("submit", (e) =>{
        const nombre = document.forms[0].elements.nombre.value
        const apellido = document.forms[0].elements.apellido.value
        const tel = document.forms[0].elements.tel.value
        const email = document.forms[0].elements.email.value

        e.preventDefault()
        if (/^[a-zA-Z]+$/.test(nombre)){
            console.log(nombre)
            document.querySelector(".error-nombre").style.display="none"
        }else {
            document.querySelector(".error-nombre").style.display="inline-block"
        }

        if (/^[a-zA-Z]+$/.test(apellido)){
            console.log(apellido)
            document.querySelector(".error-apellido").style.display="none"
        }else {
            document.querySelector(".error-apellido").style.display="inline-block"
        }

        if (/^[0-9]+$/.test(tel) && tel.length <= 10){
            console.log(tel)
            document.querySelector(".error-tel").style.display="none"
        }else {
            document.querySelector(".error-tel").style.display="inline-block"
        }

        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            console.log(email)
            document.querySelector(".error-email").style.display="none"
        } else {
            document.querySelector(".error-email").style.display="inline-block"
        }

    })