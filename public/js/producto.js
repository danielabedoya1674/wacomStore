function actualizarCarrito (){
    document.querySelector('.carrito').innerHTML = 'carrito: '+items.length;
}

// carrito

var items = JSON.parse(localStorage.getItem('items'));
if(items == null) {items = [];console.log("esNulo")}
console.log(items);
console.log(items[0]);
console.log(items.length);

console.log(typeof(items));

actualizarCarrito();



// carrito
document.querySelectorAll('.producto .add').forEach(function(button) {
    button.addEventListener('click', function(e){
        e.preventDefault();
        var id = button.parentElement.parentElement.getAttribute('data-id');

        console.log(typeof(id));
        if(items.indexOf(id) >= 0){
            console.log('paila');
            return;
        }

        items.push(id);
        actualizarCarrito();

        localStorage.setItem('items', JSON.stringify(items));
    });
});

