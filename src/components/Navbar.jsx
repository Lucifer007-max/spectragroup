import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Facebook, Instagram, Link as L, MessageCircle, Phone } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import Logo from '../assets/logo.png'
const navLinks = [
  { title: "HOME", path: "" },
  { title: "ABOUT US", path: "about-us" },
  {
    title: "SERVICE",
    path: "service",
    children: [
      { title: "Process Analyzers", path: "/service/pgnaa-service" },
      { title: "Lab Analyzers", path: "/service/lab-analyzer-service" },
      { title: "Radiation Service", path: "/service/xray-service" },
    ],
  },
  // {
  //   title: "PRODUCT",
  //   path: "product",
  //   children: [
  //     { title: "Process Analyzers @ PGNAA", path: "/product/pgnaa-product" },
  //     { title: "Elemental Analyzers" , path: "/product/product-c" },
  //     { title: "Sample preparation & Lab Optimization", path: "/product/product-a" },
  //     { title: "Radioactive Nuclide" , path: "/product/radiation-product" },
  //   ],
  // },
  { title: "TRAINING", path: "training" },
  { title: "LEGACY OF EXPERTISE", path: "expertise" },
  { title: "GLOBAL CONNECTIONS", path  : "our-network" },
  { title: "LET’s CONNECT", path: "contact-us" },
];



export default function WillstarNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("main");

  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Check if a link is active based on current path
  const isActive = (path, link) => {
    const currentPath = location.pathname;
    
    // Handle home/root path
    if (path === "" || path === "/") {
      return currentPath === "/" || currentPath === "";
    }
    
    // Normalize paths - ensure they start with /
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    
    // For links with children, check if any child is active first
    if (link?.children) {
      const hasActiveChild = link.children.some(child => {
        const childPath = child.path.startsWith('/') ? child.path : `/${child.path}`;
        return currentPath === childPath || currentPath.startsWith(`${childPath}/`);
      });
      if (hasActiveChild) {
        return true;
      }
    }
    
    // Check if current path exactly matches the normalized path
    if (currentPath === normalizedPath) {
      return true;
    }
    
    // Check if current path starts with the normalized path followed by a slash
    // This handles cases like /service matching /service/something
    if (currentPath.startsWith(`${normalizedPath}/`)) {
      return true;
    }
    
    return false;
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigteByURL = (sectionId) => {
    console.log(sectionId)
    navigate(`/${sectionId}`);
    setIsOpen(false);
  }

  const menuVariants = {
    closed: { opacity: 0, y: '-100%' },
    open: { opacity: 1, y: 0 }
  }

  const linkVariants = {
    closed: { opacity: 0, x: -50 },
    open: i => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 }
    })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
        className={`w-full sticky top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-white/40 backdrop-blur-sm' : 'bg-white/100 backdrop-blur-sm'}`}
      >
        <div className="container mx-auto px-6 py-0 flex justify-between items-center">
          <Link href="/" className="relative z-50">
            <motion.div
              className="text-2xl font-bold text-white italic tracking-wider"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={Logo} width={200} alt='Spectra Group' className='my-2'/>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <div key={index} className="relative">
                {/* Parent Link */}
                <motion.a
                  onClick={() => {
                    if (link.children) {
                      // Toggle the dropdown for SERVICE and PRODUCT links
                      setOpenDropdown(openDropdown === link.title ? null : link.title);
                    } else {
                      // Regular link navigation
                      navigteByURL(link.path);
                    }
                  }}
                  className={`font-semibold hover:text-dark text-lg tracking-wider transition-colors cursor-pointer flex items-center ${
                    isActive(link.path, link) ? '!text-black nav_custom' : 'nav_custom text-custom'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {link.title}
                </motion.a>

                {/* Dropdown Menu */}
                {link.children && openDropdown === link.title && (
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden"
                    >
                      {link.children.map((child, childIndex) => {
                        const childPath = child.path.startsWith('/') ? child.path : `/${child.path}`;
                        const isChildActive = location.pathname === childPath || location.pathname.startsWith(`${childPath}/`);
                        return (
                          <a
                            key={childIndex}
                            href={child.path}
                            className={`block px-4 py-2 text-sm transition ${
                              isChildActive ? 'text-black font-bold bg-gray-100' : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            {child.title}
                          </a>
                        );
                      })}
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 lg:hidden"
          >
            <motion.div
              className="grid grid-cols-2 gap-1"
              whileHover={{ rotate: 180 }}
              whileTap={{ scale: 0.9 }}
            >
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-custom rounded-full"
                  initial={false}
                  animate={isOpen ? { scale: [1, 1.5, 1] } : { scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                />
              ))}
            </motion.div>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-white z-40 lg:hidden"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-6 py-24 h-full flex flex-col">
            {/* Main Menu */}
            <AnimatePresence>
              {activeMenu === "main" && (
                <motion.div
                  key="main-menu"
                  initial={{ x: 0, opacity: 1 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "-100%", opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col space-y-6 mt-20"
                >
                  {navLinks.map((link) => (
                    <motion.div key={link.title}>
                      {link.children ? (
                        <motion.button
                          onClick={() => setActiveMenu(link.title.toLowerCase())}
                          className={`text-1xl hover:text-black transition-colors cursor-pointer w-full text-left ${
                            isActive(link.path, link) ? 'text-black font-bold' : 'text-dark/90'
                          }`}
                        >
                          {link.title} →
                        </motion.button>
                      ) : (
                        <Link
                          to={link.path}
                          onClick={() => setIsOpen(false)}
                          className={`text-1xl hover:text-black transition-colors cursor-pointer ${
                            isActive(link.path, link) ? 'text-black font-bold' : 'text-dark/90'
                          }`}
                        >
                          {link.title}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submenus for Products and Services */}
            {["PRODUCT", "SERVICE"].map((menu) => (
              <AnimatePresence key={menu}>
                {activeMenu === menu.toLowerCase() && (
                  <motion.div
                    key={`${menu}-menu`}
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "100%", opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col space-y-6"
                  >
                    {/* Back Button */}
                    <motion.button
                      onClick={() => setActiveMenu("main")}
                      className="text-xl mt-20 font-bold text-dark flex items-center space-x-2 mb-4"
                    >
                      ← Back
                    </motion.button>

                    {navLinks
                      .find((link) => link.title === menu)
                      ?.children.map((child, index) => {
                        const childPath = child.path.startsWith('/') ? child.path : `/${child.path}`;
                        const isChildActive = location.pathname === childPath || location.pathname.startsWith(`${childPath}/`);
                        return (
                          <motion.a
                            key={index}
                            href={child.path}
                            className={`text-2xl hover:text-black transition-colors cursor-pointer ${
                              isChildActive ? 'text-black font-bold' : 'text-dark/90'
                            }`}
                          >
                            {child.title}
                          </motion.a>
                        );
                      })}
                  </motion.div>
                )}
              </AnimatePresence>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  )
}