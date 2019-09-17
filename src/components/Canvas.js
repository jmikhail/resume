import React from 'react';



//line definition
function Line(distanceFromCenter, length, velocity, color) {
    this.x = 0;
    this.distanceFromCenter = distanceFromCenter;
    this.length = length;
    this.lengthOffset = this.distanceFromCenter * 0.1;
    this.radians = Math.random() * 6;
    this.velocity = velocity;
    this.color = color;

    //draw one line
    this.update = function (canvasHeight) {
        this.radians += this.velocity;
        this.x = (window.innerWidth / 2) + Math.cos(this.radians) * this.distanceFromCenter;
        var front = (this.radians * Math.PI / 180) > 0.5;
        this.currentLength = this.length * canvasHeight + (front ? Math.sin(this.radians) * this.lengthOffset : Math.sin(this.radians) * this.lengthOffset);
        this.angleOffset = -Math.tan(0.2) * this.currentLength;
    }

    //draw one line
    this.draw = function (context) {
        context.moveTo(this.x, 0);
        context.lineTo(this.x + this.angleOffset, this.currentLength);
        context.stroke();
    }

    //draw circle line
    this.drawCircle = function (context) {
        context.beginPath();
        context.strokeStyle = this.color;
        context.moveTo(this.x, 0);
        context.lineTo(this.x + this.angleOffset, this.currentLength);
        context.arc(this.x + this.angleOffset, this.currentLength, 2, 0, Math.PI * 2, false);
    }
}

function Canvas(props) {
    const count = 25;
    const colors = ['#6bb9f0', '#1e8bc3', '#2574a9'];
    const lines = new Array();

    const canvas = React.useRef(null);
    const context = React.useRef();
    const animation = React.useRef();

    const resized = () => {
        canvas.current.width = window.innerWidth;
        canvas.current.height = window.innerHeight;
    };

    React.useEffect(() => resized(), []);

    React.useEffect(() => {
        animation.current = requestAnimationFrame(paint);
        return () => cancelAnimationFrame(animation.current);
    }, []);


    React.useEffect(() => {
        const currentCanvas = canvas.current;
        currentCanvas.addEventListener("resize", resized);
        return () => currentCanvas.removeEventListener("resize", resized);
    }, []);

    React.useEffect(() => {
        const currentCanvas = canvas.current;

        //get and set context
        context.current = currentCanvas.getContext("2d");
        context.current.lineWidth = 1;
        const canvasWidth = currentCanvas.width;


        //create lines
        for (let i = 0; i < count; i++) {
            var distanceFromCenter = (canvasWidth) / 3 + Math.random() * (canvasWidth) / 3;
            var length = 0.7 + (Math.random() * 0.2);
            var velocity = Math.random() * 0.005 + 0.001;
            var color = colors[Math.floor(Math.random() * colors.length)];
            var newLine = new Line(distanceFromCenter, length, velocity, color);
            lines.push(newLine);
        }
    }, []);



    const paint = (time) => {
        const currentCanvas = canvas.current;
        const canvasHeight = currentCanvas.height;
        context.current.clearRect(0, 0, window.innerWidth, window.innerHeight);
        lines.forEach(line => {
            line.update(canvasHeight);
            line.draw(context.current);
            line.drawCircle(context.current);
        });

        animation.current = requestAnimationFrame(paint);
    };

    return (
        <canvas
            id="main-canvas"
            ref={canvas}
            height="500px"
            width="500px"
        />
    );

}

export default Canvas;



