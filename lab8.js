const itemsContainer = document.querySelector('.items');
const savedContainer = document.querySelector('.text');
const add = document.querySelector('.add');
const save = document.querySelector('.save');

add.addEventListener('click', () => {
    const newObject = document.createElement('div');

    newObject.classList.add('item');
    newObject.innerHTML = `
    <input type="text" class="input">
    <input type="text" class="input">
    <button type="button" class="up-button">↑</button>
    <button type="button" class="down-button">↓</button>
    <button type="button" class="close-button">⛌</button>
    `;
    newObject.querySelector('.up-button').addEventListener('click', moveObjectUp);
    newObject.querySelector('.down-button').addEventListener('click', moveObjectDown);
    newObject.querySelector('.close-button').addEventListener('click', removeObject);

    itemsContainer.append(newObject);
});

save.addEventListener('click', () => {
    const objectItems = document.querySelectorAll('.item');
    let savedObjects = '{';

    objectItems.forEach((item) => {
        const firstInputValue = item.querySelector('input:nth-child(1)').value;
        const secondInputValue = item.querySelector('input:nth-child(2)').value;

        savedObjects += ` "${firstInputValue}": "${secondInputValue}",`;
    });

    savedObjects = savedObjects.slice(0, savedObjects.length - 1);
    savedObjects += ' }';

    savedContainer.textContent = savedObjects;
});

const moveObjectUp = ($event) => {
    const currentObj = $event.target.closest('.item');
    const prevObj = currentObj.previousElementSibling;
    prevObj?.before(currentObj);
};

const moveObjectDown = ($event) => {
    const currentObj = $event.target.closest('.item');
    const nextObj = currentObj.nextElementSibling;
    nextObj?.after(currentObj);
};

const removeObject = ($event) => {
    $event.target.closest('.item').remove();
};

document.querySelector('.up-button').addEventListener('click', moveObjectUp);
document.querySelector('.down-button').addEventListener('click', moveObjectDown);
document.querySelector('.close-button').addEventListener('click', removeObject);