import { useState, useEffect } from "react";
import VideoPlayer from "./VideoPlayer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle, faPlay, faTimes } from "@fortawesome/free-solid-svg-icons";
import Class from './Video.module.scss'

const Video = () => {

    const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlistItems";
    const [youtubeData, setYoutubeData] = useState([]);
    const [videoUrl, setVideoUrl] = useState(null);
    const [player, setPlayer] = useState(false);

    useEffect(() => {
        const fetchYoutubeData = async () => {
          try {
            const response = await fetch(
              `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLRSKNDpLx5fIMfpQI6-2y7WtShBHfLL_u&maxResults=50&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`
            );
            const data = await response.json();
            const videos = data.items;
            setYoutubeData(videos)
          } catch (err) {
            console.error("Error fetching YouTube data:", err);
          }
        };
        fetchYoutubeData();
      }, []);

      const openVideo = (e) => {
        e.preventDefault();
        const url = e.target.href;
        const title = e.target.title;
        setVideoUrl({ url, title });
        setPlayer(true);
      };
    
      const videoContainerHandler = (e) => {
            setPlayer(false)
      }


  return (
    <>
    {
    youtubeData.length > 0 ? (
        youtubeData.map((item, index) => (
          <div className={Class.cardcontainer}
            key={index}
            >
            <div className={Class.cardheader}>
              <img
                src={item.snippet.thumbnails.high.url}
                alt={item.snippet.title}
              />
              <a
                href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`}
                title={item.snippet.title}
                target="_blank"
                onClick={(e) => openVideo(e)}
                className={Class.playbtn}
              >
               <span>
                    <FontAwesomeIcon icon={faPlay} />
               </span>
                
              </a>
            </div>
            <div className="card__body">
              <h3>
                {item.snippet.title}
              </h3>
            </div>
          </div>
        ))
      ) : (
        <p>
          <FontAwesomeIcon icon={faCircle} />
          <span>Loading ...</span>
        </p>
      )}
        {player && (
            <>
            <div className={`${Class.fixedPlayer} ${player ? 'open' : null}`} onClick={(e) => videoContainerHandler(e)}>
                <button
                onClick={() => setPlayer(false)}
                >
                <FontAwesomeIcon icon={faTimes} size="xl" />
                </button>
                <h2 >{videoUrl.title}</h2>
                <VideoPlayer videoUrl={videoUrl.url} />
            </div>
          </>
        )} 
    </>
  )
}

export default Video
