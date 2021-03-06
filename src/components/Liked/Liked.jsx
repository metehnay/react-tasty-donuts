import React, { useEffect, useState } from "react";
import { useContext, MainContext } from "../../hook/Context";
import Donuts from "../Donuts/Donuts";

const Liked = ({ isAuth, setIsAuth, addFavorite }) => {
  const { postLists, setPostList, favorites, setFavorites, removeFavourites } =
    useContext(MainContext);

  return (
    <>
      {" "}
      <div className="containers">
      {localStorage.getItem("dam") ?
       <>
      <p className=" mt-2 btn btn-primary d-flex justify-content-center api">
     <button
            onClick={removeFavourites}
            className="btn btn-primary border-0 fixo w-100"
            style={{color: "#ffffff"}}
          >
            REMOVE LIKED DONUTS
          </button>
          
        </p>
        </>
        :
        <p className="mt-2 btn btn-primary d-flex justify-content-center api" style={{color: "#ffffff", fontWeight: "600"}}>You haven't liked any donuts yet. :( </p>
}
        <div className="sidebar">
          {" "}
          <div className="norris mt-4">
            <div className="favorite-container">
              <div className="new-container">
                {postLists
                  .filter((post) => favorites.includes(post.id))
                  .map((post) => (
                    <Donuts
                      post={post}
                      addFavorite={addFavorite}
                      key={post.id}
                      removeFavourites={removeFavourites}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Liked;