import React from "react";
import right from '../assets/images/right-arrow.png'

// Functional Menu Component to Render the Various MENUs
const Menu = (props) => {
	//------------------------------------------------------------------------------------------
	// Unpacking the Props
	const { menu, theme } = props;
	const {
		optionsIndex,
		musicIndex,
		settingsIndex,
		options,
		musicVisible,
		menuVisible,
		settingsVisible,
	} = menu;
	let show = "No Show Available";
	let menuArray, musicArray, settingsArray, value;
	//------------------------------------------------------------------------------------------
	// To check the Menu Visibility
	if (menuVisible === "yes") {
		show = "menu";
		menuArray = options.map((object) => {
			const temp = Object.keys(object);
			return temp[0];
		});
		const val = menuArray[optionsIndex];
		value = val;
	}
	if (musicVisible === "yes") {
		show = "music";
		musicArray = options[optionsIndex].music;
		const val = musicArray[musicIndex];
		value = val;
	}
	if (settingsVisible === "yes") {
		show = "settings";
		settingsArray = options[optionsIndex].settings;
		const val = settingsArray[settingsIndex];
		value = val;
	}
	//------------------------------------------------------------------------------------------
	// Used in JSX Rendering
	const divStyling = (item) => {
		if (value === item) {
			if (theme.themeIndex === 0)
				return { backgroundColor: "#00CCFF" };
			else return { backgroundColor: "#008B8B" }
		}
		return {};
	};
	const imgStyling = (item) => {
		if (value === item) {
			return { display: "initial" };
		}
		return {};
	};
	const getBackground = () => {
		if (theme.themeIndex === 0) {
			return { backgroundColor: "white" };
		} else {
			return { backgroundColor: "#323232" };
		}
	}

	const getTextStyle = () => {
		if (theme.themeIndex == 0) {
			return {
				marginLeft: "1rem",
				textTransform: "capitalize",
			};
		} else {
			return {
				marginLeft: "1rem",
				textTransform: "capitalize",
				color: "white",
			};
		}
	}
	//------------------------------------------------------------------------------------------
	// Menu to be Rendered
	let RenderMenu = "Will be rendered in the future";
	// Main Menu
	if (show === "menu") {
		RenderMenu = menuArray.map((item,val) => {
			return (
				<div className={item} key={val} style={divStyling(item)} id="options">
					<p style={getTextStyle()}>{item}</p>
					<img
						src={theme.themeIndex == 0 ? "https://cdn-icons-png.flaticon.com/512/81/81068.png" : right}
						alt="select"
						style={imgStyling(item)}
					/>
				</div>
			);
		});
	}
	// Music Menu
	else if (show === "music") {
		RenderMenu = musicArray.map((item,val) => (
			<div className={item} key={val} style={divStyling(item)} id="options">
				<p style={getTextStyle()}>{item}</p>
				<img
					src="https://cdn-icons-png.flaticon.com/512/81/81068.png"
					alt="select"
					style={imgStyling(item)}
				/>
			</div>
		));
	}
	// Settings Menu
	else if (show === "settings") {
		RenderMenu = settingsArray.map((item,val) => (
			<div className={item} key={val}style={divStyling(item)} id="options">
				<p style={getTextStyle()}>{item.replace("-", " ")}</p>
				<img
					src="https://cdn-icons-png.flaticon.com/512/81/81068.png"
					alt="select"
					style={imgStyling(item)}
				/>
			</div>
		));
	}

	//------------------------------------------------------------------------------------------
	const ipodTitleTheme = () => {
		if (theme.themeIndex == 1) {
			return {
				fontSize: "1.5rem",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				textShadow: "1px 1px 0px lightgray",
				color: "white",
			};
		} else {
			return {
				fontSize: "1.5rem",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				textShadow: "1px 1px 0px gray",
			};
		}
	}
	// Rendering the Menu as a whole
	return (
		<div
			className={menuVisible === "no" ? "menu hide" : "menu"}
			style={getBackground()}
		>
			<div className="ipod-title" style={ipodTitleTheme()}>
				<p>iPod.js</p>
			</div>
			{RenderMenu}
		</div>
	);
	//------------------------------------------------------------------------------------------
};


export default Menu;
