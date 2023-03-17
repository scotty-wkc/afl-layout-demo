window.NavbarComponent = () => {
  const styles = `
  `;

  const content = `   
  <div class="nav_bar">
  <div class="afl_sponsor_logo">AFL & Toyota Partnership Logo</div>
  <div class="drop_down_menu_and_links">Nav Bar</div>
  <div class="right_side_items">
    <div class="search">Search Tool</div>
    <div class="full_disappearing_menu">Disappearing Menu</div>
  </div>
  </div> 
  `;

  window.injectCSS(styles);
  window.injectHTML(content);
};

console.log(window);
