function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.toppingsArray = [];

}

// Pizza.prototype.ToppingsArray = function() {
// 	this.toppingsArray.push(this.toppings);
  // }
  // return this.toppingsArray;
// }

Pizza.prototype.sumToppings = function() {
  var result = 0;
  for(var i = 0; i < this.toppingsArray.length; i++) {
    result += parseInt(this.toppingsArray[i]);
  }
  return result;
}

Pizza.prototype.sizePrice = function() {
  return parseInt(this.size);

// Pizza.prototype.fullPrice = function() {
//   return parseInt(this.size) + this.toppingsTotal;
}
// parseInt(this.toppingsTotal) +

function resetFields() {
    $("input#size").val("");
    $("input#toppings").val("");
}

//// Front End Logic ////
$(document).ready(function() {

  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();

    var size = $("#size").val();
    var toppingsArray = [];

    $("input:checkbox[name=tops]:checked").each(function(){
      var toppings = $("#this").val();
      toppingsArray.push(toppings);
    });

    var myPizza = new Pizza(size, toppings);


    // $("ul#price").append("$" + myPizza.sizePrice() + myPizza.sumToppings() + ".00");

    $("ul#price").append(myPizza.sizePrice());
    alert (toppingsArray);

    $(".output").show();

  });
});
