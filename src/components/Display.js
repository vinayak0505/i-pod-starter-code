import React from "react";
import Menu from "./Menu";
import Allsongs from "./Allsongs";
import { WallpaperDark } from "../assets/images/images";

// Functional Display Component to Render the Display in Ipod
const Display = (props) => {
	//------------------------------------------------------------------------------------------
	// Unpacking the Props
	const { menu, screen, songsList, updateProgress, progressRef, theme } =
		props;
	const { wallpaper, screenIndex, wallpaperAngle } = screen;
	//------------------------------------------------------------------------------------------
	// Changing the Ipod Display Theme Color
	const themeDisplay = () => {
		if (theme.themeIndex === 0) {
			return { background: "linear-gradient(90deg, #e3e4e5,#cacaca)" };
		} else {
			return { backgroundColor: "black" };
		}
	};
	//------------------------------------------------------------------------------------------
	return (
		<div className="display" style={themeDisplay()}>
			{screenIndex === 7 && (
				<Allsongs
					songsList={songsList}
					updateProgress={updateProgress}
					progressRef={progressRef}
				/>
			)}
			{screenIndex < 5 &&
				<img
					src={theme.themeIndex == 1 ? WallpaperDark[screenIndex] : wallpaper[screenIndex]}
					alt="DISPLAY SCREEN"
					style={{
						alignSelf:"center",
						transform: `rotate(${wallpaperAngle}deg)`,
						height: "130%",
						width: "100%",
						zIndex: 2,
					}}
				/>
			}
			{screenIndex >= 5 && screenIndex !== 7 && (
				<img
					src={wallpaper[screenIndex]}
					alt="DISPLAY SCREEN"
					style={{
						height: "100%",
						width: "100%",
						zIndex: 2,
					}}
				/>
			)}

			<Menu menu={menu} theme={theme} />
		</div>
	);
	//------------------------------------------------------------------------------------------
};

export default Display;
