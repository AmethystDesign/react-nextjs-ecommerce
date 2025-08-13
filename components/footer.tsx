import { Container } from "./ui/container";
import { navItems } from "@/store/navData";
import { NavItem } from "./ui/navItem";

export const Footer = () => {
  return (
    <footer className="relative pt-8 rounded-t-3xl bg-white dark:bg-gray-900 shadow-lg">
      <Container className="pb-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <img src="/adLogoW.png" className="w-6 h-6" alt="AD Logo" />
            <span className="text-sm font-semibold text-heading-1">
              AmethystDesign © 2025. All rights reserved.
            </span>
          </div>

          {/* <ul className="flex gap-6 text-heading-1">
            {navItems.map((item, key) => (
              <NavItem key={key} href={item.href} text={item.text} />
            ))}
          </ul> */}
        </div>
      </Container>
    </footer>
  );
};
