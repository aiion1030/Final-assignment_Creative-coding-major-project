let blocks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(229, 228, 240);

  let yPosArray = calculatePositions([10, 50, 120, 150, 220, 250, 280, 340, 440], windowHeight);
  let xPosArray = calculatePositions([10, 30, 70, 140, 300, 330, 420, 440, 480, 500], windowWidth);

  horizontalStreets(yPosArray);
  verticalStreets(xPosArray);

  
  blocks.push({ x: windowWidth * 0.1, y: windowHeight * 0.16, w: windowWidth * 0.06, h: windowHeight * 0.06, c: color(0, 0, 255), isHovered: false });
  blocks.push({ x: windowWidth * 0.1, y: windowHeight * 0.7, w: windowWidth * 0.08, h: windowHeight * 0.08, c: color(0, 0, 255), isHovered: false });
  blocks.push({ x: windowWidth * 0.32, y: windowHeight * 0.52, w: windowWidth * 0.06, h: windowHeight * 0.1, c: color(0, 0, 255), isHovered: false });
  blocks.push({ x: windowWidth * 0.76, y: windowHeight * 0.32, w: windowWidth * 0.1, h: windowHeight * 0.2, c: color(0, 0, 255), isHovered: false });
  blocks.push({ x: windowWidth * 0.82, y: windowHeight * 0.7, w: windowWidth * 0.08, h: windowHeight * 0.08, c: color(0, 0, 255), isHovered: false });
  
 
  blocks.push({ x: windowWidth * 0.16, y: windowHeight * 0.04, w: windowWidth * 0.04, h: windowHeight * 0.18, c: color(255, 0, 0), isHovered: false });
  blocks.push({ x: windowWidth * 0.26, y: windowHeight * 0.04, w: windowWidth * 0.08, h: windowHeight * 0.12, c: color(255, 0, 0), isHovered: false });
  blocks.push({ x: windowWidth * 0.16, y: windowHeight * 0.54, w: windowWidth * 0.12, h: windowHeight * 0.08, c: color(255, 0, 0), isHovered: false });
  blocks.push({ x: windowWidth * 0.58, y: windowHeight * 0.4, w: windowWidth * 0.12, h: windowHeight * 0.1, c: color(255, 0, 0), isHovered: false });
  blocks.push({ x: windowWidth * 0.68, y: windowHeight * 0.6, w: windowWidth * 0.1, h: windowHeight * 0.14, c: color(255, 0, 0), isHovered: false });


  
  blocks.push({ x: windowWidth * 0.28, y: windowHeight * 0.08, w: windowWidth * 0.06, h: windowHeight * 0.06, c: color(169), isHovered: false });
  blocks.push({ x: windowWidth * 0.46, y: windowHeight * 0.22, w: windowWidth * 0.1, h: windowHeight * 0.14, c: color(169), isHovered: false });
  blocks.push({ x: windowWidth * 0.46, y: windowHeight * 0.74, w: windowWidth * 0.06, h: windowHeight * 0.1, c: color(169), isHovered: false });
  blocks.push({ x: windowWidth * 0.74, y: windowHeight * 0.62, w: windowWidth * 0.08, h: windowHeight * 0.04, c: color(169), isHovered: false });
  blocks.push({ x: windowWidth * 0.8, y: windowHeight * 0.04, w: windowWidth * 0.1, h: windowHeight * 0.06, c: color(169), isHovered: false });


}

function calculatePositions(positionArray, canvasSize) {
  let adjustedPositions = [];
  for (let pos of positionArray) {
    adjustedPositions.push((pos / 500) * canvasSize);
  }
  return adjustedPositions;
}

function createBlock(x, y, w, h, c) {
  fill(c);
  rect(x, y, w, h);
}

function horizontalStreets(yPosArray) {
  for (let yPos of yPosArray) {
    for (let i = 0; i < width; i += 20) {
      let num = floor(random(101));
      let c = colourMap(num);
      createBlock(i, yPos, 20, 20, c);
    }
  }
}

function verticalStreets(xPosArray) {
  for (let xPos of xPosArray) {
    for (let i = 0; i < height; i += 10) {
      let num = floor(random(101));
      let c = colourMap(num);
      createBlock(xPos, i, 10, 10, c);
    }
  }
}

function colourMap(num) {
  if (num >= 0 && num <= 65) {
    return color(255, 255, 0); // Yellow
  } else if (num >= 66 && num <= 80) {
    return color(0); // Black
  } else if (num >= 81 && num <= 85) {
    return color(255, 0, 0); // Red
  } else if (num >= 86 && num <= 100) {
    return color(169); // Gray
  }
}

function draw() {
  for (let block of blocks) {
    if (block.isHovered) {
      
      block.y += 5; 
    }

    fill(block.c);
    rect(block.x, block.y, block.w, block.h);
  }
}

function mouseMoved() {
  
  for (let block of blocks) {
    if (
      mouseX >= block.x &&
      mouseX <= block.x + block.w &&
      mouseY >= block.y &&
      mouseY <= block.y + block.h
    ) {
      block.isHovered = true;
    } else {
      block.isHovered = false;
    }
  }
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setup();
}