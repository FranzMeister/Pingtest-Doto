App.Server = DS.Model.extend({
  name: DS.attr('string'),
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
App.Server.FIXTURES = [
    //"South East Asia, Singapore",
    {
        id: 10,
        name: "(SEA) Singapore",
        ip: "103.28.54.1"
    },
    {
        id: 11,
        name: "(SEA) Singapore",
        ip: "103.10.124.1"
    },
    //"Europe",
    {
        id: 20,
        name: "(EU West) Luxembourg",
        ip: "146.66.152.1"
    },
    {
        id: 30,
        name: "(EU East) Vienna",
        ip: "146.66.155.1"
    },
    //"United States",
    {
        id: 40,
        name: "(US West) Washington",
        ip: "192.69.96.1"
    },
    {
        id: 50,
        name: "(US East) Sterling",
        ip: "208.78.164.1"
    },
    //"Australia",
    {
        id: 60,
        name: "(AU) Sydney",
        ip: "103.10.125.1"
    },
    //"Russia",
    {
        id: 70,
        name: "(SW) Stockholm",
        ip: "146.66.156.1"
    },
    //"South America",
    {
        id: 80,
        name: "(BR)",
        ip: "209.197.29.1"
    },
    {
        id: 90,
        name: "(BR)",
        ip: "209.197.25.1"
    },
    //"South Africa",
    {
        id: 100,
        name: "(SA) Cape Town",
        ip: "197.80.200.1"
    },
    {
        id: 110,
        name: "(SA) Cape Town",
        ip: "196.38.180.1"
    }
]
