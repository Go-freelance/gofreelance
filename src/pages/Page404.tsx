import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, Search, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

export const Page404: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 flex items-center justify-center px-4 py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mt-10 mx-auto text-center"
      >
        {/* 404 Number */}
            <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center"
          >
            <AlertTriangle className="w-8 h-8 text-primary" />
          </motion.div>
          <h1 className="text-8xl sm:text-9xl lg:text-[12rem] font-bold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text leading-none">
            404
          </h1>
        </motion.div>

        {/* Error Message */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-secondary">
            Oups ! Page introuvable
          </h2>
          <p className="text-lg sm:text-xl text-text max-w-2xl mx-auto leading-relaxed">
            La page que vous cherchez semble avoir disparu dans les méandres du
            web. Peut-être qu'elle a été déplacée, supprimée, ou que l'URL est
            incorrecte.
          </p>
        </motion.div>

        {/* Suggestions */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-neutral-200/50">
            <h3 className="text-xl font-bold text-secondary mb-4 flex items-center justify-center gap-2">
              <Search className="w-5 h-5 text-primary" />
              Que pouvez-vous faire ?
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold text-sm">1</span>
                </div>
                <div>
                  <p className="font-medium text-secondary">Vérifiez l'URL</p>
                  <p className="text-sm text-text">
                    Assurez-vous que l'adresse est correcte
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold text-sm">2</span>
                </div>
                <div>
                  <p className="font-medium text-secondary">
                    Retournez à l'accueil
                  </p>
                  <p className="text-sm text-text">
                    Naviguez depuis notre page principale
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold text-sm">3</span>
                </div>
                <div>
                  <p className="font-medium text-secondary">Utilisez le menu</p>
                  <p className="text-sm text-text">
                    Trouvez ce que vous cherchez dans la navigation
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold text-sm">4</span>
                </div>
                <div>
                  <p className="font-medium text-secondary">Contactez-nous</p>
                  <p className="text-sm text-text">
                    Nous pouvons vous aider à trouver ce que vous cherchez
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/"
              className="bg-primary text-white px-8 py-4 rounded-full hover:bg-primary-dark transition font-medium flex items-center gap-3 shadow-lg"
            >
              <Home className="w-5 h-5" />
              Retourner à l'accueil
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              onClick={() => window.history.back()}
              className="bg-neutral-200 text-secondary px-8 py-4 rounded-full hover:bg-neutral-300 transition font-medium flex items-center gap-3 shadow-lg"
            >
              <ArrowLeft className="w-5 h-5" />
              Page précédente
            </button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="bg-secondary text-white px-8 py-4 rounded-full hover:bg-secondary-dark transition font-medium flex items-center gap-3 shadow-lg"
            >
              Nous contacter
            </Link>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full animate-pulse hidden lg:block" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/5 rounded-full animate-pulse hidden lg:block" />
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-primary/10 rounded-full animate-bounce hidden xl:block" />
      </motion.div>
    </div>
  );
};
