import { portfolioItems } from "../utils/data";
import { motion } from "framer-motion";
export default function ServicePortfolio() {
  return (
    <section className="py-12 px-6 text-white">
      {/* <h2 className="text-3xl font-bold text-center mb-10">
        Our Service Portfolio
      </h2> */}

      <div className="border-l-4 border-red-500 pl-3 mb-10">
        <motion.h2
          className="text-4xl md:text-6xl sm:text-4xl  lg:text-5xl  font-bold tracking-tighter leading-none "
        >
          <motion.span
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block text-dark"
          >
            Our 
          </motion.span>
          <motion.span
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block ml-2 md:ml-4"
            style={{ WebkitTextStroke: '1px black', color: 'transparent' }}
          >
            – Service Portfolio
          </motion.span>
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((service, idx) => (
          <motion.div
            key={idx}
            className="p-6 rounded-2xl bg-gradient-to-br from-red-600 to-red-900/90 shadow-lg border border-red-700/20 h-full flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-sm text-gray-200 flex-grow leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}