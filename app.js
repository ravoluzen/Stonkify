const initialPrice = document.querySelector("#initial-price-input");
const stocksQuantity = document.querySelector("#quantity-input");
const currentPrice = document.querySelector("#current-price-input");
const calButton = document.querySelector("#calculate");
const outputText = document.querySelector("#result");

function calculateValue(initial, quantity, current){
    outputText.style.display = "block";

    if(initial > current){
        let loss = Math.abs((initial - current)*quantity).toPrecision(4);
        let lossPercent = (loss/(initial*quantity)*100).toPrecision(4);

        outputText.innerText = "Bad Day. Your loss is "+ loss +" and the loss percentage is "+lossPercent+"%";
    }else if(current > initial){
        let gain = Math.abs((current - initial)*quantity).toPrecision(4);
        let gainPercent = (gain/(initial*quantity)*100).toPrecision(4);

        outputText.innerText = "Woop! Woop! Your gain is "+ gain +" and the gain percentage is "+gainPercent+"%";
    }else {
        outputText.innerText = "No profit. No Loss. Only Dissapointment. :|";
    }
}

function getValue(){
    initial = (initialPrice.value);
    quantity = stocksQuantity.value;
    current = (currentPrice.value);

    calculateValue(initial, quantity, current);
}

calButton.addEventListener("click", getValue);