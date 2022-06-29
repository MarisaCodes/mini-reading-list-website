const list = document.querySelector('#book-list ul');
const addBtn = document.querySelector('button');

list.addEventListener('click', function(event){
    if(event.target.className == 'delete') {
        event.target.parentElement.remove();
    }
})

addBtn.addEventListener('click', function(e){
    e.preventDefault();
    let newLi = document.createElement('li');
    newLi.innerHTML = '<span class="name">Add book</span><span class="delete">delete</span>';
    list.appendChild(newLi);
})