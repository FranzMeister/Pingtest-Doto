App.Server = DS.Model.extend({
  name: DS.attr('string'),
  game: DS.attr('string'), //dota2 for example
  ip: DS.attr('string'),
  pingMin: DS.attr('int'),
  pingMax: DS.attr('int'),
  isQueried: DS.attr('boolean'),
  isFinished: DS.attr('boolean'),

  stateText: function() {
    if (!this.get('isQueried')) {
        return "???";
    } else if (this.get('isQueried') && !this.get('isFinished')) {
        return "PENDING";
    } else if (this.get('isFinished')) {
        return this.get('pingMin') + " - " + this.get('pingMax');
    }
    return "u wot m8?";
  }.property('isQueried', 'isFinished')

});

// this model and fixtures are not final, but should do as a first approximation
dota2servers = [
    //"South East Asia, Singapore",
    {
        name: "(SEA) Singapore",
        ip: "103.28.54.1"
    },
    {
        name: "(SEA) Singapore",
        ip: "103.10.124.1"
    },
    //"Europe",
    {
        name: "(EU West) Luxembourg",
        ip: "146.66.152.1"
    },
    {
        name: "(EU East) Vienna",
        ip: "146.66.155.1"
    },
    //"United States",
    {
        name: "(US West) Washington",
        ip: "192.69.96.1"
    },
    {
        name: "(US East) Sterling",
        ip: "208.78.164.1"
    },
    //"Australia",
    {
        name: "(AU) Sydney",
        ip: "103.10.125.1"
    },
    //"Russia",
    {
        name: "(SW) Stockholm",
        ip: "146.66.156.1"
    },
    //"South America",
    {
        name: "(BR)",
        ip: "209.197.29.1"
    },
    {
        name: "(BR)",
        ip: "209.197.25.1"
    },
    //"South Africa",
    {
        name: "(SA) Cape Town",
        ip: "197.80.200.1"
    },
    {
        name: "(SA) Cape Town",
        ip: "196.38.180.1"
    }
]

otherServers = [
    //"South East Asia, Singapore",
    {
        name: "Reddit",
        ip: "reddit.com"
    },
    {
        name: "Google",
        ip: "google.com"
    },
]

function processServerEntries(serverArray) {
    for (var i = 0; i < serverArray.length; i++) {
        serverArray[i].id = i+1;
        serverArray[i].game = "dota2";
    }
    return serverArray
}

App.Server.FIXTURES = processServerEntries(dota2servers)
//App.Server.FIXTURES = processServerEntries(otherServers)
