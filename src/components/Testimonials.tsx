import { Star, Quote } from 'lucide-react';

interface TestimonialsProps {
  darkMode: boolean;
}

export default function Testimonials({ darkMode }: TestimonialsProps) {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechVentures Inc.',
      content:
        "Sumeet transformed our legacy system into a modern, scalable platform. His expertise in both backend architecture and AI integration exceeded our expectations. The 40% performance improvement was game-changing.",
      rating: 5,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Michael Chen',
      role: 'Founder, CryptoFlow',
      content:
        "Working with Sumeet on our Web3 platform was incredible. His deep understanding of smart contracts and DApp architecture helped us launch ahead of schedule. The security audits were flawless.",
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Product, AI Solutions Corp',
      content:
        "Sumeet's prompt engineering skills are exceptional. He built an AI assistant that handles complex workflows seamlessly. The integration with ChatGPT and Claude was perfect, and our team productivity increased by 60%.",
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'David Park',
      role: 'CEO, ScaleUp Digital',
      content:
        "From AWS infrastructure to CI/CD pipelines, Sumeet delivered excellence at every step. Our deployment time reduced by 70%, and the monitoring dashboards give us complete visibility. Highly recommended!",
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Lisa Anderson',
      role: 'Director, Enterprise Solutions',
      content:
        "Sumeet doesn't just code—he architects solutions. His attention to detail, proactive communication, and ability to deliver on tight deadlines make him an invaluable partner for any complex project.",
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'James Wilson',
      role: 'Founder, NextGen Apps',
      content:
        "The Real Crypto G platform Sumeet built handles thousands of concurrent users without breaking a sweat. The real-time data processing and intuitive UI set a new standard for our industry.",
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
  ];

  return (
    <section
      id="testimonials"
      className={`py-24 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Client <span className="text-gradient">Success Stories</span>
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Trusted by startups and enterprises to deliver exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl transition-all hover:scale-105 ${
                darkMode
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                  : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-lg'
              }`}
            >
              <Quote
                className={`absolute top-6 right-6 ${
                  darkMode ? 'text-gray-700' : 'text-gray-200'
                }`}
                size={48}
              />

              <div className="relative z-10">
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-yellow-400"
                      size={18}
                    />
                  ))}
                </div>

                <p
                  className={`text-base leading-relaxed mb-6 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  "{testimonial.content}"
                </p>

                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div
                      className={`font-semibold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {testimonial.name}
                    </div>
                    <div
                      className={`text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 p-8 rounded-3xl text-center ${
            darkMode
              ? 'bg-gradient-to-r from-primary-500/10 via-secondary-500/10 to-accent-500/10 border border-primary-500/20'
              : 'bg-gradient-to-r from-primary-50 via-secondary-50 to-accent-50 border border-primary-200'
          }`}
        >
          <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Want to Be My Next Success Story?
          </h3>
          <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Let's collaborate and create something amazing together
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-xl"
          >
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
}
