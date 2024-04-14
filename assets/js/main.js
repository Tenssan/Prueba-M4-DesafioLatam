import createAnimal from './functions/createAnimal.js';
import animalCard from './component/animalCard.js';
import showAnimalDetails from './component/modalContent.js';

document.addEventListener('DOMContentLoaded', function() {
    const registerBtn = document.getElementById('btnRegistrar');
    const animalSelect = document.getElementById('animal');
    const preview = document.getElementById('preview');
    const animalTable = document.getElementById('Animales');

    animalSelect.addEventListener('change', async function() {
        const name = animalSelect.value;
        const age = document.getElementById('edad').value;
        const comments = document.getElementById('comentarios').value;

        if (name !== "Seleccione un animal") {
            const animal = await createAnimal(name, age, comments);
            preview.innerHTML = `<img src="${animal._img}" class="card-img-top img-fluid" alt="${name}">`;
        } else {
            preview.innerHTML = '';
        }
    });

    animalTable.addEventListener('click', async function(event) {
        const name = animalSelect.value;
        const age = document.getElementById('edad').value;
        const comments = document.getElementById('comentarios').value;
        
        const animal = await createAnimal(name, age, comments);
        showAnimalDetails(animal);
    });
    

    registerBtn.addEventListener('click', async function(event) {
        event.preventDefault();

        const name = animalSelect.value;
        const age = document.getElementById('edad').value;
        const comments = document.getElementById('comentarios').value;

        if (name === "Seleccione un animal" || age === "Seleccione un rango de años") {
            alert('Please fill out all required fields.');
            return;
        }

        const animal = await createAnimal(name, age, comments);
        animalCard(animal, animalTable);

        console.log(animal);
    });
});
