const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');

const fruitItems = document.querySelectorAll('.fruit');
fruitItems.forEach(fruit => {
    const editButton = document.createElement('button');
    editButton.classList.add('edit-btn');
    editButton.textContent = 'Edit';
    fruit.appendChild(editButton);  
});

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const fruitToAdd = document.getElementById('fruit-to-add');

    const newLi = document.createElement('li');
    newLi.classList.add('fruit');
    newLi.innerHTML = fruitToAdd.value +
        '<button class="delete-btn">x</button>' +
        '<button class="edit-btn">Edit</button>'; 
    fruits.appendChild(newLi);

    fruitToAdd.value = ""

    const editButton = newLi.querySelector('.edit-btn');
});

fruits.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        const fruitToDelete = event.target.parentElement;
        fruits.removeChild(fruitToDelete);
    }
    if (event.target.classList.contains('edit-btn')) {
        
        console.log('Edit button clicked');
    }
});
