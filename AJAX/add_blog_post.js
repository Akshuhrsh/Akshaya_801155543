const fs = require('fs');

$(document).ready(function(){
  console.log("inside ajax call");
    $('form').on('submit', function(){        
        var title = $('#title');
        var desc = $('#description');
        var uploadedFile = $('#uploadfile');       
        alert("Submit");
    
        if(uploadedFile.val()!=null && uploadedFile.val()!=""){
          console.log("Checking value")
          var input = document.getElementById("uploadfile");
          var fReader = new FileReader();
        //  fReader.readAsDataURL(input.files[0]);
          var test=fReader.readAsText(input.files[0])
          console.log(test);
        /*  fReader.onloadend = function(event){
              var img = document.getElementById("description");
              img.value = event.target.result;
          }*/

          //  var fReader=new FileReader();
            var blog = {title: title.val(),desc:$('#uploadfile').val()};
            $.post("/addpostFile", blog, function(data){
              console.log("I am in........");
            });
        } else{
          console.log("In elseeee");
            var blog = {title: title.val(),desc: desc.val()};
            $.post("/addpost",blog, function(data){
              console.log(data.body);
              alert(data.body);
            });
        }

        // $.ajax({
        //   type: 'POST',
        //   url: '/addpost',
        //   data: blog,
        //   success: function(resdata){
        //     //do something with the data via front-end framework
        //     console.log("DATA"+resdata);            
        //   }
        // });  
        return false;
    });
});