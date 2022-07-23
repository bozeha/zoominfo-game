
import { GameStatus, WonDirection } from "./enums";
import { IBoard, ISquer, IGameStatus } from "./interfaces";


export const gameStatus = () => {


    return {

        testAllSteps: (squers: Array<ISquer>) => {
            let resultsObj = {
                gameStatus: <IGameStatus>{
                    status: GameStatus.PLAYING,
                    wonObj: {
                        direction: WonDirection.NONE,
                        steps: []
                    }
                },
                horizObj: {
                    won: false,
                    steps: <number[]>[],
                    colorWon: -1
                }, vertObj: {
                    won: false,
                    steps: <number[]>[],
                    colorWon: -1
                }
            }
            const getVerticalArray = (start: number, squers: Array<ISquer>) => {
                let arrayOfVertical: Array<ISquer> = [];
                let currentIndex = start;
                for (let loop = 0; loop < 6; loop++) {
                    arrayOfVertical.push(squers[currentIndex])
                    currentIndex = currentIndex + 7;
                }
                return arrayOfVertical;
            }
            ///////////////////horizental 
            for (let loop = 0; loop < 6; loop++) {
                const startArr = loop * 7;
                const endArr = (loop * 7) + 6
                const newArray = squers.slice(startArr, endArr);
                const firstColor = newArray[0]?.color
                if (resultsObj.horizObj.won != true) {
                    let counter = 0;
                    let color = firstColor;
                    newArray.map((current, index) => {
                        if (index === 0) {
                            counter = 1
                        } else {
                            if (current?.color !== undefined && current?.color !== -1 && color === current?.color) {
                                counter++;
                                if (counter === 4) {
                                    resultsObj.horizObj.won = true;
                                    const arrayOfWinIndexes = Array.from({ length: counter }, (_, i) => current?.index - i);
                                    resultsObj.horizObj.steps = [...arrayOfWinIndexes]
                                    resultsObj.horizObj.colorWon = firstColor
                                    resultsObj.gameStatus.status = GameStatus.PLAYER_WON
                                    resultsObj.gameStatus.wonObj.direction = WonDirection.HORIZENTAL
                                    resultsObj.gameStatus.wonObj.steps = [...arrayOfWinIndexes]
                                }
                            } else if (current?.color !== -1) {
                                counter = 1;
                                color = current?.color;
                            }

                        }

                    })

                }
            }
            ///////////////////////// vertical
            for (let loop = 0; loop < 6; loop++) {
                const startArr = loop;
                const newArray = getVerticalArray(startArr, squers)
                const firstColor = newArray[0]?.color
                if (resultsObj.vertObj.won != true) {
                    let counter = 0;
                    let color = firstColor;
                    newArray.map((current, index) => {
                        if (index === 0) {
                            counter = 1
                        } else {
                            if (current?.color !== undefined && current?.color !== -1 && color === current?.color) {
                                counter++;
                                if (counter === 4) {
                                    resultsObj.vertObj.won = true;
                                    const arrayOfWinIndexes = Array.from({ length: counter }, (_, i) => current?.index - (i * 7));
                                    resultsObj.vertObj.steps = [...arrayOfWinIndexes]
                                    resultsObj.vertObj.colorWon = firstColor
                                    resultsObj.gameStatus.status = GameStatus.PLAYER_WON
                                    resultsObj.gameStatus.wonObj.direction = WonDirection.VIRTECAL
                                    resultsObj.gameStatus.wonObj.steps = [...arrayOfWinIndexes]
                                }
                            } else if (current?.color !== -1) {
                                counter = 1;
                                color = current?.color;
                            }

                        }

                    })
                }

            }


            return resultsObj
        },




    }







}