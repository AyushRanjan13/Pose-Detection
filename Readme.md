
# 🎯 PoseVision - Real-Time Pose Detection System


A real-time human pose detection application that uses machine learning to track body movements through your webcam. Built with p5.js and ml5.js for an interactive and visually appealing experience.

---

🌐 Live Demo

🚀 Try PoseVision Live Here → https://ayushranjan13.github.io/Pose-Detection/

Experience real-time AI-powered pose detection directly in your browser! No installation required - just allow camera access and start moving.

Note: Best experienced on desktop/laptop with a good webcam and lighting.


## 📋 Table of Contents

- [About the Project](#about-the-project)
- [What is PoseNet?](#what-is-posenet)
- [Technologies Used](#technologies-used)
- [Why p5.js and ml5.js?](#why-p5js-and-ml5js)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Project Structure](#project-structure)

---

## 🎨 About the Project

**PoseVision** is an interactive web application that detects and visualizes human body poses in real-time using your webcam. The application identifies 17 key points on the human body (like nose, eyes, shoulders, elbows, wrists, hips, knees, and ankles) and draws a skeletal structure connecting these points.

This project demonstrates the power of accessible machine learning through browser-based technologies, making computer vision available to anyone with a web browser and webcam.

### Key Highlights:
- ✅ Real-time pose detection (30+ FPS)
- ✅ Visual feedback with animated skeleton overlay
- ✅ Professional UI with status indicators
- ✅ No installation required - runs in browser
- ✅ Privacy-focused - all processing happens locally

---

## 🤖 What is PoseNet?

**PoseNet** is a machine learning model developed by Google that can detect human figures in images and videos. It estimates where key body joints are located and returns their positions with confidence scores.

### How PoseNet Works:

1. **Input**: Takes a video frame or image
2. **Processing**: Uses a pre-trained neural network to analyze the image
3. **Output**: Returns coordinates (x, y) and confidence scores for 17 body keypoints

### The 17 Keypoints Detected:
- **Head**: nose, left_eye, right_eye, left_ear, right_ear
- **Upper Body**: left_shoulder, right_shoulder, left_elbow, right_elbow, left_wrist, right_wrist
- **Lower Body**: left_hip, right_hip, left_knee, right_knee, left_ankle, right_ankle

### Why PoseNet is Powerful:
- 🚀 **Fast**: Runs in real-time on modern browsers
- 📱 **Lightweight**: Works on mobile devices
- 🎯 **Accurate**: Reliable detection even with partial body visibility
- 🔒 **Private**: All processing happens in your browser (no data sent to servers)

### Common Use Cases:
- Fitness and exercise tracking apps
- Interactive games and art installations
- Sign language recognition
- Physical therapy assistance
- Motion capture for animation

---

## 💻 Technologies Used

### 1. **p5.js** (v1.4.0)

p5.js is a JavaScript library that makes coding accessible for artists, designers, educators, and beginners. It's based on Processing and provides a complete set of drawing functionality.

**Official Website**: [p5js.org](https://p5js.org/)

#### Why p5.js?

✅ **Easy Canvas Manipulation**
- Simple API for drawing shapes, lines, and images
- Built-in functions like `ellipse()`, `line()`, `rect()`
- Automatic canvas setup and animation loop

✅ **Webcam Integration**
- `createCapture(VIDEO)` makes webcam access incredibly simple
- No need to deal with complex WebRTC APIs
- Automatic permission handling

✅ **Animation Framework**
- Built-in `setup()` and `draw()` functions
- Automatic frame rate management
- Easy particle systems and animations

✅ **Beginner-Friendly**
- Readable, intuitive syntax
- Extensive documentation and examples
- Large community support

**Example p5.js Code:**
```javascript
function setup() {
  createCanvas(800, 600);  // Create canvas
}

function draw() {
  background(0);           // Black background
  ellipse(400, 300, 50);   // Draw circle
}
```

---

### 2. **ml5.js** (v0.12.2)

ml5.js is a friendly machine learning library built on top of TensorFlow.js. It makes machine learning accessible to artists, creative coders, and students.

**Official Website**: [ml5js.org](https://ml5js.org/)

#### Why ml5.js?

✅ **Simplified Machine Learning**
- Pre-trained models ready to use
- No need to understand neural networks deeply
- Abstract away TensorFlow.js complexity

✅ **PoseNet Integration**
- One-line model initialization: `ml5.poseNet(video, modelReady)`
- Event-based pose detection: `posenet.on('pose', callback)`
- Automatic model loading and management

✅ **Browser-Based ML**
- No server-side processing needed
- Works offline after initial model load
- Privacy-preserving (data stays in browser)

✅ **Perfect for Prototyping**
- Quick experimentation with ML concepts
- Multiple pre-trained models available (image classification, object detection, etc.)
- Active development and community

**Example ml5.js Code:**
```javascript
let classifier = ml5.imageClassifier('MobileNet', modelLoaded);

function modelLoaded() {
  console.log('Model Ready!');
  classifier.classify(img, gotResults);
}

function gotResults(error, results) {
  console.log(results);  // Get predictions
}
```

---

## 🤔 Why p5.js and ml5.js for This ML Project?

### The Perfect Combination

| Aspect | p5.js Provides | ml5.js Provides |
|--------|---------------|-----------------|
| **Visual Output** | Canvas drawing, animations | - |
| **Webcam Input** | Easy video capture | - |
| **ML Model** | - | Pre-trained PoseNet |
| **Data Processing** | - | Pose estimation |
| **Real-time Updates** | Animation loop | Pose events |

### Why Not Use TensorFlow.js Directly?

**TensorFlow.js** (the underlying library) requires:
- Understanding of tensor operations
- Manual model loading and configuration
- Complex preprocessing pipelines
- More boilerplate code

**ml5.js** simplifies this to:
```javascript
// TensorFlow.js way (50+ lines)
// vs
// ml5.js way (3 lines)
posenet = ml5.poseNet(video, modelReady);
posenet.on('pose', receivedPoses);
```

### Why Not Use Python + OpenCV?

**Python/OpenCV** would require:
- Backend server setup
- Video streaming infrastructure
- More complex deployment
- Installation dependencies

**p5.js + ml5.js** provides:
- ✅ Zero installation (runs in browser)
- ✅ Easy sharing (just send a URL)
- ✅ Cross-platform (works anywhere with a browser)
- ✅ Interactive UI out of the box

### Educational Value

This stack is perfect for learning because:
1. **Visual Feedback**: See results immediately
2. **Low Barrier to Entry**: No complex setup
3. **Creative Coding**: Combine ML with art/design
4. **Community Resources**: Tons of examples and tutorials

---

## ✨ Features

- 🎥 **Real-time Webcam Processing**: Captures and analyzes video at 30+ FPS
- 🎯 **17-Point Skeleton Detection**: Tracks all major body joints
- 🌈 **Animated Visual Effects**: 
  - Glowing green keypoints
  - Connected skeleton lines
  - Particle background effects
  - Pulsing status indicators
- 📊 **Live Status Display**:
  - Pose detection status
  - Visible keypoint count
  - Real-time confidence feedback
- 🎨 **Professional UI Design**:
  - Dark gradient background
  - Semi-transparent overlays
  - Smooth animations
  - Responsive layout

---

### Tips for Best Results:
- ✅ Good lighting helps detection accuracy
- ✅ Stand 3-6 feet from camera
- ✅ Ensure your full body is visible
- ✅ Avoid cluttered backgrounds when possible
- ✅ Wait a moment for the model to load initially

---

## 🔧 How It Works

### Application Flow

```
1. Page Loads
   ↓
2. p5.js initializes canvas
   ↓
3. Webcam capture starts (createCapture)
   ↓
4. ml5.js loads PoseNet model
   ↓
5. Model analyzes each video frame
   ↓
6. Keypoints detected and returned
   ↓
7. p5.js draws skeleton and keypoints
   ↓
8. Loop continues at 30+ FPS
```

### Code Architecture

**setup() Function**:
- Creates canvas (800x500px)
- Initializes webcam capture
- Loads PoseNet model
- Creates background particles

**draw() Function** (runs 60 times/second):
- Draws animated background
- Displays webcam feed
- Renders particle effects
- Draws detected keypoints (green circles)
- Draws skeleton connections (green lines)
- Updates UI overlays

**receivedPoses() Callback**:
- Triggered when PoseNet detects poses
- Stores pose data (keypoints + skeleton)
- Updates history for smooth animations


## 📁 Project Structure

```
posevision/
│
├── index.html          # Main HTML file with styling
├── sketch.js           # p5.js + ml5.js logic
├── README.md           # This file
│
└── Libraries (CDN):
    ├── p5.js (v1.4.0)
    └── ml5.js (v0.12.2)
```

### File Descriptions

**index.html**:
- HTML structure and page layout
- CSS styling (gradient background, canvas styling)
- Script imports (p5.js, ml5.js, sketch.js)
- Responsive design elements

**sketch.js**:
- PoseNet initialization and configuration
- Webcam capture setup
- Pose detection callbacks
- Drawing functions (keypoints, skeleton, UI)
- Animation logic (particles, pulses)
- Coordinate scaling for proper overlay

---

## 🎓 Learning Resources

### p5.js Resources
- [Official Documentation](https://p5js.org/reference/)
- [Getting Started Guide](https://p5js.org/get-started/)
- [p5.js](https://p5js.org/)
### ml5.js Resources
- [Official Documentation](https://learn.ml5js.org/)
- [PoseNet Reference](https://learn.ml5js.org/#/reference/posenet)
- [ml5.js](https://ml5js.org/)
