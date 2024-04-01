"use client";
import React from "react";
import styles from "./navlink.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLink = ({ link }) => {
  const pathName = usePathname();
  return (
    <Link
      href={link.path}
      key={link.title}
      className={`${styles.container} ${
        pathName === link.path && styles.active
      }`}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
