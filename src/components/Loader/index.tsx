import { Container } from "./style";
import { motion } from "framer-motion";


export const Load = () => {


    return (
        <Container>
            <motion.div
                className="box"
                animate={{
                    scale: [1, 1.1, 1.2, 1.1, 1],
                    rotate: [0, 0, 180, 180, 0],
                    borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                }}
                transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.6, 1],
                    repeat: Infinity,
                }}
            />
            <p>Loading...</p>
        </Container>
    )

}