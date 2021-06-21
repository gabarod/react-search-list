import React, { useRef } from "react";
import "../Styles/styles.css";

export function Search(props) {
  const searchRef = useRef();

  const handleChange = () => {
    const text = searchRef.current.value;
    props.getLoader(true);
    setTimeout(() => {
      props.searchUser(text, props.top);
      props.getLoader(false);
    }, 2000);
  };

  const handleKeyDown = (e) => {
    if (!props.stateModal) return;
    // Up
    if (e.keyCode === 38 && props.cursor > 0) {
      props.getCursor(props.cursor - 1);
      // Down
    } else if (e.keyCode === 40 && props.cursor < props.length - 1) {
      props.getCursor(props.cursor + 1);
      // Enter
    } else if (e.keyCode === 13) {
      props.addUser(props.cursor);
      props.getStateModal(false);
      // ESC
    } else if (e.keyCode === 27) {
      props.getStateModal(false);
    }
  };

  return (
    <input
      className="search"
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder="Enter a text..."
      ref={searchRef}
      type="text"
    />
  );
}
