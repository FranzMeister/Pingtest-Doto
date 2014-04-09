App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

App.HomeController = Em.Controller.extend();
App.HomeView = Em.View.extend({
    templateName: 'home'
});

App.ImprintController = Em.Controller.extend();
App.ImprintView = Em.View.extend({
    templateName: 'imprint'
});

App.Router.map(function() {
    this.route("home", { path: "/" });
    this.route("imprint", { path: "/imprint" });
});

App.Router.reopen({
  rootURL: '/'
});
