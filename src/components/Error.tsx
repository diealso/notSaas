const Error = () => {
  return (
    <div className="w-full min-h-[100dvh] flex flex-col text-center items-center justify-center">
      <div className="">
        <h1 className="mb-4 font-bold text-7xl">Error 404</h1>
        <h4 className="mb-2">We couldn't find what you were looking for</h4>
        <button
          className="px-6 py-2 text-white transition-all rounded-sm bg-secondary hover:bg-main"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Error;
