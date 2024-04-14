function showAnimalDetails(animal) {
    const modalBody = document.querySelector('#exampleModal .modal-body');
    modalBody.innerHTML = `
        <img src="${animal._img}" class="img-fluid" alt="${animal._name}">
        <div class="text-white text-center text-align-middle overflow-auto text-break">
            <p class="mt-4">${animal._age}</p>
            <h3>Comments</h1>
            <p>${animal._comments}</p>
        </div> 
    `;
    $('#exampleModal').modal('show');
}

export default showAnimalDetails;