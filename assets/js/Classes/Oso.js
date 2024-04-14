import Animal from './Animal.js';

class Oso extends Animal {
    constructor(name, age, img, comments, sound) {
        super(name, age, img, comments, sound);
    }

    Gruñir() {
        return this._sound
    }
}

export default Oso;