export default function news (state = [], action){
    switch (action.type) {
        case 'NEWS_RECEIVED':
            return [ ...action.payload ];

        default:
            return state;
    }
}