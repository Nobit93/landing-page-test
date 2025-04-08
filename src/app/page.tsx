import Link from 'next/link';

export default function HomePage() {
  // Define the list of landing pages
  const landingPages = [
    {
      name: 'X-Design AI Model Page',
      path: '/xd-ai-model',
      description: 'Showcases the AI Fashion Model generation features.',
    },
    // Add other landing pages here as they are created
    {
      name: 'BP Image Enhancer Page',
      path: '/bp-image-enhancer', 
      description: 'Highlights the AI image enhancement capabilities.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <header className="w-full max-w-4xl mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Landing Page Showcase</h1>
        <p className="text-lg text-gray-600">A collection of landing pages built for testing.</p>
      </header>

      <main className="w-full max-w-4xl">
        <ul className="space-y-4">
          {landingPages.map((page) => (
            <li key={page.path} className="bg-white rounded-lg shadow p-6 transition hover:shadow-md">
              <Link href={page.path} className="block group">
                <h2 className="text-2xl font-semibold text-blue-600 group-hover:text-blue-800 mb-1">
                  {page.name}
                </h2>
                <p className="text-gray-700 mb-2">{page.description}</p>
                <span className="text-sm text-blue-500 group-hover:underline">View Page &rarr;</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Optional: Add a section for adding new pages or instructions */} 
        {landingPages.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            No landing pages created yet. Add entries to the `landingPages` array in `src/app/page.tsx`.
          </p>
        )}
      </main>

      <footer className="w-full max-w-4xl mt-10 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Landing Page Tests. All rights reserved.</p>
      </footer>
    </div>
  );
}
