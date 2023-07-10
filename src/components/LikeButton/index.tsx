import { motion } from "framer-motion";
import {AiFillHeart} from "react-icons/ai";
import { Container } from "./style";

type prop = {
    isLiked:boolean,
    onClick:()=>void
}

export const LikeButton = ({isLiked,onClick}:prop) => (
    <Container
    isLiked={isLiked ? "true" : "false"}
    onClick={onClick}>
        <motion.button
            whileTap={{ scale: 2.0 }}
        >
            <AiFillHeart/>
        </motion.button>
    </Container>
)