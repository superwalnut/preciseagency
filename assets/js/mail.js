$("form").on("submit", function (e) {
    var dataString = $(this).serialize();
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    if(name == "" || email == "" || message == ""){
        $(".failed-message").html('We received your message and we will get back to you asap!');
    }
    else{
        $.ajax({
            type: "POST",
            url: "https://preciseagency-mailer.netlify.app/.netlify/functions/send-contact-email",
            data: {
              contactName: name,
              contactEmail: email,
              message: message
            },
            success: function () {
              // Display message back to the user here 
              $(".success-message").html('We received your message and we will get back to you asap!');
            }
          });
    }
    
    e.preventDefault();
});