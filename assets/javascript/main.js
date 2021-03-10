// Code to make the modal appear on screen | Code from: 
// https://codepen.io/hanapiers/pen/EXNrGP
// https://stackoverflow.com/questions/16452699/how-to-reset-a-form-using-jquery-with-reset-method

    $('#enquiryForm').on('submit', function(e)
    {
        $('#submittedModal').modal('show');
        e.preventDefault(); 
        $('form').get(0).reset();
    });
