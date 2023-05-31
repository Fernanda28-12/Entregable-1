const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const numeroCedula = document.getElementById("numero_cedula")
const especialidad = document.getElementById("especialidad")
const consultorio = document.getElementById("consultorio")
const correoContacto = document.getElementById("correo_contacto")
const formularioRegistro = document.getElementById("registro-doctores")
formularioRegistro.addEventListener("submit", function (event) {
    event.preventDefault()
    const doctor = {
        nombre: nombre.value,
        apellido: apellido.value,
        numeroCedula: numeroCedula.value,
        especialidad: especialidad.value,
        consultorio: consultorio.value,
        correoContacto: correoContacto.value

    }
    let doctores = []
    let localDoctores = localStorage.getItem("Doctores")
    if (localDoctores) {
        pacientes = JSON.parse(localDoctores)
    }
    doctores.push(doctor)
    localStorage.setItem("Doctores", JSON.stringify(doctores))
    formularioRegistro.reset()
    alert("Doctor registrado con éxito")

})