import React from 'react';
​
const VideoItemList = ({video, onVideoSelect}) => {
  const videoId = video.id.videoId;
  const addUrl = "http://10.2.200.57:3000/playlists/" + videoId
​
  function postFunction() {
    var http = new XMLHttpRequest();
    http.open("POST", addUrl, true);
    http.send();
  }
​
  return (
    <li className="list-group-item" >
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={video.snippet.thumbnails.default.url} onClick={() => onVideoSelect(video)} />
        </div>
        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
          <div className="add-link" >
            <a id="addLink" href="" onClick={postFunction} >add to playlist</a>
​
          </div>
        </div>
      </div>
    </li>
  );
}
​
export default VideoItemList;
