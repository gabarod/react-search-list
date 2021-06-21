import React, { useState, useEffect, useRef } from "react";
import { Search } from "./Components/Search";
import { SearchList } from "./Components/SearchList";
import { SelectedList } from "./Components/SelectedList";

function App() {
  const [cursor, setCursor] = useState(0);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loader, setLoader] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [showModal, setShowModal] = useState(true);
  const [top, setTop] = useState(10);
  const [users, setUsers] = useState([]);

  const searchListRef = useRef();

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        setFilteredUsers(users);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  const handleClickOutside = (e) => {
    if (e.target.className == "item" || e.target.className == "button") {
      return;
    }
    updateStateModal(false);
  };

  const updateStateModal = (state) => {
    setShowModal(state);
  };

  const searchUser = (text, top) => {
    updateStateModal(true);
    setFilteredUsers(
      text
        ? users
            .filter(
              (x) =>
                x.name.first
                  .toString()
                  .toLowerCase()
                  .includes(text.toLowerCase()) ||
                x.name.last
                  .toString()
                  .toLowerCase()
                  .includes(text.toLowerCase())
            )
            .slice(0, top)
        : []
    );
    setCursor(0);
  };

  const addUser = (id) => {
    const users = selectedUsers.every((x) => x.login.uuid != id)
      ? [...selectedUsers, filteredUsers.find((x) => x.login.uuid === id)]
      : [...selectedUsers];
    setSelectedUsers(users);
  };

  const addUserByCursor = (cursor) => {
    const users = [...selectedUsers, filteredUsers[cursor]];
    setSelectedUsers(users);
  };

  const removeUser = (id) => {
    const users = selectedUsers.filter((x) => x.login.uuid !== id);
    setSelectedUsers(users);
  };

  const sortUsers = () => {
    const usersSorted = [...selectedUsers].sort((a, b) =>
      a.name.first.localeCompare(b.name.first)
    );
    setSelectedUsers(usersSorted);
  };

  return (
    <>
      <Search
        addUser={addUserByCursor}
        cursor={cursor}
        getCursor={setCursor}
        getStateModal={setShowModal}
        getLoader={setLoader}
        length={filteredUsers.length}
        searchUser={searchUser}
        stateModal={showModal}
        top={top}
      ></Search>
      <SearchList
        addUser={addUser}
        cursor={cursor}
        getStateModal={setShowModal}
        loader={loader}
        ref={searchListRef}
        selectedUsers={selectedUsers}
        stateModal={showModal}
        top={top}
        users={filteredUsers}
      ></SearchList>
      <SelectedList
        removeUser={removeUser}
        sortUsers={sortUsers}
        users={selectedUsers}
      ></SelectedList>
    </>
  );
}

export default App;
