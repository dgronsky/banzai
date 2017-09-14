function trainer(image, surname, name, middle, descriptions) {

    this.name = name;
    this.middle = middle;
    this.surname = surname;
    this.descriptions = descriptions;
    this.image = image;

    this.fullname = function () {
        return this.surname  + ' ' + this.name + ' ' + this.middle;
    };

    return this;
}