// window.addEventListener("mousemove",function(details){
//     var rect = document.querySelector("#rect");
//     var xval = gsap.utils.mapRange(0,window.innerWidth,30+rect.getBoundingClientRect().width/2,window.innerWidth - (30+rect.getBoundingClientRect().width/2),details.clientX)
//     gsap.utils
//   gsap.to("#rect",{
//     left : xval +"px",
//     ease : Power3,
  
//   })
// })

// gsap.utils.mapRange(min in , max in , min out , max out, mouse location)
// gsap.utils.mapRange(0, 100 , 20, 80, mouse location)


// ********************************************OTHER PROJECT******************************



// THIS CODING FROM INTERNET 



const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
               
                if (now - prev > delay) {
                  prev = now;
                  return func(...args);
                }
              }
            }
            //  throttling
            // Throttling=> to reduce the number of  execution of particular code
            // means kisi particular code ke number of execution ko kam karna 
            document.querySelector("#center")
.addEventListener("mousemove",throttleFunction((dets) => {
      // your less repeatable code
      var div = document.createElement("div") // creating div 
      div.classList.add("coverimg") // addign class to div
      div.style.left = dets.clientX+"px";// set location of div
      div.style.top = dets.clientY+"px";
      // adding image here
      var img = document.createElement("img");
      img.setAttribute("src","./pic.jpg")
      div.appendChild(img);

     // add div to body
      document.body.appendChild(div);

      gsap.to(img,{
        y:"0",
        ease:Power1,
        duration : .6
        
        
      })
      gsap.to(img,{
        y:"100%",
        ease:Power2,
        delay: .6

      })




      setTimeout(function() {
        div.remove();
      },1000);
            }, 400));



      //  mycode
                // document.querySelector("#center")
                // .addEventListener("mousemove",function(dets){
                //   //  console.log(dets.clientX,dets.clientY)
                //    console.log("images")
                // })