
import { PlaygroundItem, WorkExperience } from './types';
import profileImg from './assets/profile.jpeg';

export const PROFILE_NAME = "Sayandip Bar";
export const PROFILE_TITLE = "AI Engineer";
export const PROFILE_AVATAR = profileImg;

export const SYSTEM_PROMPT = `
You are the AI Assistant for Sayandip Bar, a world-class AI Engineer & Full Stack Developer.
Sayandip specializes in "Engineering intelligence," meaning he builds robust AI systems, scalable ML pipelines, and intuitive user interfaces.

Skills: Machine Learning, Python, PyTorch, LangChain, React, TypeScript, Cloud Architecture.
Recent Projects:
- Neural Search: A semantic search engine for legal documents using vector databases.
- Agentic Flow: A multi-agent framework for automating complex software tasks.
- Vision Core: A real-time computer vision system for industrial safety monitoring.

Answer questions as Sayandip's assistant. Keep it professional, insightful, and concise.
If asked about contact details, mentions sayandip@bar.design or his LinkedIn.
If asked for a resume, suggest clicking the "Download Resume" chip.
`;

export const PLAYGROUND_ITEMS: PlaygroundItem[] = [
  {
    id: '1',
    title: 'RAG Chatbot',
    description: "A context-aware chatbot using LangChain and Pinecone. Retrieves real-time data to answer questions accurately.",
    icon: 'smart_toy',
    iconColor: 'text-primary',
    tags: ['LangChain', 'Python'],
    link: '#'
  },
  {
    id: '2',
    title: 'Image Classifier',
    description: 'ResNet-50 based image classification model deployed on edge devices for real-time inference.',
    icon: 'view_in_ar',
    iconColor: 'text-purple-500',
    tags: ['PyTorch', 'Edge AI'],
    link: '#'
  },
  {
    id: '3',
    title: 'Voice Agent',
    description: 'End-to-end voice assistant using OpenAI Whisper and ElevenLabs, capable of natural conversational flows.',
    icon: 'mic',
    iconColor: 'text-pink-500',
    tags: ['OpenAI', 'React'],
    link: '#'
  },
  {
    id: '4',
    title: 'Sentiment Stats',
    description: 'Real-time social media sentiment analysis pipeline processing 10k+ tweets per second.',
    icon: 'query_stats',
    iconColor: 'text-amber-500',
    tags: ['Kafka', 'NLP'],
    link: '#'
  },
  {
    id: '5',
    title: 'Auto-Coder',
    description: 'Experimental VS Code extension that uses local LLMs to autocomplete code based on project context.',
    icon: 'code',
    iconColor: 'text-blue-400',
    tags: ['LLM', 'Extension'],
    link: '#'
  }
];

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    id: '1',
    company: 'ESHURA',
    role: 'Co-Founder',
    period: 'Present',
    description: 'Building an innovative SaaS platform from the ground up. Leading product vision, technical architecture, and team growth.',
    highlights: [
      'Co-founded and leading the technical development of the SaaS product.',
      'Designing scalable architecture to support rapid growth.',
      'Driving product strategy and user experience decisions.'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'AWS', 'PostgreSQL'],
    icon: 'rocket_launch',
    link: 'https://www.eshura.com',
    linkText: 'View the Official Website'
  },
  {
    id: '2',
    company: 'Infosys Springboard',
    role: 'AI Engineer Intern',
    period: '1st December — 31st January',
    description: 'Leading the development of large-scale language model applications. optimizing inference latency, and fine-tuning models for specific domains.',
    highlights: [
      'Deployed a custom LLM pipeline serving 1M+ requests daily with <500ms latency.',
      'Architected a multi-modal retrieval system improving search relevance by 40%.',
      'Mentored junior engineers and established best practices for ML ops.'
    ],
    techStack: ['Python', 'PyTorch', 'FastAPI', 'AWS', 'Docker'],
    icon: 'psychology',
    link: 'https://github.com/springboardmentor88888-mahaprasad/Intern-PlantChatBot-Project/tree/sayandip',
    linkText: 'View Full Project on GitHub'
  }
];
