import {motion} from "framer-motion";

// variants
const stariAnimation = {
    initial : {
        top:"0%",
    },
    animate : {
        top:"100%",
    },
    exit : {
        top: ["100%", "0%"],
    },
}

// calculate the reverse index for staggered delay
const reversIndex = (index) => {
    const totalSteps = 4; // number of steps
    return totalSteps - index - 1;
}

const Stairs = () => {
  return (
    <>
       {[...Array(4)].map((_, index)=>{
        return(
            <motion.div 
            key={index}
            variants={stariAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
                duration:0.2,
                ease:"easeInOut",
                delay:reversIndex(index) * 0.1,
            }}
            className="h-full w-full bg-accent relative"
        />
        );
       })}
    </>
  )
}

export default Stairs