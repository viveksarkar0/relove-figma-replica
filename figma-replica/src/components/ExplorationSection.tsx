import { useRef, useEffect, useState } from "react";

export default function ExplorationSection() {
  const textContainerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState("auto");

  useEffect(() => {
    if (textContainerRef.current) {
      const updateHeight = () => {
        const height = textContainerRef.current
          ? textContainerRef.current.offsetHeight
          : 0;
        setContainerHeight(`${height}px`);
      };

      updateHeight();

      window.addEventListener("resize", updateHeight);

      return () => window.removeEventListener("resize", updateHeight);
    }
  }, []);

  return (
    <div className="w-full bg-white font-avenir">
      <div className="flex flex-col md:flex-row">
        <div
          className="md:w-1/2 relative"
          style={{
            height: window.innerWidth >= 768 ? containerHeight : "auto",
          }}
        >
          <img
            src="/exploration.svg"
            alt="Minimalist interior with a black sofa and curved doorway"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side with content */}
        <div
          ref={textContainerRef}
          className="w-full md:w-1/2 px-8 md:px-16 flex flex-col pt-8  sm:pt-0 gap-2 font-avenir mt-4 md:mt-0"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 flex gap-3 flex-col">
            Exploration and
            <span className="">discovery</span>
          </h2>

          <p className="text-gray-700 mb-8">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            Faucibus in libero risus <br />
            semper habitant arcu eget. Et integer <br />
            facilisi eget diam.
          </p>

          <div className="mb-10">
            <button className="bg-gray-900 text-white px-10 py-3 rounded-2xl hover:bg-gray-800 transition-colors">
              Explore
            </button>
          </div>

          {/* Numbered sections */}
          <div className="mt-6">
            <div className="mb-8">
              <h3 className="text-3xl font-medium text-gray-500 mb-2">01</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit. Faucibus in libero risus semper <br />
                habitant arcu eget. Et integer facilisi eget.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-medium text-gray-500 mb-2">02</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit. Faucibus in libero risus semper <br />
                habitant arcu eget. Et integer facilisi eget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
