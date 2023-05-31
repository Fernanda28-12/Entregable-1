function mostrarpacientes(){
    let pacientes  = []
    let localpacientes = localStorage.getItem ("pacientes")
    if (localpacientes){
        pacientes = JSON.parse(localpacientes)
    }
    const tablapacientes = document.getElementById("tabla-pacientes")
    const cuerpoTabla = tablapacientes.getElementsByTagName("tbody")[0]
    pacientes.forEach(paciente => {
        let fila = cuerpoTabla.insertRow()
        let celdaNombre = fila.insertCell()
        let celdaApellido = fila.insertCell()
        let celdaNumeroCedula = fila.insertCell()
        let celdaEdad = fila.insertCell()
        let celdaTelefono = fila.insertCell()
        let celdaEspecialidad = fila.insertCell()

        celdaNombre.textContent = paciente.nombre
        celdaApellido.textContent = paciente.apellido
        celdaNumeroCedula.textContent = paciente.numeroCedula
        celdaEdad.textContent = paciente.Edad
        celdaTelefono.textContent = paciente.Telefono
        celdaEspecialidad.textContent = paciente.especialidad

    });
}
mostrarpacientes()