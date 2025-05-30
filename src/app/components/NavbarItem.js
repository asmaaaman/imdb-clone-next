"use client";
import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const NavbarItem = ({ title, param }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Link
          className={`hover:text-amber-600 ${
            genre == param
              ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
              : ""
          }
    `}
          href={`/?genre=${param}`}
        >
          {title}
        </Link>
      </Suspense>
    </div>
  );
};

export default NavbarItem;
