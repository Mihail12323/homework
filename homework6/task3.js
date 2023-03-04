function Constructor(manufacturer, model, numberOfSeats, color,){
    this.manufacturer = manufacturer;
    this.model = model;
    this.number0fSeats = numberOfSeats;
    this.color = color;
}

const car = new Constructor('Ferrari', '812 Superfast', 4, 'Red,Black,White',);

console.log(car);