var skills = [
  {"header" : "Sensors",
    "captions" : [
      "IMU",
      "Radar",
      "Stereo",
      "Camera",
      "Lidar"
    ],
    "values" : [
      0.85,
      0.85,
      0.75,
      0.95,
      0.85
    ]
  },
  {"header" : "LANGUAGES",
    "captions" : [
      "Java",
      "MATLAB",
      "C++",
      "Python",
      "R"
    ],
    "values" : [
      0.75,
      0.75,
      0.90,
      0.90,
      0.75
    ]
  },
  {"header" : "Tools",
    "captions" : [
      "PyTorch",
      "NumPy",
      "OpenCV",
      "Scikit-learn",
      "ROS"
    ],
    "values" : [
      0.85,
      0.85,
      0.95,
      0.75,
      0.85
    ]
  }
];

var pentagonIndex = 0;
var valueIndex = 0;
var width = 0;
var height = 0;
var radOffset = Math.PI / 2;
var sides = 5; // Number of sides in the polygon
var theta = 2 * Math.PI / sides; // radians per section

function getXY(i, radius) {
  return {
    "x": Math.cos(radOffset + theta * i) * radius * width + width / 2,
    "y": Math.sin(radOffset + theta * i) * radius * height + height / 2
  };
}

var hue = [];
var hueOffset = 25;

// Ensure skills array is defined and populated
if (typeof skills === 'undefined' || !Array.isArray(skills)) {
  console.error("Skills array is not defined or not an array.");
} else {
  for (var s in skills) {
    $(".content").append('<div class="pentagon" id="interests"><div class="header"></div><canvas class="pentCanvas"/></div>');
    hue[s] = (hueOffset + s * 255 / skills.length) % 255;
  }

  $(".pentagon").each(function (index) {
    width = $(this).width();
    height = $(this).height();
    var ctx = $(this).find('canvas')[0].getContext('2d');
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    ctx.font = "15px Monospace";
    ctx.textAlign = "center";

    /*** LABEL ***/
    color = "hsl(" + hue[pentagonIndex] + ", 100%, 50%)";
    ctx.fillStyle = color;
    ctx.fillText(skills[pentagonIndex].header, width / 2, 15);

    ctx.font = "13px Monospace";

    /*** PENTAGON BACKGROUND ***/
    for (var i = 0; i < sides; i++) {
      // For each side, draw two segments: the side, and the radius
      ctx.beginPath();
      xy = getXY(i, 0.3);
      colorJitter = 25 + theta * i * 2;
      color = "hsl(" + hue[pentagonIndex] + ",100%," + colorJitter + "%)";
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.moveTo(0.5 * width, 0.5 * height); // center
      ctx.lineTo(xy.x, xy.y);
      xy = getXY(i + 1, 0.3);
      ctx.lineTo(xy.x, xy.y);
      xy = getXY(i, 0.37);
      ctx.fillText(skills[pentagonIndex].captions[valueIndex], xy.x, xy.y + 5);
      valueIndex++;
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }

    valueIndex = 0;
    ctx.beginPath();
    ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
    ctx.strokeStyle = "rgba(0, 0, 0, 0.3)";
    ctx.lineWidth = 5;
    var value = skills[pentagonIndex].values[valueIndex];
    xy = getXY(i, value * 0.3);
    ctx.moveTo(xy.x, xy.y);
    /*** SKILL GRAPH ***/
    for (var i = 0; i < sides; i++) {
      xy = getXY(i, value * 0.3);
      ctx.lineTo(xy.x, xy.y);
      valueIndex++;
      value = skills[pentagonIndex].values[valueIndex];
    }
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    valueIndex = 0;
    pentagonIndex++;
  });
}