import React from "react";

const Display = ({ userData }) => {
  const userList = userData.map((item) => {
    return (
      <React.Fragment key={item.email}>
        <p>Name: {item.name}</p>
        <p>Age: {item.age}</p>
        <p>Email: {item.email}</p>
      </React.Fragment>
    );
  });

  return <>{userList}</>;
};

export default Display;
