// No cambies los nombres de las funciones.

const { stringify } = require("git-url-parse");

function crearUsuario() { class usuario{
  
  constructor (opciones)
  {this.usuario= opciones.usuario,
  this.nombre= opciones.nombre,
  this.email= opciones.email,
  this.password=opciones.password,
  this.saludar=function (){return "Hola, mi nombre es "+this.nombre}
  }}return usuario;
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
}

function agregarMetodoPrototype(Constructor) {Constructor.prototype.saludar=function(){return "Hello World!"}
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
}

function agregarStringInvertida() {String.prototype.reverse=function(){
  return this.split("").reverse().join("")
}
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
}

// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona {
    constructor(nombre,Apellido,Edad,Domicilio) {
      this.nombre=nombre;
      this.Apellido=Apellido;
      this.Edad=Edad;
      this.Domicilio=Domicilio;
      this.detalle=function (){return { 
        nombre: this.nombre,
        Apellido: this.Apellido,
        Edad: this.Edad,
        Domicilio: this.Domicilio
    


      } }
     

   }
}

function crearInstanciaPersona(nombre, apellido, edad, dir) {var nuevaperso=new Persona(nombre,apellido,edad,dir); return nuevaperso
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
}
  
function agregarMetodo() {Persona.prototype.datos=function (){return this.nombre+", "+this.Edad+" años"}
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
}
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
