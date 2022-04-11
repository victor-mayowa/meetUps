import React, {useContext} from "react"
import MeetUpList from "../meetups/MeetUpList"
import FavoritesContext from "../store/Favorites-context"

const Favorites = () =>{
    const favoritesCtx = useContext(FavoritesContext)

    let content ;

    if(favoritesCtx.totalFavorites === 0){
        content = <p>You have no favorites</p>
    }else{
        content =   <MeetUpList meetups={favoritesCtx.favorites}/>
    }

    return <div style={{marginTop:"6rem"}}>
        <h4>My Favorites</h4>
        {content}
    </div>
}

export default Favorites