import Aguila from "../Classes/Aguila.js";
import Serpiente from "../Classes/Serpiente.js";
import Leon from "../Classes/Leon.js";
import Oso from "../Classes/Oso.js";
import Lobo from "../Classes/Lobo.js";
import fetchImg from "./fetchImg.js";

async function createAnimal(name, age, comments) {
    const img = await fetchImg(name);
    const aguilaSound = "./assets/sounds/Chillido.mp3";
    const serpienteSound = "./assets/sounds/Siseo.mp3";
    const leonSound = "./assets/sounds/Rugido.mp3";
    const osoSound = "./assets/sounds/Gruñido.mp3";
    const loboSound = "./assets/sounds/Aullido.mp3";
    let animal;
    
    if (name === "Aguila") {
        animal = new Aguila(name, age, img, comments, aguilaSound);
    } else if (name === "Serpiente") {
        animal = new Serpiente(name, age, img, comments, serpienteSound);
    } else if (name === "Leon") {
        animal = new Leon(name, age, img, comments, leonSound);
    } else if (name === "Oso") {
        animal = new Oso(name, age, img, comments, osoSound);
    } else if (name === "Lobo") {
        animal = new Lobo(name, age, img, comments, loboSound);
    }

    return animal;
};

export default createAnimal;