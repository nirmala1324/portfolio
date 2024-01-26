// Link (Next js)
import Link from "next/link";

// next hooks
import { usePathname } from "next/navigation";

// framer motion
import { motion } from "framer-motion";

const links = [ // an array of objects
  { path: "/", name: "home" },
  { path: "/projects", name: "my projects" },
  { path: "/contact", name: "Contacts" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => { // Nav function and its parameters
  const path = usePathname(); // a variable for usePathname()
  return (
    // THIS PART IS HOW THE NAV GONNA LOOK LIKE USING PARAMETER FOR THE TO BE ADDED VALUE
    <nav className={`${containerStyles}`}> {/* Set the style for container */}
      {links.map((link, index) => { // I think it is ITERATION | map() to iterate ove an array (link)
        return (
          <Link
            href={link.path} // Assign the path from link object
            key={index} // like (i) in usual iteration -> to give every iteration unique key
            className={`capitalize ${linkStyles}`} // Set the link(nav menu) as capital and add the menu title (link)
          >
            {link.path === path && ( // Check if the link in menu title is equal to page path, then do the animation below:
              <motion.span // <motion.span> tag is the same as <span>, but enhanced with motion/ animation capabilities from the framer motion
                transition={{ type: "tween" }} // easing or smooth transition
                layoutId="underline" // layoutID: animating components across routes or pages transitions
                className={`${underlineStyles}`} // the additional style (will be added later on inside the Header comp)
              />
            )}
            {link.name} {/* Getting the link name and nested inside the Link tag */}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
