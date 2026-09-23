import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  imports: [CommonModule],
  templateUrl: './labs.html',
  styleUrl: './labs.scss',
})

export class Labs {
  name = "Alejandra";
  edad = "23";
  email = "maria.montilladiaz@campusucc.edu.co";
  num1 = 20;
  num2 = 27;
  img1 = "https://i.pinimg.com/736x/5d/d9/a5/5dd9a511419edabcba915ec06772d85a.jpg"
  img2 = "https://i.pinimg.com/736x/80/81/c8/8081c8eb9daf1f3291eb2e2491b29236.jpg"
  
  person={
    name: "Alejandra Montilla",
    age: 23,
    email: "maria.montilladiaz@campusucc.edu.co"
  };

  colores = [
    {
      name: "Rojo",
      color: "red",
    }
  ];

  mascota = signal('Perrito');

   users = [
    {
      name: 'Juan Perez',
      email: 'juan.perez@correo.com',
      position: 'Administrador',
      isActive: true,
      image: 'https://placehold.co/100x100',
    },
    {
      name: 'Maria Gomez',
      email: 'maria.gomez@correo.com',
      position: 'Desarrollador Frontend',
      isActive: true,
      image: 'https://placehold.co/100x100',
    },
    {
      name: 'Carlos Ruiz',
      email: 'carlos.ruiz@correo.com',
      position: 'Desarrollador Backend',
      isActive: false,
      image: 'https://placehold.co/100x100',
    },
    {
      name: 'Ana Torres',
      email: 'ana.torres@correo.com',
      position: 'Diseñador UI/UX',
      isActive: true,
      image: 'https://placehold.co/100x100',
    },
    {
      name: 'Luis Martinez',
      email: 'luis.martinez@correo.com',
      position: 'Analista de Datos',
      isActive: false,
      image: 'https://placehold.co/100x100',
    },
    {
      name: 'Sofia Ramirez',
      email: 'sofia.ramirez@correo.com',
      position: 'Gerente de Proyectos',
      isActive: true,
      image: 'https://placehold.co/100x100',
    },
    {
      name: 'Jorge Herrera',
      email: 'jorge.herrera@correo.com',
      position: 'Especialista en Marketing',
      isActive: true,
      image: 'https://placehold.co/100x100',
    },
    {
      name: 'Lucia Castro',
      email: 'lucia.castro@correo.com',
      position: 'Soporte Técnico',
      isActive: false,
      image: 'https://placehold.co/100x100',
    },
    {
      name: 'Miguel Vargas',
      email: 'miguel.vargas@correo.com',
      position: 'Control de Calidad (QA)',
      isActive: true,
      image: 'https://placehold.co/100x100',
    },
    {
      name: 'Elena Morales',
      email: 'elena.morales@correo.com',
      position: 'Recursos Humanos',
      isActive: true,
      image: 'https://placehold.co/100x100',
    },
    {
      name: 'David Silva',
      email: 'david.silva@correo.com',
      position: 'DevOps Engineer',
      isActive: false,
      image: 'https://placehold.co/100x100',
    },
  ];


  onClick() {
    alert('¡Hola! Has hecho clic en el botón.');
  }

  Suma() {
    alert(this.num1 + this.num2);
  }
  nombreCampo = "Ciudad";
  placeholderCampo = "Ingrese su ciudad de nacimiento";

  recibirValor(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    console.log(value);
  }

  onInputRecibirValor(event: Event) {
    console.log((event.target as HTMLInputElement).value);

    if ((event.target as HTMLInputElement).value === 'String') {
      alert("la palabra String no es permitida");
    }
  }


}