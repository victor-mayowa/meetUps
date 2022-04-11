import React,{useContext} from "react";
import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css"
import FavoritesContext from "../store/Favorites-context";


const MainNavigation = () => {
  const favoritesCtx = useContext(FavoritesContext)

  return (
    <header className={styles.header}> 
      <div className={styles.logo}>ReactMeetUps</div>
      <ul>
        <li>
          <Link to="/">AllMeetUps</Link>
        </li>

        <li>
          <Link to="/NewMeetUps">NewMeetUps</Link>
        </li>
        <li>
          <Link to="/Favorites">Favorites <span className={styles.badge}>{favoritesCtx.totalFavorites}</span></Link>
        </li>
      </ul>
    </header>
  );
};
export default MainNavigation;
