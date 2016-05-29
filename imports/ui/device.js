import { Template } from 'meteor/templating';
 
import { Devices } from '../api/devices.js';
 
import './device.html';
 
Template.device.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Devices.update(this._id, {
      $set: { checked: ! this.checked },
    });
  },
  'click .delete'() {
    Devices.remove(this._id);
  },
  'input .device-update'(event) {
    // Set the checked property to the opposite of its current value
    Devices.update(this._id, {
      $set: { deviceupdate: event.target.value },
    });
    console.log("keyup");
  },
});