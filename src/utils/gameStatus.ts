import { IBoard, ISquer } from "./interfaces";


export const gameStatus = () =>{

    
        return {

            testAllSteps : (squers:Array<ISquer>) =>{
                let resultsObj = {
                    horizObj : {
                        won: false,
                        steps:<number[]>[],
                        colorWon:-1
                    },vertObj : {
                        won: false,
                        steps:<number[]>[],
                        colorWon:-1
                    }
                }
                const getVerticalArray =(start:number,squers:Array<ISquer>) =>{
                    let arrayOfVertical:Array<ISquer> = [];
                    let currentIndex = start;
                    for(let loop =0 ;loop<6;loop++){
                        arrayOfVertical.push(squers[currentIndex])
                        currentIndex = currentIndex + 7;
                    }
                    return arrayOfVertical;
                }
                    for(let loop = 0 ; loop < 6 ; loop ++){
                        const startArr = loop * 7;
                        const endArr = (loop * 7)+6
                    let stepObj ={
                        won:true,
                        steps:[startArr,endArr]
                    }
                    const newArray =squers.slice(startArr,endArr);
                    const firstColor = newArray[0]?.color
                    if(firstColor !== -1){
                        stepObj.won = newArray.every((current,index)=>{
                            return firstColor === current?.color
                        })
                        if(stepObj.won){
                           resultsObj.horizObj.won = stepObj.won
                           resultsObj.horizObj.steps = [...stepObj.steps]
                           resultsObj.horizObj.colorWon = firstColor
                        }
                    }
                }

                for(let loop = 0 ;loop < 6 ; loop ++){
                    const startArr = loop;
                    const endArr = loop + 35;
                
                    let stepObj ={
                        won:true,
                        steps:[startArr,endArr]
                    }
                    const newArray = getVerticalArray(startArr,squers)
                    const firstColor = newArray[0]?.color
                    if(firstColor !== -1){
                        stepObj.won = newArray.every((current,index)=>{
                            return firstColor === current?.color
                        })
                        if(stepObj.won){
                           resultsObj.vertObj.won = stepObj.won
                           resultsObj.vertObj.steps = [...stepObj.steps]
                           resultsObj.vertObj.colorWon = firstColor
                        }
                    }

                }


                return resultsObj
            },
           

            
    
        }
        

        
    



}