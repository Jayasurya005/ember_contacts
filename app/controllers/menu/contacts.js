import Controller from '@ember/controller';

export default Controller.extend({
 
  actions:{
redirect:function(param){
var details=document.getElementById("details");
details.style.display='block';
var table1=document.getElementById("animation");
table1.classList.add('change');
 var td=document.getElementsByClassName("td");
 for(var i=0;i<td.length;i++){
td[i].classList.add('tdchange');
}
localStorage.setItem("phone",param.phone);
this.transitionToRoute('menu.contacts.contactdetails',param.id);
},
close(){
var details=document.getElementById("details");
details.style.display='none';
var table=document.getElementById("animation");
table.classList.remove('change');
 var td=document.getElementsByClassName("td");
 for(var i=0;i<td.length;i++){
td[i].classList.remove('tdchange');
}
this.transitionToRoute('menu.contacts');
}
}
});


