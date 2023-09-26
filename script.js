const helloArray = ["Hey There! It's Umair","I am a Full Stack Developer","I am a UI/UX Designer",
"Actually, I am an Electrical Engineer too!"]

const textContainer =  document.getElementById("txt2");
let hue = 0;
setInterval(()=>{
    hue = (hue + 1) % 360;
    const color = `hsl(${hue}, 100%, 50%)`;
    textContainer.style.color = color;
}, 50);


let count = 0;


const showHello = () =>
{
    const helloItem = document.getElementById('txt1');
    helloItem.innerHTML = helloArray[count];
    count++;
    if(count===helloArray.length){
        count = 0;
    }

}
setInterval(showHello,2000);


const colorPicker = document.getElementById("colorpicker");
const navElem = document.getElementById('myNav');
const bann = document.getElementById('overlayCont')
  
colorPicker.addEventListener("input", function () {
  const bkgColor = colorPicker.value;
  bann.style.backgroundColor = bkgColor;
  //navElem.style.backgroundColor +=  bkgColor;
 // if(navElem.style.backgroundColor==='ffffff')
 // {
 //   navElem.style.backgroundColor = bkgColor
 // }
  //bann.style.backgroundImage = "url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)"

});

/*
const colorPicker = document.getElementById("colorpicker");
const banner = document.getElementsByClassName('.overlay-container');

colorPicker.addEventListener("input", function () {
  const overlayColor = colorPicker.value;
  const gradient = `linear-gradient(rgba(70, 130, 180, .8), rgba(178, 34, 34, .8)), ${overlayColor}`;
  
  // Update the background image property with the new gradient
  banner.style.backgroundImage = gradient;
});
*/
window.onscroll = function() {
    var top = window.scrollY;
    console.log(top);
    if(top>=500)
    {
        navElem.style.border = 'none';
        navElem.style.borderRadius = '11.5rem';
        navElem.style.opacity = 0.5;
    }
    else {
        navElem.style.border = 'none';
        navElem.style.borderRadius = '0';
        navElem.style.opacity = 0.9;

    }
}
window.addEventListener('beforeunload', function () {
    window.scrollTo(0, 0); // Scroll to the top before unloading the page
});

window.addEventListener('load', function() {
    var form = document.querySelector('form');
    form.reset();
});

  /* Demo purposes only */
  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
  


  function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }



   function isScrolledIntoView(elem) {
     var docViewTop = $(window).scrollTop();
     var docViewBottom = docViewTop + $(window).height();

     var elemTop = $(elem).offset().top;
     var elemBottom = elemTop + $(elem).height();

     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
 }

 $(window).scroll(function(){

     if (isScrolledIntoView('.shoes') === true) {
         $('.shoes').addClass('ransi')
         console.log('Shoes element is in the q view');
     }else {
      console.log('Shoes element is not in view');
      $('.shoes').removeClass('ransi'); // Remove the transition class if not in view
  }

 });

$(window).scroll(function() {
  if (isScrolledIntoView('.forum') === true) {
      console.log('Forum element is in view');
      $('.forum').addClass('transi');
  } else {
      console.log('Forum element is not in view');
      $('.forum').removeClass('transi'); // Remove the transition class if not in view
  }
});


///carr ANNIIMMAATTIIOONN

// You can use JavaScript to trigger the animation when you reach the div,
// for example, when the user scrolls to a certain position.

const carContainer = document.querySelector(".car-container");

// Function to start the animation when the div is in the viewport
function startCarAnimation() {
    carContainer.style.animationPlayState = "running";
}

// Use an event listener to trigger the animation when needed (e.g., when the user scrolls)
window.addEventListener("scroll", function() {
    const viewportHeight = window.innerHeight;
    const carContainerTop = carContainer.getBoundingClientRect().top;

    // Adjust this threshold as needed to trigger the animation at the desired point
    if (carContainerTop <= viewportHeight * 0.75) {
        startCarAnimation();
        // Remove the event listener to prevent multiple animations
        window.removeEventListener("scroll", startCarAnimation);
    }
});
