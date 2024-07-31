let total = 0
let jusArancelario = 28628
let bandera = true
const miEmail = "inkjuanmanuel@gmail.com"
const Ramas = ["civil", "penal", "familia", "laboral"]
const MediosDePago = [ "tarjeta de debito", "tarjeta de credito", "transferencia", "mercado pago"]
let miVariable
let miTexto

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

if (edad) {
    let email = prompt ("Consigne su Email aqui");
        
    while (email == "" || email == null) {
        alert ("Si no registra su email no podra avanzar")
        email = prompt ("Consigne su Email aqui")
    }   
    console.log ("su email es " + email)



    //funcion multiplica valor de jusArancelario por consultas dependiendo el valor de cada una
    function honorariosConsulta (UnidadJus){
        total += jusArancelario * UnidadJus 
    }

    //funcion de mensaje en respuesta a consulta
    function Mensaje () {
        alert ("Su consulta será evacuada a la brevedad")
    }

    function preguntaConsulta () {
        prompt ("Escriba su consulta aquí")
    }

    function logicaEleccion (consulta) {
        switch (consulta){
            case "civil" :
                preguntaConsulta ()
                honorariosConsulta (2)
                Mensaje () 
                bandera = confirm ("¿Quieres realizar otra consulta? \n recueda que puede tener un costo adicional")         
                break
            case "penal": 
                preguntaConsulta ()  
                honorariosConsulta (10)
                Mensaje () 
                bandera = confirm ("¿Quieres realizr otra consulta? \n recueda que puede tener un costo adicional")             
                break
            case "familia": 
                preguntaConsulta ()  
                honorariosConsulta (1)
                Mensaje ()  
                bandera = confirm ("¿Quieres realizar otra consulta? \n recueda que puede tener un costo adicional")       
                break
            case "laboral":
                preguntaConsulta ()
                honorariosConsulta (1)
                Mensaje ()
                bandera = confirm ("¿Quieres realizar otra consulta? \n recueda que puede tener un costo adicional")
                break
            default:
                confirm ( "Debes elegir una opcion valida")
                break
                        
                        
                        
        }
    }

                
    //bucle eleccion de la rama de la consulta           
    while (bandera){
        
        const elegirRamas = prompt ("¿La consulta que desea realizar a que rama pertenece? " + "\n" + "\n-" + Ramas.join ("\n- ")) .toLowerCase ()

        
        logicaEleccion (elegirRamas)

    console.log ("ha elegido la siguiente consulta" + "\n" + elegirRamas)

    }

    function validacionDatos (miVariable){
         
        if (!isNaN(miVariable) && isFinite(miVariable)) {
            console.log('La variable es un número válido');
          } else {
            console.log('La variable no es un número válido');
        }
    }

    function validacionTexto (miTexto){
        if (!isNaN(miTexto) || miTexto === null){
            console.log ("la variable no reune los parametros requeridos")
        } else {
            console.log ("los parametros reunen los parametros requeridos")
        }
    }

    

    function dataCredito (){
        
        let tarjetaC = parseInt(prompt ("Ingrese numero de tarjeta"))
        miVariable = tarjetaC
        console.log (miVariable)
        validacionDatos (miVariable)

        let fechaC = parseInt (prompt ("Ingrese fecha de vencimiento"))
        miVariable = fechaC 
        console.log (miVariable) 
        validacionDatos (miVariable)

        let dniC = parseInt (prompt ("Ingrese dni del titular"))
        miVariable = dniC 
        console.log (miVariable)
        validacionDatos (miVariable)

        let nombreC = prompt ("Ingrese nombre del titular")
        miTexto = nombreC
        console.log (miTexto)
        validacionTexto (miTexto)

        let ccvC = parseInt (prompt ("Ingrese CCV"))
        miVariable = ccvC
        console.log (miVariable)
        validacionDatos (miVariable)

        alert ("Su pago se vera reflejado en su resumen de saldo en caso que la informacion proporcionada sea la correcta")
    }
    function dataDebito () {  

        let tarjetaD = parseInt(prompt ("Ingrese numero de tarjeta"))
        miVariable = tarjetaD
        console.log (miVariable)
        validacionDatos (miVariable)

        let fechaD = parseInt (prompt ("Ingrese fecha de vencimiento"))
        miVariable = fechaD 
        console.log (miVariable) 
        validacionDatos (miVariable)

        let dniD = parseInt (prompt ("Ingrese dni del titular"))
        miVariable = dniD 
        console.log (miVariable)
        validacionDatos (miVariable)

        let nombreD = prompt ("Ingrese nombre del titular")
        miTexto = nombreD
        console.log (miTexto)
        validacionTexto (miTexto)

        let ccvD = parseInt (prompt ("Ingrese CCV"))
        miVariable = ccvD
        console.log (miVariable)
        validacionDatos (miVariable)

        alert ("Su pago se vera reflejado en su resumen de saldo en caso que la informacion proporcionada sea la correcta")
    }

  

    function dataMercado () {
        alert ("Numero de cuenta: 515/65651565" + "\n" + "CBU: 1231546841321324367364" + "\n" + "Alias: coco.pepe.toto")
        alert ("realizado el pago, envie comprobante al email: " + miEmail)
    }

    function dataTransferencia (){
        alert ("Numero de cuenta: 656/655561" + "\n" + "CBU: 1654654654654644459741" + "\n" + "Alias: tino.casco.bebe")
        alert ("realizado el pago, envie comprobante al email: " + miEmail)
    }

   function loopMetodo () {
        while (!bandera) {
            const metodoDePago = prompt ("¿Con que medio quieres abonar la consulta? " + "\n" + "\n-" + MediosDePago.join ("\n- ")) .toLowerCase ()
            
            informacionPago (metodoDePago)
            
            if (metodoDePago === "tarjeta de debito" || metodoDePago === "tarjeta de credito" || metodoDePago === "mercado pago" || metodoDePago === "transferencia"){
                bandera = confirm ("¿Quieres confirmar el pago?")
                console.log ("ha confirmado la compra" + " " + bandera)}
            
            else {
                bandera = false
            }    
        }        
    }
   
    //funcion sobre datos de metodo de pago
    function informacionPago (metodoDePago) {
        if (metodoDePago === "mercado pago") {
            dataMercado ()  
        } 
        else if (metodoDePago === "tarjeta de debito") {
            dataDebito ()
        } 
        else if (metodoDePago === "tarjeta de credito") {
            dataCredito ()
        } 
        else if (metodoDePago === "transferencia"){
            dataTransferencia ()
        } 
        else {
            alert ("Elija un metodo de pago valido")
            
        }
        console.log (metodoDePago)
    }

    


    if (total >= 1) {
        alert ("Su consulta es por un total de $ " + total)
        console.log ("el total del valor de la/s consultas es de " + total)

        loopMetodo ()
        alert ('"MUCHAS GRACIAS POR CONFIAR EN NOSOTROS"')
    }

    
} 
else  {
    alert ("Disculpe, requiere la asistencia de un mayor para poder continuar");
}   

    
    


