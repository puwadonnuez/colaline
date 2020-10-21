import React, { Component } from 'react';
import { Consumer } from '../../Context';
import uuid from 'uuid';

class AddResult extends Component {
	state = {
		course: '',
		grade: '',
		unit: '',
		errMessage: false
	};

	onSubmit = (dispatch, e) => {
		e.preventDefault();
		const { course, grade, unit, errMessage } = this.state;
		if (course === '' || grade === '' || (unit === '' || unit === 0)) {
			this.setState({
				errMessage: !errMessage
			});
			setTimeout(() => {
				this.setState({
					errMessage: false
				});
			}, 3000);
		} else {
			if (grade === 'A') {
				const gradeVal = 4 * parseInt(unit);
				const newResult = {
					id: uuid(),
					course,
					grade,
					unit,
					gradeVal
				};
				dispatch({ type: 'ADD_RESULT', payload: newResult });
				this.props.history.push('/results');
			} else if (grade === 'B+') {
				const gradeVal = 3.5 * parseInt(unit);
				const newResult = {
					id: uuid(),
					course,
					grade,
					unit,
					gradeVal
				};
				dispatch({ type: 'ADD_RESULT', payload: newResult });
				this.props.history.push('/results');
			} else if (grade === 'B') {
				const gradeVal = 3 * parseInt(unit);
				const newResult = {
					id: uuid(),
					course,
					grade,
					unit,
					gradeVal
				};
				dispatch({ type: 'ADD_RESULT', payload: newResult });
				this.props.history.push('/results');
			}
			else if (grade === 'C+') {
				const gradeVal = 2.5 * parseInt(unit);
				const newResult = {
					id: uuid(),
					course,
					grade,
					unit,
					gradeVal
				};
				dispatch({ type: 'ADD_RESULT', payload: newResult });
				this.props.history.push('/results');
			} else if (grade === 'C') {
				const gradeVal = 2 * parseInt(unit);
				const newResult = {
					id: uuid(),
					course,
					grade,
					unit,
					gradeVal
				};
				dispatch({ type: 'ADD_RESULT', payload: newResult });
				this.props.history.push('/results');
			}
			else if (grade === 'D+') {
				const gradeVal = 1.5 * parseInt(unit);
				const newResult = {
					id: uuid(),
					course,
					grade,
					unit,
					gradeVal
				};
				dispatch({ type: 'ADD_RESULT', payload: newResult });
				this.props.history.push('/results');
			} else if (grade === 'D') {
				const gradeVal = 1 * parseInt(unit);
				const newResult = {
					id: uuid(),
					course,
					grade,
					unit,
					gradeVal
				};
				dispatch({ type: 'ADD_RESULT', payload: newResult });
				this.props.history.push('/results');
			}
			else if (grade === 'F') {
				const gradeVal = 0 * parseInt(unit);
				const newResult = {
					id: uuid(),
					course,
					grade,
					unit,
					gradeVal
				};
				dispatch({ type: 'ADD_RESULT', payload: newResult });
				this.props.history.push('/results');
			} else {
				this.setState({
					errMessage: !errMessage
				});
				setTimeout(() => {
					this.setState({
						errMessage: false
					});
				}, 3000);
			}
		}
	};

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value.trim().toUpperCase()
		});
	};
	render() {
		const { course, grade, unit, errMessage } = this.state;
		return (
			<Consumer>
				{(value) => {
					const { dispatch, results, cumulativeData } = value;
					return (
						<div className="container mt-5">
                         <div className="jumbotron">
								<div className="card-content">
									<form onSubmit={this.onSubmit.bind(this, dispatch)}>
										<div className="form-group">
											<label htmlFor="course">ชื่อวิชา:</label>
											<input
												type="text"
												className="form-control"
												name="course"
												value={course}
												onChange={this.onChange}
												placeholder="การเขียนโปรแกรมจาว่า"
											/>
										</div>
										<div className="form-group">
											<label htmlFor="course">หน่วยกิต:</label>
											<input
												type="number"
												className="form-control"
												name="unit"
												value={unit}
												onChange={this.onChange}
												placeholder="4"
											/>
										</div>
										<div className="form-group">
											<label htmlFor="course">เกรด:</label>
											<input
												type="text"
												className="form-control"
												name="grade"
												value={grade}
												onChange={this.onChange}
												placeholder="A, B, C..."
											/>
										</div>
										{errMessage ? (
									<div className="alert alert-danger">
										<strong>
											กรุณากรอกข้อมูลให้ครบถ้วน
										</strong>
									</div>
								) : null}
										<input type="submit" className="btn btn-success btn-lg btn-block" />
									</form>
								</div>
						 </div>
					
						
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default AddResult;
