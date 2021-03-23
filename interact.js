let plane = document.getElementById('plane');

AFRAME.registerComponent('addpic',{
    init: function(){
        this.el.addEventListener('mousedown', (e)=>{
            plane.setAttribute('visible', true);
        })
    }
})