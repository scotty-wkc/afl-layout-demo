// When something is added to the "window" object, it is available to any
// other file.

window.TeamLinksComponent = (props) => {
  const { teamLinksBackground = "brown" } = props;

  const styles = `
.team_page_links {
  background-color: ${teamLinksBackground};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
`;

  const html = `    
<div class="team_page_links">
  <div class="telstra_ad_menu">Telstra Advertisement Menu</div>
  <div class="womens_afl_logo">WAFL Logo</div>
  <div class="teams_icon">Individual Team Logos</div>
</div>
`;

  return { styles, html };
};
