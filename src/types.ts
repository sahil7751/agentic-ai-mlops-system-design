
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
    name: 'User Layer',
    description: 'The entry point for all user interactions, providing seamless access across devices.',
    color: '#3B82F6', // Blue
    subComponents: ['Web Clients (React/Angular)', 'Mobile Apps (Flutter/Swift)', 'API Gateway (Apigee)', 'Load Balancers'],
    technologies: [
      { name: 'React', description: 'Modern web frontend' },
      { name: 'Flutter', description: 'Cross-platform mobile' },
      { name: 'Apigee', description: 'Enterprise API management' }
    ]
  },
  {
    id: 'application-layer',
    name: 'Application Layer',
    description: 'Orchestrates business logic and coordinates between AI services and user requests.',
    color: '#10B981', // Emerald
    subComponents: ['Agentic Decision Engine', 'AI Microservices', 'Business Logic Services', 'Authentication (IAM)'],
    technologies: [
      { name: 'LangChain', description: 'LLM orchestration' },
      { name: 'Go/Node.js', description: 'High-performance microservices' },
      { name: 'gRPC', description: 'Efficient inter-service communication' }
    ]
  },
  {
    id: 'ai-ml-layer',
    name: 'AI / ML Layer',
    description: 'The core intelligence of the platform, housing state-of-the-art models and inference engines.',
    color: '#8B5CF6', // Violet
    subComponents: ['Transformer Models (Gemini/BERT)', 'Deep Learning Models', 'Vertex AI Prediction', 'Model Serving (Triton)'],
    technologies: [
      { name: 'TensorFlow', description: 'Deep learning framework' },
      { name: 'PyTorch', description: 'Research & production ML' },
      { name: 'NVIDIA Triton', description: 'High-throughput inference' }
    ]
  },
  {
    id: 'mlops-layer',
    name: 'MLOps Layer',
    description: 'Ensures the reliability, scalability, and continuous improvement of ML models.',
    color: '#F59E0B', // Amber
    subComponents: ['Model Registry', 'Feature Store', 'Automated Retraining', 'Model Monitoring'],
    technologies: [
      { name: 'Kubeflow', description: 'ML workflows on K8s' },
      { name: 'Vertex AI', description: 'Unified ML platform' },
      { name: 'MLflow', description: 'Experiment tracking' }
    ]
  },
  {
    id: 'data-layer',
    name: 'Data Layer',
    description: 'The foundation of the system, managing massive volumes of structured and unstructured data.',
    color: '#EF4444', // Red
    subComponents: ['BigQuery (Warehouse)', 'Cloud Storage (Lake)', 'Dataflow (Pipelines)', 'Pub/Sub (Real-time)'],
    technologies: [
      { name: 'BigQuery', description: 'Serverless data warehouse' },
      { name: 'Apache Beam', description: 'Unified data processing' },
      { name: 'Redis', description: 'High-speed caching' }
    ]
  },
  {
    id: 'devops-aiops-layer',
    name: 'DevOps & AIOps Layer',
    description: 'Automates infrastructure management and uses AI to maintain system health.',
    color: '#6366F1', // Indigo
    subComponents: ['GKE (Kubernetes)', 'Cloud Build (CI/CD)', 'Terraform (IaC)', 'Anomaly Detection'],
    technologies: [
      { name: 'Kubernetes', description: 'Container orchestration' },
      { name: 'Terraform', description: 'Infrastructure as Code' },
      { name: 'Prometheus', description: 'Monitoring & alerting' }
    ]
  }
];
