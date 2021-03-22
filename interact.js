let plane = document.getElementById('plane');

AFRAME.registerComponent('addPic',{
    init: function(){
        this.el.addEventListener('mousedown', (e)=>{
            plane.setAttribute('visible', true);
        })
    }
})