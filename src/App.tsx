import React from 'react';
import { 
  ChevronDown, 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Settings2,
  Bot,
  Code,
  LineChart,
  Eye,
  Workflow,
  Shield,
  Cloud,
  BookOpen,
  Terminal,
  GitBranch,
  Package,
  Cog
} from 'lucide-react';

// ... (previous MindMapNode interface remains the same)

const setupInstructions = {
  id: 'setup',
  label: 'Setup Guide',
  icon: <Terminal className="w-5 h-5 text-purple-600" />,
  description: 'Installation and configuration steps',
  children: [
    {
      id: 'prerequisites',
      label: 'Prerequisites',
      icon: <Package className="w-4 h-4 text-orange-600" />,
      description: 'Node.js 18+, Python 3.8+, Git',
    },
    {
      id: 'installation',
      label: 'Installation',
      icon: <Cog className="w-4 h-4 text-green-600" />,
      description: 'npm install && python -m pip install -r requirements.txt',
    },
    {
      id: 'configuration',
      label: 'Configuration',
      icon: <Settings2 className="w-4 h-4 text-blue-600" />,
      description: 'Environment setup and API keys',
    }
  ]
};

const documentationSection = {
  id: 'docs',
  label: 'Documentation',
  icon: <BookOpen className="w-5 h-5 text-indigo-600" />,
  description: 'System documentation and guides',
  children: [
    {
      id: 'api-docs',
      label: 'API Reference',
      icon: <Code className="w-4 h-4 text-gray-600" />,
      description: 'API documentation and examples',
    },
    {
      id: 'guides',
      label: 'User Guides',
      icon: <BookOpen className="w-4 h-4 text-blue-600" />,
      description: 'Usage guides and tutorials',
    }
  ]
};

const mindMapData = {
  id: 'root',
  label: 'AI Systems',
  icon: <Brain className="w-6 h-6 text-blue-600" />,
  description: 'Comprehensive AI system architecture',
  children: [
    setupInstructions,
    {
      id: 'ml',
      label: 'Machine Learning',
      icon: <Cpu className="w-5 h-5 text-green-600" />,
      description: 'Core ML components',
      children: [
        {
          id: 'vllm',
          label: 'VLLMs',
          icon: <Bot className="w-4 h-4 text-purple-600" />,
          description: 'Very Large Language Models'
        },
        {
          id: 'multimodal',
          label: 'Multi-Modal',
          icon: <Eye className="w-4 h-4 text-orange-600" />,
          description: 'Multiple data type processing'
        },
        {
          id: 'deep-learning',
          label: 'Deep Learning',
          icon: <Network className="w-4 h-4 text-indigo-600" />,
          description: 'Neural network architectures'
        }
      ]
    },
    {
      id: 'data',
      label: 'Data Processing',
      icon: <Database className="w-5 h-5 text-red-600" />,
      description: 'Data handling and processing',
      children: [
        {
          id: 'pipeline',
          label: 'Training Pipeline',
          icon: <Workflow className="w-4 h-4 text-yellow-600" />,
          description: 'End-to-end training workflow'
        },
        {
          id: 'analytics',
          label: 'Analytics',
          icon: <LineChart className="w-4 h-4 text-green-600" />,
          description: 'Data analysis and visualization'
        }
      ]
    },
    {
      id: 'infrastructure',
      label: 'Infrastructure',
      icon: <Cloud className="w-5 h-5 text-sky-600" />,
      description: 'System infrastructure',
      children: [
        {
          id: 'security',
          label: 'Security',
          icon: <Shield className="w-4 h-4 text-red-600" />,
          description: 'System security and protection'
        },
        {
          id: 'api',
          label: 'API Gateway',
          icon: <Code className="w-4 h-4 text-gray-600" />,
          description: 'API management and routing'
        }
      ]
    },
    documentationSection
  ]
};

// ... (previous MindMapNode component remains the same)

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <Brain className="w-8 h-8 text-blue-600" />
            AI Systems Mindmap
          </h1>
          <p className="text-gray-600">
            Interactive visualization of AI system architecture with setup instructions and documentation
          </p>
        </header>
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <MindMapNode node={mindMapData} />
        </div>
        <footer className="mt-8 text-center text-gray-500 text-sm">
          <p>Click on nodes to expand/collapse. Hover for descriptions.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;