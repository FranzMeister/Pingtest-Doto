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

//look at http://stackoverflow.com/questions/4282151/is-it-possible-to-ping-a-server-from-javascript
function ping(ip, resolve, reject) {
    var TIMEOUT = 1500;

    this.img = new Image();
    var start = new Date().getTime();
    this.img.onload = function() { resolve((new Date().getTime()) - start); }; //ms all
    this.img.onerror = function() { resolve((new Date().getTime()) - start); };

    var request_url = "http://" + ip + "/?cachebreaker="+(new Date().getTime())+randomRange(1,9999);
    this.img.src = request_url;
    this.timer = setTimeout(function() { resolve(TIMEOUT);}, TIMEOUT); //TODO? reject?
}

App.Dota2View = Em.View.extend({
    templateName: 'dota2'
});
App.Dota2Route = Ember.Route.extend({
  model: function() {
    return this.store.find('server'); //.filterProperty('game', "dota2"); //or something like this somewhere
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

        var promises = []
        for (var i = 0; i < times; i ++) {
            var promise = new Promise(function(resolve, reject) {
                ping(serverItem.get("ip"), resolve, reject);
            });

            promises.push(promise)
        }

        Promise.all(promises).then(function(values) {
            var sum = _.reduce(values, function(memo, num){ return memo + num; }, 0);
            var avg = sum/values.length;

            serverItem.set("pingMin", _.min(values));
            serverItem.set("pingMax", _.max(values));
            serverItem.set("isFinished", true);
        });
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
