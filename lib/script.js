// Add your code here
import { hola } from './hola.js';

document.querySelector('#mi-boton').addEventListener('click', function() {
    document.getElementById("txt").innerHTML = hola('Pablo');
  }); 


