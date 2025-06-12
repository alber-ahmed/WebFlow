/* eslint-disable react-refresh/only-export-components */

import { atom, useAtom } from "jotai";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";

const pictures = [
  "page1",
  "page2",
  "page3",
  "page4",
  "page5",
  "page6",
  "page7",
  "page8",
  "page9",
  "page10",
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);
 const audioRef = useRef(null); // Store audio instance
  const hasInteracted = useRef(false); // Track user interaction

  useEffect(() => {
    // Initialize audio but don't play it yet
    audioRef.current = new Audio("/audios/page-flip-01a.mp3");
    
    const handleFirstInteraction = () => {
      hasInteracted.current = true;
      document.removeEventListener('click', handleFirstInteraction);
    };
    
    document.addEventListener('click', handleFirstInteraction);
    
    return () => {
      document.removeEventListener('click', handleFirstInteraction);
    };
  }, []);

  useEffect(() => {
    if (hasInteracted.current && audioRef.current) {
      audioRef.current.currentTime = 0; // Rewind to start
      audioRef.current.play().catch(e => console.log("Audio play error:", e));
    }
  }, [page]);
  // useEffect(() => {
  //   const audio = new Audio("/audios/page-flip-01a.mp3");
  //   audio.play();
  // }, [page]);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      <main className="sticky  pointer-events-none select-none z-10 px-1  inset-0  flex justify-between flex-col">
       
        <div className="w-full overflow-auto pointer-events-auto flex justify-center">
          <div className="overflow-auto flex items-center md:gap-4 max-w-full ">
            {[...pages].map((_, index) => (
              <button
                key={index}
                className={`border-transparent hover:border-white transition-all duration-300 ${index === 0 ? " md:px-3 md:py-2 lg:px-3 lg:py-2 px-1 py-1" : "px-3 py-2" }    rounded-full  text-xs uppercase shrink-0 border ${
                  index === page
                    ? "bg-white/90 text-black"
                    : "bg-black/30 text-white"
                }`}
                onClick={() => setPage(index)}
              >
                {index === 0 ? (isMobile ? <ChevronLeft /> : "Front") : `${index}`}
              </button>
            ))}
            <button
              className={`border-transparent hover:border-white transition-all duration-300  md:px-3 md:py-2 lg:px-3 lg:py-2 px-1 py-1 rounded-full  text-xs uppercase shrink-0 border ${
                page === pages.length
                  ? "bg-white/90 text-black"
                  : "bg-black/30 text-white"
              }`}
              onClick={() => setPage(pages.length)}
            >
               {isMobile ? <ChevronRight /> : "Back"}
            </button>
          </div>
        </div>
      </main>

    </>
  );
};
