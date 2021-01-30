import Controller from '@ember/controller';

export default Controller.extend({

emailDidChange:Ember.observer('email',function(){
var expression="^[a-zA-Z0-9+_.-]+@gmail.com$";
var email=this.get('email');
var result = email.match(expression);
if(!result) {
         this.set('message',"Given email-id must be valid");
         message.style.color=green;
      } 
      else{
      this.set('message','');
      }
      }),
actions:{

save:function(){

var firstname=this.get('firstname');
var lastname=this.get('lastname');
var email=this.get('email');
var phone=this.get('phone');
var designation=this.get('designation');
var department=this.get('department');
var address1=this.get('address1');
var address2=this.get('address2');
var city=this.get('city');
var pincode=this.get('pincode');
var state=this.get('state');
var country=this.get('country');
var name=firstname+' '+lastname;
var address=address1+' '+address2;

if(firstname===''||lastname===''||email===''||phone===''||designation===''||department===''||address1===''||city===''||pincode===''||state===''||country==='')
{
alert('Please fill all the Details');
}

else
{

var contacts=this.store.createRecord('contact',{
name: name,
email: email,
phone: phone,
designation: designation,
department: department,
address: address,
city: city,
pincode: pincode,
state: state,
country: country
});

contacts.save();

this.setProperties({
firstname: '',
lastname: '',
email: '',
phone: '',
designation: '',
department: '',
address1: '',
address2: '',
city: '',
pincode: '',
state: '',
country: ''
});

this.transitionToRoute('menu.contacts');
}

}

}

});
