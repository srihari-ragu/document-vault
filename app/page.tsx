import VaultButton from "@/components/VaultButton";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl font-bold tracking-tight">
        Document Vault
      </h1>

      <p className="mt-6 max-w-xl text-xl text-gray-600">
        Securely store, organize, and access your important documents in one place.
      </p>

      <VaultButton>
        Get Started
      </VaultButton>
    </main>
  );
}
