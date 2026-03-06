
export interface TechItem {
  name: string;
  icon?: string;
  description: string;
}

export interface ArchitectureLayer {
  id: string;
  name: string;
  description: string;
  technologies: TechItem[];
  subComponents: string[];
  color: string;
}

export const ARCHITECTURE_DATA: ArchitectureLayer[] = [
  {
    id: 'user-layer',
    name: 'User & Security Layer',
    description: 'Secure entry point with zero-trust architecture and global traffic management.',
    color: '#3B82F6',
    subComponents: ['API Gateway (Apigee)', 'IAM & OAuth2', 'WAF & DDoS Protection', 'Data Privacy Vault'],
    technologies: [
      { name: 'Apigee', description: 'Enterprise API management' },
      { name: 'Auth0/Okta', description: 'Identity management' },
      { name: 'Cloud Armor', description: 'L7 Security & WAF' }
    ]
  },
  {
    id: 'orchestration-layer',
    name: 'Agent Orchestration',
    description: 'Multi-agent system for task planning, tool usage, and complex reasoning.',
    color: '#10B981',
    subComponents: ['Multi-Agent Controller', 'Task Planner Agents', 'Tool-Using Agents', 'Reasoning Engine'],
    technologies: [
      { name: 'LangGraph', description: 'Cyclic agent workflows' },
      { name: 'AutoGPT', description: 'Autonomous agent logic' },
      { name: 'Semantic Kernel', description: 'AI orchestration SDK' }
    ]
  },
  {
    id: 'ai-ml-layer',
    name: 'Advanced AI & RAG',
    description: 'Distributed inference with RAG, Vector DBs, and Knowledge Graph integration.',
    color: '#8B5CF6',
    subComponents: ['Distributed Inference', 'Vector Database (Pinecone)', 'Knowledge Graph', 'RAG Pipeline'],
    technologies: [
      { name: 'Pinecone/Weaviate', description: 'Vector search engine' },
      { name: 'Neo4j', description: 'Knowledge graph storage' },
      { name: 'vLLM', description: 'High-throughput LLM serving' }
    ]
  },
  {
    id: 'mlops-layer',
    name: 'MLOps & Feature Store',
    description: 'Centralized model registry and feature store for lifecycle management.',
    color: '#F59E0B',
    subComponents: ['Model Registry', 'Feature Store (Online/Offline)', 'Experiment Tracking', 'Drift Detection'],
    technologies: [
      { name: 'Vertex AI Feature Store', description: 'Managed feature storage' },
      { name: 'MLflow', description: 'Model lifecycle management' },
      { name: 'Evidently AI', description: 'Model monitoring & drift' }
    ]
  },
  {
    id: 'data-layer',
    name: 'Real-Time Data & Governance',
    description: 'Streaming pipelines with Kafka and robust data governance/lineage.',
    color: '#EF4444',
    subComponents: ['Kafka/PubSub Streams', 'Data Lineage (Data Catalog)', 'Quality Checks', 'Real-time Inference'],
    technologies: [
      { name: 'Confluent Kafka', description: 'Event streaming platform' },
      { name: 'Cloud Data Catalog', description: 'Metadata management' },
      { name: 'Great Expectations', description: 'Data quality validation' }
    ]
  },
  {
    id: 'infra-aiops-layer',
    name: 'Infra, AIOps & FinOps',
    description: 'Auto-scaling infrastructure with cost optimization and anomaly detection.',
    color: '#6366F1',
    subComponents: ['Auto-scaling GKE', 'FinOps Cost Monitoring', 'Anomaly Detection', 'Serverless Functions'],
    technologies: [
      { name: 'Kubernetes (GKE)', description: 'Container orchestration' },
      { name: 'KubeCost', description: 'Kubernetes cost analysis' },
      { name: 'Datadog', description: 'Full-stack observability' }
    ]
  }
];
