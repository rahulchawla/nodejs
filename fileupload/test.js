var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
const { JSDOM } = require("jsdom");
const dom = new JSDOM();
http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = 'C:/Users/rahul.chawla/Desktop/nodejs/uploadedfiles/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        //compressimage(files);
        abc(newpath);
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);

function abc(newpath){
    var imageAsBase64 = fs.readFileSync(newpath, 'base64');
    const img = new Image();
            img.src = imageAsBase64;
            img.onload = function()  {
                const elem = document.createElement('canvas');
                var width = img.width;
                var height = img.height;
                (window.originalWidth)[index] = width;
                (window.originalHeight)[index] = height;
                var MAX_WIDTH = 2000;
                var MAX_HEIGHT = 2000;
                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                } else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }
                
                elem.width = width;
                elem.height = height;
                const ctx = elem.getContext('2d');
                // img.width and img.height will contain the original dimensions
                ctx.drawImage(img, 0, 0, width, height);
                ctx.canvas.toBlob( function(blob)  {
                    const file = new File([blob], fileName, {
                        type: type,
                        lastModified: Date.now()
                    });
                  console.log(file);
                }, type, 0.86);
            };
            img.onerror = function(){
               console.log('img error'); 
            };
}

function compressimage(files,index){
     var blobdata=files[0];
     const fileName = files.filetoupload.name;
     const type=files.filetoupload.type;
    const FileReader = dom.window.FileReader;
    const reader = new FileReader();
    reader.readAsDataURL(blobdata);
    reader.onload = function(event) {
        try{
            const img = new Image();
            img.src = imageAsBase64;
            img.onload = function()  {
                const elem = document.createElement('canvas');
                var width = img.width;
                var height = img.height;
                (window.originalWidth)[index] = width;
                (window.originalHeight)[index] = height;
                var MAX_WIDTH = 2000;
                var MAX_HEIGHT = 2000;
                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                } else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }
                
                elem.width = width;
                elem.height = height;
                const ctx = elem.getContext('2d');
                // img.width and img.height will contain the original dimensions
                ctx.drawImage(img, 0, 0, width, height);
                ctx.canvas.toBlob( function(blob)  {
                    const file = new File([blob], fileName, {
                        type: type,
                        lastModified: Date.now()
                    });
                  console.log(file);
                }, type, 0.86);
            };
            img.onerror = function(){
               console.log('img error'); 
            };
        }
        catch(e){
            console.log('catch error'); 
        }
    };
    reader.onerror = function(){
        console.log('render error'); 
    };
}