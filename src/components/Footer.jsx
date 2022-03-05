function Footer() {
  return (
    <footer className="fixed bottom-0 border-t-2 w-screen p-2">
      <div className="personal-container flex justify-between flex-wrap gap-4">
        <p>💚 Desarrollado con amor por
          <a 
            href="https://github.com/aleswebgit"
            alt="Ales GitHub"
            target="_blank"
            className="text-green-500 hover:text-green-700 before:content-['_'] after:content-['_']"
          >
            Ales
          </a>
        </p>
        <p>🧡 Gracias a
          <a 
            href="https://factoriaf5.org/" 
            alt="Factoria F5 web"
            target="_blank"
            className="text-orange-500 hover:text-orange-700 before:content-['_'] after:content-['_']"
          >
            Factoria F5
          </a>
          por motivar a hacer esa pildora
        </p>
      </div>
    </footer>
  )
}

export { Footer }