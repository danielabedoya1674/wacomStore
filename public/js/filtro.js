var price = document.getElementById('price');
var year = document.getElementById('year');
var free = document.getElementById('freeship');

document.getElementById('search').addEventListener('click', (e) => {

    e.preventDefault();

    var link = "";

    if (!(price.value == "" || price.value == null)) {
        if (link == null)
            link = 'price=' + price.value;
        else {
            var str = '&price=' + (price.value);
            link = link.concat(str);
        }
    } else {
        console.log('isEmpty');
    }

    if (free.checked) {
        if (link == null || link=="")
            link = 'free=' + 1;
        else {
            var str = '&free=' + 1;
            link = link.concat(str);
        }
    } else {
        console.log('isEmpty');
    }

    if (!(year.value == "" || year.value == null)) {
        if (link == null)
            link = 'year=' + (year.value);
        else {
            var str = '&year=' + (year.value);
            link = link.concat(str);
        }
    } else {
        console.log('isEmpty');
    }
    location.href = '/?' + link;
});