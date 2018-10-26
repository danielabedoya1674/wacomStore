document.querySelectorAll('.producto .add').forEach((e)=>{
    e.addEventListener('click',()=>{
        e.parentElement.parentElement.getAttribute('data-id');
    });
});