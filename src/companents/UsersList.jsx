import React from "react";
import { useFetchUsersQuery, useAddUserMutation } from "../store";
import UserListItem from "./UserListItem";
import Button from "@mui/material/Button";
import { MdAddBox } from "react-icons/md";
import { CircularProgress } from "@mui/material";

function UsersList() {
  const { data, isError, isFetching } = useFetchUsersQuery();
  const [addUser, results] = useAddUserMutation();

  const handleClick = () => {
    addUser();
  };

  let content;
  if (isFetching) {
    content = (
      <div className="progressbarDiv">
        <CircularProgress
          className="progress-bar"
          style={{ display: "flex", justifyContent: "center" }}
        />
      </div>
    );
  } else if (isError) {
    content = <div>Hata Var</div>;
  } else {
    content = data.map((user, index) => {
      return <UserListItem key={index} user={user} />;
    });
  }

  return (
    <div>
      <div className="arrangement">
        <h1>Kişiler</h1>
        <Button variant="outlined" onClick={handleClick}>
          {results.isLoading ? (
            <CircularProgress style={{ width: "40px" }} />
          ) : (
            <span>
              Kişi Ekle
              <MdAddBox style={{ fontSize: "18px", marginLeft: "5px" }} />
            </span>
          )}
        </Button>
      </div>

      {content}
    </div>
  );
}

export default UsersList;
