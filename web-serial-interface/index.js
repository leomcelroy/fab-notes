let port;
let width = 500;
let height = 500;
let count = 100;

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

canvas.width = width;
canvas.height = height;

async function openPort() {
    // Prompt user to select any serial port.
    port = await navigator.serial.requestPort();

    // Wait for the serial port to open.
    await port.open({ baudRate: 9600 });
}

function setup() {
  document
    .querySelector(".open-port")
    .addEventListener("click", () => {
      openPort();
    })

  document
    .querySelector(".do-something")
    .addEventListener("click", () => {
      console.log("do something");
    })
}

let serialData = "";

async function readPort() {
  const textDecoder = new TextDecoderStream();
  const readableStreamClosed = port.readable.pipeTo(textDecoder.writable);
  const reader = textDecoder.readable.getReader();

  // Listen to data coming from the serial device.
  while (true) {
    const { value, done } = await reader.read();
    if (done) {
      // Allow the serial port to be closed later.
      reader.releaseLock();

      break;
    }

    // value is string
    serialData += value;
  }
}

function readLine() {
  if (!serialData.includes("\n")) return "";

  const [ first, ...rest ] = serialData.split("\n");
  serialData = rest.join("\n");

  return first.trim();
}


function draw() {
  if (port && port.readable && port.readable.locked === false) readPort();

  const line = readLine();
  if (line.includes("count")) { // count:number
    const newCount = Number(line.split(":")[1].trim())*10;
    count = newCount%width;
  }

  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(count, height/2, 50, 0, 2 * Math.PI);
  ctx.fill();

  window.requestAnimationFrame(draw);
}

setup();
window.requestAnimationFrame(draw);

