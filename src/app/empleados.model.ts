export class Empleado {
  constructor(
    nombre: string,
    apellido: string,
    cargo: string,
    salario: number
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.cargo = cargo;
    this.salario = salario;
  }
  nombre: string = '';
  apellido: string = '';
  cargo: string = '';
  salario: number = 0;
}
/**
 * esto de aca arriba, es la clase de un objeto, se usa para hacer interfaces, que es, basicamente
 * crear un :sting(o similar), ya lo hicimos cientos de veces en python, pero no mucho en js ni ts
 * asi que, no es nada nuevo, pero miralo bien, hasta que te acuerdes, es una pabada
 */
