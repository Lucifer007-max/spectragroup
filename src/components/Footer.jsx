import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const socialLinks = [
    // { icon: <FaGithub />, url: "#" },
    // { icon: <FaTwitter />, url: "#" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/company/102022235/admin/page-posts/published" },
    // { icon: <FaInstagram />, url: "#" }
  ];

  return (
    <>
      {isHomePage && (
        <footer className="bg-footer2 border-t border-light-800">
          <div className="container mx-auto px-4 py-6">
            {/* Top Section */}
            <div className="grid md:grid-cols-2 gap-5 mb-8 mt-5 place-items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="w-full text-left"
              >
                {/* <h4 className="font-space-grotesk text-xl font-bold mb-4">Quick Links</h4> */}
                <div className="space-y-2 px-3 text-light">
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}><h4 className="font-space-grotesk text-xl font-bold mb-4" >Spectraline Industrial Equipment Trading LLC</h4></motion.div>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>PO: 11675, Dubai, United Arab Emirates</motion.div>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>TRN: 100487282400003</motion.div>
                  <motion.div className="mt-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}><h4 className="font-space-grotesk text-xl font-bold my-4">Geo Spectra Technical Services LLC</h4></motion.div>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>PO: 214634, Dubai, United Arab Emirates</motion.div>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>TRN: 10048728200003</motion.div>
                </div>
              </motion.div>
            
              <motion.div className="grid md:grid-cols-2 gap-5 mb-8 mt-5 place-items-center font-oswald">
                {/* Location */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-6 text-left"
                >
                  <h4 className="font-space-grotesk text-xl font-bold">Location</h4>
                  <p className="">
                    Visiting Address:<br />
                    211, KML Business Centre,
                    Al Meydan Street, Al Quoz 1
                    Dubai, United Arab Emirates
                  </p>
                </motion.div>

                {/* Follow Us */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="space-y-6 text-center"
                >
                  <h4 className="font-space-grotesk text-xl font-bold">Follow us</h4>
                  <div className="flex space-x-6 justify-center">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        whileHover={{ scale: 1.2, color: '#fff' }}
                        className="text-xl text-light hover:text-primary transition-colors flex"
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </footer>
      )}
      <div className="border-t bg-gray-700 border-gray-800 py-8 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
        <p className="font-outfit text-light">
          © {currentYear} SPECTRA. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer; 