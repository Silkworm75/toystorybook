"use client";

import { MOVIE_PATHS } from "@/helper/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      {MOVIE_PATHS.map((movie, index): ReactNode => {
        const isActive = pathname.startsWith(movie.params.id);
        return (
          <Link
            key={movie.params.id}
            href={movie.params.id}
            className={`link no-underline mr-5 hover:link-succes ${
              isActive ? "link-info" : ""
            }`}
          >
            Toy Story {index + 1}
          </Link>
        );
      })}
    </nav>
  );
}

export default Navigation;
