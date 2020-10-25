$(function() {
   $("#add").submit(event => {
       event.preventDefault();
console.log(event);
console.log(event.target);
let form = $(event.target);
let item = form.children("input").val();
let li = $("<li> </li>");

li.append('<input type="checkbox" />');

let span = $("<span></span>");
span.text(item);
li.append(span);

let button = $("<button> Delete </button>");
li.append(button);
button.click(event =>{
    //console.log("removingg");
     $(event.target).parent().remove();
    //console.log(todelet);
    
})
li.append(button);
$("#list").append(li);
form.children("input").val("");

   });
});