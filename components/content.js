// When something is added to the "window" object, it is available to any
// other file.

window.ContentComponent = (props) => {
  const {
     contentBackgroundColor = "rgb(60, 255, 0)",
     contentHeadlinesBackground = "darkslategrey",
     contentHeadlinesBottomBackground = "navy",
     contentRightBackground = "hotpink",

} = props;

  // When you use the ` character, you can write a string that spans multiple
  // lines. This is called a "template literal". It is a new feature of
  // JavaScript that is very useful for writing HTML and CSS.
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
`;
const currentDate=`April 25th`;
  const html = `    
<div class="content">
  <div class="image_and_news_headlines">
    <div class="most_recent_article">Top News Story ${currentDate}</div>
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
