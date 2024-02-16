`use strict`

class NivelLeccion {
    constructor(nombre) {
      this.nombre = nombre;
      this.lecciones = [];
    }
  
    agregarLeccion(leccion) {
      this.lecciones.push(leccion);
    }
  
    verLecciones() {
      alert(`Lecciones en el nivel ${this.nombre}:`);
      this.lecciones.forEach((leccion, index) => {
        alert(`${index + 1}. ${leccion.tema}`);
      });
    }
  }
  

  let nivelBasico = new NivelLeccion("Básico");
  
  nivelBasico.agregarLeccion(leccionSuma);
  nivelBasico.agregarLeccion(leccionResta);
  nivelBasico.verLecciones();
