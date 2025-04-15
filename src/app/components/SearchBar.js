"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/SearchResult/${search}`);
  };
  return (
    <form
      className="flex justify-between max-w-6xl mx-auto px-5"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search Keywords ..."
        className="w-full h-14 rounded-md placeholder-gray-500 
        outline-none 
       bg-transparent flex-1 "
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button className="text-amber-600">Search</button>
    </form>
  );
};

export default SearchBar;
