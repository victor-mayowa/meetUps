import React ,{useContext} from "react";
import styles from "./MeetUpItem.module.css";
import Card from "../ui/Card";
import FavoritesContext from "../store/Favorites-context";

const MeetUpItem = (props) => {

  const favoritesCtx = useContext(FavoritesContext)

  const itemIsFavorites = favoritesCtx.itemIsFavorites(props.id)

const toggleFavoriteStatusHandler = ()=>{
  if(itemIsFavorites){
    favoritesCtx.removeFavorites(props.id)
  }else{
    const newFavorite={
      id:props.id,
      title:props.title.id,
      description:props.description,
      image:props.image,
      address:props.address
    }
    favoritesCtx.addFavorites(newFavorite)
  }

}

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styles.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorites ? "Remove from favorites" : "To favorites"}</button>
        </div>
      </Card>
    </li>
  );
};
export default MeetUpItem;
