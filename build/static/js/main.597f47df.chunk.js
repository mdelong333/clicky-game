(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Sailor Moon","image":"./images/sailor-moon2.jpg"},{"id":2,"name":"Luna","image":"./images/luna.jpg"},{"id":3,"name":"Sailor Jupiter","image":"./images/sailor-jupiter.jpg"},{"id":4,"name":"Sailor Mars","image":"./images/sailor-mars2.jpeg"},{"id":5,"name":"Sailor Mercury","image":"./images/sailor-mercury2.jpg"},{"id":6,"name":"Sailor Neptune","image":"./images/sailor-neptune.jpg"},{"id":7,"name":"Sailor Pluto","image":"./images/sailor-pluto.png"},{"id":8,"name":"Sailor Saturn","image":"./images/sailor-saturn.jpg"},{"id":9,"name":"Sailor Uranus","image":"./images/sailor-uranus2.jpeg"},{"id":10,"name":"Sailor Venus","image":"./images/sailor-venus.jpeg"},{"id":11,"name":"Artemis","image":"./images/artemis.jpg"},{"id":12,"name":"Tuxedo Mask","image":"./images/tuxedo-mask2.jpg"}]')},,,,,,,,function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(3),s=t.n(r),m=(t(14),t(4)),c=t(5),o=t(7),l=t(6),g=t(8),u=t(1);t(15);var d=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)},h=(t(16),function(e){return i.a.createElement("div",{className:"card",onClick:function(){return e.clickedImage(e.id)}},i.a.createElement("img",{className:"img",src:e.image,alt:e.name}))});t(17);var p=function(e){return i.a.createElement("div",{className:"jumbotron jumbotron-fluid double-border"},i.a.createElement("div",{className:"container"},i.a.createElement("h1",{className:"display-4"},"Sailor Moon Clicky Game!"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("p",null,"Click on an image to earn points, but don't click any image more than once!")))};t(18);var f=function(e){return i.a.createElement("nav",{className:"navbar"},i.a.createElement("div",{className:"row container-fluid"},i.a.createElement("h3",{className:"nav-item logo"},"Clicky Game"),i.a.createElement("h4",{className:"message nav-item col-6"},e.message),i.a.createElement("h3",{className:"score nav-item"},"Score: ",e.score," | High Score: ",e.highScore)))};function S(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}return e}var v=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(i)))).state={images:u,score:0,highScore:0,message:"Click an image to Start!",clickedImages:[]},t.clickedImage=function(e){var a=t.state.clickedImages,n=t.state.score,i=t.state.highScore;a.includes(e)?12===t.state.score?t.setState({message:"You won! Click an image to Start a new round",score:0,clickedImages:[]}):t.setState({score:0,clickedImages:[],message:"Bummer, try again!"}):(a.push(e),t.increment(),t.imageShuffle(),t.setState({message:"Correct!"})),n>i&&t.setState({highScore:n})},t.increment=function(){t.setState({score:t.state.score+1})},t.imageShuffle=function(){t.setState({images:S(u)})},t}return Object(g.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(f,{score:this.state.score,highScore:this.state.highScore,message:this.state.message}),i.a.createElement(p,null),i.a.createElement(d,null,this.state.images.map((function(a){return i.a.createElement(h,{key:a.id,id:a.id,name:a.name,image:a.image,clickedImage:e.clickedImage})}))))}}]),a}(n.Component);s.a.render(i.a.createElement(v,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.597f47df.chunk.js.map