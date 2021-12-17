AFRAME.registerComponent("poster", {
  init: function () {
    this.createPoster();
    this.handleMouseEnterEvent();
    this.handleMouseLeaveEvent();
  },

createPoster:function(){
  const entityEl = document.createElement("a-entity");
  entityEl.setAttribute("visible",true);
  entityEl.setAttribute("geomentry",{
    primitive: "plane",
    width: 20,
    height: 28
  });

  entityEl.setAttribute("position",{x:0, y:5, z:0.1});
  entityEl.setAttribute("material",{ src: item.url});
},

handleMouseEnterEvent:function(){
  this.el.addEventListner("mouseenter",()=>{
    const id = this.el.getAttribute("id");
    const posterId =[
      "superman",
      "spiderman",
      "captain-aero",
      "outer-space",
    ];
    if(posterId.includes(id)){
      const postersContainer = document.querySeector("#posters-container");
      posterContainer.setAttribute("cursor-listner",{
        selectedItemId: id,
      });
      this.el.setAttriute("material",{color:"#1565c0"})
    }
  });
}
};
