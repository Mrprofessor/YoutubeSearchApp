import React from 'react';
import VideoListItems from './video_list_item'

const VideoList = (props) => {
	const VideoItems = props.videos.map((video) => {
		return (
			<VideoListItems 
				onVideoSelect = {props.onVideoSelect}
				key = {video.etag}
				video = {video}
			/>
		);
	});

	return (
		<div>
		<ul className = "col-mid-4 list-group">
			{VideoItems}
		</ul>
		</div>
	);
};

export default VideoList;