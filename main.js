function total(){
    let sum = 0;
    let prices = document.querySelectorAll(".price");
    let amounts = document.querySelectorAll(".amount");
    for (let i = 0; i < prices.length; i++) {
        sum = sum + parseInt(prices[i].innerHTML) * parseInt(amounts[i].innerHTML);
    }
    document.getElementById("total").innerHTML = sum;
    }
    function add(element){
        let num=element.closest(".cart2");
        num.querySelector('.amount').innerHTML=
        parseInt(num.querySelector('.amount').innerHTML)+1;
        total();
    }   
    function minus(element){
        let num=element.closest(".cart2");
        num.querySelector('.amount').innerHTML=
        parseInt(num.querySelector('.amount').innerHTML)-1;
        total();
    }
function ClickFunction () {
    document.getElementById("Characteristics").innerHTML="The iPhone 14 and the iPhone 14 Plus come in Midnight (black), Starlight (white-ish / silver), Product RED, as well as brand new Blue and Purple colors. On the other hand, the Pro-branded models are sporting darker, more pro-looking colors: Space Black, Silver, Gold, and Deep Purple.For most people, the Midnight iPhone 13 is probably the best way to go. After all, it's hard to go wrong with black, and it's always iconic and just goes with everything. If you don't like dark colors, Starlight is a good alternative that remains neutral.";
}



