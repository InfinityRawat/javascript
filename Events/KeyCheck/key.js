

const keyTable = document.querySelector(".container .keyTab")

window.addEventListener('keydown',(event)=>{

    keyTable.innerHTML=` <table border=1>
     <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${event.key===" "?"space":event.key}</td>
    <td>${event.keyCode}</td>
    <td>${event.code}</td>
  </tr> 
    </table>`
})