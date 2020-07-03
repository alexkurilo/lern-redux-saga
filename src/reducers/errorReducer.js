export default function error (state = false, action){
    switch (action.type) {
        case 'ERROR':
            return !state ;

        default:
            return state;
    }
}