$("form").on("submit", function (e) {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var data = {
        contactName: name,
        contactEmail: email,
        message: message
    };

    var json = JSON.stringify(data);
    console.log('json', json);

    if(name == "" || email == "" || message == ""){
        $(".failed-message").html('We received your message and we will get back to you asap!');
    }
    else{
        $.ajax({
            headers: { 
                "Accept": "application/json",
                "Referrer" : "https://preciseagency.com.au",
                "Security" : "6258fa91-1397-43d8-b89f-df044a8e33dc"
            },
            type: "POST",
            crossDomain: true,
            url: "https://mailer.preciseagency.com.au/.netlify/functions/send-contact-email",
            data: json,
            dataType: 'json',
            success: function () {
              // Display message back to the user here 
              $(".success-message").html('We received your message and we will get back to you asap!');
            }
          });
    }
    
    e.preventDefault();
});