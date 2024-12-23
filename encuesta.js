let preguntas = [
  [
    "Que puesto de trabajo se ajusta a tu perfil?",
    "Cual es su edad?",
    "Cual es tu punto fuerte?",
    "Cual es su nivel de estudios?",
    "Experiencia similar al puesto que adoptas",
    "Cual es su disponibilidad horaria?",
    "Estamos trabajando en varias sedes, te gustaría ser un apasionado de este mundo y trabajar en todas ellas?",
    "Tiene alguna cuestión más que podamos resolver ahora?"]
  , [
    "Que significa para ti el trabajo?",
    "Hablame de una situacion en la que no actuaste de forma adecuada. Que has aprendido de ella?",
    "Cuales son tus puntos fuertes?"
  ]
  , [
    "Porque elegiste tus estudios?",
    "En que areas crees que necesitas reciclarte?",
    "Que cursos has hecho ultimamente?"
  ]
  , [
    "Cual ha sido la tarea mas aburrida que has tenido? como la realizaste?",
    "Como te actualizas a nivel profesional? Cuentame algo nuevo que hayas tenido que aprender recientemente",
    "Porque te marchaste de la empresa o porque te despidieron?",
    "Como conseguiste tu ultimo empleo?",
    "Por que se ha contentado a su edad con un salario tan bajo?"
  ]
  , [
    "Cuales crees que serian tus funciones si fueras contratado por nosotros?",
    "Si le seleccionamos para esa posicion, que acciones va a llevar a cabo durante la primera semana para mejorar?",
    "Cuales son tus pretensiones economicas?", "Por que quieres trabajar en esta empresa?",
    "Cual es tu principal fuente de motivacion? Que es lo que te motiva en un trabajo?",
    "Por que debo contratarle a usted?"
  ]
]

let respuestas = [[], [], [], [], []];


encuesta(preguntas, respuestas);

resultado(preguntas, respuestas);



function encuesta(preguntas, respuestas) {

  for (let contador = 0; contador < preguntas.length; contador++) {

    respuestas[contador] = [];

    for (let recorrido = 0; recorrido < preguntas[contador].length; recorrido++) {

      let respuesta = prompt(preguntas[contador][recorrido]);

      while (respuestas === null) {

        respuestas = prompt("Error, vuelva a responder a la pregunta: " + preguntas[contador][recorrido]);

      }

      respuestas[contador][recorrido] = respuesta;

    }

  }

}


function resultado(preguntas, respuestas) {

let ciclos=1;

  for (let contador = 0; contador < preguntas.length; contador++) {

    for (let recorrido = 0; recorrido < preguntas[contador].length; recorrido++) {

      document.write(ciclos + ". " + preguntas[contador][recorrido] + ": " + respuestas[contador][recorrido] + "<br>");

      ciclos++;

    }
    
  }

}
