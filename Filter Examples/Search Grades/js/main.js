var myApp = angular.module("myApp",[]);

myApp.factory("Climbers", function(){
  var Climbers = {};
  Climbers.rating = [
    {
      YDS:"5.3",
      French:"3",
      BritishTech:"3",
      BritishAdj:"D",
      UIAA:"III",
      Saxon:"III",
      EwbankAUSNZL:"8-9",
      EwbankSA:"8-9",
      NordicFinnish:"3",
      NordicSWENOR:"3",
      Brazilian:"II sup"
    },
    {
      YDS:"5.4",
      French:"4a",
      BritishTech:"3",
      BritishAdj:"VD",
      UIAA:"IV",
      Saxon:"IV",
      EwbankAUSNZL:"10-11",
      EwbankSA:"10-11",
      NordicFinnish:"4",
      NordicSWENOR:"4",
      Brazilian:"III"
    },
    {
      YDS:"5.5",
      French:"4b",
      BritishTech:"4a",
      BritishAdj:"S",
      UIAA:"IV+",
      Saxon:"V",
      EwbankAUSNZL:"11-12",
      EwbankSA:"11-12",
      NordicFinnish:"5-",
      NordicSWENOR:"5-",
      Brazilian:"III sup"
    },
    {
      YDS:"5.6",
      French:"4c",
      BritishTech:"4b",
      BritishAdj:"HS",
      UIAA:"V",
      Saxon:"VI",
      EwbankAUSNZL:"13",
      EwbankSA:"13",
      NordicFinnish:"5",
      NordicSWENOR:"5",
      Brazilian:"IV"
    },
    {
      YDS:"5.7",
      French:"5a",
      BritishTech:"4c",
      BritishAdj:"VS",
      UIAA:"V+",
      Saxon:"VI",
      EwbankAUSNZL:"14-15",
      EwbankSA:"14-15",
      NordicFinnish:"5",
      NordicSWENOR:"5",
      Brazilian:"IV"
    },
    {
      YDS:"5.8",
      French:"5b",
      BritishTech:"4c",
      BritishAdj:"HVS",
      UIAA:"VI-",
      Saxon:"VIIa",
      EwbankAUSNZL:"15-16",
      EwbankSA:"16",
      NordicFinnish:"5+",
      NordicSWENOR:"5+",
      Brazilian:"IV sup"
    },
    {
      YDS:"5.9",
      French:"5c",
      BritishTech:"5a",
      BritishAdj:"HVS",
      UIAA:"VI",
      Saxon:"VIIb",
      EwbankAUSNZL:"17",
      EwbankSA:"17-18",
      NordicFinnish:"5+",
      NordicSWENOR:"6-",
      Brazilian:"V"
    },
    {
      YDS:"5.10a",
      French:"6a",
      BritishTech:"5a",
      BritishAdj:"E1",
      UIAA:"VI+",
      Saxon:"VIIc",
      EwbankAUSNZL:"18",
      EwbankSA:"19",
      NordicFinnish:"6-",
      NordicSWENOR:"6-",
      Brazilian:"VI"
    },
    {
      YDS:"5.10b",
      French:"6a+",
      BritishTech:"5b",
      BritishAdj:"E1",
      UIAA:"VII-",
      Saxon:"VIIc",
      EwbankAUSNZL:"19",
      EwbankSA:"20",
      NordicFinnish:"6-",
      NordicSWENOR:"6",
      Brazilian:"VI"
    },
    {
      YDS:"5.10c",
      French:"6b",
      BritishTech:"5b",
      BritishAdj:"E2",
      UIAA:"VII",
      Saxon:"VIIIa",
      EwbankAUSNZL:"20",
      EwbankSA:"21",
      NordicFinnish:"6",
      NordicSWENOR:"6+",
      Brazilian:"VI sup"
    },
    {
      YDS:"5.10d",
      French:"6b+",
      BritishTech:"5c",
      BritishAdj:"E2",
      UIAA:"VII+",
      Saxon:"VIIIb",
      EwbankAUSNZL:"20",
      EwbankSA:"22",
      NordicFinnish:"6",
      NordicSWENOR:"7-",
      Brazilian:"VI sup"
    },
    {
      YDS:"5.11a",
      French:"6b+",
      BritishTech:"5c",
      BritishAdj:"E3",
      UIAA:"VII+",
      Saxon:"VIIIc",
      EwbankAUSNZL:"21",
      EwbankSA:"22",
      NordicFinnish:"6+",
      NordicSWENOR:"7-",
      Brazilian:"7a"
    },
    {
      YDS:"5.11b",
      French:"6c",
      BritishTech:"5c",
      BritishAdj:"E3",
      UIAA:"VIII-",
      Saxon:"VIIIc",
      EwbankAUSNZL:"22",
      EwbankSA:"23",
      NordicFinnish:"6+",
      NordicSWENOR:"7",
      Brazilian:"7b"
    },
    {
      YDS:"5.11c",
      French:"6c+",
      BritishTech:"6a",
      BritishAdj:"E4",
      UIAA:"VIII-",
      Saxon:"IXa",
      EwbankAUSNZL:"23",
      EwbankSA:"24",
      NordicFinnish:"7-",
      NordicSWENOR:"7+",
      Brazilian:"7c"
    },
    {
      YDS:"5.11d",
      French:"7a",
      BritishTech:"6a",
      BritishAdj:"E4",
      UIAA:"VIII",
      Saxon:"IXb",
      EwbankAUSNZL:"24",
      EwbankSA:"25",
      NordicFinnish:"7",
      NordicSWENOR:"7+",
      Brazilian:"7c"
    },
    {
      YDS:"5.12a",
      French:"7a+",
      BritishTech:"6a",
      BritishAdj:"E5",
      UIAA:"VIII+",
      Saxon:"IXc",
      EwbankAUSNZL:"25",
      EwbankSA:"26",
      NordicFinnish:"7+",
      NordicSWENOR:"8-",
      Brazilian:"8a"
    },
    {
      YDS:"5.12b",
      French:"7b",
      BritishTech:"6a",
      BritishAdj:"E5",
      UIAA:"VIII+",
      Saxon:"IXc",
      EwbankAUSNZL:"26",
      EwbankSA:"27",
      NordicFinnish:"8-",
      NordicSWENOR:"8-",
      Brazilian:"8b"
    },
    {
      YDS:"5.12c",
      French:"7b+",
      BritishTech:"6b",
      BritishAdj:"E6",
      UIAA:"IX-",
      Saxon:"Xa",
      EwbankAUSNZL:"27",
      EwbankSA:"28",
      NordicFinnish:"8",
      NordicSWENOR:"8",
      Brazilian:"8c"
    },
    {
      YDS:"5.12d",
      French:"7c",
      BritishTech:"6b",
      BritishAdj:"E6",
      UIAA:"IX",
      Saxon:"Xb",
      EwbankAUSNZL:"28",
      EwbankSA:"29",
      NordicFinnish:"8+",
      NordicSWENOR:"8",
      Brazilian:"9a"
    },
    {
      YDS:"5.13a",
      French:"7c+",
      BritishTech:"6b",
      BritishAdj:"E7",
      UIAA:"IX+",
      Saxon:"Xc",
      EwbankAUSNZL:"29",
      EwbankSA:"30",
      NordicFinnish:"9-",
      NordicSWENOR:"8+",
      Brazilian:"9b"
    },
    {
      YDS:"5.13b",
      French:"8a",
      BritishTech:"6c",
      BritishAdj:"E7",
      UIAA:"IX+",
      Saxon:"Xc",
      EwbankAUSNZL:"29",
      EwbankSA:"31",
      NordicFinnish:"9",
      NordicSWENOR:"9-",
      Brazilian:"9c"
    },
    {
      YDS:"5.13c",
      French:"8a+",
      BritishTech:"6c",
      BritishAdj:"E8",
      UIAA:"X-",
      Saxon:"XIa",
      EwbankAUSNZL:"30",
      EwbankSA:"32",
      NordicFinnish:"9+",
      NordicSWENOR:"9-",
      Brazilian:"10a"
    },
    {
      YDS:"5.13d",
      French:"8b",
      BritishTech:"6c",
      BritishAdj:"E9",
      UIAA:"X",
      Saxon:"XIb",
      EwbankAUSNZL:"31",
      EwbankSA:"33",
      NordicFinnish:"10-",
      NordicSWENOR:"9",
      Brazilian:"10b"
    },
    {
      YDS:"5.14a",
      French:"8b+",
      BritishTech:"7a",
      BritishAdj:"E10",
      UIAA:"X+",
      Saxon:"XIc",
      EwbankAUSNZL:"32",
      EwbankSA:"34",
      NordicFinnish:"10",
      NordicSWENOR:"9",
      Brazilian:"10c"
    },
    {
      YDS:"5.14b",
      French:"8c",
      BritishTech:"7a",
      BritishAdj:"E10",
      UIAA:"X+",
      Saxon:"XIc",
      EwbankAUSNZL:"33",
      EwbankSA:"35",
      NordicFinnish:"10+",
      NordicSWENOR:"9+",
      Brazilian:"11a"
    },
    {
      YDS:"5.14c",
      French:"8c+",
      BritishTech:"7b",
      BritishAdj:"E11",
      UIAA:"XI-",
      Saxon:"XIc",
      EwbankAUSNZL:"34",
      EwbankSA:"36",
      NordicFinnish:"11-",
      NordicSWENOR:"9+",
      Brazilian:"11b"
    },
    {
      YDS:"5.14d",
      French:"9a",
      BritishTech:"7b",
      BritishAdj:"E11",
      UIAA:"XI",
      Saxon:"XIc",
      EwbankAUSNZL:"35",
      EwbankSA:"37",
      NordicFinnish:"11",
      NordicSWENOR:"9+",
      Brazilian:"11c"
    },
    {
      YDS:"5.15a",
      French:"9a+",
      BritishTech:"7b",
      BritishAdj:"E11",
      UIAA:"XI+",
      Saxon:"XIc",
      EwbankAUSNZL:"36",
      EwbankSA:"38",
      NordicFinnish:"11",
      NordicSWENOR:"9+",
      Brazilian:"12a"
    },
    {
      YDS:"5.15b",
      French:"9b",
      BritishTech:"7b",
      BritishAdj:"E11",
      UIAA:"XI+/XII-",
      Saxon:"XIc",
      EwbankAUSNZL:"37",
      EwbankSA:"39",
      NordicFinnish:"11",
      NordicSWENOR:"9+",
      Brazilian:"12b"
    },
    {
      YDS:"5.15c",
      French:"9b+",
      BritishTech:"7b",
      BritishAdj:"E11",
      UIAA:"XII-",
      Saxon:"XIc",
      EwbankAUSNZL:"38",
      EwbankSA:"40",
      NordicFinnish:"11",
      NordicSWENOR:"9+",
      Brazilian:"12c"
    }
  ];
  return Climbers;
});

function ClimbersCtrl($scope, Climbers){
  $scope.climbers = Climbers;
}
