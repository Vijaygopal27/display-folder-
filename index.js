const express = require("express")
const app = express()
const fs = require("fs")

 var result = "";
 
 fs.readdir("C:\\Users\\DELL\\Desktop\\practice","utf-8",(err,data) => {
app.get("/",(req,res) =>{
if(err){
    res.send("oops! something is wrong")
}
else{ 
    for(var i=0;i<data.length;i++){
        var path = "C:\\Users\\DELL\\Desktop\\practice\\"+data[i];
        var temp = fs.statSync(path)
        if(temp.isFile()){
            result +="<img src='https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Docs-icon.png' height='25px' width='30px'>"+ data[i] +"<br>";
        }
        else if(temp.isDirectory()){
            result+= "<img src='https://upload.wikimedia.org/wikipedia/commons/5/59/OneDrive_Folder_Icon.svg' height='30px' width='28px'>"+ data[i] + "<br>";
        }
    }res.send(result);
}
 })
 })
 app.listen(3000)