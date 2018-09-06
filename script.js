var mobileNo = document.getElementById("mobile");
if(mobileNo.value.length !== 10 || isNaN(mobileNo.value)){
    $('#signup_form').submit(function(e){
        e.preventDefault();
        M.toast({html: 'Mobile no. should be a 10 digits number'})
    });
}