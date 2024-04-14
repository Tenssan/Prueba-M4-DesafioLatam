import Animal from './Animal.js';

class Aguila extends Animal {
    constructor(name, age, img, comments, sound) {
        super(name, age, img, comments, sound);
    }

    Chillar() {
        return this._sound
    }
}

export default Aguila;