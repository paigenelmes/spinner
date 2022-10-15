//create an array with each frame of the spinner
const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   '];
//set initial speed to 100
let speed = 100;
//for loop over each frame in the spinner
for (const frame of spinner) {
  //set the timeout and write each frame
  setTimeout(() => {
    process.stdout.write(frame);
  }, speed);
  //increment speed by 200 for each frame
  speed += 200;
}