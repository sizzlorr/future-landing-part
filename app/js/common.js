var form = $("#form");
var msgSend = $(".msg-send");
var close = $("#close");

form.parsley();

form.on("submit", function(e) {
    if(!e.isDefaultPrevented()) {
        e.preventDefault();
        $(this).trigger("reset");
        msgSend.show();
    }
});

close.click(function () {
    msgSend.hide();
});

// Set up formatting for Credit Card fields
$("#cardNumber").formatCardNumber();
$("#cvc").formatCardCVC();
