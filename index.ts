import "./style.css";


const btn = document.getElementById('button');
 if(btn){
    btn.addEventListener("click",()=>{
    const data="My doi dai doi domi mido"; //can be from text field e.t.c
    createFile(data,"my-doi-docs.txt");
     });
  }


// this does all the magic
function createFile(content,filename="data.txt"){
  var link = document.createElement('a');
  link.download = filename;
  const blob = new Blob([content], {type: 'text/plain'});
  link.href = window.URL.createObjectURL(blob);
  link.click();
}