var ul = document.querySelector(".to-do-list");
var container2 = document.querySelector(".container2");
var add = document.querySelector("#btn");
var input = document.querySelector("#taskinput");
var msg = document.querySelector(".No-to-dos");
var mainContainer = document.querySelector("main");
var i = 0;
function createList() {
    var input_value = input.value;
    input.value = "";
    var li = document.createElement("li");
    if (i % 2 == 0) {
        li.className = "li-without-bg";
    }
    else {
        li.className = "li-bg";
    }

    

    //coming from inside to outside in the li tag
    //first icons
    var icon1 = document.createElement("i");
    icon1.className = "fa-solid fa-circle-chevron-down";
    icon1.setAttribute("data-purpose", "up");
    var icon2 = document.createElement("i");
    icon2.className = "fa-solid fa-circle-chevron-down";
    icon2.setAttribute("data-purpose", "down");
    var icon3 = document.createElement("i");
    icon3.className = "fa-solid fa-circle-minus";
    icon3.setAttribute("data-purpose", "remove");

    //then buttons of icons
    var button1 = document.createElement("button");
    button1.className = "up";
    button1.setAttribute("data-purpose", "up");
    var button2 = document.createElement("button")
    button2.className = "down";
    button2.setAttribute("data-purpose", "down");
    var button3 = document.createElement("button");
    button3.className = "remove";
    button3.setAttribute("data-purpose", "remove");
    button1.append(icon1);
    button2.append(icon2);
    button3.append(icon3);

    //div of buttons
    var buttondiv = document.createElement("div");
    buttondiv.className = "buttons";
    buttondiv.append(button1);
    buttondiv.append(button2);
    buttondiv.append(button3);

    //text paragraph
    var p = document.createElement("p");
    p.className = "listText";
    p.innerText = input_value;

    //div around wwhole content of list
    var div = document.createElement("div");
    div.className = "containerinlist";
    div.append(p);
    div.append(buttondiv);

    li.append(div);
    
    if ((input_value).length > 0) {
        msg.remove();
        ul.append(li);
    }
    i++;
};
add.addEventListener("click", function () {
    
    createList();
});
function featuresOflist() {

}
mainContainer.addEventListener("click", function (e) {
    if (e.target.nodeName === "BUTTON" || "I") {
        button = e.target;
        var typeOfButton = button.getAttribute("data-purpose");
        var li = button.parentElement.parentElement.parentElement.parentElement;
        var ul= li.parentElement;
        switch (typeOfButton) {
            case "remove":
                li.style.fontFamily="Times New Roman";
                li.style.textDecoration="line-through";
                setTimeout(function(){
                    li.style.textDecoration="none";
                    li.style.fontFamily= "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
                    li.innerText="Congrats On completion of task";
                    setTimeout(function(){
                        li.remove();
                        if (ul.children.length === 0) {
                            ul.append(msg);
                        }
                    },1500);
                }, 1000);
                console.log(ul.children);
                
                break;
            case "up":
                var previousElement=li.previousElementSibling;
                if(previousElement!==null){
                    ul.insertBefore(li, previousElement);
                }
                break;
            case "down":
                var nextElement=li.nextElementSibling;
                if(nextElement!==null){
                    ul.insertBefore(nextElement, li);
                }
       }
    }
})