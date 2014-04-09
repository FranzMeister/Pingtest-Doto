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
    } else if (this.get('isQueried') && this.get('isFinished')) {
        return this.get('pingMin') + " - " + this.get('pingMax');
    }
    return "u wot m8?";
  }.property('isQueried', 'isFinished')

});

// this model and fixtures are not final, but should do as a first approximation
App.Server.FIXTURES = [
    //"South East Asia, Singapore",
    {
        id: 1,
        name: "(SEA) Singapore",
        ip: "103.28.54.1"
        //"(SEA) Singapore", "103.10.124.1"
    },
    //"Europe",
    {
        id: 2,
        name: "(EU West) Luxembourg",
        ip: "146.66.152.1"
    },
    {
        id: 3,
        name: "(EU East) Vienna",
        ip: "146.66.155.1"
    },
    //"United States",
    {
        id: 4,
        name: "(US West) Washington",
        ip: "192.69.96.1"
    },
    {
        id: 5,
        name: "(US East) Sterling",
        ip: "208.78.164.1"
    },
    //"Australia",
    {
        id: 6,
        name: "(AU) Sydney",
        ip: "103.10.125.1"
    },
    //"Russia",
    {
        id: 7,
        name: "(SW) Stockholm",
        ip: "146.66.156.1"
    },
    //"South America",
    {
        id: 8,
        name: "(BR)",
        ip: "209.197.29.1"
    },
    {
        id: 9,
        name: "(BR)",
        ip: "209.197.25.1"
    },
    //"South Africa",
    {
        id: 10,
        name: "(SA) Cape Town",
        ip: "197.80.200.1"
    },
    {
        id: 11,
        name: "(SA) Cape Town",
        ip: "196.38.180.1"
    }
]
