// Enhanced PoseNet with Professional UI and Animations
let posenet;
let singlePose, skeleton;
let capture;

// Animation variables
let particles = [];
let pulseAnimation = 0;
let gradientOffset = 0;
let keypointHistory = [];
const maxHistory = 5;

// Color scheme - Professional gradient palette
const colors = {
  primary: [0, 150, 255],      // Blue
  secondary: [255, 100, 150],  // Pink
  accent: [150, 255, 200],     // Green
  skeleton: [255, 255, 255],   // White
  background: [20, 20, 30]     // Dark
};

// Keypoint configuration
const keypointConfig = {
  size: 6,              // Smaller dots
  strokeWeight: 2,
  pulseSize: 8,
  minConfidence: 0.3
};

function setup() {
  createCanvas(800, 500);
  
  // Create video capture
  capture = createCapture(VIDEO);
  capture.hide();
  
  // Initialize PoseNet
  posenet = ml5.poseNet(capture, modelLoaded);
  posenet.on("pose", receivedPoses);
  
  // Initialize particles for background effects
  for (let i = 0; i < 30; i++) {
    particles.push({
      x: random(width),
      y: random(height),
      vx: random(-0.5, 0.5),
      vy: random(-0.5, 0.5),
      size: random(2, 5),
      alpha: random(50, 150)
    });
  }
}

function receivedPoses(poses) {
  if (poses.length > 0) {
    singlePose = poses[0].pose;
    skeleton = poses[0].skeleton;
    
    // Store keypoint history for smooth animations
    if (keypointHistory.length >= maxHistory) {
      keypointHistory.shift();
    }
    keypointHistory.push(JSON.parse(JSON.stringify(singlePose.keypoints)));
  }
}

function modelLoaded() {
  console.log("PoseNet Model Loaded Successfully");
}

function draw() {
  // Animated gradient background
  gradientOffset += 0.5;
  drawAnimatedBackground();
  
  // Calculate scale factors to match webcam to canvas size
  let scaleX = width / capture.width;
  let scaleY = height / capture.height;
  
  // Draw webcam scaled to fill canvas
  image(capture, 0, 0, width, height);
  
  // Draw animated particles
  drawParticles();
  
  // Draw pose detection with scaled coordinates
  if (singlePose) {
    drawKeypoints(scaleX, scaleY);  // Draw keypoints with scale factors
    drawSkeleton(scaleX, scaleY);   // Draw skeleton lines with scale factors
  }
  
  // Draw UI overlay
  drawUIOverlay();
  
  // Update animations
  pulseAnimation += 0.05;
}

function drawAnimatedBackground() {
  // Create animated gradient background
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(
      color(colors.background[0], colors.background[1], colors.background[2]),
      color(colors.background[0] + 10, colors.background[1] + 10, colors.background[2] + 20),
      inter
    );
    stroke(c);
    line(0, y, width, y);
  }
}

function drawParticles() {
  // Animated background particles
  for (let p of particles) {
    p.x += p.vx;
    p.y += p.vy;
    
    // Wrap around edges
    if (p.x < 0) p.x = width;
    if (p.x > width) p.x = 0;
    if (p.y < 0) p.y = height;
    if (p.y > height) p.y = 0;
    
    // Draw particle with pulsing effect
    push();
    fill(colors.primary[0], colors.primary[1], colors.primary[2], p.alpha * 0.3);
    noStroke();
    ellipse(p.x, p.y, p.size + sin(pulseAnimation + p.x) * 1);
    pop();
  }
}

function drawSkeleton(scaleX, scaleY) {
  // Draw skeleton with scaled coordinates - GREEN
  stroke(0, 255, 100);  // Green color
  strokeWeight(5);       // Same as sketch.js
  for (let j = 0; j < skeleton.length; j++) {
    let x1 = skeleton[j][0].position.x * scaleX;
    let y1 = skeleton[j][0].position.y * scaleY;
    let x2 = skeleton[j][1].position.x * scaleX;
    let y2 = skeleton[j][1].position.y * scaleY;
    line(x1, y1, x2, y2);
  }
}

function drawKeypoints(scaleX, scaleY) {
  // Draw keypoints with scaled coordinates - GREEN, smaller size
  fill(0, 255, 100);  // Green color
  noStroke();  // No stroke on dots
  for (let i = 0; i < singlePose.keypoints.length; i++) {
    let x = singlePose.keypoints[i].position.x * scaleX;
    let y = singlePose.keypoints[i].position.y * scaleY;
    ellipse(x, y, keypointConfig.size);
  }
}

// Function removed - all keypoints are now green

function drawUIOverlay() {
  // Professional UI overlay
  push();
  
  // Status indicator
  let statusText = singlePose ? "Pose Detected" : "Waiting for Pose...";
  let statusColor = singlePose ? [100, 255, 100] : [255, 200, 100];
  
  // Status badge
  fill(0, 0, 0, 150);
  noStroke();
  rect(10, 10, 200, 40, 8);
  
  // Pulsing indicator dot
  fill(statusColor[0], statusColor[1], statusColor[2], 200 + sin(pulseAnimation * 2) * 55);
  ellipse(25, 30, 12 + sin(pulseAnimation * 2) * 2);
  
  // Status text
  fill(255, 255, 255);
  textSize(14);
  textAlign(LEFT, CENTER);
  text(statusText, 45, 30);
  
  // Title
  fill(255, 255, 255, 200);
  textSize(18);
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  text("PoseNet Enhanced", 10, height - 50);
  
  // Info text
  textSize(11);
  textStyle(NORMAL);
  fill(200, 200, 200, 180);
  text("Real-time Pose Detection", 10, height - 30);
  
  // Keypoint count
  if (singlePose) {
    let visibleKeypoints = singlePose.keypoints.filter(
      kp => kp.score > keypointConfig.minConfidence
    ).length;
    
    fill(0, 0, 0, 150);
    noStroke();
    rect(width - 150, 10, 140, 30, 8);
    
    fill(255, 255, 255);
    textSize(12);
    textAlign(RIGHT, CENTER);
    text(`Keypoints: ${visibleKeypoints}/17`, width - 20, 25);
  }
  
  pop();
}
