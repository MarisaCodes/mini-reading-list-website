const list = document.querySelector('#book-list ul');
const addBtn = document.querySelector('button');

//delete books
list.addEventListener('click', function(event){
    if(event.target.className == 'delete') {
        event.target.parentElement.remove();
    }
})


const forms = document.forms;

forms['add-book'].addEventListener('submit',function(event){
    event.preventDefault();
    const val = forms['add-book'].querySelector('input[type="text"]').value;

    //create elements 
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');
    bookName.innerText = val;
    deleteBtn.textContent = 'delete';

    //append to document

    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    forms['add-book'].querySelector('input[type="text"]').value = '';
})

//hide books

const hideBox = document.querySelector('#hide');

hideBox.addEventListener('change',(event)=>{
    if(hideBox.checked){
        list.style.display = 'none';
    } else {
        list.style.display = 'initial';
    }
})