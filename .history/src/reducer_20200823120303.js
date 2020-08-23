export default function (state, action) {
    switch (action.type) {
        case 'init':
            return [
                ...state,
                ...action.payload

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
        case 'toggle':
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        default:
            return state;
    }

}