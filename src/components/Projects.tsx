import { ExternalLink, Github, Users, Activity, Zap, Globe, Brain, Clock, Cpu, FileCode, Gauge, Shield } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

interface ProjectMetric {
  text: string;
  icon: LucideIcon;
}

export default function Projects({ darkMode }: ProjectsProps) {
  const projects = [
    {
      title: 'The Real Crypto G',
      description:
        'A comprehensive cryptocurrency insights platform serving 5,000+ daily users with real-time market analysis, trading signals, and educational content.',
      tech: ['React', 'Django', 'PostgreSQL', 'Redis', 'AWS'],
      metrics: [
        { text: '5K+ Daily Users', icon: Users },
        { text: '99.9% Uptime', icon: Activity },
        { text: 'Real-time Data', icon: Zap },
      ],
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
      github: '#',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'AI-Powered Assistant',
      description:
        'Multi-model AI chatbot leveraging ChatGPT, Claude, and DeepSeek for intelligent conversations, task automation, and workflow optimization.',
      tech: ['Next.js', 'OpenAI API', 'Claude API', 'DeepSeek', 'TypeScript'],
      metrics: [
        { text: '3 AI Models', icon: Brain },
        { text: '50+ Workflows', icon: Activity },
        { text: 'Context-Aware', icon: Cpu },
      ],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
      github: '#',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Enterprise Risk Management',
      description:
        'AI-powered monitoring platform for real-time risk assessment, automated compliance checks, and predictive analytics for Fortune 500 clients.',
      tech: ['Python', 'TensorFlow', 'React', 'MongoDB', 'Docker'],
      metrics: [
        { text: 'Enterprise Grade', icon: Shield },
        { text: 'AI Detection', icon: Brain },
        { text: '24/7 Monitoring', icon: Clock },
      ],
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
      github: '#',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'NFT Marketplace',
      description:
        'Decentralized marketplace for NFT trading with smart contract integration, wallet connectivity, and seamless blockchain transactions.',
      tech: ['Solidity', 'Ethers.js', 'React', 'IPFS', 'Hardhat'],
      metrics: [
        { text: 'Web3 Native', icon: Globe },
        { text: 'Smart Contracts', icon: FileCode },
        { text: 'Low Gas Fees', icon: Zap },
      ],
      image: 'https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
      github: '#',
      gradient: 'from-teal-500 to-emerald-500',
    },
    {
      title: 'Bookscape',
      description:
        'E-commerce platform optimized for book sales with advanced search, personalized recommendations, and seamless checkout experience.',
      tech: ['Django', 'React', 'Stripe', 'Elasticsearch', 'Redis'],
      metrics: [
        { text: '40% Faster', icon: Gauge },
        { text: 'Smart Search', icon: Brain },
        { text: 'Secure Payments', icon: Shield },
      ],
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
      github: '#',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Cloud Infrastructure Platform',
      description:
        'Automated cloud deployment and scaling solution with CI/CD pipelines, monitoring dashboards, and cost optimization.',
      tech: ['AWS', 'Terraform', 'Kubernetes', 'Prometheus', 'Grafana'],
      metrics: [
        { text: 'Auto-Scaling', icon: Activity },
        { text: 'Cost Optimized', icon: Gauge },
        { text: 'High Availability', icon: Shield },
      ],
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
      github: '#',
      gradient: 'from-gray-600 to-gray-800',
    },
  ];

  return (
    <section
      id="projects"
      className={`py-24 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Projects That Make <span className="text-gradient">Impact</span>
          </h2>
          <p
            className={`text-lg sm:text-xl max-w-3xl mx-auto px-4 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Real-world applications solving complex problems for startups and enterprises
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group rounded-3xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                darkMode
                  ? 'bg-gray-800 border border-gray-700'
                  : 'bg-white border border-gray-200 shadow-lg'
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity`}
                />
              </div>

              <div className="p-6 space-y-4">
                <h3
                  className={`text-2xl font-bold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`text-sm leading-relaxed ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        darkMode
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  {project.metrics.map((metric, metricIndex) => (
                    <span
                      key={metricIndex}
                      className={`flex items-center space-x-1.5 text-xs font-semibold ${
                        darkMode ? 'text-primary-400' : 'text-primary-600'
                      }`}
                    >
                      <metric.icon size={14} />
                      <span>{metric.text}</span>
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 pt-4">
                  <a
                    href={project.link}
                    className={`flex items-center space-x-2 text-sm font-medium transition-colors ${
                      darkMode
                        ? 'text-gray-400 hover:text-white'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <ExternalLink size={16} />
                    <span>View Project</span>
                  </a>
                  <a
                    href={project.github}
                    className={`flex items-center space-x-2 text-sm font-medium transition-colors ${
                      darkMode
                        ? 'text-gray-400 hover:text-white'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#contact"
            className={`inline-block px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 ${
              darkMode
                ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                : 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
            }`}
          >
            Let's Build Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
