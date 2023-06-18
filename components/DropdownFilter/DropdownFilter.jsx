import React, { useEffect, useRef, useState } from "react";
import { CgOptions } from "react-icons/cg";
import styles from "./DropdownFilter.module.css";
import { useDispatch } from "react-redux";
import { filterContacts } from "@/redux/filter/slice";

const DropdownFilter = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler, { capture: true });
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("mousedown", handler, { capture: true });
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [menuRef]);

  const handleDispatch = (filter) => {
    dispatch(filterContacts(filter));
    setOpen(false);
  };

  return (
    <div ref={menuRef} className={styles.dropdown}>
      <button
        className={styles.trigger}
        onClick={() => setOpen((open) => !open)}
      >
        Filter
        <CgOptions />
      </button>

      <div className={open ? styles.active : styles.inactive}>
        <ul>
          <li
            className={styles.dropdownItem}
            onClick={() => handleDispatch("all")}
          >
            <p>Show All</p>
          </li>
          <li
            className={styles.dropdownItem}
            onClick={() => handleDispatch("follow")}
          >
            <p>Follow</p>
          </li>
          <li
            className={styles.dropdownItem}
            onClick={() => handleDispatch("following")}
          >
            <p>Following</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownFilter;
