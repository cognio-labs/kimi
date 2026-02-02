import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Star, 
  Heart, 
  Sparkles, 
  Leaf,
  Shield,
  Calendar,
  Instagram,
  Facebook,
  ArrowRight
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Facial Treatments",
      description: "Rejuvenating facials tailored to your skin type using premium organic products",
      icon: <Sparkles className="w-6 h-6" />,
      image: "https://placehold.co/600x400/d4e4d4/2d5a3d?text=Facial+Treatment"
    },
    {
      title: "Injectables",
      description: "Expert Botox and dermal filler treatments for natural, youthful results",
      icon: <Heart className="w-6 h-6" />,
      image: "https://placehold.co/600x400/e8d4d4/5a3d3d?text=Injectables"
    },
    {
      title: "Laser Therapy",
      description: "Advanced laser treatments for skin resurfacing, hair removal, and pigmentation",
      icon: <Shield className="w-6 h-6" />,
      image: "https://placehold.co/600x400/d4d4e8/3d3d5a?text=Laser+Therapy"
    },
    {
      title: "Body Contouring",
      description: "Non-invasive body sculpting treatments to help you achieve your desired silhouette",
      icon: <Leaf className="w-6 h-6" />,
      image: "https://placehold.co/600x400/e8e0d4/5a543d?text=Body+Contouring"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      text: "The most luxurious spa experience I've ever had. The staff is incredibly professional and the results speak for themselves.",
      rating: 5
    },
    {
      name: "Jennifer Adams",
      text: "Aroma has completely transformed my skincare routine. My skin has never looked better. Highly recommend their facial treatments!",
      rating: 5
    },
    {
      name: "Emily Chen",
      text: "From the moment you walk in, you feel pampered. The attention to detail and personalized care is unmatched.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <span className="text-2xl font-light tracking-widest text-stone-800">AROMA</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-stone-600 hover:text-stone-900 transition-colors text-sm tracking-wide">Services</a>
              <a href="#about" className="text-stone-600 hover:text-stone-900 transition-colors text-sm tracking-wide">About</a>
              <a href="#testimonials" className="text-stone-600 hover:text-stone-900 transition-colors text-sm tracking-wide">Reviews</a>
              <a href="#contact" className="text-stone-600 hover:text-stone-900 transition-colors text-sm tracking-wide">Contact</a>
              <button className="bg-stone-800 text-white px-6 py-2.5 rounded-full text-sm tracking-wide hover:bg-stone-700 transition-colors">
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="px-4 py-6 space-y-4">
                <a href="#services" className="block text-stone-600 py-2" onClick={() => setIsMenuOpen(false)}>Services</a>
                <a href="#about" className="block text-stone-600 py-2" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#testimonials" className="block text-stone-600 py-2" onClick={() => setIsMenuOpen(false)}>Reviews</a>
                <a href="#contact" className="block text-stone-600 py-2" onClick={() => setIsMenuOpen(false)}>Contact</a>
                <button className="w-full bg-stone-800 text-white px-6 py-3 rounded-full mt-4">
                  Book Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://placehold.co/1920x1080/f5f5f0/8b7355?text=Aroma+Med+Spa" 
            alt="Spa Interior" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-100/90 via-stone-100/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="text-stone-600 tracking-[0.2em] text-sm mb-4 uppercase">Welcome to Aroma</p>
            <h1 className="text-5xl md:text-7xl font-light text-stone-800 mb-6 leading-tight">
              Where Beauty<br />
              <span className="italic font-normal">Meets Wellness</span>
            </h1>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed max-w-lg">
              Experience the perfect blend of medical expertise and spa luxury. 
              Our board-certified professionals deliver transformative results in a serene, 
              welcoming environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-stone-800 text-white px-8 py-4 rounded-full hover:bg-stone-700 transition-all flex items-center justify-center gap-2 group">
                Book Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-stone-800 text-stone-800 px-8 py-4 rounded-full hover:bg-stone-800 hover:text-white transition-all">
                View Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-stone-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3"
            >
              <Shield className="w-8 h-8 text-stone-300" />
              <h3 className="font-medium tracking-wide">Board Certified</h3>
              <p className="text-stone-400 text-sm">Expert medical professionals</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center gap-3"
            >
              <Leaf className="w-8 h-8 text-stone-300" />
              <h3 className="font-medium tracking-wide">Natural Results</h3>
              <p className="text-stone-400 text-sm">Enhance your natural beauty</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-3"
            >
              <Heart className="w-8 h-8 text-stone-300" />
              <h3 className="font-medium tracking-wide">Personalized Care</h3>
              <p className="text-stone-400 text-sm">Tailored treatment plans</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-stone-500 tracking-[0.2em] text-sm mb-3 uppercase">Our Services</p>
            <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">Premium Treatments</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Discover our comprehensive range of medical spa services designed to rejuvenate 
              your skin, body, and spirit.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-medium text-stone-800 mb-2 group-hover:text-stone-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-3">
                  {service.description}
                </p>
                <span className="text-stone-800 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ChevronRight className="w-4 h-4" />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img 
                  src="https://placehold.co/800x1000/e8e0d4/5a543d?text=Spa+Interior" 
                  alt="Aroma Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl max-w-xs hidden md:block">
                <p className="text-4xl font-light text-stone-800 mb-2">10+</p>
                <p className="text-stone-600 text-sm">Years of excellence in medical aesthetics</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-stone-500 tracking-[0.2em] text-sm mb-3 uppercase">About Aroma</p>
              <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-6">
                A Sanctuary of<br />
                <span className="italic">Self-Care</span>
              </h2>
              <p className="text-stone-600 leading-relaxed mb-6">
                Founded with a vision to bridge the gap between medical excellence and spa luxury, 
                Aroma Med Spa has become a trusted destination for those seeking transformative 
                aesthetic treatments.
              </p>
              <p className="text-stone-600 leading-relaxed mb-8">
                Our team of board-certified physicians and licensed aestheticians combine 
                cutting-edge technology with personalized care, ensuring every treatment is 
                tailored to your unique needs and goals.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-stone-200 p-2 rounded-full">
                    <Shield className="w-5 h-5 text-stone-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-800 mb-1">Certified Experts</h4>
                    <p className="text-stone-600 text-sm">Board-certified medical professionals</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-stone-200 p-2 rounded-full">
                    <Sparkles className="w-5 h-5 text-stone-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-800 mb-1">Premium Products</h4>
                    <p className="text-stone-600 text-sm">Only FDA-approved treatments</p>
                  </div>
                </div>
              </div>

              <button className="bg-stone-800 text-white px-8 py-4 rounded-full hover:bg-stone-700 transition-colors">
                Meet Our Team
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-stone-500 tracking-[0.2em] text-sm mb-3 uppercase">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-light text-stone-800">Client Experiences</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-stone-50 p-8 rounded-2xl"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-stone-800 text-stone-800" />
                  ))}
                </div>
                <p className="text-stone-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-stone-300 rounded-full flex items-center justify-center text-stone-600 font-medium">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-stone-800">{testimonial.name}</p>
                    <p className="text-stone-500 text-sm">Verified Client</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-stone-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://placehold.co/1920x1080/2a2a2a/3a3a3a?text=+" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-light mb-6">
              Begin Your Journey<br />
              <span className="italic">Today</span>
            </h2>
            <p className="text-stone-300 text-lg mb-10 max-w-2xl mx-auto">
              Schedule a complimentary consultation with our experts to discover 
              the perfect treatments for your aesthetic goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-stone-800 px-10 py-4 rounded-full hover:bg-stone-100 transition-colors font-medium">
                Book Consultation
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white hover:text-stone-800 transition-colors">
                Call Us Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact/Footer */}
      <footer id="contact" className="bg-stone-100 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-light tracking-widest text-stone-800 mb-6">AROMA</h3>
              <p className="text-stone-600 mb-6 leading-relaxed">
                Elevating beauty through medical excellence and spa luxury. 
                Your journey to radiant skin starts here.
              </p>
              <div className="flex gap-4">
                <a href="#" className="bg-stone-200 p-2 rounded-full hover:bg-stone-300 transition-colors">
                  <Instagram className="w-5 h-5 text-stone-700" />
                </a>
                <a href="#" className="bg-stone-200 p-2 rounded-full hover:bg-stone-300 transition-colors">
                  <Facebook className="w-5 h-5 text-stone-700" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-stone-800 mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#services" className="text-stone-600 hover:text-stone-800 transition-colors">Services</a></li>
                <li><a href="#about" className="text-stone-600 hover:text-stone-800 transition-colors">About Us</a></li>
                <li><a href="#" className="text-stone-600 hover:text-stone-800 transition-colors">Our Team</a></li>
                <li><a href="#" className="text-stone-600 hover:text-stone-800 transition-colors">Pricing</a></li>
                <li><a href="#" className="text-stone-600 hover:text-stone-800 transition-colors">Gift Cards</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-stone-800 mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-stone-500 mt-0.5" />
                  <span className="text-stone-600">123 Wellness Boulevard<br />Suite 100, Beverly Hills, CA 90210</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-stone-500" />
                  <span className="text-stone-600">(310) 555-0123</span>
                </li>
                <li className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-stone-500" />
                  <span className="text-stone-600">hello@aromamedspa.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-stone-800 mb-6">Hours</h4>
              <ul className="space-y-3">
                <li className="flex justify-between text-stone-600">
                  <span>Mon - Fri</span>
                  <span>9:00 AM - 7:00 PM</span>
                </li>
                <li className="flex justify-between text-stone-600">
                  <span>Saturday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between text-stone-600">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-500 text-sm">
              © 2024 Aroma Med Spa. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-stone-500 hover:text-stone-800 transition-colors">Privacy Policy</a>
              <a href="#" className="text-stone-500 hover:text-stone-800 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}