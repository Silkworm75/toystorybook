import { Meta, StoryObj } from "@storybook/react";
import MovieComponent from "@/components/MovieComponent/MovieComponent";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import fetch from "node-fetch";
import { movieIds } from "@/helper/constants";
import randomIndex from "@/helper/randomIndex";

const meta = {
  title: "Pages/MovieDetailPage",
  component: MovieComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  // Injected data into the story via its render context.
  render: (args, { loaded: { movieData } }) => {
    let updatedMovie = {
      ...movieData,
      poster_path: `https://image.tmdb.org/t/p/original${movieData.poster_path}`,
    };
    return <MovieComponent {...args} storyBook={true} movie={updatedMovie} />;
  },
  // A decorator wraps a Storybook story with added rendering functionality
  // often used for extra markup, context mocking, or augmenting how stories render.
  decorators: [
    (Story) => (
      <>
        <Header />
        <Story />
        <Footer />
      </>
    ),
  ],
  args: {
    showPoster: true,
    showTitle: true,
    showTagline: true,
    showRatings: true,
    showText: true,
    showRevenue: true,
    showLink: true,
    storyBook: false,
  },
} satisfies Meta<typeof MovieComponent>;

type Story = StoryObj<typeof MovieComponent>;

export default meta;

export const Default: Story = {
  // Loaders are asynchronous functions
  // Run before the story renders
  loaders: [
    async () => ({
      movieData: await (
        await fetch(
          `https://api.themoviedb.org/3/movie/${
            movieIds[randomIndex(movieIds)]
          }?api_key=${process.env.TMDB_API_KEY}`
        )
      ).json(),
    }),
  ],
};
