const state = {
    pointsc1: ['', 'o', 'x'],
    pointsc2: ['x', 'o', 'x'],
    pointsc3: ['x', 'o', 'x'],
    currentTurn: 0,
};

const render = lState => {
    const col1 = document.createElement('div');
    col1.className = 'columna';

    const col2 = document.createElement('div');
    col2.className = 'columna';

    const col3 = document.createElement('div');
    col3.className = 'columna';


    //main rendering
    root.appendChild(col1);
    root.appendChild(col2);
    root.appendChild(col3);

    const botonesCol1 = lState.pointsc1.map(
        (column, i) => {
            const punto = document.createElement('button');
            punto.className = `punto ${column}`;

        return punto;
        }
    );

    const botonesCol2 = lState.pointsc2.map(
        (column, i) => {
            const punto = document.createElement('button');
            punto.className = `punto ${column}`;

        return punto;
        }
    );
    
    const botonesCol3 = lState.pointsc3.map(
        (column, i) => {
            const punto = document.createElement('button');
            punto.className = `punto ${column}`;

        return punto;
        }
    );

    // adjuntar los puntos por columna
    botonesCol1.forEach(
        punto => col1.appendChild(punto)
    );

    // adjuntar los puntos por columna
    botonesCol2.forEach(
        punto => col2.appendChild(punto)
    );

    // adjuntar los puntos por columna
    botonesCol3.forEach(
        punto => col3.appendChild(punto)
    );


}

render (state);