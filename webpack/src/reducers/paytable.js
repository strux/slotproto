const jp = require('jsonpath');

const paytable = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return defaultState
    }
}
export default paytable

const getStripInfo = (state) => {
    let info = jp.query(state, '$..StripInfo[?(@.name=="BaseGame")].Strip.*').map(s => s.Stop.map(i => i.symbolID));
    return info;
}
export { getStripInfo }






// Large default spin state object
const defaultState = {
  "responseBody": null,
  "responseObject": {
    "GameBetInfo": {
      "MinChipValue": "125",
      "MinBet": "125",
      "MaxBet": "40.0"
    },
    "StripInfo": [
      {
        "name": "BaseGame",
        "Strip": [
          {
            "name": "Reel0",
            "Stop": [
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              }
            ]
          },
          {
            "name": "Reel1",
            "Stop": [
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "SC",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "SC",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "SC",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "SC",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "SC",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              }
            ]
          },
          {
            "name": "Reel2",
            "Stop": [
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "SC",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "SC",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              },
              {
                "symbolID": "SC",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              },
              {
                "symbolID": "SC",
                "weight": "1"
              }
            ]
          },
          {
            "name": "Reel3",
            "Stop": [
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "SC",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "SC",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "SC",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              }
            ]
          },
          {
            "name": "Reel4",
            "Stop": [
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              }
            ]
          }
        ]
      },
      {
        "name": "FreeSpin",
        "Strip": [
          {
            "name": "Reel0",
            "Stop": [
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              }
            ]
          },
          {
            "name": "Reel1",
            "Stop": [
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "SC",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "SC",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "SC",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "SC",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "SC",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              },
              {
                "symbolID": "SC",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "SC",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              }
            ]
          },
          {
            "name": "Reel2",
            "Stop": [
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "SC",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "SC",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              },
              {
                "symbolID": "SC",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "SC",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "SC",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "SC",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              }
            ]
          },
          {
            "name": "Reel3",
            "Stop": [
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "SC",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "SC",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "SC",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "SC",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "SC",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "SC",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "SC",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              }
            ]
          },
          {
            "name": "Reel4",
            "Stop": [
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "WW",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "M2",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "M3",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "M1",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F6",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F7",
                "weight": "1"
              },
              {
                "symbolID": "F8",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "M4",
                "weight": "1"
              },
              {
                "symbolID": "F9",
                "weight": "1"
              },
              {
                "symbolID": "F0",
                "weight": "1"
              },
              {
                "symbolID": "F5",
                "weight": "1"
              }
            ]
          }
        ]
      },
      {
        "name": "HotRoulette",
        "Strip": {
          "name": "HotRouletteNum",
          "Stop": [
            {
              "symbolID": "1",
              "weight": "1"
            },
            {
              "symbolID": "2",
              "weight": "1"
            },
            {
              "symbolID": "3",
              "weight": "1"
            },
            {
              "symbolID": "4",
              "weight": "1"
            },
            {
              "symbolID": "5",
              "weight": "1"
            },
            {
              "symbolID": "6",
              "weight": "1"
            },
            {
              "symbolID": "7",
              "weight": "1"
            },
            {
              "symbolID": "8",
              "weight": "1"
            },
            {
              "symbolID": "9",
              "weight": "1"
            },
            {
              "symbolID": "10",
              "weight": "1"
            },
            {
              "symbolID": "11",
              "weight": "1"
            },
            {
              "symbolID": "12",
              "weight": "1"
            },
            {
              "symbolID": "13",
              "weight": "1"
            },
            {
              "symbolID": "14",
              "weight": "1"
            },
            {
              "symbolID": "15",
              "weight": "1"
            },
            {
              "symbolID": "16",
              "weight": "1"
            },
            {
              "symbolID": "17",
              "weight": "1"
            },
            {
              "symbolID": "18",
              "weight": "1"
            },
            {
              "symbolID": "19",
              "weight": "1"
            },
            {
              "symbolID": "20",
              "weight": "1"
            },
            {
              "symbolID": "21",
              "weight": "1"
            },
            {
              "symbolID": "22",
              "weight": "1"
            },
            {
              "symbolID": "23",
              "weight": "1"
            },
            {
              "symbolID": "24",
              "weight": "1"
            },
            {
              "symbolID": "25",
              "weight": "1"
            },
            {
              "symbolID": "26",
              "weight": "1"
            },
            {
              "symbolID": "27",
              "weight": "1"
            },
            {
              "symbolID": "28",
              "weight": "1"
            },
            {
              "symbolID": "29",
              "weight": "1"
            },
            {
              "symbolID": "30",
              "weight": "1"
            },
            {
              "symbolID": "31",
              "weight": "1"
            },
            {
              "symbolID": "32",
              "weight": "1"
            },
            {
              "symbolID": "33",
              "weight": "1"
            },
            {
              "symbolID": "34",
              "weight": "1"
            },
            {
              "symbolID": "35",
              "weight": "1"
            },
            {
              "symbolID": "36",
              "weight": "1"
            },
            {
              "symbolID": "0",
              "weight": "1"
            }
          ]
        }
      }
    ],
    "PaytableStatistics": {
      "maxRTP": "97.96",
      "description": "Hot Roulette Wolf Run 40L 4x4x4x4x4",
      "name": "Hot Roulette Wolf Run",
      "minRTP": "91.98",
      "type": "Slot"
    },
    "PickerInfo": {
      "MaxTotalPicks": "1",
      "MultiplePicksAllowed": "false",
      "OutcomeTrigger": {
        "name": "Bonus"
      },
      "Triggers": {},
      "verifierStrategy": "LayerPicker",
      "Layer": {
        "Pick": [
          {
            "name": "L0C0R0",
            "cellName": "FreeSpin"
          },
          {
            "name": "L0C1R0",
            "cellName": "HotRoulette"
          }
        ],
        "index": "0",
        "name": "layer0"
      },
      "Decrement": {
        "Count": "0",
        "Strategy": "PickSize"
      },
      "InitialPickCount": "1",
      "ExitOutcomeTrigger": {
        "name": "Bonus"
      },
      "MinPicks": "1",
      "UniquePickRequired": "true",
      "MaxPicksPerTurn": "1",
      "Increment": {
        "Strategy": "NoIncrement",
        "Triggers": {}
      },
      "name": "BonusPicker.PickerInfo",
      "RevealAll": "true",
      "Initial": "false",
      "InitialLayer": "0",
      "AutoAdvance": "false",
      "RevealLayer": "true"
    },
    "PatternSliderInfo": {
      "PatternInfo": {
        "min": "40",
        "Step": "40",
        "max": "40"
      },
      "BetInfo": {
        "min": "2",
        "Step": [
          "2",
          "3",
          "4",
          "6",
          "8",
          "10",
          "15",
          "20",
          "30",
          "40",
          "60",
          "100",
          "150",
          "200",
          "1000",
          "2000",
          "6000",
          "12000",
          "20000"
        ],
        "max": "20000"
      }
    },
    "MaxFreeSpins": "255",
    "PrizeInfo": [
      {
        "Prize": [
          {
            "Symbol": [
              {
                "id": "M1",
                "required": "true"
              },
              {
                "id": "WW",
                "required": "false"
              }
            ],
            "name": "W1",
            "PrizePay": [
              {
                "count": "5",
                "value": "400"
              },
              {
                "count": "4",
                "value": "100"
              },
              {
                "count": "3",
                "value": "25"
              }
            ]
          },
          {
            "Symbol": [
              {
                "id": "M2",
                "required": "true"
              },
              {
                "id": "WW",
                "required": "false"
              }
            ],
            "name": "W2",
            "PrizePay": [
              {
                "count": "5",
                "value": "400"
              },
              {
                "count": "4",
                "value": "100"
              },
              {
                "count": "3",
                "value": "25"
              }
            ]
          },
          {
            "Symbol": [
              {
                "id": "M3",
                "required": "true"
              },
              {
                "id": "WW",
                "required": "false"
              }
            ],
            "name": "W3",
            "PrizePay": [
              {
                "count": "5",
                "value": "250"
              },
              {
                "count": "4",
                "value": "75"
              },
              {
                "count": "3",
                "value": "20"
              }
            ]
          },
          {
            "Symbol": [
              {
                "id": "M4",
                "required": "true"
              },
              {
                "id": "WW",
                "required": "false"
              }
            ],
            "name": "W4",
            "PrizePay": [
              {
                "count": "5",
                "value": "250"
              },
              {
                "count": "4",
                "value": "75"
              },
              {
                "count": "3",
                "value": "20"
              }
            ]
          },
          {
            "Symbol": [
              {
                "id": "F5",
                "required": "true"
              },
              {
                "id": "WW",
                "required": "false"
              }
            ],
            "name": "W5",
            "PrizePay": [
              {
                "count": "5",
                "value": "150"
              },
              {
                "count": "4",
                "value": "50"
              },
              {
                "count": "3",
                "value": "5"
              }
            ]
          },
          {
            "Symbol": [
              {
                "id": "F6",
                "required": "true"
              },
              {
                "id": "WW",
                "required": "false"
              }
            ],
            "name": "W6",
            "PrizePay": [
              {
                "count": "5",
                "value": "150"
              },
              {
                "count": "4",
                "value": "50"
              },
              {
                "count": "3",
                "value": "5"
              }
            ]
          },
          {
            "Symbol": [
              {
                "id": "F7",
                "required": "true"
              },
              {
                "id": "WW",
                "required": "false"
              }
            ],
            "name": "W7",
            "PrizePay": [
              {
                "count": "5",
                "value": "100"
              },
              {
                "count": "4",
                "value": "20"
              },
              {
                "count": "3",
                "value": "5"
              }
            ]
          },
          {
            "Symbol": [
              {
                "id": "F8",
                "required": "true"
              },
              {
                "id": "WW",
                "required": "false"
              }
            ],
            "name": "W8",
            "PrizePay": [
              {
                "count": "5",
                "value": "100"
              },
              {
                "count": "4",
                "value": "20"
              },
              {
                "count": "3",
                "value": "5"
              }
            ]
          },
          {
            "Symbol": [
              {
                "id": "F9",
                "required": "true"
              },
              {
                "id": "WW",
                "required": "false"
              }
            ],
            "name": "W9",
            "PrizePay": [
              {
                "count": "5",
                "value": "100"
              },
              {
                "count": "4",
                "value": "20"
              },
              {
                "count": "3",
                "value": "5"
              }
            ]
          },
          {
            "Symbol": [
              {
                "id": "F0",
                "required": "true"
              },
              {
                "id": "WW",
                "required": "false"
              }
            ],
            "name": "W0",
            "PrizePay": [
              {
                "count": "5",
                "value": "100"
              },
              {
                "count": "4",
                "value": "20"
              },
              {
                "count": "3",
                "value": "5"
              }
            ]
          },
          {
            "Symbol": {
              "id": "WW",
              "required": "true"
            },
            "name": "WW",
            "PrizePay": [
              {
                "count": "5",
                "value": "1000"
              },
              {
                "count": "4",
                "value": "200"
              },
              {
                "count": "3",
                "value": "50"
              }
            ]
          }
        ],
        "name": "PrizeInfo.Lines",
        "strategy": "PayLeft"
      },
      {
        "Prize": {
          "Symbol": {
            "id": "SC",
            "required": "true"
          },
          "name": "SC",
          "PrizePay": {
            "count": "3",
            "value": "2"
          }
        },
        "name": "PrizeInfo.Scatter",
        "strategy": "PayAny"
      },
      {
        "Prize": [
          {
            "Symbol": [
              {
                "id": "1",
                "required": "false"
              },
              {
                "id": "2",
                "required": "false"
              },
              {
                "id": "3",
                "required": "false"
              },
              {
                "id": "4",
                "required": "false"
              },
              {
                "id": "5",
                "required": "false"
              },
              {
                "id": "6",
                "required": "false"
              }
            ],
            "name": "OneToSixPay",
            "PrizePay": {
              "count": "1",
              "value": "1"
            }
          },
          {
            "Symbol": [
              {
                "id": "7",
                "required": "false"
              },
              {
                "id": "8",
                "required": "false"
              },
              {
                "id": "9",
                "required": "false"
              },
              {
                "id": "10",
                "required": "false"
              },
              {
                "id": "11",
                "required": "false"
              },
              {
                "id": "12",
                "required": "false"
              }
            ],
            "name": "SevenToTwelvePay",
            "PrizePay": {
              "count": "1",
              "value": "2"
            }
          },
          {
            "Symbol": [
              {
                "id": "13",
                "required": "false"
              },
              {
                "id": "14",
                "required": "false"
              },
              {
                "id": "15",
                "required": "false"
              },
              {
                "id": "16",
                "required": "false"
              },
              {
                "id": "17",
                "required": "false"
              },
              {
                "id": "18",
                "required": "false"
              }
            ],
            "name": "ThirteenToEighteenPay",
            "PrizePay": {
              "count": "1",
              "value": "3"
            }
          },
          {
            "Symbol": [
              {
                "id": "19",
                "required": "false"
              },
              {
                "id": "20",
                "required": "false"
              },
              {
                "id": "21",
                "required": "false"
              },
              {
                "id": "22",
                "required": "false"
              },
              {
                "id": "23",
                "required": "false"
              },
              {
                "id": "24",
                "required": "false"
              }
            ],
            "name": "NineteenToTwentyFourPay",
            "PrizePay": {
              "count": "1",
              "value": "4"
            }
          },
          {
            "Symbol": [
              {
                "id": "25",
                "required": "false"
              },
              {
                "id": "26",
                "required": "false"
              },
              {
                "id": "27",
                "required": "false"
              },
              {
                "id": "28",
                "required": "false"
              },
              {
                "id": "29",
                "required": "false"
              },
              {
                "id": "30",
                "required": "false"
              }
            ],
            "name": "TwentyFiveToThirtyPay",
            "PrizePay": {
              "count": "1",
              "value": "5"
            }
          },
          {
            "Symbol": [
              {
                "id": "31",
                "required": "false"
              },
              {
                "id": "32",
                "required": "false"
              },
              {
                "id": "33",
                "required": "false"
              },
              {
                "id": "34",
                "required": "false"
              },
              {
                "id": "35",
                "required": "false"
              },
              {
                "id": "36",
                "required": "false"
              }
            ],
            "name": "ThirtyOneToThirtySixPay",
            "PrizePay": {
              "count": "1",
              "value": "6"
            }
          }
        ],
        "name": "PrizeInfoHotRoulette",
        "strategy": "PayTrigger"
      }
    ],
    "DenominationList": {
      "Denomination": [
        "125.0",
        "333.0"
      ]
    },
    "AwardCapInfo": {
      "TriggerInfo": {
        "priority": "100",
        "name": "AwardCapExceeded",
        "stageConnector": "AwardCapToBaseGame"
      },
      "CurrencyCap": {
        "AwardCap": "1000000000000000",
        "CurrencyType": "DDI"
      },
      "name": "AwardCapInfo"
    },
    "AutoSpinInfo": {
      "Step": [
        "10",
        "20",
        "30",
        "40",
        "50"
      ],
      "enable": "True"
    }
  }
}
