

export interface IActionData  {
    type:string,
    users:Array<IUser>
}

export interface IActionBoard{
    type:string,
    board:IBoard
}

export interface IUser {
    id:number,
    name:string,
}


export interface ISquer{
    index:number,
    status:boolean,
    color:string
}

export interface IBoard{
    status:boolean,
    squers:Array<ISquer>,
    currentColor:string

}

