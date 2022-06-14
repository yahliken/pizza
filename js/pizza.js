var pizza_toppings = new Array();
var random_toppings = new Array();
var selected_random_toppings = new Array();
var pizza_btns;


function pizza_maker(){
    pizza_btns = new Array();
    pizza_toppings = new Array();
    disabled_buttons_maker()
    var index = 0;
    document.getElementById('board2').innerHTML = '';

    for (row = 0; row < 2; row++) {
        for (col = 0; col < 4; col++) {
            var button = document.createElement("input");
            button.setAttribute("value", get_topping_name(index));
            button.setAttribute("name", 'grid');
            button.setAttribute("class", 'pizza_btn');
            button.setAttribute("type", 'button');
            button.setAttribute("onclick", "toppings_type(" + index + ")");
            document.getElementById('board2').appendChild(button);
            pizza_btns.push(button); 
            index++;
        }
        var breakline = document.createElement("br");
        document.getElementById('board2').appendChild(breakline);
    }
}

function get_topping_name(index){
    switch (index) {
        case 0:
            return "olive🍈";
        case 1:
            return "cheese🧀";
        case 2:
            return "tomato🍅";
        case 3:
            return "onion🧅";
        case 4:
            return "corn🌽";
        case 5:
            return "tabasco🌶️";
        case 6:
            return "mushrooms🍄";
        case 7:
            return "pineapple🍍";
        default:
            return " ";
    }

}

function toppings_type(index){
    
    if(index == 0){
        pizza_btns[index].setAttribute("class", 'olive');
        add_topping("olive"); 
    }
    if(index == 1){
        pizza_btns[index].setAttribute("class", 'cheese');
        add_topping("cheese");
    }
    if(index == 2){
        pizza_btns[index].setAttribute("class", 'tomato');
        add_topping("tomato"); 
    }
    if(index == 3){
        pizza_btns[index].setAttribute("class", 'onion');
        add_topping("onion"); 
    }
    if(index == 4){
        pizza_btns[index].setAttribute("class", 'corn');
        add_topping("corn"); 
    }
    if(index == 5){
        pizza_btns[index].setAttribute("class", 'tabasco');
        add_topping("tabasco"); 
    }
    if(index == 6){
        pizza_btns[index].setAttribute("class", 'mushrooms');
        add_topping("mushrooms"); 
    }
    if(index == 7){
        pizza_btns[index].setAttribute("class", 'pineapple');
        add_topping("pineapple"); 
    }
}
function pizza_orders(){
    document.getElementById('board2').innerHTML = '';
    random_toppings = ["pineapple", "mushrooms", "tabasco", "corn", "onion", "tomato", "cheese", "olive"]
    var random;
    selected_random_toppings = new Array();
    
    while (true) {
        random = Math.floor(Math.random() * random_toppings.length);
        if (selected_random_toppings.includes(random_toppings[random]) == false) {
            selected_random_toppings.push(random_toppings[random]);
            if (selected_random_toppings.length == 4) {
                break;
            }
        } 
    }
    alert(selected_random_toppings)
    //document.getElementById("orders_div").innerHTML = selected_random_toppings;
    document.getElementById("toppings_label_div").innerHTML = selected_random_toppings;
    pizza_btns = new Array();
    var index = 0;
    for (row = 0; row < 2; row++) {
        for (col = 0; col < 4; col++) {
            var button = document.createElement("input");
            button.setAttribute("value", get_topping_name(index));
            button.setAttribute("name", 'grid');
            button.setAttribute("class", 'pizza_btn');
            button.setAttribute("type", 'button');
            button.setAttribute("onclick", "toppings_type(" + index + ")");
            document.getElementById('board2').appendChild(button);
            pizza_btns.push(button); 
            index++;
        }
        var breakline = document.createElement("br");
        document.getElementById('board2').appendChild(breakline);
    }
}
function add_topping(topping_name){
    if (pizza_toppings.includes(topping_name) == false) {
        pizza_toppings.push(topping_name);
        }
    }
    //להוסיף תמונות של התופספות


function pizza_check(){
    var too_many = false;
    var check = 0;
    if (selected_random_toppings.length >= pizza_toppings.length){
        too_many = true;
        for (let index = 0; index < random_toppings.length; index++) {
            if (selected_random_toppings.includes(random_toppings[index]) && pizza_toppings.includes(random_toppings[index])){
                check++;
            }
        }
    }
    if (check <= 4 && too_many == true) {
        if (check == 4){
            alert("100% well done!!")
        }
        if (check == 3){
            alert("75% good job!!")
        }
        if (check == 2){
            alert("50% Almost correct!!")
        }
        if (check == 1){
            alert("25% Need improvement!!")
        }
        if (check == 0){
            alert("0% you wrong!!")
        }
    }
    if (pizza_toppings.length > 4 && too_many == false){ 
        alert("you picked too many toppings")
    }
    
}