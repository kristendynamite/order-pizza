////\\BUSINESS LOGIC||/////

////\\CONSTRUCTOR\\/////
function Pizza(size, toppings, special) {
  this.size = size;
  this.toppings = toppings;
  this.special = special;

}

////\\PROTOTYPES\\/////

Pizza.prototype.sizePrice = function() {
  return parseInt(this.size);
}

Pizza.prototype.specialPrice = function() {
  return parseInt(this.special);
}

Pizza.prototype.orderTotal = function() {
  return parseInt(this.size) + parseInt(this.special) + this.toppings.length;
}

//// \\ Front End Logic \\  ////
$(document).ready(function() {

  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();

    var size = $("#size").val();
    var special = $("#special").val();
    var toppings = []; $("input:checkbox[name=tops]:checked").each(function() {
      var chosenTopping = $(this).val();
      toppings.push(chosenTopping);
    });

    var myPizza = new Pizza(size, toppings, special);

    $("ul#price").append("Your toppings: " + "<br>" + toppings + "</br>" + "<br>" + "Your price $" + (myPizza.orderTotal() + "</br>" ));

    $(".output").show();

  });
});
