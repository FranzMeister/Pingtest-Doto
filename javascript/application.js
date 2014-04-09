window.App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.HomeController = Em.Controller.extend();
App.HomeView = Em.View.extend({
    templateName: 'home'
});

App.ImprintController = Em.Controller.extend();
App.ImprintView = Em.View.extend({
    templateName: 'imprint'
});

App.Dota2Controller = Em.Controller.extend();
App.Dota2View = Em.View.extend({
    templateName: 'dota2'
});

App.Router.map(function() {
    this.route("home", { path: "/" });
    this.route("dota2", { path: "/dota2" });
    this.route("imprint", { path: "/imprint" });
});
