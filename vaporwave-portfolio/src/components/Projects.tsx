import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

const projects = [
	{
		title: 'Drip Check',
		description: 'Gen Z fashion rating app using AI and vibes.',
		tech: ['Next.js', 'TailwindCSS', 'Firebase', 'AI/ML'],
		confession: 'Nearly cried building this. Worth it.',
		github: 'https://github.com/PrudenceGikundi/DripCheck',
		demo: '#',
		status: 'In Progress',
	},
	{
		title: 'Mental Baddie',
		description: 'Mental health platform for digital sorceresses.',
		tech: ['React', 'Typeform', 'Framer Motion'],
		confession: 'Built in a coffee-fueled trance.',
		github: 'https://github.com/MentalBaddie/mental-baddie-web',
		demo: 'https://mental-baddie.web.app/',
		status: 'Live',
	},
	{
		title: 'Smart Waste Detection',
		description: 'IoT system for intelligent waste management.',
		tech: ['Arduino', 'Python', 'Flask', 'IoT'],
		confession: 'Sensors and code living in harmony.',
		github: 'https://github.com/Tiffany-kay/smart-waste-detection',
		demo: '#',
		status: 'Completed',
	},
	{
		title: 'Portfolio V2',
		description: 'This very portfolio, built with React and Framer Motion.',
		tech: ['React', 'Framer Motion', 'TailwindCSS'],
		confession: 'Built this to procrastinate on real work.',
		github: '#',
		demo: '#',
		status: 'Live',
	},
	{
		title: 'E-Commerce Platform',
		description: 'Full-stack e-commerce site.',
		tech: ['React', '(Javascript, CSS)'],
		confession: 'Spent more time styling than coding.',
		github: 'https://github.com/Tiffany-kay/commerce1.git',
		demo: 'https://commerce-orcin-three-89.vercel.app/',
		status: 'Completed',
	},
];

const Projects = () => {
	const { isDarkMode } = useTheme();
	return (
		<section
			className={`min-h-screen py-2 px-6 relative overflow-hidden transition-all duration-500 ${
				isDarkMode
					? 'bg-gradient-to-br from-green-500/20 via-green-400/15 via-purple-500/25 to-blue-600/20 text-white'
					: 'bg-gradient-to-br from-emerald-100/50 via-purple-100/40 to-pink-100/50 text-gray-800'
			} container`}
		>
			<div
				className={`absolute inset-0 bg-[radial-gradient(#00F7FF_1px,transparent_1px)] [background-size:60px_60px] opacity-5 animate-pulse ${
					!isDarkMode && 'opacity-3'
				}`}
			/>

			<motion.h2
				className={`text-4xl md:text-5xl font-orbitron text-center mb-8 drop-shadow-lg font-bold transition-colors duration-300 ${
					isDarkMode ? 'text-pink-400' : 'text-purple-600'
				}`}
				initial={{ opacity: 0, y: -40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				Digital Artifacts
			</motion.h2>
			<div className="flex flex-col items-center">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
					{projects.map((project, i) => (
						<motion.div
							key={project.title}
							className={`rounded-xl p-4 shadow-2xl border transition-all duration-300 relative overflow-hidden group backdrop-blur-sm w-full max-w-md h-96 ${
								isDarkMode
									? 'bg-gradient-to-br from-purple-900/50 via-pink-900/30 to-black/50 border-pink-400/30 hover:border-pink-400/60'
									: 'bg-gradient-to-br from-white/80 via-emerald-50/60 to-purple-50/60 border-emerald-400/40 hover:border-emerald-500/70'
							}`}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: i * 0.2 }}
							whileHover={{ y: -3, scale: 1.02 }}
						>
							<div
								className={`absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
									isDarkMode
										? 'bg-gradient-to-r from-pink-400/10 via-cyan-400/10 to-purple-400/10'
										: 'bg-gradient-to-r from-emerald-400/10 via-purple-400/10 to-pink-400/10'
								}`}
							/>

							<div className="absolute top-4 right-4">
								<span
									className={`px-2 py-1 text-xs rounded-full font-semibold ${
										project.status === 'Live'
											? 'bg-green-500 text-white'
											: project.status === 'In Progress'
											? 'bg-yellow-500 text-black'
											: 'bg-blue-500 text-white'
									}`}
								>
									{project.status}
								</span>
							</div>

							<div className="relative z-10">
								<h3
									className={`text-lg font-bold mb-2 font-orbitron leading-tight truncate transition-colors duration-300 ${
										isDarkMode ? 'text-pink-400' : 'text-purple-600'
									}`}
								>
									{project.title}
								</h3>
								<p
									className={`mb-2 font-grotesk text-sm leading-snug line-clamp-2 transition-colors duration-300 ${
										isDarkMode ? 'text-cyan-400' : 'text-emerald-600'
									}`}
								>
									{project.description}
								</p>

								<div className="flex flex-wrap gap-1 mb-2">
									{project.tech.map((tech) => (
										<span
											key={tech}
											className={`px-1.5 py-0.5 rounded-full text-xs font-medium border transition-colors duration-300 ${
												isDarkMode
													? 'bg-cyan-400/20 text-cyan-400 border-cyan-400/40'
													: 'bg-emerald-400/20 text-emerald-600 border-emerald-400/40'
											}`}
										>
											{tech}
										</span>
									))}
								</div>
								<p
									className={`italic text-xs mb-3 font-vt323 line-clamp-2 transition-colors duration-300 ${
										isDarkMode ? 'text-pink-300' : 'text-emerald-500'
									}`}
								>
									&quot;{project.confession}&quot;
								</p>
								<div className="flex flex-wrap items-center gap-6 text-sm">
									<motion.a
										href={project.github}
										className={`transition-colors underline text-xs px-2 py-1 border rounded-md ${
											isDarkMode
												? 'text-blue-400 hover:text-white decoration-blue-400/50 hover:decoration-white border-blue-400/30 hover:border-blue-400/70 bg-blue-400/5'
												: 'text-emerald-600 hover:text-white decoration-emerald-600/50 hover:decoration-white border-emerald-600/30 hover:border-emerald-600/70 bg-emerald-600/5'
										}`}
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										📂 GitHub
									</motion.a>
									<motion.a
										href={project.demo}
										className={`transition-colors underline text-xs px-2 py-1 border rounded-md ${
											isDarkMode
												? 'text-pink-400 hover:text-white decoration-pink-400/50 hover:decoration-white border-pink-400/30 hover:border-pink-400/70 bg-pink-400/5'
												: 'text-purple-600 hover:text-white decoration-purple-600/50 hover:decoration-white border-purple-600/30 hover:border-purple-600/70 bg-purple-600/5'
										}`}
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										🚀 Live Demo
									</motion.a>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;