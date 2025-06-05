import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const skills = [
	{ name: 'React', tip: 'Reactive like your ex but way more stable.', level: 'Expert' },
	{ name: 'TypeScript', tip: 'Structure + Sass.', level: 'Advanced' },
	{ name: 'TailwindCSS', tip: "I don't write CSS, I breathe it.", level: 'Expert' },
	{ name: 'Next.js', tip: 'The React framework that makes sense.', level: 'Advanced' },
	{ name: 'Node.js', tip: 'Backend sorcery loading...', level: 'Intermediate' },
	{ name: 'Flask', tip: 'Python-powered potions.', level: 'Advanced' },
	{ name: 'Django', tip: 'Batteries included, broomstick optional.', level: 'Intermediate' },
	{ name: 'Framer Motion', tip: 'Making things move like magic.', level: 'Advanced' },
	{ name: 'Python', tip: 'Snake charming for the digital age.', level: 'Advanced' },
	{ name: 'Git', tip: 'Time travel for code.', level: 'Expert' },
	{ name: 'Firebase', tip: 'Cloud magic at its finest.', level: 'Intermediate' },
	{ name: 'IoT', tip: 'Making everyday objects sentient.', level: 'Intermediate' },
	{ name: 'AI/ML', tip: 'Teaching machines to think like humans.', level: 'Intermediate' },
	{ name: 'REST APIs', tip: 'Making services talk to each other.', level: 'Advanced' },
	{ name: 'GraphQL', tip: 'Query language for your APIs.', level: 'Intermediate' }
];

const Skills = () => {
	const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
	const { isDarkMode } = useTheme();
	return (
		<section className={`min-h-screen py-2 px-6 relative overflow-hidden transition-all duration-500 ${
			isDarkMode 
				? 'bg-gradient-to-br from-green-500/20 via-green-400/15 via-purple-500/25 to-blue-600/20 text-white' 
				: 'bg-gradient-to-br from-emerald-100/50 via-purple-100/40 to-pink-100/50 text-gray-800'
		} container`}>
			{/* Background Effects */}
			<div className={`absolute inset-0 bg-[radial-gradient(#FF6EC7_1px,transparent_1px)] [background-size:80px_80px] opacity-5 animate-pulse ${
				!isDarkMode && 'opacity-3'
			}`}
			/>
			
			<motion.h2
				className={`text-4xl md:text-5xl font-orbitron text-center mb-4 drop-shadow-lg font-bold transition-colors duration-300 ${
					isDarkMode ? 'text-pink-400' : 'text-purple-600'
				}`}
				initial={{ opacity: 0, y: -40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				Spells I Cast
			</motion.h2>
				<motion.p
				className={`text-center mb-8 font-grotesk italic text-lg transition-colors duration-300 ${
					isDarkMode ? 'text-cyan-400' : 'text-emerald-600'
				}`}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1, delay: 0.3 }}
			>
				"Magic is just technology we don't understand yet"
			</motion.p>		
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center max-w-6xl mx-auto">
				{skills.map((skill, i) => (
					<motion.div
						key={skill.name}
						className="relative group w-full max-w-[200px]"
						initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: i * 0.1 }}
						onHoverStart={() => setHoveredSkill(skill.name)}
						onHoverEnd={() => setHoveredSkill(null)}
					>			
						{/* Skill Cassette Container with Double Borders */}
						<motion.div
							className={`rounded-xl p-6 shadow-2xl border-2 transition-all duration-300 relative overflow-visible backdrop-blur-sm w-full h-[160px] flex flex-col items-center justify-center ${
								isDarkMode
									? 'bg-gradient-to-br from-purple-900/40 via-pink-900/20 to-black/40 border-pink-400/30 hover:border-pink-400/70'
									: 'bg-gradient-to-br from-emerald-100/60 via-purple-100/40 to-pink-100/60 border-emerald-400/40 hover:border-emerald-500/80'
							}`}
							whileHover={{ 
								y: -5, 
								scale: 1.05,
								boxShadow: [
									"0 0 0 1px rgba(255, 110, 199, 0.2), 0 0 0 3px rgba(0, 247, 255, 0.1), 0 8px 32px rgba(0, 0, 0, 0.4)",
									"0 0 0 2px rgba(255, 110, 199, 0.8), 0 0 0 5px rgba(0, 247, 255, 0.4), 0 0 50px rgba(255, 110, 199, 0.6), 0 8px 32px rgba(0, 0, 0, 0.4)"
								]
							}}
							whileTap={{ scale: 0.95 }}
							style={{
								boxShadow: `
									0 0 0 1px rgba(255, 110, 199, 0.2),
									0 0 0 3px rgba(0, 247, 255, 0.1),
									0 8px 32px rgba(0, 0, 0, 0.4)
								`
							}}
						>
							{/* Enhanced Cassette glow effect */}
							<div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl blur-sm" />
							<div className="absolute inset-0 bg-gradient-to-r from-pink-400/10 via-cyan-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
								{/* Skill Orb */}
							<motion.div
								className="w-20 h-20 bg-gradient-to-br from-cyan-400 via-pink-400 via-purple-400 to-blue-400 text-black font-bold rounded-full flex items-center justify-center text-center shadow-2xl cursor-pointer relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(255,110,199,0.8)] transition-all duration-300 mx-auto"
								whileHover={{ scale: 1.1, rotate: 5 }}
								whileTap={{ scale: 0.95 }}
							>
								{/* Glow effect */}
								<div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-cyan-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								
								<span className={`relative z-10 font-orbitron text-center px-1 leading-tight font-bold ${
									skill.name.length > 8 ? 'text-[10px]' : 'text-xs'
								}`}>
									{skill.name}
								</span>
							</motion.div>

							{/* Skill Name and Level - Same Line */}			
							<div className="mt-3 text-center relative z-10">
								<div className={`text-sm font-semibold font-grotesk transition-colors duration-300 ${
									isDarkMode ? 'text-cyan-400' : 'text-emerald-600'
								}`}>
									{skill.name}
									<span className={`ml-2 text-xs font-medium ${
										skill.level === 'Expert' ? 'text-green-400' :
										skill.level === 'Advanced' ? 'text-yellow-400' :
										'text-blue-400'
									}`}>
										({skill.level})
									</span>
								</div>
							</div>
						</motion.div>			
						{/* Tooltip with dynamic positioning */}
						{hoveredSkill === skill.name && (
							<motion.div
								className={`absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500 to-cyan-500 text-black px-4 py-3 rounded-lg text-sm font-vt323 whitespace-nowrap shadow-2xl z-[9999] border-2 border-white/20 min-w-max ${
									i >= 12 ? '-bottom-24' : '-top-28'
								}`}
								initial={{ opacity: 0, scale: 0.8, y: i >= 12 ? -10 : 10 }}
								animate={{ opacity: 1, scale: 1, y: 0 }}
								exit={{ opacity: 0, scale: 0.8, y: i >= 12 ? -10 : 10 }}
								transition={{ duration: 0.3 }}
								style={{ 
									pointerEvents: 'none',
									maxWidth: '280px'
								}}
							>
								<div className="font-bold text-center mb-1">{skill.name}</div>
								<div className="text-center text-xs">{skill.tip}</div>
								{/* Dynamic Arrow */}
								<div className={`absolute left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-transparent ${
									i >= 12 
										? 'bottom-full border-b-4 border-b-pink-500' 
										: 'top-full border-t-4 border-t-pink-500'
								}`}
								/>
							</motion.div>
						)}
					</motion.div>
				))}
			</div>

			{/* Floating Elements */}		
			<motion.div
				className="absolute top-32 left-16 w-3 h-3 bg-pink-400 rounded-full opacity-60"
				animate={{ y: [-15, 15, -15], rotate: 360 }}
				transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
			/>
			<motion.div
				className="absolute bottom-40 right-20 w-5 h-5 bg-cyan-400 rounded-full opacity-40"
				animate={{ y: [20, -20, 20], rotate: -360 }}
				transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
			/>
		</section>
	);
};

export default Skills;