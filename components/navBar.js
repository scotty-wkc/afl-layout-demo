// When something is added to the "window" object, it is available to any
// other file.

window.NavbarComponent = (props) => {
  const {
    navBarBackground = "aquamarine",
    rightSideItemsBackground = "rgb(186, 235, 11)",

    navBarTitle = "AFL & Toyota Partnership Logo",
    searchToolTitle = "Search Tool",
    disappearingMenuTitle = "Disappearing Menu",
  } = props;

  const styles = `
  .nav_bar {
    background-color: ${navBarBackground};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .nav_bar .right_side_items {
    background-color: ${rightSideItemsBackground};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  `;

  const html = `   
  <div class="nav_bar">
  <div class="afl_sponsor_logo">${navBarTitle}</div>
  <div class="drop_down_menu_and_links">Nav Bar</div>
  <div class="right_side_items">
    <div class="search">${searchToolTitle}</div>
    <div class="full_disappearing_menu">${disappearingMenuTitle}</div>
  </div>
  </div> 
  `;

  return { styles, html };
};
