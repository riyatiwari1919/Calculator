var totalButtons = document.querySelectorAll(".btn").length;

function clear(){
    document.querySelector("#input").value = "";
}

function equalTo(){
    var expression = document.querySelector("#input").value;
    expression = expression.replace("x", "*");
    console.log("Enetred expression is : " + expression);
    var result = eval(expression);
    console.log("Result is : " + result);
    document.querySelector("#input").value = result;        
}

function back(){
    var inputValue = document.querySelector("#input").value;
    inputValue = inputValue.slice(0,inputValue.length-1);
    document.querySelector("#input").value = inputValue;
}

function updateInputValue(btnValue){
    var inputInitialValue = document.querySelector("#input").value;
    document.querySelector("#input").value = inputInitialValue + btnValue;
}

function makeAnimation(className){
    var activeButton = document.querySelector("." + className);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
}

for (var i=0; i<totalButtons; i++){
    document.querySelectorAll(".btn")[i].addEventListener("click", function(){
        
        if(this.innerHTML != "CE" && this.innerHTML != "=" && this.innerHTML != "AC"){
            makeAnimation(this.classList[0]);
            updateInputValue(this.innerHTML);
        }
        else if(this.innerHTML == "CE"){
            makeAnimation(this.classList[0]);
            back();
        }
        else if(this.innerHTML == "="){
            makeAnimation(this.classList[0]);
            try{
                equalTo();
            }
            catch{
                console.log("Invalid operation");
                alert("Enter a valid operation!");
                clear();
            }       
        }
        else{
            makeAnimation(this.classList[0]);
            clear();
        }
    })
}
document.querySelector("input").addEventListener("keypress", function(event){
    if(event.key == "Enter"){
        try{
            equalTo();
        }
        catch{
            console.log("Invalid operation");
            alert("Enter a valid operation!");
            clear();
        }   
    } 
})