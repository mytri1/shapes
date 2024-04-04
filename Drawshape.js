function pentagon() {
  var sx = prompt("What coordnites do you want your x starting point to be");
  var sy = prompt("What coordnites do you want your y starting point to be");
  var x1 = prompt("What coordnites do you want your x for your first line");
  var y1 = prompt("What coordnites do you want your y for your first line");
  var x2 = prompt("What coordnites do you want your x for your second line");
  var y2 = prompt("What coordnites do you want your y for your second line");
  var x3 = prompt("What coordnites do you want your x for your third line");
  var y3 = prompt("What coordnites do you want your y for your third line");
  var x4 = prompt("What coordnites do you want your x for your fourth line");
  var y4 = prompt("What coordnites do you want your y for your fourth line");
  var canvas = document.getElementById("Thecanvas");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(sx,sy);
  ctx.lineTo(x1,y1);
  ctx.lineTo(x2,y2);
  ctx.lineTo(x3,y3);
  ctx.lineTo(x4,y4);
  ctx.lineTo(sx,sy);
  ctx.strokeStyle = "#000000";
  ctx.lineWidth=1;
  ctx.stroke();
}
function rectangle() {
  var cy = prompt("Where do you want your y to be drawen on your rectangle");
  var cx = prompt("Where do you want your x to be on your rectangle");
  var wrect = prompt("What do you want your width to be for your rectangle");
  var hrect = prompt("What do you want your height to be for your rectangle");
  var canvas =  document.getElementById("Thecanvas");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.rect(cx,cy,wrect,hrect);
  ctx.strokeStyle = "#000000";
  ctx.lineWidth=1;
  ctx.stroke();
}
function square() {
  var cx = prompt("Where do you want your x to be drawin on your square");
  var cy = prompt("Where do you want your y to be drawin on your square");
  var big = prompt("How big do you want your square to drawed");
  var canvas = document.getElementById("Thecanvas");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.rect(cx,cy,big,big);
  ctx.strokeStyle = "#000000";
  ctx.lineWidth=1;
  ctx.stroke();
}
function circle() {
  var cx = prompt("Where do you want your x to be in your circle");
  var cy = prompt("Where do you want your y to be in your circle");
  var r = prompt("What do you want your raidus to be");
  var canvas = document.getElementById("Thecanvas");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(cx,cy,r,0,Math.PI*2);
  ctx.strokeStyle = "#000000";
  ctx.lineWidth=1;
  ctx.stroke();
}
function triangle(){
  var sx = prompt("What coordnites do you want your x starting point to be");
  var sy = prompt("What coordnites do you want your y starting point to be");
  var x1 = prompt("What coordnites do you want your x for your first line");
  var y1 = prompt("What coordnites do you want your y for your first line");
  var x2 = prompt("What coordnites do you want your x for your second line");
  var y2 = prompt("What coordnites do you want your y for your second line");
  var canvas = document.getElementById("Thecanvas");
  var ctx = canvas.getContext("2d");
  ctx.moveTo(sx,sy);
  ctx.lineTo(x1,y1);
  ctx.lineTo(x2,y2);
  ctx.lineTo(sx,sy);
  ctx.strokeStyle = "#000000";
  ctx.lineWidth=1;
  ctx.stroke();
}
function drawif() {
  selectElement = document.querySelector('#whatshape');
  di = selectElement.value;

  if ( di === "pentagon"){
    pentagon();
  }
  if (di === "triangle"){
    triangle();
  }
  if ( di=== "square"){
  //  console.log("call square")
    square();
  }
  if ( di=== "rectangle"){
  //  console.log("call rect")
    rectangle();
  }
  if (di === "circle"){
  //  console.log("call circle")
    circle();
  }

 }
function clear_() {
  var canvas = document.getElementById("Thecanvas");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0,0,600,400);
}
