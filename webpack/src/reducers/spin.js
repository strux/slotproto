const spinResult = (state = defaultState, action) => {
    switch (action.type) {
        case 'SPIN_RECEIVED':
            return action.payload
        default:
            return state
    }
}

export default spinResult

const defaultState = {
    "cash": 2249433271,
    "responseBody": null,
    "responseObject": {
      "TransactionId": "A01M@-15182051254297",
      "PatternSliderInput": {
        "PatternsBet": "40",
        "BetPerPattern": "20000"
      },
      "PopulationOutcome": [
        {
          "Entry": [
            {
              "Cell": "spins,5,trigger,FreeSpin",
              "stripIndex": "0",
              "name": "L0C0R0"
            },
            {
              "Cell": "spins,200,trigger,HotRoulette",
              "stripIndex": "1",
              "name": "L0C1R0"
            }
          ],
          "name": "BonusPicker.Picks",
          "stage": "BonusPicker"
        },
        {
          "Entry": [
            {
              "Cell": [
                "M4",
                "F6",
                "F9",
                "F9"
              ],
              "stripIndex": "9",
              "name": "Reel0"
            },
            {
              "Cell": [
                "F6",
                "M4",
                "F7",
                "F9"
              ],
              "stripIndex": "3",
              "name": "Reel1"
            },
            {
              "Cell": [
                "M3",
                "M3",
                "F5",
                "F8"
              ],
              "stripIndex": "10",
              "name": "Reel2"
            },
            {
              "Cell": [
                "F5",
                "M2",
                "F0",
                "M2"
              ],
              "stripIndex": "27",
              "name": "Reel3"
            },
            {
              "Cell": [
                "M1",
                "F7",
                "M4",
                "SC"
              ],
              "stripIndex": "17",
              "name": "Reel4"
            }
          ],
          "name": "BaseGame.Reels",
          "stage": "BaseGame"
        },
        {
          "Entry": [
            {
              "Cell": [
                "M3",
                "F5",
                "F8",
                "M3"
              ],
              "stripIndex": "83",
              "name": "Reel0"
            },
            {
              "Cell": [
                "M3",
                "WW",
                "WW",
                "WW"
              ],
              "stripIndex": "32",
              "name": "Reel1"
            },
            {
              "Cell": [
                "F9",
                "F7",
                "M1",
                "F6"
              ],
              "stripIndex": "91",
              "name": "Reel2"
            },
            {
              "Cell": [
                "M2",
                "F0",
                "F9",
                "SC"
              ],
              "stripIndex": "55",
              "name": "Reel3"
            },
            {
              "Cell": [
                "WW",
                "WW",
                "WW",
                "WW"
              ],
              "stripIndex": "35",
              "name": "Reel4"
            }
          ],
          "name": "FreeSpin.Reels",
          "stage": "FreeSpin"
        }
      ],
      "AwardCapOutcome": {
        "AwardCapExceeded": "false",
        "name": "AwardCap"
      },
      "OutcomeDetail": {
        "TransactionId": "A01M@-15182051254343",
        "Payout": "0",
        "GameStatus": "Start",
        "Settled": "800000",
        "NextStage": "BaseGame",
        "Stage": "BaseGame",
        "Pending": "0",
        "Balance": "2249433271"
      },
      "Balances": {
        "totalBalance": "2249433271"
      },
      "PickerSummaryOutcome": {
        "Awarded": "0",
        "PickCount": "0",
        "name": "BonusPicker",
        "InitAwarded": "0",
        "MaxPicksAwarded": "false",
        "CurrentLayer": {
          "index": "0",
          "name": "layer0"
        },
        "IncrementTriggered": "false",
        "PicksRemaining": "0"
      },
      "ActionInput": {
        "Action": "play"
      },
      "HighlightOutcome": [
        {
          "name": "BaseGame.Scatter",
          "type": "",
          "Highlight": []
        },
        {
          "name": "BaseGame.Lines",
          "type": "",
          "Highlight": []
        }
      ],
      "PrizeOutcome": [
        {
          "name": "BaseGame.Scatter",
          "pay": "0",
          "type": "Pattern",
          "stage": "",
          "multiplier": "1",
          "totalPay": "0"
        },
        {
          "name": "BaseGame.Lines",
          "pay": "0",
          "type": "Pattern",
          "stage": "",
          "multiplier": "1",
          "totalPay": "0"
        },
        {
          "Prize": {
            "position": "0",
            "symbolCount": "0",
            "betMultiplier": "1",
            "payName": "",
            "name": "Total",
            "pay": "0",
            "multiplier": "1",
            "ways": "0",
            "totalPay": "0"
          },
          "name": "Game.Total",
          "pay": "0",
          "type": "",
          "stage": "",
          "multiplier": "1",
          "totalPay": "0"
        }
      ]
    },
    "gameName": "hotRouletteWolfRun",
    "needsBuyIn": false
}

