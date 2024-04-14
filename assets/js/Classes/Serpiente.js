import Animal from './Animal.js';

class Serpiente extends Animal {
    constructor(name, age, img, comments, sound) {
        super(name, age, img, comments, sound);
    }

    Sisear() {
        return this._sound
    }
}

export default Serpiente;