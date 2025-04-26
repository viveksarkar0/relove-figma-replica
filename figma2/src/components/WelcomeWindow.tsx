export default function ConfigBadgeBuilder() {
  return (
    <div className="bg-black relative text-white w-full sm:w-2xl z-50 mx-auto border-8 border-black shadow-[10px_10px_0px_rgba(0,0,0,100)]">
      {/* Header navigation */}
      <div className="flex justify-between items-center p-2 bg-black z-50">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-black border-2 border-white"></div>
          <div className="w-3 h-3 rounded-full bg-black border-2 border-white"></div>
          <div className="w-3 h-3 rounded-full bg-black border-2 border-white"></div>
        </div>
        <div className="text-xl font-mono text-center">WELCOME</div>
        <div className="text-lg">
          <span className="inline-block border border-white rounded-sm px-1">⌂</span>
        </div>
      </div>

      {/* Main content area with grid background */}
      <div
        className="bg-white text-black p-6 relative z-50 overflow-hidden"
        style={{
          backgroundSize: "40px 40px",
        }}
      >
        {/* Red design elements */}
        <div className="absolute top-0 -translate-y-10 right-3 bg-red-400 w-20 h-20 rounded-full"></div>
        <div className="absolute right-10 top-36 bg-red-400 w-16 h-24"></div>
        <div className="absolute -right-1 top-16 bg-red-400 w-14 h-24 rounded-b-lg"></div>
        <div className="translate-x-5">
          <div className="font-bold text-2xl mb-4">
            <img src="/welcomeLogo.svg" alt="" />
          </div>

          {/* Welcome text */}
          <h1 className="text-4xl font-bold mb-4">
            Welcome to the
            <br /> 2022 Config Badge Builder
          </h1>

          <p className="mb-2">
            Config is a community experience and we want
            <br />
            everyone to enjoy it as much as we do.
          </p>

          <p className="mb-6">
            So, let's get started and build our very own{" "}
            <span className="font-mono">figma.os</span>
            <br />
            badges to share with the community.
          </p>
        </div>
      </div>

      {/* Need help section with grid background */}
      <div
        className="bg-white text-black p-6 border-t border-t-black z-50 flex flex-col items-start justify-start space-y-6"
        style={{
          backgroundImage:
            "linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <div className="space-y-3 translate-x-5">
          <h2 className="text-3xl font-bold">Need help?</h2>

          <p>
            Here is a quick video tour of{" "}
            <span className="font-mono">figma.os</span> and how you can
            <br />
            edit your very own operating system.
          </p>
        </div>

        {/* Video preview */}
        <div>
          <img
            src="/loom.svg"
            alt="Video Preview"
            className="w-auto max-w-full"
          />
        </div>
      </div>
    </div>
  );
}
