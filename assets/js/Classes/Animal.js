class Animal {
    constructor(name, age, img, comments, sound) {
        this._name = name;
        this._age = age;
        this._img = img;
        this._comments = comments;
        this._sound = sound;
    }

    get Name() {
        return this._name;
    }

    get Age() {
        return this._age;
    }

    get Img() {
        return this._img;
    }

    get Comments() {
        return this._comments;
    }

    get Sound() {
        return this._sound;
    }
}

export default Animal;