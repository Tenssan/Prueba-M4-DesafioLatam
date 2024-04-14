import Animal from './Animal.js';

class Leon extends Animal {
    constructor(name, age, img, comments, sound) {
        super(name, age, img, comments, sound);
    }

    Rugir() {
        return this._sound
    }
}

export default Leon;