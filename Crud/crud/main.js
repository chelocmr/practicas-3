
function guardar(){

    let nuevo_ip = {
        IP:document.getElementById("inp_IP").value,
        puerto:document.getElementById("inp_puerto").value,
        PaisCiudad:document.getElementById("inp_PaisCiudad").value,
        velocidad:document.getElementById("inp_velocidad").value,
        tipo:document.getElementById("inp_tipo").value
    }   
    
    if("lista_ips" in localStorage){
       
       let grilla_ip =  JSON.parse(localStorage.getItem("lista_ips"))
        grilla_ip.push(nuevo_ip)
        localStorage.setItem("lista_ips",JSON.stringify(grilla_ip))
    }else{
        
        let grilla_ip = []
        grilla_ip.push(nuevo_ip) 
        localStorage.setItem("lista_ips", JSON.stringify(grilla_ip) )
    }   
    
    obtener_ips()

    document.getElementById("form_ip").reset() 
     
}


function obtener_ips(){

        if ("lista_ips" in localStorage){

            let lista_ips = JSON.parse( localStorage.getItem("lista_ips") ) 

            let filas = []            
            lista_ips.forEach( (element, index) => {
                let fila = `
                    <tr>
                        <td>${index+1}</td>
                        <td>${element.IP}</td>
                        <td>${element.puerto}</td>
                        <td>${element.PaisCiudad}</td>
                        <td>${element.velocidad}</td>
                        <td>${element.tipo}</td>
                        <td>
                            <button onclick="eliminar_ip(${index})" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
                            <button onclick="editar_ip(${index})" class="btn btn-primary btn-sm"><i class="fa fa-edit"></i></button>
                        </td>
                    </tr>
                `
                filas.push(fila)
            });

            document.getElementById("tbody").innerHTML = filas.join('')

        }

}

//ejecutar nuevamente la funcion desde un principio para limpiar la pantalla

obtener_ips() 

function eliminar_ip(index){

let lista_ips = JSON.parse(localStorage.getItem("lista_ips"))

lista_ips.splice(index,1) 

localStorage.setItem("lista_ips", JSON.stringify(lista_ips))

obtener_ips()

}

function editar_ip(index){

let lista_ips = JSON.parse(localStorage.getItem("lista_ips"))

document.getElementById("inp_IP").value = lista_ips[index].IP
document.getElementById("inp_puerto").value = lista_ips[index].puerto
document.getElementById("inp_PaisCiudad").value = lista_ips[index].PaisCiudad
document.getElementById("inp_velocidad").value = lista_ips[index].velocidad
document.getElementById("inp_tipo").value = lista_ips[index].tipo

document.getElementById("btn_guardar").style.display = 'none'
document.getElementById("btn_actualizar").style.display = 'block'

localStorage.setItem("indice_de_actualizacion", index)

}

function actualizar_ip(){

let indice = localStorage.getItem("indice_de_actualizacion")

let lista_ips = JSON.parse(localStorage.getItem("lista_ips"))

lista_ips[indice].IP = document.getElementById("inp_IP").value
lista_ips[indice].puerto = document.getElementById("inp_puerto").value
lista_ips[indice].PaisCiudad = document.getElementById("inp_PaisCiudad").value
lista_ips[indice].velocidad = document.getElementById("inp_velocidad").value
lista_ips[indice].tipo = document.getElementById("inp_tipo").value

localStorage.setItem("lista_ips", JSON.stringify(lista_ips))

obtener_ips()

document.getElementById("btn_guardar").style.display = 'block'
document.getElementById("btn_actualizar").style.display = 'none'

document.getElementById("form_ip").reset() 

}

document.getElementById("btn_actualizar").addEventListener("click", actualizar_ip)



//alert(JSON.stringify(nuevo_ip,null,4)); para ver array 