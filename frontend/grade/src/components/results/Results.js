import React, { Component } from 'react';
import Result from './Result';
import { Consumer } from '../../Context';
import axios from 'axios';
class Results extends Component {

	CalcGp = (results, dispatch) => {
		axios.post('http://localhost:4000/calculator_gpa', results).then((data) => {
			console.log(data)
			dispatch({ type: 'GPA', payload: data.data});
			this.props.history.push('/results/gp');
		});
	};
	DeleteGp = (dispatch) => {
		const newResult = [];
		dispatch({ type: 'DELETE_GP', payload: newResult });

	};

	ContinueCalc = () => {
		this.props.history.push('/');
	};
	render() {
		return (
			<Consumer>
				{(value) => {
					const { results, dispatch } = value;
					return (
						<React.Fragment>
							<div className="container mt-5">
								<h1 className="text-center mb-3">รายวิชาที่ทำการลงทะเบียน</h1>
								<table className="table table-dark">
									<thead>
										<tr>
											<th>ชื่อวิชา</th>
											<th>เกรด</th>
											<th>หน่วยกิต</th>
										</tr>
									</thead>
									<tbody>{results.map((result) => <Result key={result.id} result={result} />)}</tbody>
								</table>
								{results.length !== 0 ? (
									<div className="text-center mb-5">
										<button
											onClick={this.ContinueCalc.bind(this)}
											className="btn mx-2 mt-2 btn-outline-dark"
										>
											เพิ่มรายวิชา
										</button>
										<button
											onClick={this.CalcGp.bind(this, results, dispatch)}
											className="btn mx-2 mt-2 btn-outline-dark"
										>
											คำนวณเกรด GPA
										</button>
										<button
											onClick={this.DeleteGp.bind(this, dispatch)}
											className="btn mt-2 btn-outline-danger"
										>
											ลบรายวิชาทั้งหมด
										</button>
									</div>
								) : null}
							</div>
						</React.Fragment>
					);
				}}
			</Consumer>
		);
	}
}

export default Results;
