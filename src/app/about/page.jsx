import React from "react";

const About = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-4 p-4">
      <h1 className="text-2xl font-medium text-amber-600 mt-4">
        About IMDB Clone
      </h1>
      <div className="text-md text-gray-500 flex flex-col gap-6">
        <p>
          Welcome to IMDB Clone! This app is designed to provide users with a
          comprehensive database of movies, TV shows, and entertainment content.
          Our goal is to offer a seamless and enjoyable experience for movie
          enthusiasts and casual viewers alike.
        </p>
        <p>
          On IMDB Clone, you'll find detailed information about your favorite
          movies and TV shows, including cast and crew details, plot summaries,
          user reviews, and ratings. We strive to keep our database up-to-date
          with the latest releases and trending content.
        </p>
        <p>
          This website is created using Next.js and{" "}
          <a
            href="https://go.clerk.com/fgJHKlt"
            target="_blank"
            class="text-teal-500 hover:underline"
          >
            Clerk
          </a>
          .
        </p>
        <p>
          We encourage you to rate and review the movies and shows you watch.
          Your feedback helps other users discover great content and enhances
          the overall community experience. Join us in celebrating the world of
          entertainment!
        </p>
      </div>
    </div>
  );
};

export default About;
