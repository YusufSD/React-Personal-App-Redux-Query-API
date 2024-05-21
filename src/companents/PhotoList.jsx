import React from "react";
import PhotoListItem from "./PhotoListItem";
import Button from "@mui/material/Button";
import { CircularProgress } from "@mui/material";
import { MdAddBox } from "react-icons/md";
import Skeleton from "@mui/material/Skeleton";
import { useAddPhotoMutation, useFetchPhotosQuery } from "../store";

function PhotoList({ album }) {
  const { data, isError, isFetching } = useFetchPhotosQuery(album);
  const [addPhoto, results] = useAddPhotoMutation();

  const handleClick = () => {
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = (
      <div>
        <Skeleton
          variant="rectangular"
          sx={{
            width: "100%",
            height: "200px",
          }}
        />
      </div>
    );
  } else if (isError) {
    content = <div>Hata Var</div>;
  } else {
    content = data.map((photo, index) => {
      return <PhotoListItem key={index} photo={photo} />;
    });
  }

  return (
    <>
      <div className="arrangement">
        <h1>{album.title} Fotoğrafları</h1>
        <Button variant="outlined" onClick={handleClick}>
          {results.isLoading ? (
            <CircularProgress style={{ width: "40px" }} />
          ) : (
            <span>
              Fotoğraf Ekle
              <MdAddBox style={{ fontSize: "18px", marginLeft: "5px" }} />
            </span>
          )}
        </Button>
      </div>
      <div className="photoDiv">{content}</div>
    </>
  );
}

export default PhotoList;
