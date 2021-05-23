canvas= document.getElementById("myCanvas");
cpx=canvas.getContext("2d");
cpx.beginPath()
cpx.strokeStyle="grey";
cpx.lineWidth=5;
cpx.rect(150,143,430,200);
cpx.stroke();

cpx.beginPath()
cpx.strokeStyle="blue";
cpx.lineWidth=5;
cpx.arc(250,210,40,0, 2*Math.PI);
cpx.stroke();

cpx.beginPath()
cpx.strokeStyle="black";
cpx.lineWidth=5;
cpx.arc(350,210,40,0, 2*Math.PI);
cpx.stroke();

cpx.beginPath()
cpx.strokeStyle="red";
cpx.lineWidth=5;
cpx.arc(450,210,40,0, 2*Math.PI);
cpx.stroke();

cpx.beginPath()
cpx.strokeStyle="yellow";
cpx.lineWidth=5;
cpx.arc(300,250,40,0, 2*Math.PI);
cpx.stroke();

cpx.beginPath()
cpx.strokeStyle="green";
cpx.lineWidth=5;
cpx.arc(400,250,40,0, 2*Math.PI);
cpx.stroke();