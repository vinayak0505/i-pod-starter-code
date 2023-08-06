import React from "react";

// Functional All-songs Component to Render the Song Player which plays the Song in the Ipod
const Allsongs = (props) => {
	//------------------------------------------------------------------------------------------
	// Unpacking the Props
	const { songsList, updateProgress, progressRef,theme } = props;
	const { songs, thumbnails, songIndex, name } = songsList;
	const audio = songs[songIndex];
	//------------------------------------------------------------------------------------------
	// To update the Progress Bar
	audio.addEventListener("timeupdate", (event) => {
		updateProgress(event);
	});

	const playerStyle = () => {
		var style = {
			height: "100%",
			width: "100%",
			textTransform: "capitalize",
			zIndex: 5,
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-evenly",
			alignItems: "center",
			overflow: "hidden",
			backgroundColor: "#ADD8E6",
		};
		if(theme.themeIndex == 1){
			style.backgroundColor = "#5293F7"
		}
		return style;
	};
	//------------------------------------------------------------------------------------------
	return (
		<div className="music-player" style={playerStyle()}>
			<div className="song-info" style={styles.songInfo}>
				<img
					src={thumbnails[songIndex]}
					alt="song-thumbnail"
				/>
				<p style={styles.title}>{name[songIndex]}</p>
			</div>
			<div className="progress-container" style={styles.progressContainer}>
				<div className="progress" ref={progressRef}></div>
			</div>
		</div>
	);
	//------------------------------------------------------------------------------------------
};

const styles = {
	title: {
		fontFamily: "Lobster",
		textAlign: "center",
		marginTop: "20px",
		color: "white",
		fontWeight: "bolder",
		fontSize: "30px",
		letterSpacing: "0.15rem",
	},
	progressContainer: {
		height: "7px",
		backgroundColor: "#fff",
		width: "90%",
	},

	songInfo: {
		height: "70%",
		width: "90%",
		display: "flex",
		marginTop: "-40px",
		overflow: "hidden",
		justifyContent: "space-evenly",
		alignItems: "center",
	},
};

export default Allsongs;
