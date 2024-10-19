import { AiOutlineArrowDown } from "react-icons/ai";
import { motion } from "framer-motion";

const ArrowComponent = () => {
  return (
    <div className="h-1 bg-red-600 w-32 mx-auto mb-10">
      {/* Arrow icon with animation */}
      <motion.div
        className="flex justify-center"
        animate={{ y: [0, -10, 0] }}  // Animates the arrow up and down
        transition={{ duration: 1.5, repeat: Infinity }}  // Controls the speed and looping
      >
        <AiOutlineArrowDown className="text-red-600 mt-2" size={24} />
      </motion.div>
    </div>
  );
};

export default ArrowComponent;
