/**
 * Created by Ivan on 30.08.2015.
 */
var user = require('..models/user');



exports.handlers = {

    '/user/login': function(req, res) {
        res.send(User.user.login);
        res.end();
    },

    '/user/name': function(req, res) {
        res.send(User.user.full_name);
        res.end();
    },

    '/user/birthday':function(req, res) {
        res.send(User.user.birthday);
        res.end();
    },

    '/user/sex': function(req, res) {
        res.send(User.user.sex);
        res.end();
    },

    '/user/email': function(req, res) {
        res.send(User.user.email);
        res.end();
    },

    '/user/changeBirthday': function(req, res) {
        res.send(User.user.changeBirthday);
        res.end();
    },

    '/user/changeFull_name': function(req, res) {
        res.send(User.user.changeFull_name);
        res.end();
    },

    '/user/changeBirthday': function(req, res) {
        res.send(User.user.changeBirthday);
        res.end();
    },

    '/user/changeEmail': function(req, res) {
        res.send(User.user.changeEmail);
        res.end();
    },
}
