const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const numeroCedula = document.getElementById("numero cedula")
const edad = document.getElementById("Edad")
const telefono = document.getElementById("Telefono")
const especialidad = document.getElementById("especialidad")
const formularioRegistro = document.getElementById("registro-pacientes")
formularioRegistro.addEventListener("submit", function(event){event.preventDefault()
    const paciente = {
        nombre: nombre.value,
        apellido: apellido.value,
        numeroCedula: numeroCedula.value,
        Edad: edad.value,
        Telefono: telefono.value,
        especialidad: especialidad.value

        }
        let pacientes = []
        let localpacientes = localStorage.getItem("pacientes")
        if (localpacientes){
            pacientes = JSON.parse(localpacientes)
        }
        pacientes.push(paciente)
        localStorage.setItem("pacientes", JSON.stringify(pacientes))
        formularioRegistro.reset()
        alert("Paciente registrado con éxito")

})

