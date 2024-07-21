// Constantes para el div contenedor de los inputs y el botón de agregar
const contenedor = document.querySelector('#parent');
const btnAgregar = document.querySelector('#agregar');
const btnAgregarInput = document.querySelector('#agregarInput');

// Variable para el total de elementos agregados
let total = 1;

/**
 * Adicionar tag span
 */
btnAgregar.addEventListener('click', e => {
    let span = document.createElement('span');
    span.innerHTML = `span tag ${total++} <br>`;
    contenedor.appendChild(span);
})

/**
 * Adicionar tag input
 */
btnAgregarInput.addEventListener('click', e => {
    let input = document.createElement('input');
    contenedor.appendChild(input);
})


/**
 * here the Observer mutation code
 */

var target = document.getElementById('parent');

var Observer = new MutationObserver(callback);

function callback(mutations) {
    console.log('mutations', mutations);
    if(mutations[0].type == 'childList' && mutations[0].addedNodes.length > 0) {
        mutations[0].addedNodes.forEach(function (node) {
            
            console.log('tagName', node.tagName);
        });
    }
}

Observer.observe(target, {
    childList: true
});



