'use strict';
    
// Constantes

// Variables

var var_input_1__Calc_SW_Base = "";
var var_input_2__Calc_SW_Base = "";

var var_select_1__Calc_SW_Base;
var var_select_2__Calc_SW_Base;
var var_select_3__Calc_SW_Base;

var var_label_7__Calc_SW_Base = "";

var var_if_exists_html_2__Calc_SW_Base;

// Funciones

function OSTWALD_elements_html_1__Calc_SW_Base()
{
  // Si No es el Navegador OSTWALD, Crear Elementos para HTML 2
  if (!if_browser_OSTWALD__index())
  {
    // Crear Elementos HTML: <body> 1

    const p_10__Calc_SW_Base = document.createElement('p');  document.body.appendChild(p_10__Calc_SW_Base);  p_10__Calc_SW_Base.id = "p_10__Calc_SW_Base";  p_10__Calc_SW_Base.class = "p__Calc_SW_Base p_block_2__Calc_SW_Base p_10__Calc_SW_Base";  p_10__Calc_SW_Base.textContent = "";

    const button_5__Calc_SW_Base = document.createElement('button');  document.body.appendChild(button_5__Calc_SW_Base);  button_5__Calc_SW_Base.id = "button_5__Calc_SW_Base";  button_5__Calc_SW_Base.class = "button__Calc_SW_Base button_5__Calc_SW_Base";  button_5__Calc_SW_Base.onclick = function() {location.reload(true);};  button_5__Calc_SW_Base.textContent = "Actualizar Página";
  }
}

function if_exists_html_2__Calc_SW_Base()
{
  // Comprobar si Existe HTML 2

  var_if_exists_html_2__Calc_SW_Base = true;

  // Si Existe, Crear Elementos para HTML 2
  if (var_if_exists_html_2__Calc_SW_Base)
  {
    // Crear Elementos HTML: <body> 1

    const p_9__Calc_SW_Base = document.createElement('p');  document.body.appendChild(p_9__Calc_SW_Base);  p_9__Calc_SW_Base.id = "p_9__Calc_SW_Base";  p_9__Calc_SW_Base.class = "p__Calc_SW_Base p_block_2__Calc_SW_Base p_9__Calc_SW_Base";  p_9__Calc_SW_Base.textContent = "";

    const button_4__Calc_SW_Base = document.createElement('button');  document.body.appendChild(button_4__Calc_SW_Base);  button_4__Calc_SW_Base.id = "button_4__Calc_SW_Base";  button_4__Calc_SW_Base.class = "button__Calc_SW_Base button_4__Calc_SW_Base";  button_4__Calc_SW_Base.onclick = function() {save_html_1__Calc_SW_Base(); delete_html__index();  create_html_2__Calc_SW_Base();  load_html_2__Calc_SW_Base();};  button_4__Calc_SW_Base.textContent = "Ver Código";
  }
}

function load_html_1__Calc_SW_Base()
{
  // Cargar Valores de Elementos Body 1

  input_1__Calc_SW_Base.value = var_input_1__Calc_SW_Base;
  input_2__Calc_SW_Base.value = var_input_2__Calc_SW_Base;

  select_1__Calc_SW_Base.value = var_select_1__Calc_SW_Base;
  select_2__Calc_SW_Base.value = var_select_2__Calc_SW_Base;
  select_3__Calc_SW_Base.value = var_select_3__Calc_SW_Base;

  label_7__Calc_SW_Base.textContent = var_label_7__Calc_SW_Base;
}

function save_html_1__Calc_SW_Base()
{
  // Guardar Valores de Elementos Body 1
  var_input_1__Calc_SW_Base = input_1__Calc_SW_Base.value;
  var_input_2__Calc_SW_Base = input_2__Calc_SW_Base.value;

  var_select_1__Calc_SW_Base = select_1__Calc_SW_Base.value;
  var_select_2__Calc_SW_Base = select_2__Calc_SW_Base.value;
  var_select_3__Calc_SW_Base = select_3__Calc_SW_Base.value;

  var_label_7__Calc_SW_Base = label_7__Calc_SW_Base.textContent;
}

function create_html_1_init__Calc_SW_Base()
{
  // Crear Elementos de inicio <html> 1
  var_input_1__Calc_SW_Base = "";
  var_input_2__Calc_SW_Base = "";

  option_3__Calc_SW_Base.selected = true;  var_select_1__Calc_SW_Base = select_1__Calc_SW_Base.value;
  option_9__Calc_SW_Base.selected = true;  var_select_2__Calc_SW_Base = select_2__Calc_SW_Base.value;
  option_11__Calc_SW_Base.selected = true;  var_select_3__Calc_SW_Base = select_3__Calc_SW_Base.value;

  var_label_7__Calc_SW_Base = "";
}

function create_html_1__Calc_SW_Base()
{
  // Crear Elementos HTML: <head> 1

  const title_1__Calc_SW_Base = document.createElement('title');  document.head.appendChild(title_1__Calc_SW_Base);  title_1__Calc_SW_Base.id = "title_1__Calc_SW_Base";  title_1__Calc_SW_Base.textContent = "Calculadora de Cambio de Base";

  // Crear Elementos HTML: <body> 1

  const button_1__Calc_SW_Base = document.createElement('button');  document.body.appendChild(button_1__Calc_SW_Base);  button_1__Calc_SW_Base.id = "button_1__Calc_SW_Base";  button_1__Calc_SW_Base.class = "button__Calc_SW_Base button_1__Calc_SW_Base";  button_1__Calc_SW_Base.onclick = function() {redirigir__index('OSTWALD', 'Escuela', 0)};  button_1__Calc_SW_Base.textContent = "Página Anterior";  

  const p_1__Calc_SW_Base = document.createElement('p');  document.body.appendChild(p_1__Calc_SW_Base);  p_1__Calc_SW_Base.id = "p_1__Calc_SW_Base";  p_1__Calc_SW_Base.class = "p__Calc_SW_Base p_block_2__Calc_SW_Base p_1__Calc_SW_Base";  p_1__Calc_SW_Base.textContent = "";  

  const div_1__Calc_SW_Base = document.createElement('div');  document.body.appendChild(div_1__Calc_SW_Base);  div_1__Calc_SW_Base.id = "div_1__Calc_SW_Base";  div_1__Calc_SW_Base.class = "div__Calc_SW_Base div_1__Calc_SW_Base";  div_1__Calc_SW_Base.textContent = "";
    const h1_1__Calc_SW_Base = document.createElement('h1');  div_1__Calc_SW_Base.appendChild(h1_1__Calc_SW_Base);  h1_1__Calc_SW_Base.id = "h1_1__Calc_SW_Base";  div_1__Calc_SW_Base.class = "h1__Calc_SW_Base h1_1__Calc_SW_Base";  h1_1__Calc_SW_Base.textContent = title_1__Calc_SW_Base.textContent;

    const div_2__Calc_SW_Base = document.createElement('div');  div_1__Calc_SW_Base.appendChild(div_2__Calc_SW_Base);  div_2__Calc_SW_Base.id = "div_2__Calc_SW_Base";  div_2__Calc_SW_Base.class = "div__Calc_SW_Base block_1__Calc_SW_Base div_2__Calc_SW_Base";  div_2__Calc_SW_Base.textContent = "";
      const label_1__Calc_SW_Base = document.createElement('label');  div_2__Calc_SW_Base.appendChild(label_1__Calc_SW_Base);  label_1__Calc_SW_Base.id = "label_1__Calc_SW_Base";  label_1__Calc_SW_Base.class = "label__Calc_SW_Base block_1__Calc_SW_Base label_1__Calc_SW_Base";  label_1__Calc_SW_Base.for = "input_1__Calc_SW_Base";  label_1__Calc_SW_Base.textContent = "Número 1: ";
      const input_1__Calc_SW_Base = document.createElement('input');  div_2__Calc_SW_Base.appendChild(input_1__Calc_SW_Base);  input_1__Calc_SW_Base.id = "input_1__Calc_SW_Base";  input_1__Calc_SW_Base.class = "input__Calc_SW_Base block_1__Calc_SW_Base input_1__Calc_SW_Base";  input_1__Calc_SW_Base.type = "text";  input_1__Calc_SW_Base.placeholder = "Número 1";  input_1__Calc_SW_Base.value = var_input_1__Calc_SW_Base;

    const p_2__Calc_SW_Base = document.createElement('p');  div_1__Calc_SW_Base.appendChild(p_2__Calc_SW_Base);  p_2__Calc_SW_Base.id = "p_2__Calc_SW_Base";  p_2__Calc_SW_Base.class = "p__Calc_SW_Base p_block_1__Calc_SW_Base p_2__Calc_SW_Base";  p_2__Calc_SW_Base.textContent = "";  

    const div_3__Calc_SW_Base = document.createElement('div');  div_1__Calc_SW_Base.appendChild(div_3__Calc_SW_Base);  div_3__Calc_SW_Base.id = "div_3__Calc_SW_Base";  div_3__Calc_SW_Base.class = "div__Calc_SW_Base block_2__Calc_SW_Base div_3__Calc_SW_Base";  div_3__Calc_SW_Base.textContent = "";
      const label_2__Calc_SW_Base = document.createElement('label');  div_3__Calc_SW_Base.appendChild(label_2__Calc_SW_Base);  label_2__Calc_SW_Base.id = "label_2__Calc_SW_Base";  label_2__Calc_SW_Base.class = "label__Calc_SW_Base block_2__Calc_SW_Base label_2__Calc_SW_Base";  label_2__Calc_SW_Base.for = "input_2__Calc_SW_Base";  label_2__Calc_SW_Base.textContent = "Número 2: ";
      const input_2__Calc_SW_Base = document.createElement('input');  div_3__Calc_SW_Base.appendChild(input_2__Calc_SW_Base);  input_2__Calc_SW_Base.id = "input_2__Calc_SW_Base";  input_2__Calc_SW_Base.class = "input__Calc_SW_Base block_2__Calc_SW_Base input_2__Calc_SW_Base";  input_2__Calc_SW_Base.type = "text";  input_2__Calc_SW_Base.placeholder = "Número 2";  input_2__Calc_SW_Base.value = var_input_2__Calc_SW_Base;

    const p_3__Calc_SW_Base = document.createElement('p');  div_1__Calc_SW_Base.appendChild(p_3__Calc_SW_Base);  p_3__Calc_SW_Base.id = "p_3__Calc_SW_Base";  p_3__Calc_SW_Base.class = "p__Calc_SW_Base p_block_2__Calc_SW_Base p_3__Calc_SW_Base";  p_3__Calc_SW_Base.textContent = "";

    const div_4__Calc_SW_Base = document.createElement('div');  div_1__Calc_SW_Base.appendChild(div_4__Calc_SW_Base);  div_4__Calc_SW_Base.id = "div_4__Calc_SW_Base";  div_4__Calc_SW_Base.class = "div__Calc_SW_Base block_3__Calc_SW_Base div_4__Calc_SW_Base";  div_4__Calc_SW_Base.textContent = "";
      const label_3__Calc_SW_Base = document.createElement('label');  div_4__Calc_SW_Base.appendChild(label_3__Calc_SW_Base);  label_3__Calc_SW_Base.id = "label_3__Calc_SW_Base";  label_3__Calc_SW_Base.class = "label__Calc_SW_Base block_3__Calc_SW_Base label_3__Calc_SW_Base";  label_3__Calc_SW_Base.for = "select_1__Calc_SW_Base";  label_3__Calc_SW_Base.textContent = "Desde Base: ";
      const select_1__Calc_SW_Base = document.createElement('select');  div_4__Calc_SW_Base.appendChild(select_1__Calc_SW_Base);  select_1__Calc_SW_Base.id = "select_1__Calc_SW_Base";  select_1__Calc_SW_Base.class = "select__Calc_SW_Base block_3__Calc_SW_Base select_1__Calc_SW_Base";
        const option_1__Calc_SW_Base = document.createElement('option');  select_1__Calc_SW_Base.appendChild(option_1__Calc_SW_Base);  option_1__Calc_SW_Base.id = "option_1__Calc_SW_Base";  option_1__Calc_SW_Base.class = "option__Calc_SW_Base block_3__Calc_SW_Base option_1__Calc_SW_Base";  option_1__Calc_SW_Base.value = "2";  option_1__Calc_SW_Base.textContent = "Binario";
        const option_2__Calc_SW_Base = document.createElement('option');  select_1__Calc_SW_Base.appendChild(option_2__Calc_SW_Base);  option_2__Calc_SW_Base.id = "option_2__Calc_SW_Base";  option_2__Calc_SW_Base.class = "option__Calc_SW_Base block_3__Calc_SW_Base option_2__Calc_SW_Base";  option_2__Calc_SW_Base.value = "8";  option_2__Calc_SW_Base.textContent = "Octal";
        const option_3__Calc_SW_Base = document.createElement('option');  select_1__Calc_SW_Base.appendChild(option_3__Calc_SW_Base);  option_3__Calc_SW_Base.id = "option_3__Calc_SW_Base";  option_3__Calc_SW_Base.class = "option__Calc_SW_Base block_3__Calc_SW_Base option_3__Calc_SW_Base";  option_3__Calc_SW_Base.value = "10";  option_3__Calc_SW_Base.textContent = "Decimal";
        const option_4__Calc_SW_Base = document.createElement('option');  select_1__Calc_SW_Base.appendChild(option_4__Calc_SW_Base);  option_4__Calc_SW_Base.id = "option_4__Calc_SW_Base";  option_4__Calc_SW_Base.class = "option__Calc_SW_Base block_3__Calc_SW_Base option_4__Calc_SW_Base";  option_4__Calc_SW_Base.value = "16";  option_4__Calc_SW_Base.textContent = "Hexadecimal";
        const option_5__Calc_SW_Base = document.createElement('option');  select_1__Calc_SW_Base.appendChild(option_5__Calc_SW_Base);  option_5__Calc_SW_Base.id = "option_5__Calc_SW_Base";  option_5__Calc_SW_Base.class = "option__Calc_SW_Base block_3__Calc_SW_Base option_5__Calc_SW_Base";  option_5__Calc_SW_Base.value = "5";  option_5__Calc_SW_Base.textContent = "Quinario";

    const p_4__Calc_SW_Base = document.createElement('p');  div_1__Calc_SW_Base.appendChild(p_4__Calc_SW_Base);  p_4__Calc_SW_Base.id = "p_4__Calc_SW_Base";  p_4__Calc_SW_Base.class = "p__Calc_SW_Base p_block_1__Calc_SW_Base p_4__Calc_SW_Base";  p_4__Calc_SW_Base.textContent = "";

    const div_5__Calc_SW_Base = document.createElement('div');  div_1__Calc_SW_Base.appendChild(div_5__Calc_SW_Base);  div_5__Calc_SW_Base.id = "div_5__Calc_SW_Base";  div_5__Calc_SW_Base.class = "div__Calc_SW_Base block_4__Calc_SW_Base div_5__Calc_SW_Base";  div_5__Calc_SW_Base.textContent = "";
      const label_4__Calc_SW_Base = document.createElement('label');  div_5__Calc_SW_Base.appendChild(label_4__Calc_SW_Base);  label_4__Calc_SW_Base.id = "label_4__Calc_SW_Base";  label_4__Calc_SW_Base.class = "label__Calc_SW_Base block_4__Calc_SW_Base label_4__Calc_SW_Base";  label_4__Calc_SW_Base.for = "select_2__Calc_SW_Base";  label_4__Calc_SW_Base.textContent = "A Base: ";
      const select_2__Calc_SW_Base = document.createElement('select');  div_5__Calc_SW_Base.appendChild(select_2__Calc_SW_Base);  select_2__Calc_SW_Base.id = "select_2__Calc_SW_Base";  select_2__Calc_SW_Base.class = "select__Calc_SW_Base block_4__Calc_SW_Base select_2__Calc_SW_Base";
        const option_6__Calc_SW_Base = document.createElement('option');  select_2__Calc_SW_Base.appendChild(option_6__Calc_SW_Base);  option_6__Calc_SW_Base.id = "option_6__Calc_SW_Base";  option_6__Calc_SW_Base.class = "option__Calc_SW_Base block_4__Calc_SW_Base option_6";  option_6__Calc_SW_Base.value = "2";  option_6__Calc_SW_Base.textContent = "Binario";
        const option_7__Calc_SW_Base = document.createElement('option');  select_2__Calc_SW_Base.appendChild(option_7__Calc_SW_Base);  option_7__Calc_SW_Base.id = "option_7__Calc_SW_Base";  option_7__Calc_SW_Base.class = "option__Calc_SW_Base block_4__Calc_SW_Base option_7";  option_7__Calc_SW_Base.value = "8";  option_7__Calc_SW_Base.textContent = "Octal";
        const option_8__Calc_SW_Base = document.createElement('option');  select_2__Calc_SW_Base.appendChild(option_8__Calc_SW_Base);  option_8__Calc_SW_Base.id = "option_8__Calc_SW_Base";  option_8__Calc_SW_Base.class = "option__Calc_SW_Base block_4__Calc_SW_Base option_8";  option_8__Calc_SW_Base.value = "10";  option_8__Calc_SW_Base.textContent = "Decimal";
        const option_9__Calc_SW_Base = document.createElement('option');  select_2__Calc_SW_Base.appendChild(option_9__Calc_SW_Base);  option_9__Calc_SW_Base.id = "option_9__Calc_SW_Base";  option_9__Calc_SW_Base.class = "option__Calc_SW_Base block_4__Calc_SW_Base option_9";  option_9__Calc_SW_Base.value = "16";  option_9__Calc_SW_Base.textContent = "Hexadecimal";
        const option_10__Calc_SW_Base = document.createElement('option');  select_2__Calc_SW_Base.appendChild(option_10__Calc_SW_Base);  option_10__Calc_SW_Base.id = "option_10__Calc_SW_Base";  option_10__Calc_SW_Base.class = "option__Calc_SW_Base block_4__Calc_SW_Base option_10";  option_10__Calc_SW_Base.value = "5";  option_10__Calc_SW_Base.textContent = "Quinario";

    const p_5__Calc_SW_Base = document.createElement('p');  div_1__Calc_SW_Base.appendChild(p_5__Calc_SW_Base);  p_5__Calc_SW_Base.id = "p_5__Calc_SW_Base";  p_5__Calc_SW_Base.class = "p__Calc_SW_Base p_block_1__Calc_SW_Base p_5__Calc_SW_Base";  p_5__Calc_SW_Base.textContent = "";

    const div_6__Calc_SW_Base = document.createElement('div');  div_1__Calc_SW_Base.appendChild(div_6__Calc_SW_Base);  div_6__Calc_SW_Base.id = "div_6__Calc_SW_Base";  div_6__Calc_SW_Base.class = "div__Calc_SW_Base block_5__Calc_SW_Base div_6__Calc_SW_Base";  div_6__Calc_SW_Base.textContent = "";
      const label_5__Calc_SW_Base = document.createElement('label');  div_6__Calc_SW_Base.appendChild(label_5__Calc_SW_Base);  label_5__Calc_SW_Base.id = "label_5__Calc_SW_Base";  label_5__Calc_SW_Base.class = "label__Calc_SW_Base block_5__Calc_SW_Base label_5__Calc_SW_Base";  label_5__Calc_SW_Base.for = "select_3__Calc_SW_Base";  label_5__Calc_SW_Base.textContent = "Operación: ";
      const select_3__Calc_SW_Base = document.createElement('select');  div_6__Calc_SW_Base.appendChild(select_3__Calc_SW_Base);  select_3__Calc_SW_Base.id = "select_3__Calc_SW_Base";  select_3__Calc_SW_Base.class = "select__Calc_SW_Base block_5__Calc_SW_Base select_3__Calc_SW_Base";
        const option_11__Calc_SW_Base = document.createElement('option');  select_3__Calc_SW_Base.appendChild(option_11__Calc_SW_Base);  option_11__Calc_SW_Base.id = "option_11__Calc_SW_Base";  option_11__Calc_SW_Base.class = "option__Calc_SW_Base block_5__Calc_SW_Base option_11__Calc_SW_Base";  option_11__Calc_SW_Base.value = "add";  option_11__Calc_SW_Base.textContent = "Sumar (+)";
        const option_12__Calc_SW_Base = document.createElement('option');  select_3__Calc_SW_Base.appendChild(option_12__Calc_SW_Base);  option_12__Calc_SW_Base.id = "option_12__Calc_SW_Base";  option_12__Calc_SW_Base.class = "option__Calc_SW_Base block_5__Calc_SW_Base option_12__Calc_SW_Base";  option_12__Calc_SW_Base.value = "subtract";  option_12__Calc_SW_Base.textContent = "Restar (-)";
        const option_13__Calc_SW_Base = document.createElement('option');  select_3__Calc_SW_Base.appendChild(option_13__Calc_SW_Base);  option_13__Calc_SW_Base.id = "option_13__Calc_SW_Base";  option_13__Calc_SW_Base.class = "option__Calc_SW_Base block_5__Calc_SW_Base option_13__Calc_SW_Base";  option_13__Calc_SW_Base.value = "multiply";  option_13__Calc_SW_Base.textContent = "Multiplicar (*)";
        const option_14__Calc_SW_Base = document.createElement('option');  select_3__Calc_SW_Base.appendChild(option_14__Calc_SW_Base);  option_14__Calc_SW_Base.id = "option_14__Calc_SW_Base";  option_14__Calc_SW_Base.class = "option__Calc_SW_Base block_5__Calc_SW_Base option_14__Calc_SW_Base";  option_14__Calc_SW_Base.value = "divide";  option_14__Calc_SW_Base.textContent = "Dividir (/)";

    const p_6__Calc_SW_Base = document.createElement('p');  div_1__Calc_SW_Base.appendChild(p_6__Calc_SW_Base);  p_6__Calc_SW_Base.id = "p_6__Calc_SW_Base";  p_6__Calc_SW_Base.class = "p__Calc_SW_Base p_block_2__Calc_SW_Base p_6__Calc_SW_Base";  p_6__Calc_SW_Base.textContent = "";

    const div_7__Calc_SW_Base = document.createElement('div');  div_1__Calc_SW_Base.appendChild(div_7__Calc_SW_Base);  div_7__Calc_SW_Base.id = "div_7__Calc_SW_Base";  div_7__Calc_SW_Base.class = "div__Calc_SW_Base block_6__Calc_SW_Base div_7__Calc_SW_Base";  div_7__Calc_SW_Base.textContent = "";
      const label_6__Calc_SW_Base = document.createElement('label');  div_7__Calc_SW_Base.appendChild(label_6__Calc_SW_Base);  label_6__Calc_SW_Base.id = "label_6__Calc_SW_Base";  label_6__Calc_SW_Base.class = "label__Calc_SW_Base block_6__Calc_SW_Base label_6__Calc_SW_Base";  label_6__Calc_SW_Base.for = "label_7__Calc_SW_Base";  label_6__Calc_SW_Base.textContent = "Resultado: ";
      const label_7__Calc_SW_Base = document.createElement('label');  div_7__Calc_SW_Base.appendChild(label_7__Calc_SW_Base);  label_7__Calc_SW_Base.id = "label_7__Calc_SW_Base";  label_7__Calc_SW_Base.class = "label__Calc_SW_Base block_6__Calc_SW_Base label_7__Calc_SW_Base";  label_7__Calc_SW_Base.for = "label_6__Calc_SW_Base";  label_7__Calc_SW_Base.textContent = var_label_7__Calc_SW_Base;
      
    const p_7__Calc_SW_Base = document.createElement('p');  div_1__Calc_SW_Base.appendChild(p_7__Calc_SW_Base);  p_7__Calc_SW_Base.id = "p_7__Calc_SW_Base";  p_7__Calc_SW_Base.class = "p p_block_2 p_7";  p_7__Calc_SW_Base.textContent = "";

    const button_2__Calc_SW_Base = document.createElement('button');  div_1__Calc_SW_Base.appendChild(button_2__Calc_SW_Base);  button_2__Calc_SW_Base.id = "button_2__Calc_SW_Base";  button_2__Calc_SW_Base.class = "button__Calc_SW_Base button_2__Calc_SW_Base";  button_2__Calc_SW_Base.onclick = function() {performOperation__Calc_SW_Base()};  button_2__Calc_SW_Base.textContent = "Calcular";

    const p_8__Calc_SW_Base = document.createElement('p');  document.body.appendChild(p_8__Calc_SW_Base);  p_8__Calc_SW_Base.id = "p_8__Calc_SW_Base";  p_8__Calc_SW_Base.class = "p__Calc_SW_Base p_block_2__Calc_SW_Base p_8__Calc_SW_Base";  p_8__Calc_SW_Base.textContent = "";

    const button_3__Calc_SW_Base = document.createElement('button');  document.body.appendChild(button_3__Calc_SW_Base);  button_3__Calc_SW_Base.id = "button_3__Calc_SW_Base";  button_3__Calc_SW_Base.class = "button__Calc_SW_Base button_3__Calc_SW_Base";  button_3__Calc_SW_Base.onclick = function() {delete_html__index();  create_html_1__Calc_SW_Base();  create_html_1_init__Calc_SW_Base();};  button_3__Calc_SW_Base.textContent = "Restablecer";

    ////////////////////////////////

    if_exists_html_2__Calc_SW_Base();

    ////////////////////////////////

    OSTWALD_elements_html_1__Calc_SW_Base();
}

////////////////////////////////

function convertBase__Calc_SW_Base(number__Calc_SW_Base, fromBase__Calc_SW_Base, toBase__Calc_SW_Base) {
  const decimalNumber__Calc_SW_Base = parseInt(number__Calc_SW_Base, fromBase__Calc_SW_Base);
  return decimalNumber__Calc_SW_Base.toString(toBase__Calc_SW_Base);
}

function isValidNumber__Calc_SW_Base(input__Calc_SW_Base, base__Calc_SW_Base) {
  // Si la base es 16 (hexadecimal), permite los dígitos de 0-9 y las letras A-F (mayúsculas o minúsculas).
  if (base__Calc_SW_Base === 16) {
    const validChars__Calc_SW_Base = /^[0-9A-Fa-f]+$/;
    return validChars__Calc_SW_Base.test(input__Calc_SW_Base);
  } else {
    // Para otras bases, solo permite los dígitos válidos en esa base.
    const validChars__Calc_SW_Base = new RegExp(`^[0-${base__Calc_SW_Base - 1}]+$`);
    return validChars__Calc_SW_Base.test(input__Calc_SW_Base);
  }
}

function performOperation__Calc_SW_Base() {
  const number1__Calc_SW_Base = document.getElementById("input_1__Calc_SW_Base").value;
  const number2__Calc_SW_Base = document.getElementById("input_2__Calc_SW_Base").value;
  const fromBase__Calc_SW_Base = parseInt(document.getElementById("select_1__Calc_SW_Base").value, 10);
  const toBase__Calc_SW_Base = parseInt(document.getElementById("select_2__Calc_SW_Base").value, 10);
  const operation__Calc_SW_Base = document.getElementById("select_3__Calc_SW_Base").value;

  if (!isValidNumber__Calc_SW_Base(number1__Calc_SW_Base, fromBase__Calc_SW_Base) && !isValidNumber__Calc_SW_Base(number2__Calc_SW_Base, fromBase__Calc_SW_Base)) {
    alert("Ambos números no son válidos en la base de origen.");
    return;
  } else
  if (!isValidNumber__Calc_SW_Base(number1__Calc_SW_Base, fromBase__Calc_SW_Base)) {
    alert("El número 1 no es válido en la base de origen.");
    return;
  } else
  if (!isValidNumber__Calc_SW_Base(number2__Calc_SW_Base, fromBase__Calc_SW_Base)) {
    alert("El número 2 no es válido en la base de origen.");
    return;
  }

  const decimalNumber1__Calc_SW_Base = parseInt(number1__Calc_SW_Base, fromBase__Calc_SW_Base);
  const decimalNumber2__Calc_SW_Base = parseInt(number2__Calc_SW_Base, fromBase__Calc_SW_Base);
  let result__Calc_SW_Base;

  switch (operation__Calc_SW_Base) {
    case "add":
      result__Calc_SW_Base = decimalNumber1__Calc_SW_Base + decimalNumber2__Calc_SW_Base;
    break;
    case "subtract":
      result__Calc_SW_Base = decimalNumber1__Calc_SW_Base - decimalNumber2__Calc_SW_Base;
    break;
    case "multiply":
      result__Calc_SW_Base = decimalNumber1__Calc_SW_Base * decimalNumber2__Calc_SW_Base;
    break;
    case "divide":
      if (decimalNumber2__Calc_SW_Base === 0) {
        alert("No se puede dividir por cero.");
        return;
      }
      result__Calc_SW_Base = decimalNumber1__Calc_SW_Base / decimalNumber2__Calc_SW_Base;
    break;
    default:
      alert("Operación no válida.");
      return;
    break;
  }

  document.getElementById("label_7__Calc_SW_Base").textContent = convertBase__Calc_SW_Base(result__Calc_SW_Base, 10, toBase__Calc_SW_Base);
}
