export default function (state, action) {
    switch (action.type) {
        case 'init':
            const stateStart = initState();
            console.log('stateStart: ', stateStart)
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
            });
        case 'remove':
            return state.filter(todo => todo.id !== action.payload)
        default:
            return state;
    }

}

async function initState() {
    const response = await (
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(response => response.json())
    );
    return response;
}