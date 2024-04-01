"use client";
import React, { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";

const Links = () => {
  const [open, setOpen] = useState(false);
  const LinksList = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blogs",
      path: "/blog",
    },
  ];

  const session = true;
  const isAdmin = true;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.links}>
          {LinksList.map((link) => {
            return <NavLink link={link} key={link.title} />;
          })}
          {session ? (
            <>
              {isAdmin && <NavLink link={{ title: "Admin", path: "/admin" }} />}
              <button className={styles.logout}>Logout</button>{" "}
            </>
          ) : (
            <NavLink link={{ title: "Login", path: "/login" }} />
          )}
        </div>

        <Image
          className={styles.menuBtn}
          onClick={() => setOpen((previews) => !previews)}
          src="/menu.png"
          alt=""
          width={30}
          height={30}
        ></Image>
        {open && (
          <div className={styles.mobileLinks}>
            {LinksList.map((link) => {
              return <NavLink link={link} key={link.title} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Links;
