export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl font-bold tracking-tight">
        Document Vault
      </h1>

      <p className="mt-6 max-w-xl text-xl text-gray-600">
        Store, organize, and access your important documents from anywhere.
      </p>

      <button className="mt-8 rounded-lg bg-black px-6 py-3 text-white">
        Get Started
      </button>
    </main>
  );
}