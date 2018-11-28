console.log("Working");

fetch('http://localhost:3000/buyedProducts?ids=' + items).then(function (res) {
        return res.json();
    })
    .then(function (res) {
        console.log(res);
        var lista = document.querySelector('#lista');
        res.forEach(function (elem) {
            var header = `
        <div class="column">
            <div class="row"><p>` + elem.id + `</p></div>
            <div class="row"><p>` + elem.name + `</p></div>
            <div class="row"><p>` + elem.year + `</p></div>
            <div class="row"><p>` + elem.price + `</p></div>
            <div class="row delete">
            <img src="https://image.flaticon.com/icons/svg/61/61848.svg" alt="" width="20">
          </div>
        </div>
        `;
            lista.innerHTML += header;
        });
        document.querySelectorAll('.delete').forEach((e, index) => {
            e.addEventListener('click', () => {
                console.log("funcional");
                var jsonfy = JSON.parse(localStorage.getItem('items'));
                var largo = 0;
                console.log(jsonfy[index]);

                for (var k in jsonfy) {
                    if (jsonfy.hasOwnProperty(k)) {
                        if (jsonfy[largo].indexOf(jsonfy[index])) {
                            jsonfy.splice(1, 1);
                            localStorage.setItem('items', JSON.stringify(jsonfy));

                            break;
                        }
                        largo++;
                    }
                }
                lista.innerHTML = `<div class="column">
                <div class="row">
                    <p>Id</p>
                </div>
                <div class="row">
                    <p>Nombre</p>
                </div>
                <div class="row">
                    <p>Año</p>
                </div>
                <div class="row">
                    <p>Precio</p>
                </div>
            </div>`;

                res.forEach(function (elem) {
                    var header = `
                <div class="column">
                    <div class="row"><p>` + elem.id + `</p></div>
                    <div class="row"><p>` + elem.name + `</p></div>
                    <div class="row"><p>` + elem.year + `</p></div>
                    <div class="row"><p>` + elem.price + `</p></div>
                    <div class="row delete">
                    <img src="https://image.flaticon.com/icons/svg/61/61848.svg" alt="" width="20">
                  </div>
                </div>
                `;
                    lista.innerHTML += header;
                });
            })
        })
    });
