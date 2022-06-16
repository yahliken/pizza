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
        add_image();
    }
    if(index == 1){
        pizza_btns[index].setAttribute("class", 'cheese');
        add_topping("cheese");
        add_image2();
    }
    if(index == 2){
        pizza_btns[index].setAttribute("class", 'tomato');
        add_topping("tomato"); 
        add_image8();
    }
    if(index == 3){
        pizza_btns[index].setAttribute("class", 'onion');
        add_topping("onion"); 
        add_image5();
    }
    if(index == 4){
        pizza_btns[index].setAttribute("class", 'corn');
        add_topping("corn"); 
        add_image3();
    }
    if(index == 5){
        pizza_btns[index].setAttribute("class", 'tabasco');
        add_topping("tabasco"); 
        add_image7();
    }
    if(index == 6){
        pizza_btns[index].setAttribute("class", 'mushrooms');
        add_topping("mushrooms"); 
        add_image4();
    }
    if(index == 7){
        pizza_btns[index].setAttribute("class", 'pineapple');
        add_topping("pineapple");
        add_image6(); 
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
function add_image(){
    var img2 = document.createElement("img");
    img2.src = "../pizza.images/olive.png" ;
    img2.className="png_edit";
    img2.width = 150;
    img2.hight = 150;
    document.body.appendChild(img2);
}
function add_image2(){
    var img3 = document.createElement("img");
    img3.src = "../pizza.images/cheese.png" ;
    img3.className="png_edit";
    img3.width = 150;
    img3.hight = 150;
    document.body.appendChild(img3);
}
function add_image3(){
    var img4 = document.createElement("img");
    img4.src = "../pizza.images/corn.png" ;
    img4.className="png_edit";
    img4.width = 150;
    img4.hight = 150;
    document.body.appendChild(img4);
}
function add_image4(){
    var img5 = document.createElement("img");
    img5.src = "../pizza.images/mushrooms.png" ;
    img5.className="png_edit";
    img5.width = 150;
    img5.hight = 150;
    document.body.appendChild(img5);
}
function add_image5(){
    var img6 = document.createElement("img");
    img6.src = "../pizza.images/onion.png" ;
    img6.className="png_edit";
    img6.width = 150;
    img.hight = 150;
    document.body.appendChild(img6);
}
function add_image6(){
    var img7 = document.createElement("img");
    img7.src = "../pizza.images/pineapple.png" ;
    img7.className="png_edit";
    img7.width = 150;
    img7.hight = 150;
    document.body.appendChild(img7);
}
function add_image7(){
    var img8 = document.createElement("img");
    img8.src = "../pizza.images/tabasco.png" ;
    img8.className="png_edit";
    img8.width = 150;
    img8.hight = 150;
    document.body.appendChild(img8);
}
function add_image8(){
    var img9 = document.createElement("img");
    img9.src = "../pizza.images/tomatos.png" ;
    img9.className="png_edit";
    img9.width = 150;
    img9.hight = 150;
    document.body.appendChild(img9);
}


function pizza_check(){
    var too_many = false;
    var correct_toppings = 0;
    if (pizza_toppings.length<selected_random_toppings.length){
        alert("You are missing toppings")
     }
    if (pizza_toppings.length>selected_random_toppings.length){
     alert("You have too many toppings")
    }
    if (selected_random_toppings.length == pizza_toppings.length){
        too_many = true;
        for (let index = 0; index < random_toppings.length; index++) {
            if (selected_random_toppings.includes(random_toppings[index]) && pizza_toppings.includes(random_toppings[index])){
                correct_toppings++;
            }
        }
    }
    if (correct_toppings <= 4 && too_many == true) {
        if (correct_toppings == 4){
            alert("100% well done!!")
        }
        if (correct_toppings == 3){
            alert("75% good job!!")
        }
        if (correct_toppings == 2){
            alert("50% Almost correct!!")
        }
        if (correct_toppings == 1){
            alert("25% Need improvement!!")
        }
        if (correct_toppings == 0){
            alert("0% you wrong!!")
        }
    }
    if (pizza_toppings.length > 4 && too_many == false){ 
        alert("you picked too many toppings")
    }
    
}