import Topbar from "@/components/Topbar";
import { useMusicStore } from "@/stores/useMusicStore";
import { useEffect } from "react";

const HomePage = () => {
  const { fetchFeaturedSongs, fetchMadeForYouSongs, fetchTrendingSongs } =
    useMusicStore();

  useEffect(() => {
    fetchFeaturedSongs();
    fetchMadeForYouSongs();
    fetchTrendingSongs();
  }, [fetchFeaturedSongs, fetchMadeForYouSongs, fetchTrendingSongs]);

  console.log(
    fetchFeaturedSongs,
    fetchMadeForYouSongs,
    fetchTrendingSongs,
    madeForYouSongs
  );
  return (
    <div className="rounded-md overflow-hidden">
      <Topbar />
    </div>
  );
};

export default HomePage;
