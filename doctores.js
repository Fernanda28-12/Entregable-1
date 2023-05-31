function mostrarDoctores(){
    let doctores  = []
    let localdoctores = localStorage.getItem ("Doctores")
    if (localdoctores){
        doctores = JSON.parse(localdoctores)
    }
    const tabladoctores = document.getElementById("tabla-doctores")
    const cuerpotabla = tabladoctores.getElementsByTagName("tbody")[0]
    doctores.forEach(doctor => {
        let fila = cuerpotabla.insertRow()
        let celdaNombre = fila.insertCell()
        let celdaApellido = fila.insertCell()
        let celdaNumerodeCedula = fila.insertCell()
        let celdaEspecialidad = fila.insertCell()
        let celdaConsultorio = fila.insertCell()
        let celdaCorreoContacto = fila.insertCell()

        celdaNombre.textContent = doctor.nombre
        celdaApellido.textContent = doctor.apellido
        celdaNumerodeCedula.textContent = doctor.numeroCedula
        celdaEspecialidad.textContent = doctor.especialidad
        celdaConsultorio.textContent = doctor.consultorio
        celdaCorreoContacto.textContent = doctor.correoContacto
                

    });
}
mostrarDoctores()