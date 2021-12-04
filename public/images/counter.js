var fs = require('fs');
const { HtmlContext } = require('next/dist/shared/lib/utils');
var files = fs.readdirSync('.');

console.log(files)

var items = []

for (const element of files) {
    items.push("<div><Image src='/../public/images/%s' height={250} width={250}/></div>,", element);
    // console.log("<div><Image src='/../public/images/%s' height={250} width={250}/></div>,", element);
  }

console.log(items)
    
    
    
    
  