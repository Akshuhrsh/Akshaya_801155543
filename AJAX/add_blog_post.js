$(document).ready(function(){
  console.log("inside ajax call");
    $('form').on('submit', function(){
        console.log("iNSIDE aDD BLOG");
        var title = $('form input');
        var desc = $('form textarea');
        var blog = {title: title.val(),desc: desc.val()};
  
        console.log(title + desc);
        $.ajax({
          type: 'POST',
          url: '/addpost',
          data: blog,
          success: function(data){
            //do something with the data via front-end framework
            
          }
        });
  
        return false;
  
    });
});