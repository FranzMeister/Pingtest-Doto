App.Server = DS.Model.extend({
  name: DS.attr('string'),
  ip: DS.attr('string'),
  isQueried: DS.attr('boolean'),
  isFinished: DS.attr('boolean')
});

App.Server.FIXTURES = [
    //"South East Asia, Singapore",
    {
        name: "(SEA) Singapore",
        ip: "103.28.54.1"
        //"(SEA) Singapore", "103.10.124.1"
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
    },
]
