export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-2">
      <p className="text-center text-xs font-normale">
        © {new Date().getFullYear()} Fabrice Sapienza. Tous droits réservés.
      </p>
    </footer>
  );
}
