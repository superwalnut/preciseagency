$("form").on("submit", function (e) {
    var dataString = $(this).serialize();
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    console.log('name', name);
    console.log('email', email);
    console.log('message', message);
    if(name == "" || email == "" || message == ""){
        $(".failed-message").html('We received your message and we will get back to you asap!');
    }
    else{
        $.ajax({
            headers: { 
                "Accept": "application/json",
                "referrer" : "https://preciseagency.com.au",
                "security" : "6258fa91-1397-43d8-b89f-df044a8e33dc"
            },
            type: "POST",
            crossDomain: true,
            url: "https://preciseagency-mailer.netlify.app/.netlify/functions/send-contact-email",
            data: {
              contactName: name,
              contactEmail: email,
              message: message
            },
            dataType: 'json',
            success: function () {
              // Display message back to the user here 
              $(".success-message").html('We received your message and we will get back to you asap!');
            }
          });
    }
    
    e.preventDefault();
});