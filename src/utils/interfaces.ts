


export interface IActionData {
    type: string,
    users: Array<IUser>
}

export interface IActionBoard {
    type: string,
    status: true,
    squers: [],
    currentColor: -1
}


export interface IUser {
    id: number,
    name: string,
    age: number
}


export interface ISquer {
    index: number,
    status: boolean,
    color: number
}

export interface IBoard {
    status: boolean,
    squers: Array<ISquer>,
    currentColor: number

}

export interface IPlayersColors {
    RED: number,
    BLACK: number
}

export interface IPlayers {
    PLAYER_ONE: number,
    PLAYER_TWO: number
}

export interface IPlayer {
    name: string,
    color: number,
    step: number
}

export interface IGameStatus {
    status: number,
    wonObj: {
        direction: number,
        steps: Array<number>
    }

}
export interface IGame {
    moveNumber: number,
    currentPlayer: number,
    playerOne: IPlayer,
    playerTwo: IPlayer,
    gameStatus: IGameStatus

}
export interface IActionGame {
    gameStatus: IGameStatus,
    type: string,
    moveNumber: number,
    currentPlayer: number,
    playerOne: IPlayer,
    playerTwo: IPlayer
}

