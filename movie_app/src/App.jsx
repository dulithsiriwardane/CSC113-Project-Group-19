import {useState} from "react";
import SignUp from "./pages/SignUp";
import NavBar from "./components/NavBar";
import SearchItem from "./components/SearchItem";
import Details from "./components/Details";
import DetailPanes from "./components/DetailPanes";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = "875a977ab94cd7108c47a3bed943830f";

  async function searchMovies(e) {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    const url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
      console.log(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  // function handleMoreDetails(i, e, tv) {
  //   e.preventDefault();
  //   setSelectedId(i);
  //   async function fetchData(i) {
  //     setDetailsLoading(true);
  //     const url = `https://api.themoviedb.org/3/${tv === "tv" ? "tv" : "movie"}/${i}?api_key=${API_KEY}`;
  //     try {
  //       const res = await fetch(url);
  //       const data = await res.json();
  //       setDetails(data);
  //       console.log(details);
  //     } catch (err) {
  //       console.error(err);
  //     } finally {
  //       setDetailsLoading(false);
  //     }
  //   }
  //   fetchData(selectedId);
  // }

  return (
    <>
      <NavBar query={query} setQuery={setQuery} searchMovies={searchMovies} />
      <DetailPanes movies={movies} loading={loading} />
    </>
  );
}
