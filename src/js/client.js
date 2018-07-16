const state = {
  pointsc1: ['', '', ''],
  pointsc2: ['', '', ''],
  pointsc3: ['', '', ''],
  currentTurn: 0,
};

const render = lState => {
  //tres divs en que dividimos el desde el root
  const title = document.createElement('div');
  title.className = 'title';
  title.innerText = 'Totito';

  const holder = document.createElement('div');
  holder.className = 'holder';
  
  const turn = document.createElement('div');
  turn.className = 'turn';
  turn.innerText = 'Turno de: ';

  //icono de turno
  const icon = document.createElement('div');

  const col1 = document.createElement('div');
  col1.className = 'columna';

  const col2 = document.createElement('div');
  col2.className = 'columna';

  const col3 = document.createElement('div');
  col3.className = 'columna';

  //boton de reset
  const resetbtn = document.createElement('button');
  resetbtn.className = 'reset';
  resetbtn.innerText = 'RESET';

  //limpiar el rendering anterior
  if (root.hasChildNodes()) {
    root.innerHTML = null;
  }

  //main rendering
  root.appendChild(title);
  root.appendChild(holder);
  root.appendChild(turn);
  root.appendChild(resetbtn);

  holder.appendChild(col1);
  holder.appendChild(col2);
  holder.appendChild(col3);
  
  //agregar los botones manualmente
  //boton0
  const punto0 = document.createElement('button');
  punto0.className = `punto ${state.pointsc1[0]}`;

  col1.appendChild(punto0);

  //boton1
  const punto1 = document.createElement('button');
  punto1.className = `punto ${state.pointsc1[1]}`;

  col1.appendChild(punto1);

  //boton2
  const punto2 = document.createElement('button');
  punto2.className = `punto ${state.pointsc1[2]}`;

  col1.appendChild(punto2);

  //segunda columna
  //boton3
  const punto3 = document.createElement('button');
  punto3.className = `punto ${state.pointsc2[0]}`;

  col2.appendChild(punto3);

  //boton4
  const punto4 = document.createElement('button');
  punto4.className = `punto ${state.pointsc2[1]}`;

  col2.appendChild(punto4);

  //boton5
  const punto5 = document.createElement('button');
  punto5.className = `punto ${state.pointsc2[2]}`;

  col2.appendChild(punto5);

  //tercera columna
  //boton6
  const punto6 = document.createElement('button');
  punto6.className = `punto ${state.pointsc3[0]}`;

  col3.appendChild(punto6);

  //boton7
  const punto7 = document.createElement('button');
  punto7.className = `punto ${state.pointsc3[1]}`;

  col3.appendChild(punto7);

  //boton8
  const punto8 = document.createElement('button');
  punto8.className = `punto ${state.pointsc3[2]}`;

  col3.appendChild(punto8);

  // Events
  //cambiar de color el div del turno
  if(lState.currentTurn === 0){
    icon.className = 'iconturn o'
    turn.appendChild(icon);
  } else {
    icon.className = 'iconturn x'
    turn.appendChild(icon);
  }

  punto0.onclick = () => {
    //aplicar el cambio al boton dependiendo del turno que sea
    if(state.pointsc1[0] === ''){
      //si es turno 0 poner o y 1 es x
      if(lState.currentTurn === 0){
        state.pointsc1[0] = 'o';
      } else {
        state.pointsc1[0] = 'x';
      }
    //de ser efectivo poner marca cambiar de turno y renderear
    lState.currentTurn = (lState.currentTurn + 1) % 2;
    render(lState);
    } else {
      alert("ESPACIO OCUPADO");
    }
    ganador();
  };

  punto1.onclick = () => {
    //aplicar el cambio al boton dependiendo del turno que sea
    if(state.pointsc1[1] === ''){
      //si es turno 0 poner o y 1 es x
      if(lState.currentTurn === 0){
        state.pointsc1[1] = 'o';
      } else {
        state.pointsc1[1] = 'x';
      }
    //de ser efectivo poner marca cambiar de turno y renderear
    lState.currentTurn = (lState.currentTurn + 1) % 2;
    render(lState);
    } else {
      alert("ESPACIO OCUPADO");
    }
    ganador();
  };

  punto2.onclick = () => {
    //aplicar el cambio al boton dependiendo del turno que sea
    if(state.pointsc1[2] === ''){
      //si es turno 0 poner o y 1 es x
      if(lState.currentTurn === 0){
        state.pointsc1[2] = 'o';
      } else {
        state.pointsc1[2] = 'x';
      }
    //de ser efectivo poner marca cambiar de turno y renderear
    lState.currentTurn = (lState.currentTurn + 1) % 2;
    render(lState);
    } else {
      alert("ESPACIO OCUPADO");
    }
    ganador();
  };

  punto3.onclick = () => {
    //aplicar el cambio al boton dependiendo del turno que sea
    if(state.pointsc2[0] === ''){
      //si es turno 0 poner o y 1 es x
      if(lState.currentTurn === 0){
        state.pointsc2[0] = 'o';
      } else {
        state.pointsc2[0] = 'x';
      }
    //de ser efectivo poner marca cambiar de turno y renderear
    lState.currentTurn = (lState.currentTurn + 1) % 2;
    render(lState);
    } else {
      alert("ESPACIO OCUPADO");
    }
    ganador();
  };

  punto4.onclick = () => {
    //aplicar el cambio al boton dependiendo del turno que sea
    if(state.pointsc2[1] === ''){
      //si es turno 0 poner o y 1 es x
      if(lState.currentTurn === 0){
        state.pointsc2[1] = 'o';
      } else {
        state.pointsc2[1] = 'x';
      }
    //de ser efectivo poner marca cambiar de turno y renderear
    lState.currentTurn = (lState.currentTurn + 1) % 2;
    render(lState);
    } else {
      alert("ESPACIO OCUPADO");
    }
    ganador();
  };

  punto5.onclick = () => {
    //aplicar el cambio al boton dependiendo del turno que sea
    if(state.pointsc2[2] === ''){
      //si es turno 0 poner o y 1 es x
      if(lState.currentTurn === 0){
        state.pointsc2[2] = 'o';
      } else {
        state.pointsc2[2] = 'x';
      }
    //de ser efectivo poner marca cambiar de turno y renderear
    lState.currentTurn = (lState.currentTurn + 1) % 2;
    render(lState);
    } else {
      alert("ESPACIO OCUPADO");
    }
    ganador();
  };

  punto6.onclick = () => {
    //aplicar el cambio al boton dependiendo del turno que sea
    if(state.pointsc3[0] === ''){
      //si es turno 0 poner o y 1 es x
      if(lState.currentTurn === 0){
        state.pointsc3[0] = 'o';
      } else {
        state.pointsc3[0] = 'x';
      }
    //de ser efectivo poner marca cambiar de turno y renderear
    lState.currentTurn = (lState.currentTurn + 1) % 2;
    render(lState);
    } else {
      alert("ESPACIO OCUPADO");
    }
    ganador();
  };

  punto7.onclick = () => {
    //aplicar el cambio al boton dependiendo del turno que sea
    if(state.pointsc3[1] === ''){
      //si es turno 0 poner o y 1 es x
      if(lState.currentTurn === 0){
        state.pointsc3[1] = 'o';
      } else {
        state.pointsc3[1] = 'x';
      }
    //de ser efectivo poner marca cambiar de turno y renderear
    lState.currentTurn = (lState.currentTurn + 1) % 2;
    render(lState);
    } else {
      alert("ESPACIO OCUPADO");
    }
    ganador();
  };

  punto8.onclick = () => {
    //aplicar el cambio al boton dependiendo del turno que sea
    if(state.pointsc3[2] === ''){
      //si es turno 0 poner o y 1 es x
      if(lState.currentTurn === 0){
        state.pointsc3[2] = 'o';
      } else {
        state.pointsc3[2] = 'x';
      }
    //de ser efectivo poner marca cambiar de turno y renderear
    lState.currentTurn = (lState.currentTurn + 1) % 2;
    render(lState);
    } else {
      alert("ESPACIO OCUPADO");
    }
    ganador();
  };

  //resetbutton events
  resetbtn.onclick = () => {
    //clear points
    state.pointsc1= ['', '', ''];
    state.pointsc2= ['', '', ''];
    state.pointsc3= ['', '', ''];
    //reset points
    state.currentTurn = 0;
    //render
    render(lState);
  }

  //revisar el ganador
  const ganador = function revisargnd (){ 
    //fila 1
    if(state.pointsc1[0] == state.pointsc2[0] 
      && state.pointsc1[0] == state.pointsc3[0] 
      && state.pointsc1[0] == 'o'){
      alert("GANADOR O");
    }
    if(state.pointsc1[0] == state.pointsc2[0] 
      && state.pointsc1[0] == state.pointsc3[0] 
      && state.pointsc1[0] == 'x'){
      alert("GANADOR X");
    }

    //fila 2
    if(state.pointsc1[1] == state.pointsc2[1] 
      && state.pointsc1[1] == state.pointsc3[1] 
      && state.pointsc1[1] == 'o'){
      alert("GANADOR O");
    }
    if(state.pointsc1[1] == state.pointsc2[1] 
      && state.pointsc1[1] == state.pointsc3[1] 
      && state.pointsc1[1] == 'x'){
      alert("GANADOR X");
    }

    //fila 3
    if(state.pointsc1[2] == state.pointsc2[2] 
      && state.pointsc1[2] == state.pointsc3[2] 
      && state.pointsc1[2] == 'o'){
      alert("GANADOR O");
    }
    if(state.pointsc1[2] == state.pointsc2[2] 
      && state.pointsc1[2] == state.pointsc3[2] 
      && state.pointsc1[2] == 'x'){
      alert("GANADOR X");
    }

    //columna 1
    if(state.pointsc1[0] == state.pointsc1[1] 
      && state.pointsc1[0] == state.pointsc1[2] 
      && state.pointsc1[0] == 'o'){
      alert("GANADOR O");
    }
    if(state.pointsc1[0] == state.pointsc1[1] 
      && state.pointsc1[0] == state.pointsc1[2] 
      && state.pointsc1[0] == 'x'){
      alert("GANADOR X");
    }

    //columna 2
    if(state.pointsc2[0] == state.pointsc2[1] 
      && state.pointsc2[0] == state.pointsc2[2] 
      && state.pointsc2[0] == 'o'){
      alert("GANADOR O");
    }
    if(state.pointsc2[0] == state.pointsc2[1] 
      && state.pointsc2[0] == state.pointsc2[2] 
      && state.pointsc2[0] == 'x'){
      alert("GANADOR X");
    }

    //columna 3
    if(state.pointsc3[0] == state.pointsc3[1] 
      && state.pointsc3[0] == state.pointsc3[2] 
      && state.pointsc3[0] == 'o'){
      alert("GANADOR O");
    }
    if(state.pointsc3[0] == state.pointsc3[1] 
      && state.pointsc3[0] == state.pointsc3[2] 
      && state.pointsc3[0] == 'x'){
      alert("GANADOR X");
    }

    //diagonales

    //up der - low izq
    if(state.pointsc1[0] == state.pointsc2[1] 
      && state.pointsc1[0] == state.pointsc3[2] 
      && state.pointsc1[0] == 'o'){
      alert("GANADOR O");
    }
    if(state.pointsc1[0] == state.pointsc2[1] 
      && state.pointsc1[0] == state.pointsc3[2] 
      && state.pointsc1[0] == 'x'){
      alert("GANADOR X");
    }

    //low der - up izq
    if(state.pointsc1[2] == state.pointsc2[1] 
      && state.pointsc1[2] == state.pointsc3[0] 
      && state.pointsc1[2] == 'o'){
      alert("GANADOR O");
    }
    if(state.pointsc1[2] == state.pointsc2[1] 
      && state.pointsc1[2] == state.pointsc3[0] 
      && state.pointsc1[2] == 'x'){
      alert("GANADOR X");
    }
  }
}

render (state);