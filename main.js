function updateData(){
    let date = new Date();
    let setTime = document.getElementById('setTime');
    setTime.innerHTML = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    let setDate = document.getElementById('setDate');
    setDate.innerHTML = date.getDate() + '-' + parseInt(date.getMonth()+1) + '-' + date.getFullYear();
 
}
setInterval(updateData,100)
onload = updateData();

function getColor(){
    var getColor = document.getElementById('setColor').value;
    localStorage.setItem('color', getColor);
    document.getElementById('time').style.background = localStorage.getItem('color');
    document.getElementById('body').style.background = localStorage.getItem('color');
}
function setColor(){
    document.getElementById('color').value = localStorage.getItem('color');
    document.getElementById('time').style.background = localStorage.getItem('color');
    document.getElementById('body').style.background = localStorage.getItem('color');
}
setInterval(setColor,100);