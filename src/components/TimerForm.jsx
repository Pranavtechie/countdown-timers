import { useState } from "react";

export default function TimerForm({ callback }) {
	const [title, setTitle] = useState("");
	const [date, setDate] = useState("");

	function returnInput() {
		console.log("data & time in timer form");
		console.log(date, title);
		callback(title, date);
	}
	return (
		<>
			<label htmlFor="my-modal" className="btn">
				New Timer
			</label>
			<input type="checkbox" id="my-modal" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg text-gray-200">
						Create New Timer
					</h3>
					<div className="form-control w-full max-w-xs">
						<label className="label">
							<span className="label-text">Timer's Title</span>
						</label>
						<input
							type="text"
							placeholder="Type here"
							className="input input-bordered w-full max-w-xs placeholder:text-slate-500"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>
					<div className="form-control w-full max-w-xs">
						<label className="label">
							<span className="label-text">Countdown till</span>
						</label>
						<input
							type="datetime-local"
							className="input input-bordered w-full max-w-xs placeholder:text-slate-500"
							onChange={(e) => setDate(e.target.value)}
							value={date}
						/>
					</div>
					<div className="modal-action">
						<label
							htmlFor="my-modal"
							className="btn"
							onClick={returnInput}
						>
							Submit
						</label>
					</div>
				</div>
			</div>
		</>
	);
}
