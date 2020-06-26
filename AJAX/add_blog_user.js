$(document).ready(function(){    
    console.log("inside ajax call");
      $('form').on('submit', function(){                    
          var userName = $('#username');
          var password = $('#password');
          var blogUser = {username: userName.val(),password: password.val()};

          $.ajax({            
            type: 'POST',
            url: '/adduser',           
            data: blogUser,            
            success: function(response){
                console.log("true in update") 
                if(response){
                    alert("Record updated Successfully");
                    window.location.href='listuser';
                }                      
            },      
            error: function(response) {
                console.log("false");
                if(!response){
                    alert("Failure");
                }
            }
          });          
          return false;
      });
  });