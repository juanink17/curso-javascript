let total = 0
let jusArancelario = 28628
let bandera = true
let bandero = true
const miEmail = "inkjuanmanuel@gmail.com"
const Ramas = ["Civil", "Penal", "Familia", "Laboral"]
const MediosDePago = [ "Tarjeta de Debito", "Tarjeta de Credito", "Transferencia", "Mercado pago"]


let nombre = prompt  ("¿Cual es tu nombre y apellido?");
console.log ("su nombre es " + nombre)

//bucle obligacion de informar nombre
while (nombre == "" || nombre == null){
    
    alert ("Recuerde que sin los datos consignados no se devolvera una consulta")
    nombre = prompt  ("¿Cual es tu nombre y apellido?")
}

alert ("Hola " + nombre + "\n" + "\n" + "Bienvenido a Estudio Juridico Ink & Asoc.");
let edad = confirm ("¿Tienes más de 18 años?");
console.log ("es mayor de edad " + edad)

if (edad == true) {
    let email = prompt ("Consigne su Email aqui");
        
    while (email == "" || email == null) {
        alert ("Si no registra su email no podra avanzar")
        email = prompt ("Consigne su Email aqui")
    }   
    console.log ("su email es " + email)
} 
else  {
    alert ("Disculpe, requiere la asistencia de un mayor para poder continuar");
}


//funcion multiplica valor de jusArancelario por consultas dependiendo el valor de cada una
function honorariosConsulta (UnidadJus){
    total += jusArancelario * UnidadJus 
}

function logicaEleccion (consulta) {
    switch (consulta){
        case "civil" :
                prompt ("Escriba su consulta " + consulta + " " + "aquí")
                honorariosConsulta (2)
                alert ("Su consulta será evacuada a la brevedad") 
                edad = confirm ("¿Quieres realizar otra consulta? \n recueda que puede tener un costo adicional")         
                break
            case "penal": 
                prompt ("Escriba su consulta " + consulta + " " + "aquí")  
                honorariosConsulta (10)
                alert ("Su consulta será evacuada a la brevedad") 
                edad = confirm ("¿Quieres realizar otra consulta? \n recueda que puede tener un costo adicional")             
                break
            case "familia": 
                prompt ("Escriba su consulta de " + consulta + " " + "aquí")  
                honorariosConsulta (1)
                alert ("Su consulta será evacuada a la brevedad")  
                edad = confirm ("¿Quieres realizar otra consulta? \n recueda que puede tener un costo adicional")       
                break
            case "laboral":
                prompt ("Escriba su consulta " + consulta + " " + "aquí")
                honorariosConsulta (1)
                alert ("Su consulta será evacuada a la brevedad")
                edad = confirm ("¿Quieres realizar otra consulta? \n recueda que puede tener un costo adicional")
                break
            default:
                confirm ( "Debes elegir una opcion valida")
                break
                    
                    
                    
    }
}

            
//bucle eleccion de la rama de la consulta           
while (edad){
    
    const elegirRamas = prompt ("¿La consulta que desea realizar a que rama pertenece? " + "\n" + "\n-" + Ramas.join ("\n- ")) .toLowerCase ()

    
    logicaEleccion (elegirRamas)

   console.log ("ha elegido la siguiente consulta" + "\n" + elegirRamas)

}

//funcion sobre datos de metodo de pago
function informacionPago (metodo) {
    if (metodo === "mercado pago") {
            alert ("Numero de cuenta: 515/65651565" + "\n" + "CBU: 1231546841321324367364" + "\n" + "Alias: coco.pepe.toto")
            alert ("realizado el pago, envie comprobante al email: " + miEmail)
    } else if (metodo === "tarjeta de debito") {
            let tarjetaD = parseInt (prompt ("Ingrese numero de tarjeta"))
            let fechaD = parseInt (prompt ("Ingrese fecha de vencimiento"))
            let dniD = parseInt (prompt ("Ingrese dni del titular"))
            let nombreD =  prompt ("Ingrese nombre del titular")
            let ccvD = parseInt (prompt ("Ingrese CCV"))
            alert ("Su pago se vera reflejado en su resumen de saldo en caso que la informacion proporcionada sea la correcta")
    } else if (metodo === "tarjeta de credito") {
            let tarjetaC = parseInt (prompt ("Ingrese numero de tarjeta"))
            let fechaC = parseInt (prompt ("Ingrese fecha de vencimiento"))
            let dniC = parseInt (prompt ("Ingrese dni del titular"))
            let nombreC = prompt ("Ingrese nombre del titular")
            let ccvC = parseInt (prompt ("Ingrese CCV"))
            alert ("Su pago se vera reflejado en su resumen de tarjeta en caso de que la informacion proporcionada sea la correcta")
    } else if (metodo === "transferencia"){
            alert ("Numero de cuenta: 656/655561" + "\n" + "CBU: 1654654654654644459741" + "\n" + "Alias: tino.casco.bebe")
            alert ("realizado el pago, envie comprobante al email: " + miEmail)
    } else {
        alert ("Elija un metodo de pago valido")
    }
    
}

function logicaDePago (metodo) {
    switch (metodo) {
        case "mercado pago":
            informacionPago (metodo)
            break
        case "tarjeta de debito":
            informacionPago (metodo)
            break                
        case "tarjeta de credito":
            informacionPago (metodo)
            break
        case "transferencia":
            informacionPago (metodo)
            break
        default:
            informacionPago (metodo)
            break
            
    }
    console.log ("ha elegido el siguiente metodo de pago " + metodo) 
}


if (total >= 1) {
    alert ("Su consulta es por un total de $ " + total)
    console.log ("el total del valor de la/s consultas es de " + total)

    while (bandera) {
        const metodoDePago = prompt ("¿Con que medio quieres abonar la consulta? " + "\n" + "\n-" + MediosDePago.join ("\n- ")) .toLowerCase ()
        
        logicaDePago (metodoDePago)
        

        bandera = !confirm ("¿Quieres confirmar el pago?")
        console.log ("ha confirmado la compra" + " " + !bandera)
    }
}

alert ('"MUCHAS GRACIAS POR CONFIAR EN NOSOTROS"')



    

    
    


