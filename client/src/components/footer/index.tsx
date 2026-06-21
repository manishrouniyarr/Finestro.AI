const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 border-t py-1.5">
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-1 px-6 md:px-10 text-sm text-gray-500 text-center sm:text-left">
        <div>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">Finestro.AI</span> — All rights
          reserved.
        </div>
        <div>
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/manish-rouniyar-1067b428a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:underline font-medium"
          >
            Manish Rouniyar
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;