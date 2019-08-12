
// Looking for event when user enters
document.getElementById("userin")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("chatbutton").click();
    }
});
    // reading user inputs
function chat(){


    var userin =  document.getElementById("userin").value;
    var para = document.createElement("P");
    para.innerHTML = userin;
    document.getElementById("chat").appendChild(para);
    updateScroll();   
    reply(userin);
    document.getElementById("userin").value = "";
}

// Here  change the key words in "inpu.match("yourKEyword")" for question
// and change  value of "out" for answers coresponding to key words
function reply(input)
{
    var out = "";
    var inpu = input.toLowerCase();

    if(inpu.match(/contact/g)||inpu.match(/customer/g)||inpu.match(/care/g))
    {
        out = "Email: info@teejunction.com";
    }
    else if(inpu.match(/hi/g)||inpu.match(/hello/g)||inpu.match(/hey/g))
    {
        out = "Hello how Can I help you? example typeIn - order delivery";
    }
    else if(inpu.match(/reset/g)||inpu.match(/password/g)||inpu.match(/login/g)||inpu.match(/forgot/g))
    {
        out = "Please go to Login->then click on 'forgot password' -> follow instructions of the email you recive ";
    }
    else if(inpu.match(/order/g)||inpu.match(/tshirt/g)||inpu.match(/t-shirt/g)||inpu.match(/shirt/g)||(inpu.match(/item/g)))
    {
        if(inpu.match(/cost/g))
        {
            out = "The cost of a shirt or an order depends primarily on three things- <br> 1.What kind of garment you are ordering<br> 2.How many garments you are ordering<br> 3.What location you want the delivery at";
        } 
        else if(inpu.match(/pay/g))
        {
            out = "You pay for your order at the time your order is placed with PayPal. You will be sent a confirmation e-mail with a payment link ";
        }     
        else if(inpu.match(/cost/g))
        {
            out = "The cost of a shirt or an order depends primarily on three things- <br> 1.What kind of garment you are ordering<br> 2.How many garments you are ordering<br> 3.What location you want the delivery at";
        } 
        else if(inpu.match(/delivery/g)||inpu.match(/delivered/g)||inpu.match(/get/g))
        {
            out = "We know how important it is to receive your shirts in, and that's why we always provide a guaranteed delivery date for your order. It usually takes around 5-7 business days depending on the delivery location. Contact us if you require quick delivery!";
        } 
        else if(inpu.match(/many/g)||inpu.match(/how/g))
        {
            out = "From just one to over one thousand, T-Shirt Junction can print as many items as you need for your unique cause or occasion! The more you order the less you pay";
        } 
        else if(inpu.match(/problem/g)||inpu.match(/defect/g))
        {
            out = "At T-Shirt Junction we realize that for many people, creating custom products online may be new. For pre- printed T-shirts you could cancel or return the product if you are not satisfied with it, but the customized goods are generally not accompanied by guarantees, once the t-shirts are printed you cannot cancel or return the order";
        } 
        else if(inpu.match(/cancel/g))
        {
            out = "Yes, you can cancel the pre-printed T-Shirts before they are shipped out and the customized t-shirt before they are printed";
        }
        else if(inpu.match(/return/g))
        {
            out = "Yes, you can return the pre- printed T-shirts if you are not satisfied with it, but the customized goods cannot be cancelled or returned once they are printed";
        }
    }
    else if(inpu.match(/wholesale/g)||inpu.match(/special price/g)||inpu.match(/non-profit/g)||inpu.match(/bulk/g)){
        out="Yes. We do custom quotes on orders over 100 pcs and on large contract printing jobs.  You can e-mail or call us, and our representation can help you get a good deal";
    }
    else if(inpu.match(/deliver/g)){
        out="We deliver all over United States, but the delivery fee and taxes vary depending upon the location of the delivery";
    }
    else if(inpu.match(/size/g)||inpu.match(/sizes/g)){
        out="We offer Small, Medium, Large and Extra-Large sizes with a variety of colors in each size. You can pick any mix of sizes and colors for you design. You would be charged accordingly";
    }
    else if(inpu.match(/printing/g)&&inpu.match(/fade/g)){
        out="No. The printed image on screen printed t-shirts is very durable and will hold up for a long time. Washing instructions are packed with the digital transfer shirts";
    }
    else
    {
        out="“So, I’m good at talking about the TeeJunction. Other stuff, not so good. If you need help just enter ‘help' Or directly send an email to theteejunction2019@gmail.com ”";
    }



    setTimeout(function() {

        var para = document.createElement("P");
        para.innerHTML = out;
        document.getElementById("chat").appendChild(para);}, 1000);
    updateScroll();  


}

function printdiv(printpage)
{
    var headstr = "<html><head><title></title></head><body>";
    var footstr = "</body>";
    var newstr = document.all.item(printpage).innerHTML;
    var oldstr = document.body.innerHTML;
    document.body.innerHTML = headstr+newstr+footstr;
    window.print();
    document.body.innerHTML = oldstr;
    return false;
}

function updateScroll(){
    var element = document.getElementById("chat-box");
    element.scrollTop = element.scrollHeight;
}

$(document).ready(function(){
        $(".chat").animate({ scrollTop: $(document).height() }, "slow");
        return false;
    });
