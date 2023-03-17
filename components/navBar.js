// When something is added to the "window" object, it is available to any
// other file.

window.NavbarComponent = () => {
  const styles = `
  .nav_bar {
    background-color: aquamarine;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .nav_bar .right_side_items {
    background-color: rgb(186, 235, 11);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  `;

  const html = `   
  <div class="nav_bar">
  <div class="afl_sponsor_logo">AFL & Toyota Partnership Logo</div>
  <div class="drop_down_menu_and_links">Nav Bar</div>
  <div class="right_side_items">
    <div class="search">Search Tool</div>
    <div class="full_disappearing_menu">Disappearing Menu</div>
  </div>
  </div> 
  `;

  return { styles, html };
};
