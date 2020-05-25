//
// let images = new Array();
//
// images[0] = new Image();
// images[0].src = "../photo/poppy1.jpg";
//
// images[1] = new Image();
// images[1].src = "../photo/poppy2.jpg";
//
// images[2] = new Image();
// images[2].src = "../photo/poppy3.jpg";
//
//


let newPhoto =
  ["../photo/poppy1.jpg", "../photo/poppy2.jpg" , "../photo/poppy3.jpg"];

let photo1Layout = `<button onclick="changePhoto()">
<img src ="assets/photo/poppy1.jpg"></button>`;

let photo2Layout = `<button onclick="changePhoto()">
<img src ="assets/photo/poppy2.jpg"></button>`;

let photo3Layout = `<button onclick="changePhoto()">
<img src ="assets/photo/poppy3.jpg"></button>`;

function changePhoto(){
    // document.getElementsByClassName('photo').innerHTML =
    // `<img src = assets/photo/poppy1.jpg>`;
    console.log("Test Test");

    for(const element of newPhoto){
        if(element == "../photo/poppy1.jpg"){
          document.getElementById('changeImg').innerHTML = photo2Layout;
          break;
        }else if(element == "../photo/poppy2.jpg"){
          document.getElementById('changeImg').innerHTML = photo3Layout;
          break;
        }else if(element == "../photo/poppy3.jpg"){
          document.getElementById('changeImg').innerHTML = photo1Layout;
          break;
        }else{
          console.log("TEST Fail");
        }
    }



  // let poppyLink1 = 'assets/photo/poppy1.jpg';
  // let poppyLink2 = 'assets/photo/poppy2.jpg';
  // let poppyLink3 = 'assets/photo/poppy3.jpg';
  //
  //   for(let i = 0; i <= newPhoto.length; i++){
  //     document.getElementById("changeImg").innerHTML =
  //   }
}




// <button onclick="changePhoto()"><img src ="assets/photo/poppy1.jpg"></button>
