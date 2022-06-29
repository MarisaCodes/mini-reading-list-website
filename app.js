const deleteButton = document.querySelectorAll('.delete');
const books = document.querySelectorAll('.name');
const addButton = document.querySelector('button');
const ul = document.querySelector('ul');
// console.log(deleteButton)



deleteButton.forEach(element => {
    element.addEventListener('click',function(e){
        e.target.parentElement.remove();
    })
});
