var HTMLToPDF = require("html5-to-pdf");
var path = require("path");

var htmlToPDF = new HTMLToPDF({
  inputPath: path.resolve(__dirname, 'index.html'),
  inputBody: 'asdas',
  renderDelay: 200,
  outputPath: path.resolve(__dirname, 'output.pdf')
});
console.log(path.resolve(__dirname, 'index.html'));
htmlToPDF.build(function(err){
  console.log('sdf');
  console.log('error: ' + err);
  if (err) throw err;
    
});

process.exit()
