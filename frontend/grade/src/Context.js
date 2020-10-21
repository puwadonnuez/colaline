import React, { Component } from 'react';

const Context = React.createContext();
const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_RESULT':
			return {
				...state,
				results: [ action.payload, ...state.results ]
			};
		case 'DELETE_RESULT':
			return {
				...state,
				results: state.results.filter((result) => result.id !== action.payload)
			};
		case 'DELETE_GP':
			return {
				results: action.payload
			};
		case 'GPA':
			return {
				gpa: action.payload
			};
		default:
			return state;
	}
};
export class Provider extends Component {
	state = {
		results: [],
		gpa: 0,
		dispatch: (action) => {
			this.setState((state) => reducer(state, action));
		}
	};

	render() {
		return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
	}
}

export const Consumer = Context.Consumer;
