export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-sm text-gray-600">
            Lavet af{" "}
            <a
              href="https://mahope.dk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-700 font-medium underline"
            >
              mahope.dk
            </a>
          </p>
          <a
            href="/typer"
            className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Se alle personlighedstyper →
          </a>
        </div>
      </div>
    </footer>
  );
}
