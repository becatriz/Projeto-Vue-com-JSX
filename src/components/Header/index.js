import "./_styles.scss";

export const Header = {
  name: "Header",

  render() {
    return (
      <header>
        <nav>
          <div class="menu">
            <nav>
              <ul>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>News</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
                <li>
                  <a>About</a>
                </li>
              </ul>
            </nav>
          </div>
        </nav>
      </header>
    );
  },
};

export default Header;
