function buy (){
    alert('You car is empty')
}

//----------------

const photo = document.getElementById("photochange");

photo.addEventListener("mouseover", () => {
    photo.src="./assets/img/succulents-2.jpg";
  });

  photo.addEventListener("mouseout", () => {
    photo.src="./assets/img/aloe-m.jpg";
  });

//   -------------------------------------------------------

// const cookies = document.getElementById("hiden");

function hide (){
    document.getElementById('hiden').style.display = 'none';
}


