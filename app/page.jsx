import './globals.css';
import Script from 'next/script';
import { ArrowRight, BarChart3, Factory, Globe2, Handshake, LineChart, Mail, MapPin, PackageCheck, Phone, ShieldCheck, Ship, Truck, Warehouse } from 'lucide-react';

const featureCards = [
  ['/feature-global-sourcing.png','Global Sourcing','Trusted manufacturer and supplier relationships designed to improve availability, pricing, and fulfillment.'],
  ['/feature-seamless-logistics.png','Seamless Logistics','Transportation, warehousing, customs coordination, and last-mile delivery support for domestic and international shipments.'],
  ['/feature-product-range.png','Diverse Product Range','Technology, business equipment, accessories, and procurement-focused products for commercial buyers.'],
  ['/feature-quality-assurance.png','Quality Assurance','Supplier vetting and product review processes designed to reduce risk and protect customer satisfaction.'],
  ['/feature-cost-savings.png','Cost Savings Maximized','Smart sourcing and efficient procurement solutions designed to reduce costs, improve margins, and support scalable growth.']
];

const productCategories = ['Networking Equipment','Routers & Switches','Wireless Accessories','Data Storage','SSD Drives','External Storage','Keyboards & Mice','Docking Stations','Computer Accessories','Mobile Technology','Charging Systems','Connectivity Products'];
const markets = ['Small & Medium Businesses','Technology Resellers','Managed Service Providers','Educational Institutions','Healthcare Organizations','Nonprofits','Municipal Agencies','Government Contractors','Corporate Procurement Teams','Retail Buyers','Commercial Buyers','Wholesale Purchasing Teams'];
const roadmap = [
  ['2026','Launch & Foundation','Build supplier relationships, strengthen Tennessee operations, acquire first commercial customers, and prepare investor-facing materials.'],
  ['2027','Growth & Contracts','Expand procurement channels, add logistics capability, pursue government procurement, and grow commercial accounts.'],
  ['2028','Scale & Distribution','Develop private-label opportunities, pursue national distribution, and build enterprise procurement relationships.']
];
const funds = [['35%','Inventory & Product Acquisition'],['20%','Sales & Marketing'],['15%','Technology Systems'],['15%','Personnel & Workforce'],['10%','Operations'],['5%','Contingency']];

export default function Page() {
  return (
    <main>
      <Script
        id="trustedsite-main-code"
        src="https://cdn.ywxi.net/js/1.js"
        strategy="afterInteractive"
      />
      <div className="topbar"><span>Technology Procurement • Distribution • Supply Chain Solutions</span><strong>Global Procurement. Strategic Distribution. Scalable Growth.</strong></div>

      <header className="nav">
        <a className="brand" href="#home"><img src="/miega-logo-transparent.png" alt="MIEGA Global Solutions logo" /><div><b>MIEGA</b><span>Global Solutions LLC</span></div></a>
        <nav><a href="#story">About</a><a href="#solutions">Solutions</a><a href="#global-network">Global Network</a><a href="#credentials">Credentials</a><a href="#industries">Industries</a><a href="#investors">Investors</a><a href="#quote">Quote</a><a href="#suppliers">Suppliers</a><a href="#contact">Contact</a></nav>
        <a className="button" href="#quote">Request a Quote</a>
      </header>

      <section id="home" className="hero">
        <div className="heroText">
          <p className="eyebrow">MIEGA Digital Headquarters</p>
          <h1>Global Procurement. Strategic Distribution. Scalable Growth.</h1>
          <p className="lead">MIEGA Global Solutions connects businesses, institutions, government buyers, resellers, and procurement teams with trusted sourcing, technology procurement, and scalable distribution solutions.</p>
          <div className="heroActions"><a className="button" href="#quote">Request a Quote <ArrowRight size={18} /></a><a className="button ghost" href="#investors">Investor Relations</a><a className="button ghost" href="#suppliers">Supplier Development</a></div>
        </div>
        <div className="globeStage" aria-label="Animated MIEGA global sourcing globe">
          <div className="orbit orbitOne"></div><div className="orbit orbitTwo"></div><div className="orbit orbitThree"></div>
          <div className="globe"><div className="globeGrid"></div><img src="/miega-logo-transparent.png" alt="MIEGA logo" /></div>
          <span className="signal signalOne"></span><span className="signal signalTwo"></span><span className="signal signalThree"></span>
          <p>Worldwide Sourcing • Strategic Distribution</p>
        </div>
      </section>

      <section className="stats"><div><Globe2 /><strong>Global Reach</strong><span>Worldwide sourcing vision</span></div><div><PackageCheck /><strong>Strategic Procurement</strong><span>Business-focused buying</span></div><div><Truck /><strong>Reliable Distribution</strong><span>Logistics-ready growth</span></div><div><LineChart /><strong>Built for Growth</strong><span>Investor-ready strategy</span></div></section>

      <section id="credentials" className="section credentialsSection">
        <p className="eyebrow center">Trust & Compliance</p>
        <h2 className="centerTitle">Credentials That Support Confident Procurement</h2>
        <p className="centerSub">
          MIEGA is building a verified, transparent operating foundation supported by government registration,
          business-credit reporting, website trust verification, and responsible corporate disclosure.
        </p>


        <div className="trustScorecard">
          <div><span>SAM.gov</span><strong>Active</strong></div>
          <div><span>UEI</span><strong>Assigned</strong></div>
          <div><span>CAGE</span><strong>Pending</strong></div>
          <div><span>Dun &amp; Bradstreet</span><strong>Profile Established</strong></div>
          <div><span>TrustedSite</span><strong>Integrated</strong></div>
          <div><span>BBB</span><strong>Accreditation Pending</strong></div>
        </div>

        <div className="credentialsGrid">
          <article className="credentialCard credentialPrimary">
            <div className="credentialIcon"><ShieldCheck /></div>
            <span className="credentialStatus active">Active</span>
            <h3>SAM.gov Registration</h3>
            <p>Registered in the System for Award Management and positioned to pursue federal procurement opportunities.</p>
            <dl>
              <div><dt>UEI</dt><dd>DAA6UFH72JG1</dd></div>
              <div><dt>CAGE Code</dt><dd>Pending Assignment</dd></div>
            </dl>
          </article>


          <article className="credentialCard">
            <div className="credentialIcon"><BarChart3 /></div>
            <span className="credentialStatus active">Profile Established</span>
            <h3>Dun & Bradstreet Business Profile</h3>
            <p>
              MIEGA maintains an established Dun & Bradstreet business profile to support commercial
              credibility, supplier review, lending discussions, and business credit development.
            </p>
            <dl className="credentialDetails">
              <div><dt>D&amp;B Reference</dt><dd>D 1450011472M25</dd></div>
              <div><dt>Status</dt><dd>Business Profile Established</dd></div>
            </dl>
          </article>

          <article className="credentialCard">
            <div className="credentialIcon"><ShieldCheck /></div>
            <span className="credentialStatus integration">Integrated</span>
            <h3>TrustedSite Trustmark</h3>
            <p>
              TrustedSite verification code is installed to support website trust, security visibility,
              and visitor confidence.
            </p>
            <a href="https://www.trustedsite.com" target="_blank" rel="noreferrer">About TrustedSite</a>
          </article>

          <article className="credentialCard">
            <div className="credentialIcon"><Handshake /></div>
            <span className="credentialStatus pending">Pending Review</span>
            <h3>Better Business Bureau Profile</h3>
            <p>
              MIEGA maintains a Better Business Bureau business profile. BBB accreditation is currently
              pending review and is not represented as approved.
            </p>
          </article>

          <article className="credentialCard">
            <div className="credentialIcon"><Factory /></div>
            <span className="credentialStatus active">Established</span>
            <h3>Tennessee Registered LLC</h3>
            <p>
              MIEGA Global Solutions LLC operates from its Nashville headquarters with an additional
              Los Angeles office supporting growth and market access.
            </p>
          </article>

          <article className="credentialCard">
            <div className="credentialIcon"><PackageCheck /></div>
            <span className="credentialStatus capability">Capability</span>
            <h3>Government Contracting Readiness</h3>
            <p>
              Procurement capabilities are being organized for federal, state, local, institutional,
              and commercial purchasing requirements.
            </p>
          </article>

          <article className="credentialCard">
            <div className="credentialIcon"><Globe2 /></div>
            <span className="credentialStatus capability">Capability</span>
            <h3>Global Procurement & Distribution</h3>
            <p>
              Strategic sourcing, technology procurement, supplier development, and coordinated
              distribution for domestic and international requirements.
            </p>
          </article>
        </div>

        <p className="credentialsNote">
          Credential descriptions reflect MIEGA’s current status. Official seals are displayed only when
          their issuing organizations authorize their use.
        </p>
      </section>



      <section id="story" className="section split"><div><p className="eyebrow">Our Story</p><h2>MIEGA stands for Making Import Export Great Again.</h2><p>MIEGA Global Solutions was founded on the belief that resilient supply chains, strong entrepreneurship, responsible global trade, and American economic growth create lasting opportunities for businesses and communities.</p><p>Our mission is to simplify procurement, strengthen supplier relationships, and connect trusted global manufacturers with customers seeking reliable technology products and strategic distribution solutions.</p></div><div className="valueCard"><h3>The MIEGA Difference</h3><ul><li>Support American businesses and entrepreneurs</li><li>Build resilient and responsible global supply chains</li><li>Deliver procurement integrity and reliability</li><li>Create scalable growth through strategic distribution</li></ul></div></section>

      <section id="solutions" className="section solutions"><p className="eyebrow center">Solutions Showcase</p><h2 className="centerTitle">Procurement Solutions That Move Businesses Forward</h2><p className="centerSub">Five core capabilities designed to support business buyers, procurement teams, resellers, and growing organizations.</p><div className="carousel">{featureCards.map(([image,title,text]) => <article className="featureCard" key={title}><img src={image} alt={title} /><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>


      <section id="global-network" className="section networkSection">
        <p className="eyebrow center">Interactive Global Sourcing Map</p>
        <h2 className="centerTitle">Explore MIEGA’s Global Procurement Network</h2>
        <p className="centerSub">Tap a region to view its sourcing focus and logistics role within MIEGA’s long-term procurement strategy.</p>
        <div className="networkLayout">
          <div className="mapVisual"><div className="mapGlow"></div><div className="miniGlobe">
            <span className="continent northAmerica">NA</span><span className="continent latinAmerica">LATAM</span><span className="continent europe">EU</span><span className="continent asia">APAC</span>
            <span className="route routeA"></span><span className="route routeB"></span><span className="route routeC"></span>
          </div><div className="mapCaption">Tap a region card to explore sourcing capabilities.</div></div>
          <div className="regionList">
            <details className="regionCard"><summary><span>North America</span><small>United States, Canada, and Mexico</small></summary><p>Technology distribution, fulfillment, commercial sourcing, and nearshore procurement opportunities.</p></details>
            <details className="regionCard"><summary><span>Latin America</span><small>Central America, Caribbean, and South America</small></summary><p>Emerging supplier relationships, regional distribution, and commercial product sourcing.</p></details>
            <details className="regionCard"><summary><span>Europe</span><small>European Union and United Kingdom</small></summary><p>Specialized technology, industrial products, established manufacturers, and transatlantic supplier development.</p></details>
            <details className="regionCard"><summary><span>Asia-Pacific</span><small>China, Taiwan, Japan, South Korea, Vietnam, and India</small></summary><p>Electronics, accessories, components, manufacturing, and large-scale sourcing opportunities.</p></details>
            <details className="regionCard"><summary><span>Global Logistics</span><small>Air, ocean, ground, and last-mile coordination</small></summary><p>Flexible routing designed around order size, delivery timeline, destination, and customer requirements.</p></details>
          </div>
        </div>
      </section>

      <section className="section ecosystemSection">
        <p className="eyebrow center">Technology & Industrial Ecosystems</p>
        <h2 className="centerTitle">Procurement Expertise Across Leading Global Manufacturers</h2>
        <p className="centerSub">
          These names identify target product ecosystems and sourcing categories. Display does not imply an authorized partnership, reseller appointment, or distributor relationship.
        </p>
        <div className="ecosystemGrid">
          {['Cisco','Dell','HP','Lenovo','Intel','AMD','Microsoft','Honeywell','Siemens','Eaton','Schneider Electric','TD SYNNEX','Ingram Micro','Arrow'].map(item => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section dark"><p className="eyebrow center">Why Choose MIEGA</p><h2 className="centerTitle">Built to Serve Commercial, Institutional, and Government Buyers</h2><div className="grid">{[[PackageCheck,'Technology Procurement','Product sourcing for technology, hardware, accessories, and business equipment.'],[Ship,'Global Sourcing','Supplier development across domestic and international manufacturing markets.'],[Warehouse,'Strategic Distribution','Fulfillment and logistics support for wholesale and commercial accounts.'],[ShieldCheck,'Quality Assurance','Supplier vetting and review processes designed to reduce procurement risk.'],[Handshake,'Supplier Relationships','Long-term supplier and customer relationships built around transparency and execution.'],[Factory,'American Business Commitment','A mission aligned with strengthening American businesses and resilient supply chains.']].map(([Icon,title,text]) => <div className="miniCard" key={title}><Icon /><h3>{title}</h3><p>{text}</p></div>)}</div></section>

      <section id="industries" className="section twoColumns"><div className="panel"><h2>Primary Product Categories</h2><div className="tags">{productCategories.map(item => <span key={item}>{item}</span>)}</div></div><div className="panel"><h2>Markets We Serve</h2><div className="tags">{markets.map(item => <span key={item}>{item}</span>)}</div></div></section>


      <section id="government" className="section governmentSection">
        <div className="governmentIntro">
          <p className="eyebrow">Public-Sector Procurement</p>
          <h2>Government Contracting Readiness</h2>
          <p>
            MIEGA Global Solutions LLC is registered in the System for Award Management and is positioned
            to pursue federal procurement opportunities while supporting state, local, institutional, and
            commercial buyers with technology procurement, strategic sourcing, and distribution solutions.
          </p>
          <div className="governmentStatus">
            <span><b>SAM.gov</b> Registered</span>
            <span><b>UEI</b> DAA6UFH72JG1</span>
            <span><b>CAGE Code</b> Pending Assignment</span>
          </div>
        </div>
        <div className="governmentGrid">
          {[
            ['Technology Procurement','Computers, accessories, networking, storage, and business technology sourcing.'],
            ['Commercial & Industrial Supply','Procurement support for operational, institutional, and commercial requirements.'],
            ['Strategic Distribution','Coordinated fulfillment, transportation, and delivery support.'],
            ['Import & Export','International sourcing and supply-chain coordination based on customer requirements.'],
            ['Rapid Fulfillment','Responsive sourcing support for time-sensitive procurement needs.'],
            ['Supplier Development','Responsible supplier identification, vetting, and relationship development.']
          ].map(([title,text]) => (
            <div className="governmentCard" key={title}>
              <ShieldCheck />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="investors" className="section investorSection">
        <p className="eyebrow center">Investor Relations</p>
        <h2 className="centerTitle">Investment Highlights</h2>
        <p className="centerSub">
          MIEGA is positioning itself as a scalable technology procurement and global supply chain company with multiple revenue channels.
        </p>

        <div className="investGrid">
          <div className="investCard">
            <BarChart3 />
            <h3>Scalable Business Model</h3>
            <p>Asset-light procurement and supplier-network strategy designed to expand without heavy early infrastructure.</p>
          </div>
          <div className="investCard">
            <BarChart3 />
            <h3>Multiple Revenue Channels</h3>
            <p>Wholesale distribution, technology procurement, supplier sourcing, B2B sales, government procurement, and future private-label opportunities.</p>
          </div>
          <div className="investCard">
            <BarChart3 />
            <h3>Large Addressable Markets</h3>
            <p>Commercial buyers, educational institutions, healthcare organizations, nonprofits, government agencies, and e-commerce customers.</p>
          </div>
          <div className="investCard">
            <BarChart3 />
            <h3>Strategic Tennessee Launch</h3>
            <p>Starting from Tennessee with access to workforce development programs, business incentives, and scalable logistics pathways.</p>
          </div>
        </div>

        <div className="capitalBox">
          <div>
            <p className="eyebrow">Growth Capital Strategy</p>
            <h2>Deploying Growth Capital for Scalable Expansion</h2>
            <p>
              MIEGA is pursuing a disciplined mix of commercial lending, SBA programs, strategic investment, operating revenue, and future government-contract revenue to support scalable growth.
            </p>
          </div>

          <div className="capitalAllocation">
            <h3>Capital Allocation</h3>
            <div className="funds">
              <div><strong>35%</strong><span>Inventory &amp; Product Acquisition</span></div>
              <div><strong>20%</strong><span>Sales &amp; Marketing</span></div>
              <div><strong>15%</strong><span>Technology Systems</span></div>
              <div><strong>15%</strong><span>Personnel &amp; Workforce</span></div>
              <div><strong>10%</strong><span>Operations</span></div>
              <div><strong>5%</strong><span>Contingency</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="quote" className="section formsSection">
        <p className="eyebrow center">Business Intake</p>
        <h2 className="centerTitle">Request a Quote or Supplier Conversation</h2>
        <p className="centerSub">Fast inquiry links that open a pre-filled email template for buyers and supplier partners.</p>
        <div className="formGrid">
          <div className="formCard"><h3>Request a Quote</h3><p>For business buyers, resellers, institutions, and procurement teams seeking technology products, accessories, or sourcing support.</p><ul><li>Product category and quantity</li><li>Target price or budget</li><li>Delivery location and timeline</li><li>Special requirements</li></ul><a className="button" href="mailto:info@miegaglobalsolutions.com?subject=MIEGA%20Quote%20Request&body=Company%20Name%3A%0AContact%20Name%3A%0APhone%3A%0AProduct%20Category%3A%0AQuantity%3A%0ATarget%20Price%2FBudget%3A%0ADelivery%20Location%3A%0ATimeline%3A%0AAdditional%20Details%3A">Start Quote Request</a></div>
          <div className="formCard"><h3>Become a Supplier</h3><p>For manufacturers, distributors, wholesalers, and sourcing partners interested in building a relationship with MIEGA.</p><ul><li>Company profile</li><li>Product categories</li><li>Minimum order quantities</li><li>Distribution capabilities</li></ul><a className="button" href="mailto:info@miegaglobalsolutions.com?subject=MIEGA%20Supplier%20Inquiry&body=Company%20Name%3A%0AContact%20Name%3A%0APhone%3A%0AWebsite%3A%0AProduct%20Categories%3A%0AMOQ%3A%0ALocations%20Served%3A%0AAdditional%20Details%3A">Start Supplier Inquiry</a></div>
        </div>
      </section>


      <section className="section milestonesSection">
        <p className="eyebrow center">Company Progress</p>
        <h2 className="centerTitle">MIEGA Milestones</h2>
        <p className="centerSub">A factual snapshot of the infrastructure and contracting readiness MIEGA is building.</p>
        <div className="milestoneGrid">
          {[
            ['Complete','Tennessee LLC Established'],
            ['Complete','Nashville Headquarters Established'],
            ['Complete','Los Angeles Office Opened'],
            ['Complete','Business Website Launched'],
            ['Complete','SAM.gov Registration Active'],
            ['Complete','UEI Assigned'],
            ['Pending','CAGE Code Assignment'],
            ['In Progress','Distributor & Supplier Applications']
          ].map(([status,title]) => (
            <div className={`milestoneCard ${status === 'Complete' ? 'done' : 'pending'}`} key={title}>
              <span>{status}</span>
              <h3>{title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="roadmap" className="section roadmap"><p className="eyebrow center">Growth Roadmap</p><h2 className="centerTitle">Three-Year Expansion Strategy</h2><div className="timeline">{roadmap.map(([year,title,text]) => <div className="timeCard" key={year}><span>{year}</span><h3>{title}</h3><p>{text}</p></div>)}</div></section>

      <section id="suppliers" className="section supplier"><p className="eyebrow center">Supplier Development</p><h2 className="centerTitle">Distribution & Supplier Strategy</h2><p className="centerSub">MIEGA is pursuing relationships with leading technology distributors and manufacturers. Formal authorizations will be displayed as secured.</p><div className="supplierGrid">{['Ingram Micro','TD SYNNEX','Arrow','Dell','HP','Lenovo','Cisco','Microsoft'].map(item => <span key={item}>{item}</span>)}</div></section>

      <section id="locations" className="section locationsSection">
        <p className="eyebrow center">Contact Experience</p>
        <h2 className="centerTitle">Connect With MIEGA</h2>
        <p className="centerSub">
          Tap a phone number to call, open an office address for directions, or send a procurement inquiry by email.
        </p>

        <div className="contactQuickActions">
          <a href="tel:+18889750804"><Phone size={18} /> Toll-Free</a>
          <a href="mailto:info@miegaglobalsolutions.com"><Mail size={18} /> Email MIEGA</a>
          <a href="https://www.miegaglobal1.com" target="_blank" rel="noreferrer"><Globe2 size={18} /> Visit Website</a>
          <a href="#quote"><ArrowRight size={18} /> Request a Quote</a>
        </div>

        <div className="locationsGrid">
          <article className="panel locationCard">
            <MapPin />
            <h2>Nashville Headquarters</h2>
            <a
              className="locationAddress"
              href="https://www.google.com/maps/search/?api=1&query=611+Commerce+Street+Suite+2611+Nashville+TN+37203"
              target="_blank"
              rel="noreferrer"
            >
              611 Commerce Street, Suite 2611<br />
              Nashville, TN 37203
            </a>

            <div className="locationPhones">
              <a href="tel:+16157097494"><Phone size={17} /> (615) 709-7494</a>
              <a href="tel:+18889750804"><Phone size={17} /> (888) 975-0804</a>
            </div>

            <div className="locationActions">
              <a href="tel:+16157097494"><Phone size={17} /> Call Nashville</a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=611+Commerce+Street+Suite+2611+Nashville+TN+37203"
                target="_blank"
                rel="noreferrer"
              >
                <MapPin size={17} /> Directions
              </a>
              <a href="mailto:info@miegaglobalsolutions.com?subject=MIEGA%20Nashville%20Office%20Inquiry">
                <Mail size={17} /> Email
              </a>
            </div>
          </article>

          <article className="panel locationCard">
            <MapPin />
            <h2>Los Angeles Office</h2>
            <a
              className="locationAddress"
              href="https://www.google.com/maps/search/?api=1&query=10940+Wilshire+Blvd+Suite+1600+Los+Angeles+CA+90024"
              target="_blank"
              rel="noreferrer"
            >
              10940 Wilshire Blvd, Suite 1600<br />
              Los Angeles, CA 90024
            </a>

            <div className="locationPhones">
              <a href="tel:+13238008984"><Phone size={17} /> (323) 800-8984</a>
            </div>

            <div className="locationActions">
              <a href="tel:+13238008984"><Phone size={17} /> Call Los Angeles</a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=10940+Wilshire+Blvd+Suite+1600+Los+Angeles+CA+90024"
                target="_blank"
                rel="noreferrer"
              >
                <MapPin size={17} /> Directions
              </a>
              <a href="mailto:info@miegaglobalsolutions.com?subject=MIEGA%20Los%20Angeles%20Office%20Inquiry">
                <Mail size={17} /> Email
              </a>
            </div>
          </article>
        </div>

        <div className="contactResponseBanner">
          <strong>Need pricing or sourcing assistance?</strong>
          <span>Send MIEGA your product requirements, quantity, destination, and delivery timeline to begin a procurement review.</span>
          <a href="mailto:info@miegaglobalsolutions.com?subject=MIEGA%20Procurement%20Request">Start an Inquiry <ArrowRight size={17} /></a>
        </div>
      </section>

      <section id="contact" className="cta">
        <div>
          <p className="eyebrow">Take the Next Step</p>
          <h2>Ready to Build With MIEGA?</h2>
          <p>Request a quote, call the toll-free line, or begin a supplier or investor conversation.</p>
        </div>
        <div className="ctaActions">
          <a className="button" href="mailto:info@miegaglobalsolutions.com?subject=MIEGA%20Quote%20Request"><Mail size={18} /> Request a Quote</a>
          <a className="button ghost" href="tel:+18889750804"><Phone size={18} /> Call Toll-Free</a>
          <a className="button ghost" href="https://www.instagram.com/miegaglobalsolutions" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </section>

      <footer><img src="/miega-logo-transparent.png" alt="MIEGA logo" /><strong>MIEGA Global Solutions LLC</strong><span>Global Procurement. Strategic Distribution. Scalable Growth.</span><small>Technology Procurement • Distribution • Supply Chain Solutions • Nashville • Los Angeles</small></footer>
    </main>
  );
}
