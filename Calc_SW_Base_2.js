'use strict';
    
// Constantes

// Variables

var var_if_exists_html_1__Calc_SW_Base;

// Funciones

function OSTWALD_elements_html_2__Calc_SW_Base()
{    
  // Si No es el Navegador OSTWALD, Crear Elementos para HTML 2
  if (!if_browser_OSTWALD__index())
  {
    // Crear Elementos HTML: <body> 1

    const p_2__Calc_SW_Base = document.createElement('p');  document.body.appendChild(p_2__Calc_SW_Base);  p_2__Calc_SW_Base.id = "p_2__Calc_SW_Base";  p_2__Calc_SW_Base.class = "p__Calc_SW_Base p_block_2__Calc_SW_Base p_2__Calc_SW_Base";  p_2__Calc_SW_Base.textContent = "";

    const button_3__Calc_SW_Base = document.createElement('button');  document.body.appendChild(button_3__Calc_SW_Base);  button_3__Calc_SW_Base.id = "button_3__Calc_SW_Base";  button_3__Calc_SW_Base.class = "button__Calc_SW_Base button_3__Calc_SW_Base";  button_3__Calc_SW_Base.onclick = function() {location.reload(true);};  button_3__Calc_SW_Base.textContent = "Actualizar Página";
  }
}

function if_exists_html_1__Calc_SW_Base()
{
  // Comprobar si Existe HTML 1

  var_if_exists_html_1__Calc_SW_Base = true;

  // Si Existe, Crear Elementos para HTML 1
  if (var_if_exists_html_1__Calc_SW_Base)
  {
    // Crear Elementos HTML: <body> 2

    const p_1__Calc_SW_Base = document.createElement('p');  document.body.appendChild(p_1__Calc_SW_Base);  p_1__Calc_SW_Base.id = "p_1__Calc_SW_Base";  p_1__Calc_SW_Base.class = "p__Calc_SW_Base p_block_2__Calc_SW_Base p_1__Calc_SW_Base";  p_1__Calc_SW_Base.textContent = "";  
  
    const button_2__Calc_SW_Base = document.createElement('button');  document.body.appendChild(button_2__Calc_SW_Base);  button_2__Calc_SW_Base.id = "button_2__Calc_SW_Base";  button_2__Calc_SW_Base.class = "button__Calc_SW_Base button_2__Calc_SW_Base";  button_2__Calc_SW_Base.onclick = function() {save_html_2__Calc_SW_Base(); delete_html__index();  create_html_1__Calc_SW_Base();  load_html_1__Calc_SW_Base();};  button_2__Calc_SW_Base.textContent = "Ver Calculadora";
  }
}

function load_html_2__Calc_SW_Base()
{
  // Cargar Valores de Elementos Body 2
}

function save_html_2__Calc_SW_Base()
{
  // Guardar Valores de Elementos Body 2
}

function create_html_2_init__Calc_SW_Base()
{
  // Crear Elementos de inicio <html> 2
}

function create_html_2__Calc_SW_Base()
{
  // Crear Elementos HTML: <head> 1

  const title_1__Calc_SW_Base = document.createElement('title');  document.head.appendChild(title_1__Calc_SW_Base);  title_1__Calc_SW_Base.id = "title_1__Calc_SW_Base";  title_1__Calc_SW_Base.textContent = "Calculadora de Cambio de Base";

  // Crear Elementos HTML: <body> 2

  const button_1__Calc_SW_Base = document.createElement('button');  document.body.appendChild(button_1__Calc_SW_Base);  button_1__Calc_SW_Base.id = "button_1__Calc_SW_Base";  button_1__Calc_SW_Base.class = "button__Calc_SW_Base button_1__Calc_SW_Base";  button_1__Calc_SW_Base.onclick = function() {redirigir__index('OSTWALD', 'Escuela', 0)};  button_1__Calc_SW_Base.textContent = "Página Anterior";  

  ////////////////////////////////

  if_exists_html_1__Calc_SW_Base();

  ////////////////////////////////

  OSTWALD_elements_html_2__Calc_SW_Base();
}
