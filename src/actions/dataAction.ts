import {IUser} from '../utils/interfaces'

export const actionTypes = {
    UPDATE_USERS: "UPDATE_USERS"
}

export const updateUsers = (data:Array<IUser>)=> (dispatch: any) =>{
    dispatch({
        type: actionTypes.UPDATE_USERS,
        users:data
    })
}