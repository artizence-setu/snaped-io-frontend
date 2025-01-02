import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t flex items-center justify-between p-4 bg-slate-100">
      <p className="text-sm text-gray-500">
        © 2025 Snaped. All rights reserved.
      </p>
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Link href="#">Privacy Policy</Link>
        <Link href="#">Terms & Conditions</Link>
      </div>
    </footer>
  );
};

export default Footer;
