/**
 * action creator
 * return {type: string, payload: {song}}
*/
export const selectSong = (song) => {
	return ({
		type: "SONG_SELECTED",
		payload: {
			song
		}

	});
};