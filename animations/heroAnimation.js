let zoff = 0;
let flowfield = [];
const resolution = 99;
let particles = [];
let cols, rows;
const maxDistance = 55; // Maximum distance for connecting lines

function setup() {
    // Select the container
    let container = document.querySelector('.canvas-container');
  
    // Get the width and height of the container
    let containerWidth = container.clientWidth;
    let containerHeight = container.clientHeight;
  
    // Create the canvas with the size of the container
    console.log(containerHeight, containerWidth)
    let cnv = createCanvas(containerWidth, containerHeight);

    console.log(cnv)
  
    // Attach the canvas to the container
    cnv.parent(container);

    // Rest of your setup code
    colorMode(HSB, 360, 255, 255, 100);
    cols = floor(width / resolution);
    rows = floor(height / resolution);
    flowfield = new Array(cols * rows);
    initParticles();
}

  

function initParticles() {
  particles = [];
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      particles.push(new Particle(i * resolution, j * resolution));
    }
  }
}

function draw() {
  background(255);
  updateFlowField();
  for (let particle of particles) {
    particle.follow(flowfield);
    particle.update();
    particle.edges();
    particle.show();
  }
  connectParticles();
}

function connectParticles() {
  stroke(0); // Black color for the lines
  strokeWeight(1); // Very thin lines

  // Array to keep track of the number of connections for each particle
  let connections = Array(particles.length).fill(0);

  for (let a = 0; a < particles.length; a++) {
    for (let b = 0; b < particles.length; b++) {
      // Ensure different particles and less than 5 connections for particle 'a'
      if (a !== b && connections[a] < 3) {
        let dist = p5.Vector.dist(particles[a].pos, particles[b].pos);
        if (dist < maxDistance) {
          line(particles[a].pos.x, particles[a].pos.y, particles[b].pos.x, particles[b].pos.y);
          connections[a]++; // Increment connection count for particle 'a'
        }
      }
    }
  }
}

function windowResized() {
    // Select the container
    let container = document.querySelector('.canvas-container');
  
    // Get the width and height of the container
    let containerWidth = container.clientWidth;
    let containerHeight = container.clientHeight;
  
    // Resize the canvas to the container's size
    resizeCanvas(containerWidth, containerHeight);
  
    // Recalculate columns and rows based on new canvas size
    let newCols = floor(width / resolution);
    let newRows = floor(height / resolution);
  
    // Re-initialize particles if the grid size changes
    if (newCols !== cols || newRows !== rows) {
      cols = newCols;
      rows = newRows;
      flowfield = new Array(cols * rows);
      initParticles();
    }
  }
  

function updateFlowField() {
  let scale = 0.1;
  let xoff = 0;
  for (let i = 0; i < cols; i++) {
    let yoff = 0;
    for (let j = 0; j < rows; j++) {
      const index = i + j * cols;
      const theta = map(noise(xoff, yoff, zoff), 0, 1, 0, TWO_PI);
      flowfield[index] = p5.Vector.fromAngle(theta);
      yoff += scale;
    }
    xoff += scale;
  }
  zoff += 0.01;
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.prevPos = this.pos.copy();
    this.vel = createVector();
    this.acc = createVector();
  }

  follow(vectors) {
    let x = floor(this.pos.x / resolution);
    let y = floor(this.pos.y / resolution);
    let index = x + y * cols;
    let force = vectors[index];
    this.applyForce(force);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(2); // Limiting the velocity to slow down the movement
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  edges() {
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.prevPos.x = this.pos.x;
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.prevPos.x = this.pos.x;
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.prevPos.y = this.pos.y;
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.prevPos.y = this.pos.y;
    }
  }

  show() {
    stroke(0);
    strokeWeight(10);
    point(this.pos.x, this.pos.y);
  }
}
