
var controller = new ScrollMagic.Controller();

var Scene = new ScrollMagic.Scene({
    triggerElement:'#about'
}) 
    
.setClassToggle('.illus img', 'fade-in')
.addTo(controller);
    