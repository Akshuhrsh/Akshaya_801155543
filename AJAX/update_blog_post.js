$(document).ready(function(){    
    console.log("inside ajax call");
      $('form').on('submit', function(){                    
          var title = $('form input');
          var desc = $('form textarea');
          var blog = {title: title.val(),desc: desc.val()};

          $.ajax({            
            type: 'POST',
            url: '/updatepost',           
            data: blog,            
            success: function(response){
                console.log("true in update") 
                if(response){
                    alert("Record updated Successfully");
                    window.location.href='listpost';
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