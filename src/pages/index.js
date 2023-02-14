import { Inter } from "@next/font/google";
import Countdown from "react-countdown";
import renderer from "@/components/Timer";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const [event, setEvent] = useState("");
	const [date, setDate] = useState("");
	const [timers, setTimers] = useState([]);

	function setTimer() {
		console.log("The timer is being set");
		console.log(new Date(date));

		setTimers([...timers, { event, date: new Date(date) }]);
	}

	return (
		<>
			<nav className="border-b-2 border-gray-200">
				<h1 className="text-3xl text-center font-bold py-5">
					Countdown
				</h1>
			</nav>
			<main>
				<section>
					<form className="text-center p-2 border-red-700 border-2">
						<label htmlFor="event-name">Event</label>
						<input
							id="event-name"
							type="text"
							placeholder="Joey's Birthday"
							onChange={(e) => setEvent(e.target.value)}
						/>
						<label htmlFor="time-input">Enter the end Date: </label>
						<input
							type="datetime-local"
							id="time-input"
							className="border-2 p-1 rounded-md"
							onChange={(e) => setDate(e.target.value)}
						/>
						<input
							type="button"
							value="Add Timer"
							onClick={(e) => {
								e.preventDefault();
								setTimer();
							}}
							className="bg-blue-500 hover:bg-blue-600 focus:ring-2 ring-offset-1 rounded-sm py-1 px-2"
						/>
					</form>
				</section>
				<section className="flex flex-row gap-3">
					{timers.map(({ event, date }, index) => {
						return (
							<div className="border-2 border-red-300 bg-pink-300 rounded-md px-3 py-2">
								<p className="text-lg font-bold">{event}</p>
								<Countdown date={date} renderer={renderer} />;
							</div>
						);
					})}
				</section>
			</main>
		</>
	);
}
