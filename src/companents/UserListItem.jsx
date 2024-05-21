import React from "react";
import ExpandablePanel from "./ExpandablePanel";
import AlbumList from "./AlbumList";
import { FaRegTrashAlt } from "react-icons/fa";
import { useRemoveUserMutation } from "../store";
import { CircularProgress } from "@mui/material";

function UserListItem({ user }) {
  const [removeUser, results] = useRemoveUserMutation();
  const handleClick = () => {
    removeUser(user);
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
      {user.name}
    </>
  );
  return (
    <div>
      <ExpandablePanel header={header}>
        <AlbumList user={user} />
      </ExpandablePanel>
    </div>
  );
}

export default UserListItem;
