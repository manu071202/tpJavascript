
function tabla(j){
document.write("<h2>tabla de multiplicar"+ j +"</h2>")
document.write("<ul>")
//i++ significa i=i+1
for(i=1; i<=10; i++){
  document.write("<li>")
  document.write(j + "x" * i + "= " + j * i);
  document.write("</li>")
}

document.write("</ul>")
}
tabla(4)


