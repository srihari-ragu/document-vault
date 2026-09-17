type VaultButtonProps = {
  children: React.ReactNode;
};

export default function VaultButton({ children }: VaultButtonProps) {
  return (
    <button className="mt-8 rounded-lg bg-black px-6 py-3 text-white">
      {children}
    </button>
  );
}
