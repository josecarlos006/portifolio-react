import { motion } from "framer-motion"
import perfilDevImage from "../assets/perfil.jpg"
import { Link } from "react-router-dom"
import "../../index.css"
import htmlIcon from "../assets/icon-html.png"
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Tempo entre a animação de cada filho
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const HomePage = () => {
  return (
    <div className="flex items-start justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="bg-opacity-55 bg-white text-center border-4 p-5 rounded-[20px] mt-5 sm:w-80 md:w-96 lg:w-[500px]">
        <motion.img
          src={perfilDevImage}
          alt="Imagem José Carlos Developer"
          initial={{ opacity: 0, scale: 0, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="w-40 sm:w-48 md:w-60 lg:w-80 mx-auto rounded-[50px]" />
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className='text-3xl mt-4 mb-4 font-bold'>Front End Developer</motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className='mt-4 mb-4'>
          <img
            src={htmlIcon}
            alt="Icone do Html" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="text-xl">
          Acesse a aba de <Link to="/" className='font-bold underline'>Vagas</Link>
        </motion.p>

        <motion.div
          className="flex justify-center p-4"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >

          <motion.div
            className="ml-2 border-2 border-black rounded-[10px] hover:bg-green-700 ease-out duration-700 hover:text-white"
            variants={iconVariants}>
            <Link to="https://discord.gg/CM4KCRngZV" >
              <FaDiscord className="h-full w-10" />
            </Link>
          </motion.div>

          <motion.div
            className="ml-2 border-2 border-black rounded-[10px] hover:bg-green-700 ease-out duration-700 hover:text-white"
            variants={iconVariants}>
            <Link to="https://www.linkedin.com/company/codigocerto/" >
              <FaLinkedin className="h-full w-10" />
            </Link>
          </motion.div>

          <motion.div
            className="ml-2 border-2 border-black rounded-[10px] hover:bg-green-700 ease-out duration-700 hover:text-white"
            variants={iconVariants}>
            <Link to="https://chat.whatsapp.com/CDJL6tRT5apLRXW5PWqYLe" >
              <FaInstagram className="h-full w-10" />
            </Link>
          </motion.div>

          <motion.div
            className="ml-2 border-2 border-black rounded-[10px] hover:bg-green-700 ease-out duration-700 hover:text-white"
            variants={iconVariants}>
            <Link to="https://github.com/codigocerto" >
              <FaGithub className="h-full w-10" />
            </Link>
          </motion.div>
        </motion.div>


      </motion.div>
    </div>
  )
}

export default HomePage