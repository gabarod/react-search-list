import React from "react";
import "../Styles/styles.css";

export function SelectedList(props) {
  const handleRemove = (id) => {
    props.removeUser(id);
  };

  return (
    <>
      <h3>Selected List</h3>
      <div>{props?.users.length} elements selected! </div>
      {props?.users.length > 1 ? (
        <button onClick={props.sortUsers}>Sort by Name</button>
      ) : (
        <></>
      )}
      <div>
        <ul className="list">
          {props?.users?.map((x) => (
            <li key={x.login.uuid}>
              <a className="item">
                <img
                  className="avatar"
                  src={x.picture.thumbnail}
                  alt="thumbnail"
                />
                <div className="profile">
                  <span>{`${x.name.first} ${x.name.last}`}</span>
                  <span>{`${x.email}`}</span>
                </div>
                <button
                  className="button"
                  type="remove"
                  onClick={() => handleRemove(x.login.uuid)}
                >
                  Remove
                </button>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
