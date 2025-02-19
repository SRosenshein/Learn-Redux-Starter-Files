function posts(state = [], action) {
	switch (action.type) {
		case 'INCREMENT_LIKES':
			// return the updated state
			console.log("like increment");
			const i = action.index;
			return [
				...state.slice(0,i), {...state[i], likes: state[i].likes + 1}, ...state.slice(i+1)
			]
		default:
			return state;
	}
}

export default posts;