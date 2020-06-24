$(document).ready(function(){    
    console.log("inside ajax call");
      $('form').on('submit', function(){                    
          var title = $('form input');
          var desc = $('form textarea');
          var blog = {title: title.val(),desc: desc.val()};
          
          $.post("/updatepost",blog, function(data){
              console.log(data.body);
              alert(data.body);
          });
        
        //   $.ajax({            
        //     type: 'POST',
        //     url: '/updatepost',           
        //     data: blog,            
        //     success: function(response){
        //         console.log("true") 
        //         if(response){
        //             alert("Success");
        //         }                      
        //     },      
        //     error: function(response) {
        //         console.log("false");
        //         if(!response){
        //             alert("Failure");
        //         }
        //     }
        //   });
        //   alert("No Callback");
          return false;
      });
  });