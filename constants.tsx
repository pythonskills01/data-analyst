import { 
  BarChart3, 
  Database, 
  FileSpreadsheet, 
  Code2, 
  LineChart, 
  PieChart, 
  Search, 
  BrainCircuit,
  Table,
  Sigma,
  Presentation
} from 'lucide-react';
import { NavItem, Project, Service, ToolItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Tools', href: '#tools' },
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Data Visualization',
    description: 'Transforming complex datasets into clear, interactive dashboards that drive decision-making.',
    icon: BarChart3,
  },
  {
    id: '2',
    title: 'Statistical Analysis',
    description: 'Applying robust statistical methods to uncover trends, patterns, and correlations.',
    icon: Sigma,
  },
  {
    id: '3',
    title: 'Automated Reporting',
    description: 'Streamlining business intelligence with automated pipelines using Python and SQL.',
    icon: Database,
  },
];

export const TOOLS: ToolItem[] = [
  { name: 'Python', category: 'Language', icon: Code2, color: 'text-blue-500' },
  { name: 'SQL', category: 'Database', icon: Database, color: 'text-orange-500' },
  { name: 'Excel', category: 'Software', icon: FileSpreadsheet, color: 'text-green-600' },
  { name: 'Power BI', category: 'Viz', icon: BarChart3, color: 'text-yellow-600' },
  { name: 'Matplotlib', category: 'Viz', icon: Presentation, color: 'text-red-500' },
  { name: 'Google Sheets', category: 'Software', icon: Table, color: 'text-green-500' },
  { name: 'Pandas', category: 'Language', icon: LineChart, color: 'text-purple-600' },
  { name: 'Seaborn', category: 'Viz', icon: PieChart, color: 'text-indigo-400' },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'E-commerce Sales Dashboard',
    category: 'Business Intelligence',
    description: 'A comprehensive Power BI dashboard analyzing regional sales performance, customer churn, and product profitability for a mid-sized retailer.',
    tools: ['Power BI', 'SQL', 'Excel'],
    imageUrl: 'https://picsum.photos/800/600?random=1',
    stats: [
      { label: 'Revenue Analyzed', value: '$2.4M' },
      { label: 'Data Points', value: '150k+' },
    ]
  },
  {
    id: 'p2',
    title: 'Customer Churn Prediction',
    category: 'Machine Learning',
    description: 'Developed a predictive model using Python to identify at-risk customers, resulting in a targeted retention strategy.',
    tools: ['Python', 'Pandas', 'Seaborn'],
    imageUrl: 'https://picsum.photos/800/600?random=2',
    stats: [
      { label: 'Accuracy', value: '94%' },
      { label: 'Retention Lift', value: '12%' },
    ]
  },
  {
    id: 'p3',
    title: 'Inventory Optimization',
    category: 'Operations',
    description: 'Automated Google Sheets inventory tracker with script-based alerts for low stock and forecasting future demand.',
    tools: ['Google Sheets', 'App Script', 'Statistics'],
    imageUrl: 'https://picsum.photos/800/600?random=3',
    stats: [
      { label: 'Hours Saved/Wk', value: '15' },
      { label: 'Stockouts', value: '-40%' },
    ]
  },
];

export const RESUME_CONTEXT = `
You are an AI assistant for a professional Data Analyst's portfolio website. 
The analyst specializes in Python, SQL, Excel, Power BI, Matplotlib, and Seaborn.
They have experience in E-commerce, Finance, and Operations analytics.
Key skills: Data Cleaning, Visualization, Statistical Modeling, and Automation.
Tone: Professional, concise, helpful, and data-driven.
If asked about contact info, direct them to the contact section or email pythonskills01@gmail.com.
Do not hallucinate projects that are not listed on the site.
Current projects listed: E-commerce Sales Dashboard, Customer Churn Prediction, Inventory Optimization.
`;