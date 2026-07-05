
import './globals.css';
import { ArrowRight, BarChart3, Building2, Factory, Globe2, Handshake, LineChart, PackageCheck, ShieldCheck, Ship, Truck, Warehouse } from 'lucide-react';

const featureCards = [
  ['/feature-product-range.png','Extensive Product Range','Technology products, business equipment, accessories, and resale inventory at competitive wholesale pricing.'],
  ['/feature-global-sourcing.png','Global Sourcing Expertise','Domestic and international supplier relationships designed to improve availability, cost control, and fulfillment.'],
  ['/feature-cost-savings.png','Cost Savings for Resale','Strategic sourcing and discounted purchasing opportunities to support stronger margins and growth.'],
  ['/feature-quality-assurance.png','Quality Assurance','Supplier vetting and product review to reduce risk, improve reliability, and protect customer satisfaction.'],
  ['/feature-seamless-logistics.png','Seamless Logistics','End-to-end transportation, warehousing, customs coordination, and last-mile delivery for domestic and international shipments.'],

const productCategories = ['Networking Equipment','Routers & Switches','Wireless Accessories','Data Storage','SSD Drives','External Storage','Keyboards & Mice','Docking Stations','Computer Accessories','Mobile Technology','Charging Systems','Connectivity Products'];
const markets = ['Small & Medium Businesses','Technology Resellers','Managed Service Providers','Educational Institutions','Healthcare Organizations','Nonprofits','Municipal Agencies','Government Contractors','Corporate Procurement Teams','Retail Buyers','Commercial Buyers','Wholesale Purchasing Teams'];
const roadmap = [
  ['2026','Launch & Foundation','Secure supplier approvals, build Tennessee operations, acquire first commercial customers, and prepare investor relations materials.'],
  ['2027','Growth & Contracts','Expand procurement channels, add warehouse capability, enter government procurement, and grow commercial accounts.'],
  ['2028','Scale & Distribution','Develop private-label opportunities, pursue national distribution, and build enterprise procurement relationships.']
];
const funds = [['35%','Inventory & Product Acquisition'],['20%','Sales & Marketing'],['15%','Technology Systems'],['15%','Personnel & Workforce'],['10%','Operations'],['5%','Contingency']];

export default function Page() {
  return (
    <main>
      <div className="topbar"><span>Technology Procurement • Distribution • Supply Chain Solutions</span><strong>Global Procurement. Strategic Distribution. Scalable Growth.</strong></div>
      <header className="nav">
        <a className="brand" href="#home"><img src="/miega-logo.png" alt="MIEGA logo"/><div><b>MIEGA</b><span>Global Solutions LLC</span></div></a>
        <nav><a href="#story">Our Story</a><a href="#solutions">Solutions</a><a href="#investors">Investors</a><a href="#roadmap">Roadmap</a><a href="#contact">Contact</a></nav>
        <a className="button" href="#investors">Investor Relations</a>
      </header>

      <section id="home" className="hero">
        <div className="heroText">
          <p className="eyebrow">Making Import Export Great Again</p>
          <h1>Powering the Future of Technology Procurement and Global Supply Chains</h1>
          <p className="lead">MIEGA Global Solutions connects businesses, institutions, government buyers, resellers, and procurement teams with trusted global manufacturers through strategic procurement, distribution, and scalable supply chain solutions.</p>
          <div className="heroActions"><a className="button" href="#contact">Request a Quote <ArrowRight size={18}/></a><a className="button ghost" href="#investors">Investor Information</a><a className="button ghost" href="#suppliers">Become a Supplier</a></div>
        </div>
        <div className="heroCard"><img src="/miega-logo.png" alt="Official MIEGA logo"/></div>
      </section>

      <section className="stats">
        <div><Globe2/><strong>Global Sourcing</strong><span>Supplier network strategy</span></div>
        <div><Building2/><strong>Tennessee HQ</strong><span>U.S.-based operations</span></div>
        <div><Truck/><strong>Distribution</strong><span>Commercial procurement support</span></div>
        <div><LineChart/><strong>Scalable Growth</strong><span>Investor-ready expansion model</span></div>
      </section>

      <section id="story" className="section split">
        <div><p className="eyebrow">Our Story</p><h2>MIEGA stands for Making Import Export Great Again.</h2><p>MIEGA Global Solutions was founded on the belief that resilient supply chains, strong entrepreneurship, responsible global trade, and American economic growth create lasting opportunities for businesses and communities.</p><p>Our mission is to simplify procurement, strengthen supplier relationships, and connect trusted global manufacturers with customers seeking reliable technology products and strategic distribution solutions.</p></div>
        <div className="valueCard"><h3>Brand Values</h3><ul><li>Support American businesses and entrepreneurs</li><li>Build resilient and responsible global supply chains</li><li>Deliver procurement integrity and reliability</li><li>Create scalable growth through strategic distribution</li></ul></div>
      </section>

      <section id="solutions" className="section">
        <p className="eyebrow center">Solutions Showcase</p><h2 className="centerTitle">Procurement Solutions That Move Businesses Forward</h2><p className="centerSub">Investor-grade, enterprise-focused user experience built for desktop and mobile.</p>
        <div className="carousel">{featureCards.map(([image,title,text]) => <article className="featureCard" key={title}><img src={image} alt={title}/><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section className="section dark">
        <p className="eyebrow center">Why MIEGA</p><h2 className="centerTitle">Built to Serve Commercial, Institutional, and Government Buyers</h2>
        <div className="grid">
          {[[PackageCheck,'Technology Procurement','Product sourcing for technology, hardware, accessories, and business equipment.'],[Ship,'Global Sourcing','Supplier development across domestic and international manufacturing markets.'],[Warehouse,'Strategic Distribution','Fulfillment and logistics support for wholesale and commercial accounts.'],[ShieldCheck,'Quality Assurance','Supplier vetting and review processes designed to reduce procurement risk.'],[Handshake,'Supplier Relationships','Long-term supplier and customer relationships built around transparency and execution.'],[Factory,'American Business Commitment','A mission aligned with strengthening American businesses and resilient supply chains.']].map(([Icon,title,text]) => <div className="miniCard" key={title}><Icon/><h3>{title}</h3><p>{text}</p></div>)}
        </div>
      </section>

      <section className="section twoColumns">
        <div className="panel"><h2>Primary Product Categories</h2><div className="tags">{productCategories.map(x => <span key={x}>{x}</span>)}</div></div>
        <div className="panel"><h2>Markets We Serve</h2><div className="tags">{markets.map(x => <span key={x}>{x}</span>)}</div></div>
      </section>

      <section id="investors" className="section">
        <p className="eyebrow center">Investor Relations</p><h2 className="centerTitle">Investment Highlights</h2><p className="centerSub">MIEGA is positioning itself as a scalable technology procurement and global supply chain company with multiple revenue channels.</p>
        <div className="investGrid">
          {['Scalable Business Model','Multiple Revenue Channels','Large Addressable Markets','Strategic Tennessee Launch'].map((title,i) => <div className="investCard" key={title}><BarChart3/><h3>{title}</h3><p>{['Asset-light procurement and supplier-network strategy designed to expand without heavy early infrastructure.','Wholesale distribution, technology procurement, supplier sourcing, B2B sales, government procurement, and future private-label opportunities.','Commercial buyers, educational institutions, healthcare organizations, nonprofits, government agencies, and e-commerce customers.','Starting from Tennessee with access to workforce development programs, business incentives, and scalable logistics pathways.'][i]}</p></div>)}
        </div>
        <div className="capitalBox"><div><p className="eyebrow">Capital Raise Strategy</p><h2>Seeking First-Round Growth Capital</h2><p>Investor capital will support inventory, technology systems, personnel, operations, sales, marketing, and supplier development.</p></div><div className="funds">{funds.map(([pct,label]) => <div key={label}><strong>{pct}</strong><span>{label}</span></div>)}</div></div>
      </section>

      <section id="roadmap" className="section roadmap"><p className="eyebrow center">Growth Roadmap</p><h2 className="centerTitle">Three-Year Expansion Strategy</h2><div className="timeline">{roadmap.map(([year,title,text]) => <div className="timeCard" key={year}><span>{year}</span><h3>{title}</h3><p>{text}</p></div>)}</div></section>

      <section className="section workforce"><div><p className="eyebrow">Workforce Development</p><h2>Built to Scale From Tennessee</h2><p>MIEGA plans to use a phased workforce strategy, including Tennessee-based hiring, workforce development partnerships, training programs, and selective use of wage reimbursement opportunities where eligible.</p></div><div className="workStats"><div><strong>Year 1</strong><span>6 employees</span></div><div><strong>Year 2</strong><span>16 employees</span></div><div><strong>Year 3</strong><span>35 employees</span></div></div></section>

      <section id="suppliers" className="section supplier"><p className="eyebrow center">Target Strategic Relationships</p><h2 className="centerTitle">Distribution & Supplier Development</h2><p className="centerSub">MIEGA is pursuing relationships with leading technology distributors and manufacturers. Formal authorizations will be displayed as they are secured.</p><div className="supplierGrid">{['Ingram Micro','TD SYNNEX','Arrow','Dell','HP','Lenovo','Cisco','Microsoft'].map(x => <span key={x}>{x}</span>)}</div></section>

      <section id="contact" className="cta"><div><p className="eyebrow">Take the Next Step</p><h2>Ready to Build With MIEGA?</h2><p>Request a quote, start an investor conversation, or explore supplier partnership opportunities.</p></div><div className="ctaActions"><a className="button" href="mailto:info@miegaglobalsolutions.com">Request a Quote</a><a className="button ghost" href="mailto:info@miegaglobalsolutions.com">Investor Inquiry</a></div></section>

      <footer><img src="/miega-logo.png" alt="MIEGA logo"/><strong>MIEGA Global Solutions LLC</strong><span>Global Procurement. Strategic Distribution. Scalable Growth.</span><small>Technology Procurement • Distribution • Supply Chain Solutions • Tennessee Headquarters</small></footer>
    </main>
  );
}
