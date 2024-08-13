import { motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiArrowRight } from "react-icons/fi";

export const FlipNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed z-30 flex items-center justify-between w-full p-4 bg-zinc-950/50 backdrop-blur">
      <NavLeft setIsOpen={setIsOpen} />
      <NavRight />
      <NavMenu isOpen={isOpen} />
    </nav>
  );
};

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <svg
      width="50"
      height="39"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-white">
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#000000"></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#000000"></path>
    </svg>
  );
};

const NavLeft = ({ setIsOpen }) => {
  return (
    <div className="flex items-center gap-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block text-2xl text-white lg:hidden"
        onClick={() => setIsOpen((pv) => !pv)}>
        <FiMenu />
      </motion.button>
      <Logo />
      <NavLink text="Solutions" />
      <NavLink text="Community" />
      <NavLink text="Pricing" />
      <NavLink text="Company" />
    </div>
  );
};

const NavLink = ({ text }) => {
  return (
    <a
      href="#"
      rel="nofollow"
      className="hidden lg:block h-[30px] overflow-hidden font-medium">
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>
        <span className="flex items-center h-[30px] text-indigo-600">
          {text}
        </span>
      </motion.div>
    </a>
  );
};

const NavRight = () => {
  return (
    <div className="flex items-center gap-4">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 font-medium text-transparent rounded-md bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text whitespace-nowrap">
        Hola
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 font-medium text-white rounded-md bg-gradient-to-r from-violet-600 to-indigo-600 whitespace-nowrap">
        Sign up
      </motion.button>
    </div>
  );
};

const NavMenu = ({ isOpen }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="absolute left-0 right-0 flex flex-col gap-4 p-4 text-white origin-top shadow-lg bg-zinc-950 top-full">
      <MenuLink text="Solutions" />
      <MenuLink text="Community" />
      <MenuLink text="Pricing" />
      <MenuLink text="Company" />
    </motion.div>
  );
};

const MenuLink = ({ text }) => {
  return (
    <motion.a
      variants={menuLinkVariants}
      rel="nofollow"
      href="#"
      className="h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2">
      <motion.span variants={menuLinkArrowVariants}>
        <FiArrowRight className="h-[30px] text-white" />
      </motion.span>
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>
        <span className="flex items-center h-[30px] text-indigo-600">
          {text}
        </span>
      </motion.div>
    </motion.a>
  );
};

const menuVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -10,
    opacity: 0,
  },
};

const menuLinkArrowVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: -4,
  },
};
