import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: ReactNode;
  transitionDuration?: number;
}

const PageTransition = ({
  children,
  transitionDuration = 0.2,
}: PageTransitionProps) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: transitionDuration }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
