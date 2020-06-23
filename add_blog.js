$(document).ready(function(){

    $('form').on('submit', function(){
  
        var title = $('form input');
        var desc = $('form input');
        var blog = {title: title.val(),desc: desc.val()};
  
        $.ajax({
          type: 'POST',
          url: '/post',
          data: blog,
          success: function(data){
            //do something with the data via front-end framework
            location.reload();
          }
        });
  
        return false;
  
    });
});