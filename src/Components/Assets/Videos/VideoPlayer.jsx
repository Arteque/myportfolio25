import ReactPlayer from "react-player"


const VideoPlayer = ({videoUrl}) => {
  return (
    <ReactPlayer url={videoUrl} width="100%" height="100%" style={{maxWidth:"1400px", maxHeight:"800px"}}config={{
        youtube:{
            playerVars:{
                showinfo:0,
                modestbranding:0,
                autoplay:1,
                controls:1,
                pip:0,
            },
            embedOptions:{AbortController}
        }
    }}/>
  )
}

export default VideoPlayer
