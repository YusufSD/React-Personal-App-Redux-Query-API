import React from "react";
import { useRemovePhotoMutation } from "../store";
import { FaRegTrashAlt } from "react-icons/fa";
import { CircularProgress } from "@mui/material";

function PhotoListItem({ photo }) {
  const [removePhoto, results] = useRemovePhotoMutation();

  const handleClick = () => {
    removePhoto(photo);
  };

  return (
    <div className="photoItem" onClick={handleClick}>
      <img src={photo.url} />
      <div className="delete">
        {results.isLoading ? (
          <CircularProgress style={{ width: "15px", height: "15px" }} />
        ) : (
          <FaRegTrashAlt />
        )}
      </div>
    </div>
  );
}

export default PhotoListItem;
