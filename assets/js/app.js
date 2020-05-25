// var to store value to check image
let numCheck = 0;

// array stores location of images in dir
let newPhoto =
  ["../photo/poppy1.jpg", "../photo/poppy2.jpg" , "../photo/poppy3.jpg"];

//var to store the new html that will replace the index page
let photo1Layout = `<img src ="assets/photo/poppy1.jpg" class ="img-fluid img-thumbnail">`;
let photo2Layout = `<img src ="assets/photo/poppy2.jpg" class ="img-fluid img-thumbnail">`;
let photo3Layout = `<img src ="assets/photo/poppy3.jpg" class ="img-fluid img-thumbnail">`;

// Function to change image
function changePhoto(){
    //check value
    if(numCheck == 0){
      //replaces html
      document.getElementById('poppy1').innerHTML = photo2Layout;
      //adds to numCheck
      numCheck++;
      //Same as above but with 2nd img
    }else if(numCheck == 1){
      document.getElementById('poppy1').innerHTML = photo3Layout;
      numCheck++;
      //Else statement to end if loop, prints new img, and resets check value
    }else{
      document.getElementById('poppy1').innerHTML = photo1Layout;
      numCheck = 0;
    }
}
