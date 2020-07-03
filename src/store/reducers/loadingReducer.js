export default function loading (state = false, action){
    switch (action.type) {
        case 'LOADING_DOG':
            return true ;

        case 'LOADING_NEWS':
            return true ;

        case 'LOADED':
            return false ;

        default:
            return state;
    }
}