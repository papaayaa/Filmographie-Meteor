
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import  './login.html';


Template.login.events({
    'click #submit_login': function(event){
        event.preventDefault();
        var username = $('[name=username]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(username, password, function(error){
        	if(error){
        		alert(error.reason);
        	} else {
        		Router.go("filmographie");
        	}
        });
    }
});