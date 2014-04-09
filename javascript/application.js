window.App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

// this is created by default
//App.HomeController = Em.Controller.extend();
// this is redundant too I think if not customized further
App.HomeView = Em.View.extend({
    templateName: 'home'
});

App.ImprintView = Em.View.extend({
    templateName: 'imprint'
});

App.Dota2View = Em.View.extend({
    templateName: 'dota2'
});
App.Dota2Route = Ember.Route.extend({
  model: function() {
    return this.store.find('server');
  }
});

App.Router.map(function() {
    this.route("home", { path: "/" });
    this.route("dota2", { path: "/dota2" });
    this.route("imprint", { path: "/imprint" });
});
