const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Topbar */}
      <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
        <h1 className="text-lg font-semibold text-gray-900">
          PDF AI
        </h1>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white">
          M
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-8">

        {/* Welcome */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            Welcome back 👋
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Upload a document and start asking questions.
          </p>
        </div>

        {/* Upload Section */}
        <div className="mb-8 rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center">

          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 text-2xl">
            📄
          </div>

          <h3 className="text-base font-semibold text-gray-900">
            Upload a PDF
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Upload a document to start chatting with it.
          </p>

          <button className="mt-5 rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800">
            Upload PDF
          </button>

        </div>

        {/* Documents */}
        <section>

          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-base font-semibold text-gray-900">
              Recent Documents
            </h3>

            <button className="text-sm text-gray-500 hover:text-gray-900">
              View all
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {/* Document 1 */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 hover:shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                📄
              </div>

              <h4 className="truncate text-sm font-semibold text-gray-900">
                React Notes.pdf
              </h4>

              <p className="mt-1 text-xs text-gray-400">
                2.4 MB · 24 pages
              </p>
            </div>

            {/* Document 2 */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 hover:shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                📄
              </div>

              <h4 className="truncate text-sm font-semibold text-gray-900">
                JavaScript Notes.pdf
              </h4>

              <p className="mt-1 text-xs text-gray-400">
                1.8 MB · 18 pages
              </p>
            </div>

            {/* Document 3 */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 hover:shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                📄
              </div>

              <h4 className="truncate text-sm font-semibold text-gray-900">
                System Design.pdf
              </h4>

              <p className="mt-1 text-xs text-gray-400">
                4.2 MB · 42 pages
              </p>
            </div>

          </div>

        </section>

      </main>
    </div>
  );
};

export default Dashboard;