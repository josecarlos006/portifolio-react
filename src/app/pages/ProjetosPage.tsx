import ScrollView from "../components/ScrollView/ScrollView"
import { motion } from "framer-motion"

const ProjetosPage = () => {
    return (
        <div className="text-white flex items-start justify-center">
            <motion.h1
                className="text-5xl mt-8"
                initial={{ opacity: 0, translateY: '100%' }}
                animate={{ opacity: 1, translateY: '0%' }}
                transition={{ duration: 2 }}>
                <ScrollView />
            </motion.h1>
        </div>
    )
}

export default ProjetosPage
