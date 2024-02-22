import React, { Suspense } from "react";

const MyCanvas = React.lazy(() => import("./Webgl"));

function Home() {
  return (
    <div className=" w-full h-screen bg-myColor ">
      <Suspense fallback={<Loading />}>
        <MyCanvas />
        {/* <Loading /> */}
      </Suspense>
    </div>
  );
}

function Loading() {
  return (
    <>
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-gray-900 via-orange-200 to-slate-900">
        <div className="loader">
          <svg viewBox="0 0 80 80">
            <circle id="test" cx="40" cy="40" r="32"></circle>
          </svg>
        </div>

        <div className="loader triangle">
          <svg viewBox="0 0 86 80">
            <polygon points="43 8 79 72 7 72"></polygon>
          </svg>
        </div>

        <div className="loader">
          <svg viewBox="0 0 80 80">
            <rect x="8" y="8" width="64" height="64"></rect>
          </svg>
        </div>
      </div>
    </>
  );
}

export default Home;
