const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 border-t py-1.5">
      <div className="container mx-auto text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="font-semibold">Finestro.AI</span> — All rights reserved.
        <br />
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
    </footer>
  )
}

export default Footer