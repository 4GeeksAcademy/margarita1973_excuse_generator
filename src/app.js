/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function generadorExcusas() {
    let quien = [
      "El perro",
      "Mi abuela",
      "El cartero",
      "Mi conejo",
      "El vecino",
    ];
    let accion = ["se robó", "rompió", "chocó", "quebró", "se llevó"];
    let que = [
      "mi tarea",
      "el teléfono",
      "el auto",
      "mi abrigo",
      "mi computadora",
    ];
    let cuando = [
      "antes de la clase",
      "cuando estaba durmiendo",
      "mientras hacia ejercicio",
      "durante el almuerzo",
      "cuando me estaba bañando",
    ];
    let positionQuien = Math.floor(Math.random() * quien.length);
    let positionAccion = Math.floor(Math.random() * accion.length);
    let positionQue = Math.floor(Math.random() * que.length);
    let positionCuando = Math.floor(Math.random() * cuando.length);

    return (
      quien[positionQuien] +
      " " +
      accion[positionAccion] +
      " " +
      que[positionQue] +
      " " +
      cuando[positionCuando]
    );
  }
  let paragraph = document.getElementById("excuse");
  paragraph.innerText = generadorExcusas();
};
