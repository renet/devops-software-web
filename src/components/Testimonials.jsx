import { QuoteIcon } from "../assets/icons/QuoteIcon";
import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";
import testimonial3 from "../assets/images/testimonial3.png";

import { motion } from "framer-motion";

export const Testimonials = () => (
  <section className="w-full flex justify-center pt-10 mb-16 lg:mb-32 bg-customDarkBg2 relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="custom-block-subtitle text-center mb-6">
          What others say
        </div>
        <div className="custom-block-big-title text-center mb-16 px-8 sm:px-24 md:px-48">
          These are totally made up testimonials. We hope you enjoy your read.
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          <div className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4">
            <div className="flex mb-2">
              <QuoteIcon />
            </div>
            <div className="custom-content-text-white">
              "You won't regret it. I would gladly pay over 600 dollars for
              DevOps Software. DevOps Software is both attractive and highly
              adaptable. I will let my mum know about this, she could really
              make use of DevOps Software!"
            </div>
            <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
              <img src={testimonial1} alt="" width="45px" />
              <div className="flex flex-col ml-4">
                <div className="custom-content-text-white font-medium">
                  Oliver Kensington
                </div>
                <div className="custom-content-text-gray">
                  Founder of Uniporn
                </div>
              </div>
            </div>
          </div>
          <div className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4">
            <div className="flex mb-2">
              <QuoteIcon />
            </div>
            <div className="custom-content-text-white">
              "DevOps Software is the most valuable business resource we have
              EVER purchased. I would also like to say thank you to all your
              staff."
            </div>
            <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
              <img src={testimonial2} alt="" width="45px" />
              <div className="flex flex-col ml-4">
                <div className="custom-content-text-white font-medium">
                  Juliana Grande
                </div>
                <div className="custom-content-text-gray">Mother and wife</div>
              </div>
            </div>
          </div>
          <div className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4">
            <div className="flex mb-2">
              <QuoteIcon />
            </div>
            <div className="custom-content-text-white">
              "DevOps Software is the most valuable business resource we have
              EVER purchased. DevOps Software is great. The service was
              excellent. It's all good."
            </div>
            <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
              <img src={testimonial3} alt="" width="45px" />
              <div className="flex flex-col ml-4">
                <div className="custom-content-text-white font-medium">
                  Matt Richardson
                </div>
                <div className="custom-content-text-gray">
                  Developer at CocoaCow
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
