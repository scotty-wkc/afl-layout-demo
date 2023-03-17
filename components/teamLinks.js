window.TeamLinksComponent = () => {
  const styles = `
.team_page_links {
  background-color: brown;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
`;

  const content = `    
<div class="team_page_links">
  <div class="telstra_ad_menu">Telstra Advertisement Menu</div>
  <div class="womens_afl_logo">WAFL Logo</div>
  <div class="teams_icon">Individual Team Logos</div>
</div>
`;

  window.injectCSS(styles);
  window.injectHTML(content);
};

console.log(window);
