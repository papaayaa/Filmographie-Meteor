
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import  './register.html';

Template.register.events({
    'click #submit_register': function(event){
        event.preventDefault();
        var username = $('[name=username]').val();
        var password = $('[name=password]').val();
        Accounts.createUser({
            username: username,
            password: password
        });
        Router.go('filmographie');
    }
});