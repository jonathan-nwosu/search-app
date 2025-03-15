import React, { useState } from 'react';
import './App.css';

function App() {
  // Data sets categorized by type with realistic example data
  const allData = {
    companies: [
      { id: 1, name: 'Accenture', description: 'Global professional services company specializing in IT services and consulting', url: 'accenture.com', category: 'Consulting', status: 'Active', founded: '1989', revenue: '$61.6B' },
      { id: 2, name: 'BlackRock', description: 'American multinational investment management corporation', url: 'blackrock.com', category: 'Financial Services', status: 'Active', founded: '1988', revenue: '$17.9B' },
      { id: 3, name: 'Salesforce', description: 'Cloud-based software company specializing in customer relationship management', url: 'salesforce.com', category: 'Software', status: 'Active', founded: '1999', revenue: '$31.4B' },
      { id: 4, name: 'JPMorgan Chase', description: 'American multinational investment bank and financial services holding company', url: 'jpmorganchase.com', category: 'Banking', status: 'Active', founded: '1799', revenue: '$128.7B' },
      { id: 5, name: 'AstraZeneca', description: 'British-Swedish multinational pharmaceutical and biotechnology company', url: 'astrazeneca.com', category: 'Pharmaceuticals', status: 'Active', founded: '1999', revenue: '$44.4B' },
      { id: 6, name: 'Costco Wholesale', description: 'American multinational corporation which operates a chain of membership-only warehouse clubs', url: 'costco.com', category: 'Retail', status: 'Active', founded: '1983', revenue: '$226.9B' },
    ],
    people: [
      { id: 1, name: 'Satya Nadella', description: 'Business executive with a background in electrical engineering and computer science', url: 'linkedin.com/in/satyanadella', category: 'Executive', status: 'Active', role: 'CEO', company: 'Microsoft' },
      { id: 2, name: 'Sarah Chen', description: 'Investment professional and AI researcher focusing on ethical AI and inclusive fintech', url: 'linkedin.com/in/sarahchen', category: 'Investment', status: 'Active', role: 'Managing Partner', company: 'Beyond Alpha Capital' },
      { id: 3, name: 'Sundar Pichai', description: 'Business executive with extensive experience in technology product development', url: 'linkedin.com/in/sundarpichai', category: 'Executive', status: 'Active', role: 'CEO', company: 'Alphabet and Google' },
      { id: 4, name: 'Jensen Huang', description: 'Entrepreneur and electrical engineer who co-founded NVIDIA', url: 'linkedin.com/in/jensenhuang', category: 'Founder', status: 'Active', role: 'CEO', company: 'NVIDIA' },
      { id: 5, name: 'Mary Barra', description: 'Business leader with background in electrical engineering and business administration', url: 'linkedin.com/in/marybarra', category: 'Executive', status: 'Active', role: 'CEO', company: 'General Motors' },
      { id: 6, name: 'Sam Altman', description: 'Entrepreneur and investor with focus on AI development and deployment', url: 'linkedin.com/in/samaltman', category: 'Executive', status: 'Active', role: 'CEO', company: 'OpenAI' },
    ],
    financialData: [
      { id: 1, name: 'S&P 500 Q1 2024 Analysis', description: 'Comprehensive analysis of S&P 500 performance in Q1 2024 with sector breakdown', url: 'marketdata.com/sp500-q1-2024', category: 'Market Index', status: 'Active', quarter: 'Q1 2024', metrics: 'Price-to-Earnings, Dividend Yield, Sector Performance' },
      { id: 2, name: 'Global Banking Sector Report', description: 'Analysis of financial performance of major global banks with regulatory impact assessment', url: 'financeview.com/banking-2024', category: 'Sector Analysis', status: 'Active', quarter: 'Q1 2024', metrics: 'ROE, Capital Ratios, NIM, NPL Ratios' },
      { id: 3, name: 'Renewable Energy Investment Outlook', description: 'Investment trends and forecasts for renewable energy sector globally', url: 'greencapital.co/renewable-forecast', category: 'Investment Analysis', status: 'Active', quarter: 'Q2 2024', metrics: 'CAPEX, ROIC, Policy Impact, Risk Assessment' },
      { id: 4, name: 'Tech Sector Valuation Models', description: 'In-depth valuation analysis of major technology subsectors and leading companies', url: 'techvaluemodels.com/q2-2024', category: 'Valuation', status: 'Active', quarter: 'Q2 2024', metrics: 'DCF, Multiples Analysis, Growth Projections' },
      { id: 5, name: 'Global Inflation Trends', description: 'Analysis of inflation rates across major economies with impact assessment', url: 'macroindicators.org/inflation-2024', category: 'Macroeconomic', status: 'Active', quarter: 'Q1 2024', metrics: 'CPI, PPI, Wage Growth, Interest Rates' },
      { id: 6, name: 'Commodity Markets Quarterly Review', description: 'Performance analysis of major commodity markets with supply-demand assessment', url: 'commodityinsights.com/q1-review', category: 'Commodities', status: 'Active', quarter: 'Q1 2024', metrics: 'Price Trends, Inventory Levels, Production Data' },
    ],
    esgData: [
      { id: 1, name: 'Carbon Emissions Benchmark Report', description: 'Comparative analysis of carbon emissions across major industries with reduction strategies', url: 'climatemetrics.org/carbon-benchmark', category: 'Environmental', status: 'Active', year: '2024', focus: 'Carbon Emissions, Net Zero Pathways' },
      { id: 2, name: 'Corporate Diversity & Inclusion Index', description: 'Comprehensive assessment of diversity and inclusion metrics for Fortune 500 companies', url: 'inclusioncapital.org/diversity-index', category: 'Social', status: 'Active', year: '2024', focus: 'Board Diversity, Workforce Representation' },
      { id: 3, name: 'ESG Regulatory Compliance Framework', description: 'Analysis of global ESG regulations and compliance requirements for public companies', url: 'esgcompliance.net/framework-2024', category: 'Governance', status: 'Active', year: '2024', focus: 'Disclosure Requirements, Compliance Standards' },
      { id: 4, name: 'Water Stewardship Assessment', description: 'Evaluation of corporate water management practices across water-intensive industries', url: 'sustainableresource.org/water-report', category: 'Environmental', status: 'Active', year: '2023', focus: 'Water Usage, Conservation Practices' },
      { id: 5, name: 'Supply Chain Human Rights Audit', description: 'Assessment of human rights practices throughout global supply chains of major corporations', url: 'ethicalbusiness.org/supply-chain-2024', category: 'Social', status: 'Active', year: '2024', focus: 'Labor Rights, Modern Slavery Prevention' },
      { id: 6, name: 'Corporate Climate Transition Plans', description: 'Evaluation of corporate climate transition plans against Paris Agreement targets', url: 'climatestrategy.org/transition-plans', category: 'Environmental', status: 'Active', year: '2024', focus: 'Net Zero Commitments, Implementation Roadmaps' },
    ]
  };

  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState(allData.companies);
  const [activeCategory, setActiveCategory] = useState('companies');
  const [isSearched, setIsSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Claude API integration
  async function generateDataWithClaude(query, category) {
    // Claude API endpoint
    const apiUrl = 'https://api.anthropic.com/v1/messages';
    
    // Get API key from environment variables
    const apiKey = process.env.REACT_APP_CLAUDE_API_KEY;
    
    // If no API key is available, fall back to mock data
    if (!apiKey) {
      console.warn("No API key found in environment variables. Using mock data instead.");
      return generateMockData(query, category);
    }
    
    // Construct the prompt based on category and query
    let prompt = '';
    
    if (category === 'companies') {
      prompt = `Generate 25 realistic companies based on this search query: "${query}". 
        Format the response as a JSON array of objects with these fields:
        - id (number)
        - name (string, use real company names)
        - description (string, provide realistic company descriptions)
        - url (string, use realistic domain names)
        - category (string, appropriate industry category)
        - status (string, either "Active" or "Inactive")
        - founded (string, realistic founding year)
        - revenue (string, realistic annual revenue with $ prefix)
        
        The data should be for real companies relevant to the search query "${query}".
        Only return the JSON array without any other text.`;
    } else if (category === 'people') {
      prompt = `Generate 25 realistic business professionals based on this search query: "${query}". 
        Format the response as a JSON array of objects with these fields:
        - id (number)
        - name (string, use realistic executive names)
        - description (string, realistic professional background)
        - url (string, LinkedIn URL format)
        - category (string, appropriate role category)
        - status (string, either "Active" or "Inactive")
        - role (string, specific job title)
        - company (string, company name)
        
        The data should be for real business professionals relevant to the search query "${query}".
        Only return the JSON array without any other text.`;
    } else if (category === 'financialData') {
      prompt = `Generate 25 realistic financial data reports based on this search query: "${query}". 
        Format the response as a JSON array of objects with these fields:
        - id (number)
        - name (string, realistic report title)
        - description (string, detailed report description)
        - url (string, realistic URL for financial data)
        - category (string, type of financial report)
        - status (string, either "Active" or "Inactive")
        - quarter (string, relevant quarter like "Q1 2024")
        - metrics (string, key metrics included in the report)
        
        The data should be realistic financial reports relevant to the search query "${query}".
        Only return the JSON array without any other text.`;
    } else if (category === 'esgData') {
      prompt = `Generate 25 realistic ESG (Environmental, Social, Governance) reports based on this search query: "${query}". 
        Format the response as a JSON array of objects with these fields:
        - id (number)
        - name (string, realistic ESG report title)
        - description (string, detailed description of the report content)
        - url (string, realistic URL for ESG data)
        - category (string, either "Environmental", "Social", or "Governance")
        - status (string, either "Active" or "Inactive")
        - year (string, publication year)
        - focus (string, specific ESG focus areas)
        
        The data should be realistic ESG reports relevant to the search query "${query}".
        Only return the JSON array without any other text.`;
    }
    
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: "claude-3-haiku-20240307",
          max_tokens: 1000,
          messages: [
            { role: "user", content: prompt }
          ]
        })
      });
      
      const data = await response.json();
      // Parse the response to extract the JSON data
      const resultText = data.content[0].text;
      const jsonMatch = resultText.match(/\[[\s\S]*\]/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      } else {
        throw new Error("Could not parse response as JSON");
      }
    } catch (error) {
      console.error("Error calling Claude API:", error);
      // Fall back to mock data generator if API fails
      return generateMockData(query, category);
    }
  }

  // Generate mock data based on search query (fallback)
  const generateMockData = (searchQuery, category) => {
    if (!searchQuery.trim()) {
      return allData[category];
    }
    
    // Filter existing data based on the search query
    const searchTerm = searchQuery.toLowerCase();
    return allData[category].filter(item => 
      item.name.toLowerCase().includes(searchTerm) || 
      item.description.toLowerCase().includes(searchTerm) ||
      item.category.toLowerCase().includes(searchTerm) ||
      item.url.toLowerCase().includes(searchTerm)
    );
  };
  
  // Filter or generate data based on search query and selected category
  const filterData = async (searchQuery, category) => {
    // If query is empty, return default data
    if (!searchQuery.trim()) {
      return allData[category];
    }
    
    // If query is not empty, generate data with Claude API
    try {
      const results = await generateDataWithClaude(searchQuery, category);
      return results;
    } catch (error) {
      console.error("Error generating data:", error);
      // Fall back to mock data if API fails
      return generateMockData(searchQuery, category);
    }
  };

  // Handle search submission
  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const results = await filterData(query, activeCategory);
      setFilteredData(results);
      setIsSearched(true);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle category change
  const handleCategoryChange = async (category) => {
    setActiveCategory(category);
    if (query.trim() !== '' || isSearched) {
      setIsLoading(true);
      try {
        const results = await filterData(query, category);
        setFilteredData(results);
        setIsSearched(true);
      } catch (error) {
        console.error("Category change failed:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-content">
          <div className="logo-container">
          <img src="/radiant-logo.png" alt="Radiant AI Logo" className="company-logo" />
            <div className="company-name">Radiant AI</div>
          </div>
          <div className="nav-buttons">
            <button>Pricing</button>
            <button>Docs</button>
            <button className="sign-in">Sign in</button>
          </div>
        </div>
      </header>

      <main className="main-content">
        <h1>Instant Structured Reliable Data.</h1>

        <form onSubmit={handleSearch} className="search-form">
          <div className="search-input-container">
            <input
              type="text"
              placeholder="e.g. renewable energy companies in Europe with ESG reporting..."
              value={query}
              onChange={handleInputChange}
              className="search-input"
            />
            <button type="submit" className="search-button">→</button>
          </div>

          <div className="category-buttons">
            <button 
              type="button" 
              className={`category-button ${activeCategory === 'companies' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('companies')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              Companies
            </button>
            <button 
              type="button" 
              className={`category-button ${activeCategory === 'people' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('people')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              People
            </button>
            <button 
              type="button" 
              className={`category-button ${activeCategory === 'financialData' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('financialData')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="20" x2="12" y2="10"></line>
                <line x1="18" y1="20" x2="18" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="16"></line>
              </svg>
              Financial Data
            </button>
            <button 
              type="button" 
              className={`category-button ${activeCategory === 'esgData' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('esgData')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
              </svg>
              ESG Data
            </button>
          </div>
        </form>

        {isSearched ? (
          <div className="results-container">
            <div className="filters-container">
              <div className="filter-actions">
                <div className="filter-title">
                  <svg xmlns="http://www.w3.org/2000/svg" className="filter-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                  </svg>
                  Filters
                </div>
                <div className="filter-controls">
                  <select className="filter-select">
                    <option value="">Sort by</option>
                    <option value="name">Name (A-Z)</option>
                    <option value="nameDesc">Name (Z-A)</option>
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                  </select>
                  <button className="filter-button">Apply</button>
                  <button className="filter-button clear">Clear All</button>
                </div>
              </div>
              <div className="active-filters">
                <span className="filter-tag">Active Status<button className="remove-filter">×</button></span>
                {activeCategory === 'companies' && (
                  <span className="filter-tag">Founded after 2000<button className="remove-filter">×</button></span>
                )}
                {activeCategory === 'esgData' && (
                  <span className="filter-tag">Year: 2024<button className="remove-filter">×</button></span>
                )}
              </div>
            </div>

            {isLoading ? (
              <div className="loading-indicator">
                <div className="spinner"></div>
                <p>Generating results based on your query...</p>
              </div>
            ) : filteredData.length === 0 ? (
              <div className="no-results">
                <p>No results found for "{query}" in {activeCategory}</p>
                <p className="hint">Try adjusting your search or choosing a different category</p>
              </div>
            ) : (
              <div className="table-container">
                <table className="results-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>URL</th>
                      <th>Category</th>
                      <th>Status</th>
                      {activeCategory === 'companies' && (
                        <>
                          <th>Founded</th>
                          <th>Revenue</th>
                        </>
                      )}
                      {activeCategory === 'people' && (
                        <>
                          <th>Role</th>
                          <th>Company</th>
                        </>
                      )}
                      {activeCategory === 'financialData' && (
                        <>
                          <th>Quarter</th>
                          <th>Metrics</th>
                        </>
                      )}
                      {activeCategory === 'esgData' && (
                        <>
                          <th>Year</th>
                          <th>Focus</th>
                        </>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className="name-cell">
                            <div className="avatar">{item.name.charAt(0)}</div>
                            <div>{item.name}</div>
                          </div>
                        </td>
                        <td>{item.description}</td>
                        <td className="url-cell">{item.url}</td>
                        <td><span className="category-tag">{item.category}</span></td>
                        <td>
                          <span className={`status-tag ${item.status === 'Active' ? 'active' : 'inactive'}`}>
                            {item.status}
                          </span>
                        </td>
                        {activeCategory === 'companies' && (
                          <>
                            <td>{item.founded}</td>
                            <td>{item.revenue}</td>
                          </>
                        )}
                        {activeCategory === 'people' && (
                          <>
                            <td>{item.role}</td>
                            <td>{item.company}</td>
                          </>
                        )}
                        {activeCategory === 'financialData' && (
                          <>
                            <td>{item.quarter}</td>
                            <td>{item.metrics}</td>
                          </>
                        )}
                        {activeCategory === 'esgData' && (
                          <>
                            <td>{item.year}</td>
                            <td>{item.focus}</td>
                          </>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ) : (
          <div className="hero-container">
            <h2>Automate your sourcing and verification</h2>
            <p>Find perfect results faster</p>
          </div>
        )}
      </main>

      <footer className="footer">
        <div className="footer-content">
        <img src="radiant-logo.png" alt="Radiant AI Logo" className="footer-logo" />
          <div>
            <p className="footer-company">Radiant AI</p>
            <p>© 2025 Radiant AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;