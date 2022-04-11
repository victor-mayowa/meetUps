import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorites: (favoritesMeetup)=>{},
  removeFavorites:(meetupId)=>{},
  itemIsFavorites: (meetupId)=>{}
});

export const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  // const addFavoritesHandler = (favoritesMeetup)=>{
  //     setUserFavorites(userFavorites.concat(favoritesMeetup))
  // }

  const addFavoritesHandler = (favoritesMeetup) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoritesMeetup);
    });
  };

  const removeFavoritesHandler = (meetupId) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup)=>{
         return meetup.id !== meetupId
      })
    });
  };
  const itemIsFavoritesHandler = (meetupId) => {
      return userFavorites.some((meetup)=>{
          return meetup.id === meetupId
      })
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorites: addFavoritesHandler,
    removeFavorites: removeFavoritesHandler,
    itemIsFavorites: itemIsFavoritesHandler
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext
