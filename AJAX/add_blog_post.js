$(document).ready(function(){  
    $('form').on('submit', function(e){  
      e.preventDefault();      
        var title = $('#title');
        var desc = $('#description');
          console.log("In elseeee");
            var blog = {title: title.val(),desc: desc.val()};
            $.post("/addpost",blog, function(data){
              alert("Record updated Successfully");
              window.location.href='listpost';
            });
        return false;
    });
});

function handleFileSelect(event){
  var fileSize=event.target.files[0].size/1024;
  var filePath = event.target.value;
  console.log("fileSize",fileSize,filePath);
  var allowedExtensions = /(\.txt)$/i; 
 if (!allowedExtensions.exec(filePath) || fileSize > 1024) { 
  alert('Invalid file type or file size > 1MB'); 
  event.target.value = ''; 
  document.getElementById('description').textContent='';
 }
 else{
  const reader = new FileReader()
  reader.onload = handleFileLoad;
  reader.readAsText(event.target.files[0])
 }  
}

function handleFileLoad(event){ 
  document.getElementById('description').textContent = event.target.result;
}

function getFileContent(){ 
  document.getElementById('uploadfile').addEventListener('change', handleFileSelect, false);
}

