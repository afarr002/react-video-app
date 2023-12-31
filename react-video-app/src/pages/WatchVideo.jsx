import { Link } from "react-router-dom";

import { DislikeIcon, LikeIcon } from "../components/Icons";

import Wrapper from "../styles/WatchVideo";

function WatchVideoPage() {
  function handleLikeVideo() {}

  function handleDislikeVideo() {}

  return (
    <Wrapper filledLike={false} filledDislike={false}>
      <div className="video-container">
        <div className="video">{/* VideoPlayer */}</div>

        <div className="video-info">
          <h3>title</h3>

          <div className="video-info-stats">
            <p>
              <span>0 views</span> <span>•</span>{" "}
              <span>Published 15 minutes ago</span>
            </p>

            <div className="likes-dislikes flex-row">
              <p className="flex-row like">
                <LikeIcon onClick={handleLikeVideo} /> <span>{0}</span>
              </p>
              <p className="flex-row dislike" style={{ marginLeft: "1rem" }}>
                <DislikeIcon onClick={handleDislikeVideo} /> <span>{0}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="channel-info-description">
          <div className="channel-info-flex">
            <div className="channel-info flex-row">
              <img className="avatar md" src="" alt="channel avatar" />
              <div className="channel-info-meta">
                <h4>
                  <Link to={`/channel/profile_id`}>username</Link>
                </h4>
                <span className="secondary small">{0} subscribers</span>
              </div>
            </div>
            {/* SubscribeButton */}
          </div>

          <p>description</p>
        </div>
        {/* Comment List */}
      </div>

      <div className="related-videos">
        <h3 className="up-next">Up Next</h3>
        {/* More Videos */}
      </div>
    </Wrapper>
  );
}

export default WatchVideoPage;
