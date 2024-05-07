const render = async () => {
// sessionStorage
    // const nombre = sessionStorage.getItem('nombre');
    // alert(`Hola ${nombre}!`);
    // clave
    // sessionStorage.setItem('clave', 'unoDosTresCuatro');

// localStorage
//     const persona ={
//         id: 1,
//         nombre: 'Juan',
//     }

//     console.log(typeof persona);

//     const personaStr = JSON.stringify(persona);

//     console.log(typeof personaStr);
//     console.log(typeof persona, personaStr);

//     localStorage.setItem('persona', personaStr);

//     const personaStorage = localStorage.getItem('persona');

//     const personaObjeto = JSON.parse(personaStorage);

//     console.log(typeof personaStorage, typeof personaObjeto);

const personas = [
    {
        nombre: 'Juan',
    },
    {
        nombre: 'Pedro',
    },
    {
        nombre: 'Maria',
    },
];

const personasStr = JSON.stringify(personas);
localStorage.setItem('personas', personasStr);

const personasStorage = JSON.parse(localStorage.getItem('personas'));
personasStorage.push({nombre: 'Carlos'});

localStorage.setItem('personas', JSON.stringify(personasStorage));
};

document.addEventListener('DOMContentLoaded', render);