"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Navigationtest = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClick = () => {
    router.push("/");

    //to get query params and setparams
    // console.log(searchParams.get("q"));
    // searchParams.set("q", "hello");

    //replace will not add entry in browser history
    // router.replace("/");

    // router.refresh();
  };
  return (
    <div>
      <Link href="/" prefetch={false}>
        Click here
      </Link>
      <button onClick={handleClick}>Write and redirect</button>
    </div>
  );
};

export default Navigationtest;
