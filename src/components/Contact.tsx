import { AnimatedSection } from "./AnimatedSection";

const Contact = () => {
  return (
    <AnimatedSection className="py-20 bg-gray-50">
      <div id="contact" className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 gradient-text">Get In Touch</h2>
        <p className="text-lg text-gray-600 mb-8">
          I'm always open to new opportunities and interesting projects. Feel
          free to reach out!
        </p>
        <a
          href="mailto:hatiprithwish@gmail.com"
          className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          hatiprithwish@gmail.com
        </a>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
