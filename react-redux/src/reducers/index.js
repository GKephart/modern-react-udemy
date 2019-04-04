import {combineReducers} from "redux";




const songsReducer = () => {
	return [
		{title: "beep-boop", duration: "4:05"},
		{title: "Scream", duration:"4:20"},
		{title: "Three Cheers for Sweet Revenge", duration:"4:20"},
		{title: "City Of Evil", duration: "3:14"},
		{title: "Some Times You are the Nail", duration: "4:23"}

	]
};

const selectedSongReducer = (selectedSong = null, action) => {
	if(action.type === "SONG_SELECTED") {
		return action.payload.song;
	}
	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSound: selectedSongReducer
});

