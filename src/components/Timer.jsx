import React from "react";

export default function TimerEnds({
	days,
	hours,
	minutes,
	seconds,
	completed,
}) {
	if (completed) {
		return <span>You are good to go!</span>;
	} else {
		return (
			<span>
				<p>{days} days</p>
				{hours}:{minutes}:{seconds}
			</span>
		);
	}
}
