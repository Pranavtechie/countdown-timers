import TimerForm from "./TimerForm";

export default function NavBar({ callback }) {
	return (
		<div className="navbar bg-base-200">
			<div className="navbar-start">
				<a className="btn btn-ghost normal-case text-xl">
					Countdown Timer
				</a>
			</div>
			<div className="navbar-end">
				<TimerForm callback={callback} />
			</div>
		</div>
	);
}
