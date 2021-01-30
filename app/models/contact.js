import Model from '@ember-data/model';
import DS from 'ember-data';


export default DS.Model.extend({
name: DS.attr('string'),
email: DS.attr('string'),
phone: DS.attr('string'),
designation: DS.attr('string'),
department: DS.attr('string'),
address: DS.attr('string'),
city: DS.attr('string'),
pincode: DS.attr('string'),
state: DS.attr('string'),
country:DS.attr('string'),

});
