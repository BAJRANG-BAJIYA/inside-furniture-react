import React from 'react';
// import './Loading.css';
import { motion } from "framer-motion";
const Loading = () => {
  return (
<div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
    <motion.img
      src="https://theinside.imgix.net/nav/logo.svg?format=auto"
      alt="Loading..."
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
     
    />
  </div>
  )
}

export default Loading;