// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Noticias</h1>`;

/* 
  Define la interfaz Noticia, con los atributos title (string) y description (string) 
*/



/*
  Asigne la interfaz Noticias a la constante noticias
*/

export const noticias: unknown[] = [
    {
        title: 'La ‘transformación’ agresiva de Ecuador, al regresar del descanso, se confirmó con el gol de Ángel Mena y la clasificación en la Copa América, destacan diarios de Brasil',
        description: 'Para el segundo tiempo, la Tri salió con todo a buscar el gol que le diera la clasificación a cuartos. Los ecuatorianos lo lograron en el minuto 52, con una conquista de Ángel Mena (c).'
    },
    {
        title: 'Perros son entrenados para detectar el COVID-19 con el olfato en Quito',
        description: 'Gracias al acertado olfato de los perros, se estima que la estrategia permitirá la identificación de portadores del COVID-19 más rápido que los tests.'
    }
];

/*
  Asigne la interfaz Noticias al parámetro noticia
*/

export function showNew(noticia: unknown) {
  let plantilla = `
    <p class="noticia">
      <h2 class="title">${noticia.title}</h2>
      <p class="description">${noticia.description}</p>
    </p>
  `
  document.getElementById('noticias').innerHTML += plantilla;
}

noticias.forEach(showNew);