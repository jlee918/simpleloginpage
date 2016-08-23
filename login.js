$(function() {
        $("#submit").on("click", function(){
            uname = $("#username").val();
            pword = $("#password").val();
            if( uname == "" || pword == ""){
                alert("Please enter both username and password");
            } else {
                $.post( $("#loginform").attr("action"), { username: uname, password: pword},
                        function(data) {
                            if( data == 'Incorrect Username/Password'){
                                $("form")[0].reset();
                                alert(data);
                            } else if( data == 'Login Successful'){
                                $("form")[0].reset();
                                alert(data);
                            } else{
                                alert(data);
                            }
                });
            $("#loginform").submit( function(){
            return false;
            });
            }
    });
    });


