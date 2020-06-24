$(document).ready(function(){    
    console.log("inside ajax call");
      $('form').on('submit', function(){                    
          var title = $('form input');
          var desc = $('form textarea');
          var blog = {title: title.val(),desc: desc.val()};    
          $.ajax({
            async: false,
            type: 'POST',
            url: '/updatepost',           
            data: blog,            
            success: function(response){      
                 alert("Success");        
                 console.log(response.body);       
            },      
            error: function(response) {
                alert("failure");
                console.log(response.body);
            }
          });
          alert("No Callback");
          return false;
      });
  });