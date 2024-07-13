import React, { useState } from 'react';
import { AppConfig, TabConfig, ChartConfig } from './config';
import { Home, BarChart2, Settings, Users, Calendar, Search, FileText, Filter } from 'lucide-react';

type CustomComponentProps = {
  config: AppConfig;
};

interface CustomComponents {
  [key: string]: React.FC<CustomComponentProps>;
}

interface CustomData {
  [key: string]: any;
}

// =============== CUSTOM COMPONENTS ===============
const CompanySearchComponent: React.FC<CustomComponentProps> = ({ config }) => {
  const [searchParams, setSearchParams] = useState({
    revenue: '',
    growthRate: '',
    sector: '',
    keyword: ''
  });

  const handleSearch = () => {
    // Simulated search functionality
    console.log('Searching with params:', searchParams);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Company Search</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="number"
          placeholder="Min Revenue (£)"
          value={searchParams.revenue}
          onChange={(e) => setSearchParams({...searchParams, revenue: e.target.value})}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Min Growth Rate (%)"
          value={searchParams.growthRate}
          onChange={(e) => setSearchParams({...searchParams, growthRate: e.target.value})}
          className="p-2 border rounded"
        />
        <select
          value={searchParams.sector}
          onChange={(e) => setSearchParams({...searchParams, sector: e.target.value})}
          className="p-2 border rounded"
        >
          <option value="">Select Sector</option>
          <option value="energy">Energy Transition</option>
          <option value="circular">Circular Economy</option>
          <option value="built">Decarbonizing Built Environment</option>
        </select>
        <input
          type="text"
          placeholder="Keyword"
          value={searchParams.keyword}
          onChange={(e) => setSearchParams({...searchParams, keyword: e.target.value})}
          className="p-2 border rounded"
        />
      </div>
      <button 
        onClick={handleSearch}
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
};

const DealPipelineComponent: React.FC<CustomComponentProps> = ({ config }) => {
  const [deals, setDeals] = useState([
    { id: 1, company: 'EcoTech Solutions', stage: 'Initial Contact', value: 5000000 },
    { id: 2, company: 'CircularWare', stage: 'Proposal', value: 3000000 },
    { id: 3, company: 'GreenBuild Systems', stage: 'Negotiation', value: 7000000 },
  ]);

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Deal Pipeline</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Company</th>
            <th>Stage</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {deals.map(deal => (
            <tr key={deal.id}>
              <td>{deal.company}</td>
              <td>{deal.stage}</td>
              <td>£{deal.value.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const PortfolioPerformanceComponent: React.FC<CustomComponentProps> = ({ config }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Portfolio Performance</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-200 h-64 rounded flex items-center justify-center">
          Revenue Growth Chart
        </div>
        <div className="bg-gray-200 h-64 rounded flex items-center justify-center">
          Carbon Reduction Impact Chart
        </div>
      </div>
    </div>
  );
};

// =============== CONFIGURATION ===============
const customConfig: AppConfig = {
  title: "Bridges Fund Management - PE Origination",
  companyName: "Bridges Fund Management",
  logo: "/path/to/bridges-logo.png",
  primaryColor: "#4F46E5",
  secondaryColor: "#818CF8",
  userName: "Kyle Bentwood",
  dashboard: {
    tabs: [
      {
        id: "companySearch",
        label: "Company Search",
        description: "Find potential investments",
        icon: Search
      },
      {
        id: "dealPipeline",
        label: "Deal Pipeline",
        description: "Track potential investments",
        icon: FileText
      },
      {
        id: "portfolioPerformance",
        label: "Portfolio Performance",
        description: "Monitor existing investments",
        icon: BarChart2
      },
    ] as TabConfig[],
    charts: {
      dealsByStage: {
        type: "bar",
        dataKeys: ["count"],
        colors: ["#4F46E5"],
        data: [
          { name: 'Initial Contact', count: 10 },
          { name: 'Proposal', count: 5 },
          { name: 'Negotiation', count: 3 },
          { name: 'Closed', count: 2 },
        ]
      },
      investmentByTheme: {
        type: "pie",
        dataKeys: ["value"],
        colors: ["#4F46E5", "#818CF8", "#C7D2FE"],
        data: [
          { name: 'Energy Transition', value: 40 },
          { name: 'Circular Economy', value: 30 },
          { name: 'Decarbonizing Built Environment', value: 30 },
        ]
      },
    }
  },
  analytics: {
    charts: {
      revenueGrowth: {
        type: "line",
        dataKeys: ["growth"],
        colors: ["#4F46E5"],
        data: [
          { year: '2019', growth: 20 },
          { year: '2020', growth: 18 },
          { year: '2021', growth: 25 },
          { year: '2022', growth: 30 },
        ]
      },
      carbonReduction: {
        type: "bar",
        dataKeys: ["reduction"],
        colors: ["#818CF8"],
        data: [
          { year: '2019', reduction: 1000 },
          { year: '2020', reduction: 1500 },
          { year: '2021', reduction: 2000 },
          { year: '2022', reduction: 2500 },
        ]
      },
    }
  },
  clients: [
    { id: "ecotech", name: "EcoTech Solutions", industry: "Energy Transition" },
    { id: "circularware", name: "CircularWare", industry: "Circular Economy" },
    { id: "greenbuild", name: "GreenBuild Systems", industry: "Decarbonizing Built Environment" },
  ],
  features: {
    dataImport: true,
    analytics: true,
    reporting: true,
    templates: true
  }
};

// =============== CUSTOM COMPONENTS MAPPING ===============
const customComponents: CustomComponents = {
  companySearch: CompanySearchComponent,
  dealPipeline: DealPipelineComponent,
  portfolioPerformance: PortfolioPerformanceComponent,
};

// =============== CUSTOM DATA ===============
const customData: CustomData = {
  investmentStages: ['Initial Contact', 'Proposal', 'Negotiation', 'Due Diligence', 'Closed'],
  investmentThemes: ['Energy Transition', 'Circular Economy', 'Decarbonizing Built Environment'],
  performanceMetrics: ['Revenue Growth', 'Carbon Reduction Impact', 'Jobs Created', 'ESG Score']
};

// =============== EXPORT ===============
export const customization = {
  config: customConfig,
  components: customComponents,
  data: customData,
};