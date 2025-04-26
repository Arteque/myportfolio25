import { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import VideoPlayer from "./VideoPlayer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faCircle,
  faPlay,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Class from "./Video.module.scss";
import dateFormat from "../../../Tools/dateFormat";
import { CookieContext } from "../../../Context/CookiesContext";

const Video = () => {
  const { t, i18n } = useTranslation();

  const YOUTUBE_PLAYLIST_ITEMS_API =
    "https://www.googleapis.com/youtube/v3/playlistItems";
  const [youtubeData, setYoutubeData] = useState([]);
  const [videoUrl, setVideoUrl] = useState(null);
  const [player, setPlayer] = useState(false);

  useEffect(() => {
    const fetchYoutubeData = async () => {
      try {
        const response = await fetch(
          `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLRSKNDpLx5fIMfpQI6-2y7WtShBHfLL_u&maxResults=100&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`
        );
        const data = await response.json();
        const videos = data.items;
        const sortVideos = videos.sort((a, b) => {
          return (
            new Date(b.snippet.publishedAt).getTime() -
            new Date(a.snippet.publishedAt).getTime()
          );
        });
        setYoutubeData(sortVideos);
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
    setPlayer(false);
  };

  //Cookies

  const { cookiesAccepted, acceptCookies, rejectCookies } =
    useContext(CookieContext);

  const [showVideos, setShowVideos] = useState(!cookiesAccepted);

  // Sync local banner visibility with context state
  useEffect(() => {
    cookiesAccepted === "true" ? setShowVideos(false) : setShowVideos(true);
  }, [cookiesAccepted]);

  if (showVideos) {
    return (
      <div className="border">
        <h3 style={{ marginBlock: "1rem" }}>{t("videos.cookies.1")}</h3>
        <p>{t("videos.cookies.2")}</p>
      </div>
    );
  } else {
    return (
      <>
        <div className={`grid__container`}>
          {youtubeData.length > 0 ? (
            youtubeData.map((item, index) => (
              <div
                className={`${Class.video_container} icon-text-container border scroll__fadein`}
                key={index}
                style={{ position: "relative" }}
              >
                <div className="skill__header">
                  <div
                    className="skill__icon"
                    style={{
                      position: "relative",
                      background: `url(${item.snippet.thumbnails.medium.url})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      minWidth: "5rem",
                      minHeight: "5rem",
                      borderRadius: "10px",
                    }}
                  >
                    <FontAwesomeIcon
                      className={Class.play_icon}
                      icon={faPlay}
                    />
                  </div>
                  <div className="skill__content">
                    <p className={Class.projectdate}>
                      <small>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <span>
                          {dateFormat(item.snippet.publishedAt.split("T")[0])}
                        </span>
                      </small>
                    </p>
                    <h4 className="skill__title">{item.snippet.title}</h4>
                  </div>
                </div>
                <Link
                  to={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`}
                  className="video__link"
                  title={item.snippet.title}
                  style={{ position: "absolute", inset: "0", zIndex: "10" }}
                  onClick={openVideo}
                ></Link>
              </div>
            ))
          ) : (
            <p>
              <FontAwesomeIcon icon={faCircle} />
              <span>Loading ...</span>
            </p>
          )}
        </div>
        {player && (
          <>
            <div
              className={`${Class.fixedPlayer} ${player ? "open" : null}`}
              onClick={(e) => videoContainerHandler(e)}
              style={{ zIndex: "999" }}
            >
              <div className={Class.videoctrls}>
                <button onClick={() => setPlayer(false)}>
                  <FontAwesomeIcon icon={faTimes} size="xl" />
                </button>
                <h2
                  style={{
                    textAlign: "center",
                    marginBlockEnd: "1rem",
                    fontSize: "1rem",
                  }}
                >
                  {videoUrl.title}
                </h2>
              </div>
              <VideoPlayer videoUrl={videoUrl.url} />
            </div>
          </>
        )}
      </>
    );
  }
};

export default Video;
