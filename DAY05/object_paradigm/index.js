const car = {
  name: "페라리",
  price: 100000000,
  color: "red",
  change_color: function(new_color) {
    this.color = new_color;
  },
  price_Up: function(new_price) {
    this.price = new_price;
  },
  change_name: function(new_name) {
    this.name = new_name; 
  }
};
window.console.log(car);
car.change_color("black");
car.price_Up("150000000");
car.change_name("람보르기니");
window.console.log(car);