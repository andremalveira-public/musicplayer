  //OVERLAY
  var overlayCheck = false;
  var overlay = document.querySelector('.overlay');
  overlay.addEventListener('click', function(){
    var id = this.attributes['id'].value;
    this.style.display='';
    document.querySelector(`#${id}`).classList.remove('active');
    overlayCheck = false;
  })


  //NAV
  var navCheck = false;
  document.querySelector('header .fa-chevron-right')
  .addEventListener('click', function(){
    if(navCheck == false){
      this.style.transform='rotate(180deg)';
      document.querySelector('.barLeft').style.width='21rem';

      setTimeout(function(){
        document.querySelector('.barLeft').style.transform='translateX(0)';
      }, 80);

      navCheck = true;
    } else {
      this.style.transform='';
      document.querySelector('.barLeft').style.transform='';

      setTimeout(function(){
        document.querySelector('.barLeft').style.width='';
      }, 80);

      navCheck = false;
    }
  })

  //USER
  var userCheck = false;
  document.querySelector('header .ubutton')
  .addEventListener('click', function(){
    var uMenu = this.parentElement.lastElementChild;
    var id = uMenu.attributes['id'].value;
    if(overlayCheck == false){
      uMenu.classList.add('active');
      overlay.style.display='block';
      overlay.setAttribute('id', id)
      overlayCheck = true;
    } else {
      uMenu.classList.remove('active');
      overlay.style.display='';
      overlayCheck = false;
    }
  })


  document.querySelector('.pControls .fa-heart')
  .addEventListener('click', function(){
    this.classList.toggle('fas');
  })


  var moreClick = false;
  var more = document.querySelector('.pControls .fa-bars').parentElement;
  document.querySelector('.pControls .fa-bars')
  .addEventListener('click', function(){
      var more = this.parentElement;
    if(moreClick == false){
      more.classList.add('active');
      more.firstElementChild.classList.add('fasActive');
      moreClick = true;

    } else {
      more.classList.remove('active');
      more.firstElementChild.classList.remove('fasActive');
      moreClick = false;
    }
    
  });

   
  var volClick= false;
  document.querySelector('.pControls .fa-volume-up')
  .addEventListener('click', function(){
    if(volClick == false){
      document.querySelector('.pControls .pVolumeBar')
      .classList.add('mute');

      this.classList.remove('fa-volume-up');
      this.classList.add('fa-volume-mute');
      volClick = true;
    } else {
      document.querySelector('.pControls .pVolumeBar')
      .classList.remove('mute');

      this.classList.remove('fa-volume-mute');
      this.classList.add('fa-volume-up');
      volClick = false;
    }
  })


  document.querySelector('.pControls .fa-random')
  .addEventListener('click', function(){
    this.classList.toggle('fasActive');
  })
  document.querySelector('.pControls .fa-redo-alt')
  .addEventListener('click', function(){
    this.classList.toggle('fasActive');
  })
 
 
  //Esqualizer
  var equalizerClick = false;
  document.querySelector('.pControls .fa-align-left')
  .addEventListener('click', function(){
    this.classList.toggle('fasActive');
    var div = `<div class='bar'></div>`;
      var bars = '';
      var equalizer = document.querySelector('.player .equalizer');
    if(equalizerClick == false){
      for (var i = 0; i < 20; i++) {
        bars += div;
      }
      equalizer.innerHTML = bars;
      equalizerClick = true;
    } else {
      equalizer.innerHTML = bars;
      equalizerClick = false;
    }

  })

  //forPopulares
  var bars = '';
  var populares = document.querySelector('.populares .pList');
  for (var i = 0; i < 10; i++) {
    bars += `
    <div class="pCard">
      <img src="/public/imgs/${i}.jpg" alt="">
      <div class="pCardName">
        <h2>Título</h2>
        <h3>Author</h3>
      </div>
    </div>
  `;
  }
  populares.innerHTML = bars;


  //forRecentes
  var bars = '';
  var recents = document.querySelector('.recents .rList');

  for (var i = 0; i < 12; i++) {
    bars += `
    <div class="rCard">
      <img src="/public/imgs/${i}.jpg" alt="">
      <div class="pCardName">
        <h2>Título</h2>
        <h3>Author</h3>
      </div>
    </div>
    `;
  }
  /*for (var i = 0; i < 2; i++) {
    bars += bars;
  } */

  recents.innerHTML = bars;



  //scrollHorizontalPopular
  (function () {
    let element = document.querySelector('.populares')
    element.addEventListener('wheel', (e) => {

      if (e.deltaY !== 0) {
        e.preventDefault()
        window.requestAnimationFrame(() => {
          element.scrollLeft += e.deltaY 
        })
      }
    })
  })()