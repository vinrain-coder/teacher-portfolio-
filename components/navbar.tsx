export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 z-50 w-[95%] max-w-6xl -translate-x-1/2">
      <div
        className="
                              flex items-center justify-between
                                        rounded-2xl px-6 py-3
                                                  backdrop-blur-xl bg-white/30
                                                            border border-white/40
                                                                      shadow-lg
                                                                              "
      >
        {/* Logo / Name */}
        <a href="#home" className="text-lg font-semibold text-green-800">
          Vincent Ombogo
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <li>
            <a href="#about" className="hover:text-green-700 transition">
              About
            </a>
          </li>
          <li>
            <a href="#education" className="hover:text-green-700 transition">
              Education
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-green-700 transition">
              Experience
            </a>
          </li>
          <li>
            <a href="#subjects" className="hover:text-green-700 transition">
              Subjects
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-green-700 transition">
              Portfolio
            </a>
          </li>
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="
                                                                                                                                                                                                                                                                            hidden md:inline-block
                                                                                                                                                                                                                                                                                        rounded-xl px-4 py-2
                                                                                                                                                                                                                                                                                                    bg-green-700 text-white text-sm
                                                                                                                                                                                                                                                                                                                hover:bg-green-800 transition
                                                                                                                                                                                                                                                                                                                          "
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
