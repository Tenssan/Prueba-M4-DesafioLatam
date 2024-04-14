import Animal from './Animal.js';

class Lobo extends Animal {
    constructor(name, age, img, comments, sound) {
        super(name, age, img, comments, sound);
    }

    Aullar() {
        return this._sound
    }
}

export default Lobo;