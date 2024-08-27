"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { motion } from "framer-motion";

const ContactSchema = z.object({
  fullname: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormInputs = z.infer<typeof ContactSchema>;

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactSchema),
    mode: "onChange",
  });

  const [loading, setLoading] = useState(false);



  const onSubmit = async (data: ContactFormInputs) => {
    setLoading(true);
    try {
      const res = await axios.post(emailLink, data);
      if (res?.data?.ok) {
        toast.success('Thanks we got your mail');
        setLoading(false);
        reset();
      } else {
        setLoading(false);
        toast.error('something went wrong');
      }
    } catch (err) {
      setLoading(false);
      toast.error('something went wrong');
      console.log(err);
    }
  };

  return (
    <article>
      <motion.section
        className="mapbox relative h-64 w-full rounded-2xl mb-7 border border-gray-800 overflow-hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <figure className="h-full">
          <motion.iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4896371.007648413!2d73.04757079956687!3d20.593684113356642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d3334d4df0e3d%3A0x9f1f7bbf9ed5e36c!2sIndia!5e0!3m2!1sen!2sus!4v1652710916405!5m2!1sen!2sus"
            className="w-full h-full border-none filter saturate-150 bg-[#3e76ab]"
            loading="lazy"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          ></motion.iframe>
        </figure>
      </motion.section>

      <section className="contact-form mb-2.5">
        <h3 className="text-xl font-semibold mb-5">Contact Form</h3>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="form"
          data-form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="input-wrapper grid grid-cols-1 gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.input
                type="text"
                className="text-[#ffcd67] w-full font-normal bg-[#1e3e5c] p-3.5 border border-[#ffcd67] rounded-lg outline-none focus:border-amber-500 placeholder-white"
                placeholder="Full name"
                {...register("fullname")}
                whileFocus={{ scale: 1.05 }}
              />
              {errors.fullname && (
                <p className="text-red-600">{errors.fullname.message}</p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            >
              <motion.input
                type="email"
                className="text-[#ffcd67] w-full font-normal bg-[#1e3e5c] p-3.5 border border-[#ffcd67] rounded-lg outline-none focus:border-amber-500 placeholder-white"
                placeholder="Email address"
                {...register("email")}
                whileFocus={{ scale: 1.05 }}
              />
              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
              )}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <motion.textarea
              className="text-[#ffcd67] font-normal bg-[#1e3e5c] p-3.5 border border-[#ffcd67] rounded-lg outline-none focus:border-yellow-500 mb-6 resize-y w-full min-h-24 max-h-48 placeholder-white"
              placeholder="Your Message"
              {...register("message")}
              whileFocus={{ scale: 1.05 }}
            />
            {errors.message && (
              <p className="text-red-600">{errors.message.message}</p>
            )}
          </motion.div>

          <motion.button
            className="bg-gradient-to-r icon-box from-gray-700 to-gray-900 text-yellow-500 flex justify-center items-center gap-2.5 p-3.5 rounded-lg text-base capitalize shadow-md transform hover:translate-y-1 hover:shadow-xl transition ease-in-out duration-300"
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send />
            <span> {loading ? 'Sending...' : 'Send'}</span>
          </motion.button>
        </motion.form>
      </section>
    </article>
  );
};

export default Contact;
