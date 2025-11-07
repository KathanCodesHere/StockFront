import { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

const DropdownLink = ({ name, links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 text-[#d1d1d1] hover:text-[#FFD447] transition-colors duration-200 font-medium"
      >
        {name}
        <FiChevronDown
          className={`w-4 h-4 ml-1 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-[#111] border border-[#333] rounded-md shadow-lg overflow-hidden z-50">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-[#d1d1d1] hover:text-[#FFD447] hover:bg-[#1a1a1a] transition-colors duration-150"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownLink;
