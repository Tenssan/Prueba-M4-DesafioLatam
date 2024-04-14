function animalCard(animal, container) {
    const cardHTML = `
    <div class="card m-1" style="width: 10rem;">
        <img src="${animal._img}" class="card-img-top" alt="Image of ${animal._name}">
        <div class="card-footer bg-secondary text-white">
            <button type="button" class="btn btn-default" onclick="document.getElementById('audio-${animal._name}').hidden = !document.getElementById('audio-${animal._name}').hidden; document.getElementById('audio-${animal._name}').play();">
                <span class="fas fa-volume-up fa-lg" aria-hidden="true"></span>
            </button>
            <audio id="audio-${animal._name}" src="${animal._sound}" hidden controls></audio>
        </div>
    </div>
    `;
    container.innerHTML += cardHTML;
}

export default animalCard;
