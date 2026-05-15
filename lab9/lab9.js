const fs=require('fs');
fs.writeFile('lab9.txt', 'This is File System Module DSemo.\n', function(err){
if(err) throw err;
console.log('File Created And Data Written');
fs.appendFile('lab9.txt', 'Data Append Using FS Moduls.\n', function(err){
if(err)throw err;
console.log('Data append.');
fs.readFile('lab9.txt', 'utf8', function (err, data) {
if(err)throw err;
console.log('File Content:.\n'+data);
fs.unlink('lab9.txt', function(err) {
if (err) throw err;
console.log('File Deleted');});});});});