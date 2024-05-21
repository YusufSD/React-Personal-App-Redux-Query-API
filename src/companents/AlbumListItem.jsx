import React from "react";
import ExpandablePanel from "./ExpandablePanel";
import PhotoList from "./PhotoList";
import { FaRegTrashAlt } from "react-icons/fa";
import { useRemoveAlbumMutation } from "../store";
import { CircularProgress } from "@mui/material";

function AlbumListItem({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleClick = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <button
        style={{ marginRight: "20px", cursor: "pointer" }}
        onClick={handleClick}
      >
        {results.isLoading ? (
          <CircularProgress style={{ width: "15px", height: "15px" }} />
        ) : (
          <FaRegTrashAlt />
        )}
      </button>
      {album.title}
    </>
  );

  return (
    <div>
      <ExpandablePanel header={header}>
        <PhotoList album={album} />
      </ExpandablePanel>
    </div>
  );
}

export default AlbumListItem;
