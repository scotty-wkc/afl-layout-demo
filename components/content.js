window.ContentComponent = () => {
  const styles = `
.content {
  background-color: rgb(60, 255, 0);
  display: flex;
  flex-direction: row;
}

.content .image_and_news_headlines {
  background-color: darkslategrey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.content .image_and_news_headlines .bottom_half {
  background-color: navy;
  display: flex;
  flex-direction: row;
}

.content .right_column_and_widget {
  background-color: hotpink;
  display: flex;
  flex-direction: column;
}
`;

  const content = `    
<div class="content">
  <div class="image_and_news_headlines">
    <div class="most_recent_article">Top News Story</div>
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

  window.injectCSS(styles);
  window.injectHTML(content);
};

console.log(window);
