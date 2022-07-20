import {IActionData} from '../utils/interfaces'

const initial = { users: [] };

const dataReducer = (state = initial, action:IActionData) => {

    switch (action.type) {
        case "UPDATE_DATA":
            return {
                ...state,
                users: action.users
            }
        default:
            return {
                ...state
            }
    }

}

export default dataReducer;