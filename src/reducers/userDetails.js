import { constants } from '../constants/constants';

const initialState = {
    authToken: 'ahad1234',
    userRef: 'ahad12345'
}

const userDetails = (state = initialState, action) => {
    switch (action.type) {
        case constants.SET_USER_DETAILS:
            return
        case constants.GET_USER_DETAILS:
            return state
        default:
            return state
    }
};

export default userDetails;