// When something is added to the "window" object, it is available to any
// other file.

window.ContentComponent = (props) => {
  const {
     contentBackgroundColor = "rgb(60, 255, 0)",
     contentHeadlinesBackground = "darkslategrey",
     contentHeadlinesBottomBackground = "orange",
     contentRightBackground = "hotpink",

} = props;

const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString();
const formattedTime = currentDate.toLocaleTimeString();


  const styles = `
.content {
  background-color: ${contentBackgroundColor};
  display: flex;
  flex-direction: row;
}

.content .image_and_news_headlines {
  background-color: ${contentHeadlinesBackground};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.content .image_and_news_headlines .bottom_half {
  background-color: ${contentHeadlinesBottomBackground};
  display: flex;
  flex-direction: row;
}

.content .right_column_and_widget {
  background-color: ${contentRightBackground};
  display: flex;
  flex-direction: column;
}
.most_recent_article {
  color: white;
}
`;
  const html = `  
<div class="content">
  <div class="image_and_news_headlines">
    <div class="most_recent_article">Top News Story ${formattedDate} ${formattedTime} milliseconds: ${ms}</div>
    <div class="bottom_half">
      <div class="fantasy_podcast_thumbnail">Podcast Thumbnail</div>
      <div class="second_most_recent_article">Previous Top News Story</div>
    </div>
  </div>

  <div class="right_column_and_widget">
    <div class="branded_countdown_widget">Countdown Widget</div>
    <div class="news_article_list">Older News</div>
    <div class="easily_blocked_ad">Advertisement</div>
  </div>
</div>
`;

  return { styles, html };
};
