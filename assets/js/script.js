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
  for (var i = 0; i < 6; i++) {
    bars += `
    <a href="playlist.html"><div class="pCard">
      <img src="public/imgs/${i}.jpg" alt="">
      <div class="pCardName">
        <h2>Título</h2>
        <h3>Author</h3>
      </div>
    </div></a>
  `;
  }
  if(populares){populares.innerHTML = bars;}

  //forRecentes
  var bars = '';
  var recents = document.querySelector('.recents .rList');

  for (var i = 0; i < 12; i++) {
    bars += `
    <a href="playlist.html"><div class="rCard">
      <img src="public/imgs/${i}.jpg" alt="">
      <div class="pCardName">
        <h2>Título</h2>
        <h3>Author</h3>
      </div>
    </div></a>
    `;
    
  }
  if(recents){recents.innerHTML = bars;}

  
    //forPlaylist
    var bars = '';
    var recents = document.querySelector('.playList #plList');

    if(recents){
      for (var i = 0; i < 12; i++) {
        bars += `
        <div class="plListRow">
        <div class="listId">${i}</div>
        <div class="listThumbnail"><img src="/public/imgs/${i}.jpg" alt=""><i class="fas fa-play"></i></div>
        <div class="listTitle">Why do we use it (feat. @andremalveira)</div>
        <div class="listAlbum">Lorem ipsum</div>
        <div class="listDate">28/04/2021</div>
        <div class="listLike"><i class="far fa-heart"></i></div>
        <div class="listTime">00:00</div>
        </div>
        `;
        
      }
      if(recents){recents.innerHTML = bars;}

      //countSongs
      var countSongs = recents.childElementCount;
      document.querySelector('.playList .plTitle .qtmtime')
      .firstElementChild.innerHTML=(countSongs+' músicas,')

      //focus plListRow
      var plListRow = document.querySelectorAll('#plList .plListRow');
      Array.prototype.forEach.call (plListRow, function (ListRow) {
        ListRow.addEventListener('click', function(){

          var focus = document.querySelector('#plList .plListRow.focus');
          if(focus){
            focus.classList.remove('focus');
            document.querySelector('#plList  .listThumbnail i.fa-pause').classList.add('fa-play');
            document.querySelector('#plList  .listThumbnail i.fa-pause').classList.remove('fa-pause');
          }
          
          this.querySelector('.listThumbnail i').classList.remove('fa-play');
          this.querySelector('.listThumbnail i').classList.add('fa-pause')
          this.classList.add('focus');
        })
      });

      //focus far fa-heart
      var faHeart = document.querySelectorAll('#plList .plListRow .far.fa-heart');
      Array.prototype.forEach.call (faHeart, function (e) {
        e.addEventListener('click', function(){
          this.classList.toggle('fas');
        })
      });
    }

    




/*   //scrollHorizontalPopular
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
  })() */