document.querySelectorAll('.producto p').forEach((e) => {
    console.log(e.innerHTML);
    var value = e.innerHTML;
    console.log(value.length);
    if (value.length > 100)
       e.innerHTML = value.slice(0, 100) +'...';

}); 