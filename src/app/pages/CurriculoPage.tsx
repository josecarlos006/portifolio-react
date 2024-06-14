import { motion } from "framer-motion"

const CurriculoPage = () => {
    return (
        <div className="text-white flex items-start justify-center">
            <motion.h1
                className="text-3xl mt-8"
                initial={{ opacity: 0, translateY: '100%' }}
                animate={{ opacity: 1, translateY: '0%' }}
                transition={{ duration: 2 }}>
                CurriculoPage
            </motion.h1>
        </div>
    )
}

export default CurriculoPage
