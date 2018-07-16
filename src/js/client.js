const state = {
    pointsc1: ['', '', ''],
    pointsc2: ['x', 'x', 'x'],
    pointsc3: ['o', 'o', 'o'],
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

    //limpiar el rendering anterior
    if (root.hasChildNodes()) {
        root.innerHTML = null;
      }


    //main rendering
    root.appendChild(title);
    root.appendChild(holder);
    root.appendChild(turn);

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
    lState.currentTurn = (lState.currentTurn + 1) % 2;
    render(lState);
    console.log(state.currentTurn);
    };


}

render (state);