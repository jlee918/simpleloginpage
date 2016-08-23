$(document).ready(function(){
$("#submit").click(function(){

if( $("#username").val() === '' || $("#password").val() === ''){
    //$('input[type="text"],input[type="password"]').css("border","2px solid red");
    //$('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px red");
    //alert("Please fill all fields...!!!!!!");
    $("div#react").html("Please enter both username and password");
} else {
    $.post("login.php", { email: email, password:password},
            function(data) {
                if( data == 'Incorrect Username/Password'){
                    $('input[type="text"],input[type="password"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
                    alert(data);
                } else if( data == 'Login Successful'){
                    $("form")[0].reset();
                    $('input[type="text"],input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
                    alert(data);
                } else{
                    alert(data);
}
});
}
});
});