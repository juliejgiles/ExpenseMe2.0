import React, { useState, forwardRef, useImperativeHandle } from "react";
import { GlobalProvider } from "../context/GlobalState";
import { motion, AnimatePresence } from "framer-motion";

export const Modal = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      open: () => setOpen(true),
      close: () => setOpen(false),
    };
  });
  return (
    <AnimatePresence>
      {open && (
        <GlobalProvider>
          <motion.div
            initial={{
              opacity: 0,
            }}
            transition={{ duration: 0.5 }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setOpen(false)}
            className='modal-backdrop'
          />

          <motion.div
            initial={{
              scale: 0,
            }}
            transition={{ duration: 0.5 }}
            animate={{
              scale: 1,
            }}
            className='modal-content-wrapper'
            exit={{
              scale: 0,
            }}
          >
            <motion.div className='modal-content'>{props.children}</motion.div>
          </motion.div>
        </GlobalProvider>
      )}
    </AnimatePresence>
  );
});
