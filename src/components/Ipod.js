import React from "react";
import Display from "./Display";
import Controller from "./Controller";

// Ipod Functional Component for the Ipod Structure with the incoming Props
const Ipod = (props) => {
	//------------------------------------------------------------------------------------------
	// Unpacking the Props
	const {
		menu,
		screen,
		rotate,
		onNextPress,
		onMenuPress,
		controllerRef,
		songsList,
		nextSong,
		prevSong,
		updateProgress,
		progressRef,
		theme,
		play,
	} = props;
	//------------------------------------------------------------------------------------------
	return (
		<div className="ipod">
			<div className="top-container">
				<div className="display-container">
					<Display
						menu={menu}
						screen={screen}
						songsList={songsList}
						theme={theme}
						updateProgress={updateProgress}
						progressRef={progressRef}
					/>
				</div>
			</div>
			<div className="bottom-container">
				<Controller
					menu={menu}
					rotate={rotate}
					onNextPress={onNextPress}
					onMenuPress={onMenuPress}
					screen={screen}
					controllerRef={controllerRef}
					songsList={songsList}
					nextSong={nextSong}
					prevSong={prevSong}
					play={play}
				/>
			</div>
		</div>
	);
	//------------------------------------------------------------------------------------------
};

export default Ipod;
