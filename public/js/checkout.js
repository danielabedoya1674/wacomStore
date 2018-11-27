console.log("Working");

fetch('http://localhost:3000/buyedProducts?ids='+items).then(function(res){
    return res.json();
})
.then(function(res){
    console.log(res);

    var lista = document.querySelector('#lista');
    res.forEach(function(elem){
        var header = `
        <div class="column">
            <div class="row"><p>`+elem.id+`</p></div>
            <div class="row"><p>`+elem.name+`</p></div>
            <div class="row"><p>`+elem.year+`</p></div>
            <div class="row"><p>`+elem.price+`</p></div>
        </div>
        `;
        lista.innerHTML += header;
    });
});