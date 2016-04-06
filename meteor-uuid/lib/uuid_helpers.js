import uuid from './uuid';
import { Template } from 'meteor/templating';

Template.registerHelper('uuid', function () {
	return uuid.new();
});