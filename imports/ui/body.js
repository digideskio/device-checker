import { Template } from 'meteor/templating';
 
import { Devices } from '../api/devices.js';
 
import './device.js';

import './body.html';
 
Template.body.helpers({
  devices() {
    // Show newest devices at the top
    return Devices.find({userId: Meteor.userId()}, { sort: { createdAt: -1 } });
  },
});

Template.body.events({
  'submit .new-device'(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    const target = event.target;
    const text = target.text.value;
 
    // Insert a device into the collection
    Devices.insert({
      text,
      createdAt: new Date(), // current time
      userId: Meteor.userId()
    });
    console.log(Meteor.userId());
 
    // Clear form
    target.text.value = '';
  },
});