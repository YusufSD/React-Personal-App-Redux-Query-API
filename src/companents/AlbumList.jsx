import React from "react";
import Button from "@mui/material/Button";
import { CircularProgress } from "@mui/material";
import { MdAddBox } from "react-icons/md";
import Skeleton from "@mui/material/Skeleton";
import {
  useAddAlbumMutation,
  useFetchAlbumsQuery,
} from "../store/apis/albumsApi";
import AlbumListItem from "./AlbumListItem";

function AlbumList({ user }) {
  const { data, isError, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const handleClick = () => {
    addAlbum(user);
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
    content = data.map((album, index) => {
      return <AlbumListItem key={index} album={album} />;
    });
  }

  return (
    <>
      <div className="arrangement">
        <h1>{user.name} Albümü</h1>
        <Button variant="outlined" onClick={handleClick}>
          {results.isLoading ? (
            <CircularProgress style={{ width: "40px" }} />
          ) : (
            <span>
              Album Ekle
              <MdAddBox style={{ fontSize: "18px", marginLeft: "5px" }} />
            </span>
          )}
        </Button>
      </div>
      <div>{content}</div>
    </>
  );
}

export default AlbumList;
