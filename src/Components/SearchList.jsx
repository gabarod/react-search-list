import React from "react";
import "../Styles/styles.css";
import "../Styles/loader.css";

export const SearchList = React.forwardRef((props, ref) => {
  const handleAdd = (id) => {
    props.addUser(id);
    props.getStateModal(false);
  };

  return (
    <>
      {props?.loader ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : props?.stateModal ? (
        <>
          <h3>Search List</h3>
          <span>
            {props?.users?.length > 0 ? (
              <div>
                {props?.users?.length} elements found in Top {props.top}
              </div>
            ) : (
              "No data found"
            )}
          </span>
          <ul className="list">
            {props?.users?.map((x, index) => (
              <li
                className={props?.cursor === index ? "active" : null}
                key={x.login.uuid}
              >
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
                  {props.selectedUsers.some(
                    (s) => s.login.uuid === x.login.uuid
                  ) ? (
                    <span>Added</span>
                  ) : (
                    <button
                      className="button"
                      type="add"
                      onClick={() => handleAdd(x.login.uuid)}
                    >
                      Add
                    </button>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <span>Search an user by FirstName or LastName</span>
      )}
    </>
  );
});
