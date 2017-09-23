function trainer(image, moreimages, surname, name, middle, descriptions) {
    this.name = name;
    this.middle = middle;
    this.surname = surname;
    this.descriptions = descriptions;
    this.image = image;
    this.moreimages = moreimages;

    this.getFullname = function () {
        return this.surname  + ' ' + this.name + ' ' + this.middle;
    };

    this.getDescription = function () {
        var text = "";
        for (var index = 0; index < this.descriptions.length; index++)
        {
            text = text + ' ' + this.descriptions[index];
        }
        return text;
        
    };

    return this;
}