function App() {
  return (
    <main>
      <section className="px-4">
        <div className="max-w-sm space-y-3 rounded-2xl border-1 border-black bg-white p-6 shadow-[8px_8px]">
          <img
            className="rounded-md"
            aria-hidden="true"
            src="./assets/illustration-article.svg"
            alt=""
          />
          <span className="rounded-sm bg-yellow-300 px-2 py-1 text-sm font-extrabold text-gray-950">
            Learning
          </span>
          <p className="mt-2 text-xs font-medium text-gray-950">
            Published 21 Dec 2023
          </p>
          <h1>
            <a
              href="#"
              className="text-2xl font-extrabold transition duration-300 hover:text-yellow-300"
            >
              HTML & CSS foundations
            </a>
          </h1>
          <p className="font-medium text-gray-500">
            These languages are the backbone of every website, defining
            structure, content, and presentation
          </p>
          <p className="flex items-center gap-2">
            <img
              className="size-8"
              src="./assets/image-avatar.webp"
              alt="Greg Hooper"
            />
            <span className="text-sm font-extrabold">Greg Hooper</span>
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
