import { Inter } from "@next/font/google";
import Countdown from "react-countdown";
import renderer from "@/components/Timer";
import { useState, useEffect } from "react";
import TimerForm from "@/components/TimerForm";
import NavBar from "@/components/NavBar";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const [timers, setTimers] = useState([]);

	function handleCallback(title, date) {
		console.log("The timer is being set");
		console.log(title, date);
		console.log(new Date(date));

		setTimers([...timers, { title, date: new Date(date) }]);
	}

	return (
		<>
			<NavBar callback={handleCallback} />
			<main>
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
