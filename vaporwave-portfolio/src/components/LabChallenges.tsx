import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

const labChallenges = [
	{
		title: 'Intro to Network Traffic Analysis',
		platform: 'TryHackMe',
		difficulty: 'Beginner',
		status: 'Completed',
		description: 'Introduction to analyzing network traffic and understanding packet flows.',
		problemStatement: 'Learn to capture and analyze network packets to identify potential security threats and understand network communication patterns.',
		approach: [
			'Used Wireshark to capture and analyze network packets',
			'Identified different protocol types (HTTP, TCP, UDP)',
			'Analyzed packet headers and payloads',
			'Detected suspicious network activity patterns'
		],
		toolsUsed: ['Wireshark', 'TCPDump', 'Network Analysis Tools'],
		keyLessons: [
			'Understanding packet structure and protocols',
			'Identifying normal vs suspicious network behavior',
			'Importance of network monitoring for security'
		],
		achievements: {
			points: null,
			tasks: 5,
			streak: null
		},
		tags: ['Network Security', 'Traffic Analysis', 'Wireshark']
	},
	{
		title: 'DNS in Detail',
		platform: 'TryHackMe',
		difficulty: 'Easy',
		status: 'Completed',
		description: 'Deep dive into DNS (Domain Name System) functionality and security implications.',
		problemStatement: 'Understand how DNS works, common DNS record types, and potential security vulnerabilities in DNS infrastructure.',
		approach: [
			'Explored different DNS record types (A, AAAA, CNAME, MX, TXT)',
			'Performed DNS enumeration and reconnaissance',
			'Analyzed DNS queries and responses',
			'Identified DNS security issues and misconfigurations'
		],
		toolsUsed: ['dig', 'nslookup', 'DNSRecon', 'DNS Analysis Tools'],
		keyLessons: [
			'DNS hierarchy and resolution process',
			'Security implications of DNS misconfigurations',
			'DNS as an attack vector and defense mechanism'
		],
		achievements: {
			points: 112,
			tasks: 5,
			streak: 2
		},
		tags: ['DNS', 'Network Protocols', 'Reconnaissance']
	},
	{
		title: 'Web Requests',
		platform: 'TryHackMe',
		difficulty: 'Easy',
		status: 'Completed',
		description: 'Understanding HTTP/HTTPS protocols and web request analysis.',
		problemStatement: 'Learn to analyze web requests, understand HTTP methods, headers, and identify potential web-based vulnerabilities.',
		approach: [
			'Analyzed HTTP request and response structures',
			'Used browser developer tools and proxy tools',
			'Identified different HTTP methods and their purposes',
			'Examined headers for security information'
		],
		toolsUsed: ['Burp Suite', 'Browser DevTools', 'curl', 'Postman'],
		keyLessons: [
			'HTTP protocol fundamentals',
			'Web request interception and analysis',
			'Security headers and their importance'
		],
		achievements: {
			points: null,
			tasks: 4,
			streak: null
		},
		tags: ['Web Security', 'HTTP/HTTPS', 'Web Analysis']
	}
];

const LabChallenges = () => {
	const { isDarkMode } = useTheme();

	return (
		<section
			className={`min-h-screen py-20 px-6 relative overflow-hidden transition-all duration-500 ${
				isDarkMode
					? 'bg-gradient-to-br from-indigo-900/30 via-purple-900/25 to-cyan-900/20 text-white'
					: 'bg-gradient-to-br from-indigo-50/70 via-purple-50/50 to-cyan-50/60 text-gray-800'
			} container`}
		>
			{/* Background Pattern */}
			<div
				className={`absolute inset-0 bg-[radial-gradient(#6366F1_1px,transparent_1px)] [background-size:50px_50px] opacity-10 animate-pulse ${
					!isDarkMode && 'opacity-5'
				}`}
			/>

			<motion.h2
				className={`text-4xl md:text-5xl font-orbitron text-center mb-4 drop-shadow-lg font-bold transition-colors duration-300 ${
					isDarkMode ? 'text-indigo-400' : 'text-indigo-600'
				}`}
				initial={{ opacity: 0, y: -40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				🏆 Lab Challenges
			</motion.h2>

			<motion.p
				className={`text-center mb-12 font-grotesk text-lg ${
					isDarkMode ? 'text-cyan-300' : 'text-indigo-600'
				}`}
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
			>
				Cybersecurity challenges conquered through hands-on learning
			</motion.p>

			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
				{labChallenges.map((lab, index) => (
					<motion.div
						key={lab.title}
						className={`rounded-xl p-6 shadow-2xl border transition-all duration-300 relative overflow-hidden group backdrop-blur-sm ${
							isDarkMode
								? 'bg-gradient-to-br from-indigo-900/60 via-purple-900/40 to-cyan-900/30 border-indigo-400/30 hover:border-indigo-400/60'
								: 'bg-gradient-to-br from-white/90 via-indigo-50/70 to-purple-50/60 border-indigo-300/40 hover:border-indigo-400/70'
						}`}
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: index * 0.2 }}
						whileHover={{ y: -5, scale: 1.02 }}
					>
						{/* Hover Glow Effect */}
						<div
							className={`absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
								isDarkMode
									? 'bg-gradient-to-r from-indigo-400/10 via-purple-400/10 to-cyan-400/10'
									: 'bg-gradient-to-r from-indigo-400/10 via-purple-400/10 to-cyan-400/10'
							}`}
						/>

						{/* Status and Platform Badges */}
						<div className="flex justify-between items-start mb-4 relative z-10">
							<span
								className={`px-3 py-1 text-xs rounded-full font-semibold ${
									lab.status === 'Completed'
										? 'bg-green-500 text-white'
										: 'bg-yellow-500 text-black'
								}`}
							>
								✅ {lab.status}
							</span>
							<span
								className={`px-2 py-1 text-xs rounded-md font-medium border ${
									isDarkMode
										? 'bg-indigo-400/20 text-indigo-300 border-indigo-400/40'
										: 'bg-indigo-100 text-indigo-700 border-indigo-300'
								}`}
							>
								{lab.platform}
							</span>
						</div>

						<div className="relative z-10">
							{/* Title and Difficulty */}
							<div className="mb-3">
								<h3
									className={`text-xl font-bold mb-1 font-orbitron leading-tight transition-colors duration-300 ${
										isDarkMode ? 'text-indigo-300' : 'text-indigo-700'
									}`}
								>
									{lab.title}
								</h3>
								<span
									className={`text-sm font-medium px-2 py-1 rounded ${
										lab.difficulty === 'Easy'
											? 'bg-green-100 text-green-700'
											: lab.difficulty === 'Medium'
											? 'bg-yellow-100 text-yellow-700'
											: lab.difficulty === 'Beginner'
											? 'bg-blue-100 text-blue-700'
											: 'bg-red-100 text-red-700'
									}`}
								>
									{lab.difficulty}
								</span>
							</div>

							{/* Description */}
							<p
								className={`mb-4 font-grotesk text-sm leading-relaxed transition-colors duration-300 ${
									isDarkMode ? 'text-cyan-300' : 'text-indigo-600'
								}`}
							>
								{lab.description}
							</p>

							{/* Achievements */}
							{lab.achievements.points && (
								<div className="flex gap-4 mb-4 text-xs">
									<div
										className={`flex items-center gap-1 ${
											isDarkMode ? 'text-yellow-300' : 'text-yellow-600'
										}`}
									>
										<span>🏆</span>
										<span>{lab.achievements.points} pts</span>
									</div>
									<div
										className={`flex items-center gap-1 ${
											isDarkMode ? 'text-blue-300' : 'text-blue-600'
										}`}
									>
										<span>📋</span>
										<span>{lab.achievements.tasks} tasks</span>
									</div>
									{lab.achievements.streak && (
										<div
											className={`flex items-center gap-1 ${
												isDarkMode ? 'text-orange-300' : 'text-orange-600'
											}`}
										>
											<span>🔥</span>
											<span>{lab.achievements.streak} streak</span>
										</div>
									)}
								</div>
							)}

							{/* Tags */}
							<div className="flex flex-wrap gap-2 mb-4">
								{lab.tags.map((tag) => (
									<span
										key={tag}
										className={`px-2 py-1 rounded-full text-xs font-medium border transition-colors duration-300 ${
											isDarkMode
												? 'bg-purple-400/20 text-purple-300 border-purple-400/40'
												: 'bg-purple-100 text-purple-700 border-purple-300'
										}`}
									>
										{tag}
									</span>
								))}
							</div>

							{/* Expandable Details */}
							<details className="group/details">
								<summary
									className={`cursor-pointer font-medium text-sm mb-2 transition-colors duration-300 ${
										isDarkMode ? 'text-indigo-300 hover:text-indigo-200' : 'text-indigo-600 hover:text-indigo-800'
									}`}
								>
									📖 View Details
								</summary>
								<div className="mt-3 space-y-3 text-xs">
									{/* Problem Statement */}
									<div>
										<h4
											className={`font-semibold mb-1 ${
												isDarkMode ? 'text-cyan-300' : 'text-cyan-700'
											}`}
										>
											Problem Statement:
										</h4>
										<p
											className={`${
												isDarkMode ? 'text-gray-300' : 'text-gray-600'
											}`}
										>
											{lab.problemStatement}
										</p>
									</div>

									{/* Tools Used */}
									<div>
										<h4
											className={`font-semibold mb-1 ${
												isDarkMode ? 'text-cyan-300' : 'text-cyan-700'
											}`}
										>
											Tools Used:
										</h4>
										<div className="flex flex-wrap gap-1">
											{lab.toolsUsed.map((tool) => (
												<span
													key={tool}
													className={`px-2 py-0.5 rounded text-xs ${
														isDarkMode
															? 'bg-gray-700 text-gray-300'
															: 'bg-gray-200 text-gray-700'
													}`}
												>
													{tool}
												</span>
											))}
										</div>
									</div>

									{/* Key Lessons */}
									<div>
										<h4
											className={`font-semibold mb-1 ${
												isDarkMode ? 'text-cyan-300' : 'text-cyan-700'
											}`}
										>
											Key Lessons:
										</h4>
										<ul
											className={`list-disc list-inside space-y-1 ${
												isDarkMode ? 'text-gray-300' : 'text-gray-600'
											}`}
										>
											{lab.keyLessons.map((lesson, i) => (
												<li key={i} className="text-xs">
													{lesson}
												</li>
											))}
										</ul>
									</div>
								</div>
							</details>
						</div>
					</motion.div>
				))}
			</div>

			{/* Call to Action */}
			<motion.div
				className="text-center mt-16"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.5 }}
			>
				<p
					className={`font-vt323 text-lg mb-4 ${
						isDarkMode ? 'text-purple-300' : 'text-purple-600'
					}`}
				>
					&quot;Learning through breaking things... ethically. 🔐&quot;
				</p>
				<motion.a
					href="https://tryhackme.com/p/Tiffany-kay"
					target="_blank"
					rel="noopener noreferrer"
					className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
						isDarkMode
							? 'bg-indigo-500 hover:bg-indigo-400 text-white border border-indigo-400'
							: 'bg-indigo-600 hover:bg-indigo-700 text-white border border-indigo-500'
					}`}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					🎯 View My TryHackMe Profile
				</motion.a>
			</motion.div>
		</section>
	);
};

export default LabChallenges;
