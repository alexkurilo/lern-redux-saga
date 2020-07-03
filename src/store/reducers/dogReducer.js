export default function dog (state = '', action){
    switch (action.type) {
        case 'DOG_RECEIVED':
            return action.payload;

        default:
            return state;
    }
};