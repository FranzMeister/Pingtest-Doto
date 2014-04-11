window.App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

function randomRange(min, max) {
  var range = (max-min) + 1;
  var rand = Math.floor( Math.random()*range );
  return min+rand;
}

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

App.FaqView = Em.View.extend({
    templateName: 'faq'
});

App.Dota2View = Em.View.extend({
    templateName: 'dota2'
});
App.Dota2Route = Ember.Route.extend({
  model: function() {
    return this.store.find('server');
  }
});
App.Dota2Controller = Ember.ArrayController.extend({
  //see http://emberjs.com/guides/controllers/representing-multiple-models-with-arraycontroller/
  actions: {
    doPing: function(times){
      console.log("I will ping all servers " + times + " times.");

      this.get("content").forEach(function(serverItem){
        serverItem.set("isFinished", false);
        serverItem.set("isQueried", true);

        // lies lies lies
        setTimeout(function() {
          // more lies
          var pingMin = randomRange(10, 200);
          var pingMax = randomRange(pingMin, pingMin + randomRange(10, 100));

          serverItem.set("pingMin", pingMin);
          serverItem.set("pingMax", pingMax);
          serverItem.set("isFinished", true);
        }, randomRange(1000, 3000));
      });
    }
  }
});

App.Router.map(function() {
    this.route("home", { path: "/" });
    this.route("dota2", { path: "/dota2" });
    this.route("imprint", { path: "/imprint" });
    this.route("faq", { path: "/faq"}); //still thinking if it should be an About or an FAQ. In an FAQ we can add more stuff than just what it is about.
});
