function validateFile(){
    var fileInput = document.getElementById('uploadfile'); 
  
    var filePath = fileInput.value; 
    var fileSize = 0;

   fileSize= document.getElementById('uploadfile').files[0].size/1024;

 

    // Allowing file type 
    var allowedExtensions = /(\.txt)$/i; 

  
    console.log("file size",fileSize,filePath);
    console.log("before reading......")


    if (!allowedExtensions.exec(filePath) || fileSize > 1024) { 
    alert('Invalid file type or file size > 1MB'); 
    fileInput.value = ''; 


    return false;
}  
};