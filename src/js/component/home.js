import React, { useState, useEffect } from "react";
import StopButton from "./stopButton";
import ResumeButton from "./resumeButton";
import ResetButton from "./resetButton";

export function Home() {
	const [time, setTime] = useState(0);
	const [time2, setTime2] = useState(0);
	const [time3, setTime3] = useState(0);
	const [time4, setTime4] = useState(0);
	const [time5, setTime5] = useState(0);
	const [time6, setTime6] = useState(0);

	useEffect(() => {
		setInterval(() => {
			setTime(time => time + 1);
		}, 1000);
	}, []);
	if (time === 10) {
		setTime(0);
		setTime2(time2 + 1);
	}
	if (time2 === 10) {
		setTime(0);
		setTime2(0);
		setTime3(time3 + 1);
	}
	if (time3 === 10) {
		setTime(0);
		setTime2(0);
		setTime3(0);
		setTime4(time4 + 1);
	}
	if (time4 === 10) {
		setTime(0);
		setTime2(0);
		setTime3(0);
		setTime4(0);
		setTime5(time5 + 1);
	}
	if (time5 === 10) {
		setTime(0);
		setTime2(0);
		setTime3(0);
		setTime4(0);
		setTime5(0);
		setTime6(time6 + 1);
	}

	return (
		<div className="text-center mt-5">
			<div className="row">
				<div className="col-2"></div>
				<div className="col-1 card bg-dark" style={{ width: " 18rem" }}>
					<i className="far fa-clock fa-5x"></i>
				</div>
				<div className="col-1 card bg-dark" style={{ width: " 18rem" }}>
					<h1 className="m-auto" style={{ color: "white" }}>
						{time6}
					</h1>
				</div>
				<div className="col-1 card bg-dark" style={{ width: " 18rem" }}>
					<h1 className="m-auto" style={{ color: "white" }}>
						{time5}
					</h1>
				</div>
				<div className="col-1 card bg-dark" style={{ width: " 18rem" }}>
					<h1 className="m-auto" style={{ color: "white" }}>
						{time4}
					</h1>
				</div>
				<div className="col-1 card bg-dark" style={{ width: " 18rem" }}>
					<h1 className="m-auto" style={{ color: "white" }}>
						{time3}
					</h1>
				</div>
				<div className="col-1 card bg-dark" style={{ width: " 18rem" }}>
					<h1 className="m-auto" style={{ color: "white" }}>
						{time2}
					</h1>
				</div>
				<div className="col-1 card bg-dark" style={{ width: " 18rem" }}>
					<h1 className="m-auto" style={{ color: "white" }}>
						{time}
					</h1>
				</div>
			</div>
			<div>
				<StopButton />
				<ResumeButton />
				<ResetButton />
			</div>
		</div>
	);
}
