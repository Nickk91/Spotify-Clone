import { buttonVariants } from "@/components/ui/button";
import { HomeIcon, Library, MessageCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { SignedIn } from "@clerk/clerk-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import PlaylistSkeleton from "@/components/skeletons/PlaylistSkeleton.tsx";
import { useMusicStore } from "@/stores/useMusicStore.ts";
import { useEffect } from "react";

const LeftSidebar = () => {
  const { albums, songs, fetchAlbums, isLoading } = useMusicStore();

  useEffect(() => {
    fetchAlbums();
  }, [fetchAlbums]);

  return (
    <div className="h-full flex flex-col gap-2">
      {/* Navigation menu */}
      <div className="rounded-lg bg-zinc-900 p-4">
        <div className="space-y-2">
          <Link
            to="/"
            className={cn(
              buttonVariants({
                variant: "ghost",
                className: "w-full justify-start text-white hover:bg-zinc-800",
              })
            )}
          >
            <HomeIcon className="mr-2 size-5" />
            <span className="hidden md:inline">Home</span>
          </Link>
          <SignedIn>
            <Link
              to="/chat"
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  className:
                    "w-full justify-start text-white hover:bg-zinc-800",
                })
              )}
            >
              <MessageCircleIcon className="mr-2 size-5" />
              <span className="hidden md:inline">Messages</span>
            </Link>
          </SignedIn>
        </div>
      </div>
      {/* Library section */}
      <div className="flex-1 rounded-lg bg-zinc-900 p-4">
        <div className="flex items-center text-white px-2">
          <Library className="mr-2 size-5" />
          <span className="hidden md:inline">Playlists</span>
        </div>
      </div>
      <ScrollArea className="h-[calc(100vh-300px)]">
        <div className="space-y-2">
          {isLoading ? (
            <PlaylistSkeleton />
          ) : (
            albums.map((album) => (
              <Link
                key={album._id}
                className="p-2 hover:bg-zinc-800 rounded-md flex items-center gap-3 group cursor-pointer"
                to={`/album/${album._id}`}
              >
                <img
                  src={album.imageUrl}
                  alt="Playlist img"
                  className="size-12 rounded-md flex-shrink-0 object-cover"
                />
                <div className="flex-1 min-w-0 hidden  md:block">
                  <p className="font-medium truncate">{album.title}</p>
                  <p className="text-sm text-zinc-400 truncate">
                    Album • {album.artist}
                  </p>
                </div>
              </Link>
            ))
          )}
        </div>

        <div className="space-y-2"></div>
      </ScrollArea>
    </div>
  );
};

export default LeftSidebar;
