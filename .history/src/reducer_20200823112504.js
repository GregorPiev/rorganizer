export default function (state, action) {
    switch (action.type) {
        case 'init':
            return [
                ...state,
                {
                    todos: action.payload
                }
            ]
        case 'add':
            return [
                ...state,
                {
                    title: action.payload,
                    completed: false,
                    id: Date.now()
                }
            ]
        default:
            return state;
    }

}