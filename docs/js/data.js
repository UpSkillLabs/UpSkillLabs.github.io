const METADATA = { title: "AZ-900 — Phase 1 Flashcards", subtitle:
"Topics 1.1 – 1.14 · Cloud Concepts" };

const ALL_CARDS = [
  // ─── TOPIC 1.1 ───────────────────────────────────────────────────────────────
  { id:"c001", type:"term", topic:"1.1",
    front:"Cloud Computing",
    back:"The delivery of computing services — servers, storage, databases, networking, software, and analytics — over the internet, on demand, from a provider's data centres, so you do not have to own or manage physical hardware.",
    why:"Foundational definition. Every AZ-900 question about cloud starts here."
  },
  { id:"c002", type:"term", topic:"1.1",
    front:"Data Centre (cloud context)",
    back:"A large, secure building housing thousands of physical computers, storage systems, and networking equipment, operated by a cloud provider. 'The cloud' physically lives here.",
    why:""
  },
  { id:"c003", type:"term", topic:"1.1",
    front:"On-Premises (On-Prem)",
    back:"IT infrastructure that is physically located and managed inside a company's own building — not hosted by a cloud provider.",
    why:"Contrast term used throughout the exam."
  },
  { id:"c004", type:"term", topic:"1.1",
    front:"Compute (cloud resource)",
    back:"Processing power — the ability to run programs and perform calculations. Analogous to the engine in a car. One of the three core cloud resources.",
    why:""
  },
  { id:"c005", type:"term", topic:"1.1",
    front:"Storage (cloud resource)",
    back:"The capacity to save and retrieve data. Analogous to a filing cabinet. One of the three core cloud resources.",
    why:""
  },
  { id:"c006", type:"term", topic:"1.1",
    front:"Networking (cloud resource)",
    back:"The infrastructure that connects systems so they can communicate. Analogous to roads between cities. One of the three core cloud resources.",
    why:""
  },
  { id:"c007", type:"qa", topic:"1.1",
    front:"What are the three core resources cloud computing delivers?",
    back:"<strong>Compute</strong> (processing power), <strong>Storage</strong> (saving/retrieving data), and <strong>Networking</strong> (connecting systems).",
    why:"Every Azure service maps back to one or more of these three."
  },
  { id:"c008", type:"qa", topic:"1.1",
    front:"What is Microsoft Azure?",
    back:"Microsoft's cloud computing platform — a collection of 200+ services (compute, storage, databases, AI, security, and more) hosted in Microsoft's global data centres, accessible over the internet, on demand.",
    why:""
  },
  { id:"c009", type:"scenario", topic:"1.1",
    front:"A company currently buys physical servers, waits weeks for delivery, and pays full cost upfront. They are considering a move to cloud. What are four specific problems the cloud would solve?",
    back:"1. <strong>No upfront hardware purchase</strong> — rent instead of buy. 2. <strong>Provision in minutes</strong>, not weeks. 3. <strong>Pay only for what you use</strong> — no idle capacity cost. 4. <strong>Provider maintains hardware</strong> — no internal staff needed for physical maintenance.",
    why:"Classic old-way vs cloud-way comparison. Memorise all six rows of the comparison table."
  },

  // ─── TOPIC 1.2 ───────────────────────────────────────────────────────────────
  { id:"c010", type:"term", topic:"1.2",
    front:"Shared Responsibility Model",
    back:"The formal division of security and operational duties between the cloud provider (Microsoft Azure) and the customer. The split depends on which service type is used: IaaS, PaaS, or SaaS.",
    why:""
  },
  { id:"c011", type:"term", topic:"1.2",
    front:"Cloud Provider (shared responsibility context)",
    back:"The company that owns and operates the cloud infrastructure. In this course: Microsoft Azure. Always responsible for the physical layer.",
    why:""
  },
  { id:"c012", type:"term", topic:"1.2",
    front:"Customer (shared responsibility context)",
    back:"The organisation or individual renting and using cloud services. Always responsible for their own data and identities, regardless of service type.",
    why:""
  },
  { id:"c013", type:"qa", topic:"1.2",
    front:"What are the two non-negotiable rules of the shared responsibility model?",
    back:"1. <strong>Provider always owns the physical layer</strong> — Azure is always responsible for data centre, servers, power, and cooling. 2. <strong>Customer always owns data and identities</strong> — no matter which service type (IaaS, PaaS, SaaS), you are always responsible for your data and who has access.",
    why:"These two constants answer many exam questions even without memorising the full matrix."
  },
  { id:"c014", type:"qa", topic:"1.2",
    front:"In the shared responsibility model, who is responsible for the Operating System in an IaaS deployment?",
    back:"<strong>The customer.</strong> In IaaS, the provider manages only the physical layer. The customer manages the OS and everything above it.",
    why:""
  },
  { id:"c015", type:"qa", topic:"1.2",
    front:"In the shared responsibility model, who is responsible for the Operating System in a PaaS deployment?",
    back:"<strong>The provider (Azure).</strong> In PaaS, Azure manages the physical layer, hypervisor, OS, middleware, and runtime. The customer manages applications and data.",
    why:""
  },
  { id:"c016", type:"qa", topic:"1.2",
    front:"In the shared responsibility model, who is responsible for the Operating System in a SaaS deployment?",
    back:"<strong>The provider (Azure/Microsoft).</strong> In SaaS, the provider manages everything including the application itself. The customer manages only data and identities.",
    why:""
  },
  { id:"c017", type:"qa", topic:"1.2",
    front:"In ALL service types (IaaS, PaaS, SaaS), which layers always remain the customer's responsibility?",
    back:"<strong>Data and information</strong>, <strong>devices (endpoints)</strong>, and <strong>accounts and access</strong> are always the customer's responsibility, regardless of service type.",
    why:"Even in SaaS where Microsoft manages everything, your data and user accounts are always your problem."
  },
  { id:"c018", type:"scenario", topic:"1.2",
    front:"A company uses Microsoft 365 (SaaS). A disgruntled employee downloads the entire customer database and leaks it. Whose responsibility was it to prevent this — Microsoft's or the company's?",
    back:"<strong>The company's (customer).</strong> Even in SaaS, the customer always owns data and access control. The company should have restricted data export permissions, enforced MFA, and monitored access logs. Microsoft is not responsible for how the organisation manages its own user permissions.",
    why:"Classic exam scenario demonstrating that 'provider manages everything' in SaaS does NOT eliminate customer responsibility."
  },
  { id:"c019", type:"qa", topic:"1.2",
    front:"As you move from IaaS → PaaS → SaaS, what happens to the division of responsibility?",
    back:"The <strong>provider takes on progressively more responsibility</strong>. In IaaS: provider owns physical only. In PaaS: provider also owns OS, middleware, runtime. In SaaS: provider owns everything including the application. Customer responsibility shrinks toward data and identities only.",
    why:""
  },

  // ─── TOPIC 1.3 ───────────────────────────────────────────────────────────────
  { id:"c020", type:"term", topic:"1.3",
    front:"Cloud Model",
    back:"A deployment category that defines who owns, manages, and can access the cloud infrastructure. The three primary models are Public, Private, and Hybrid.",
    why:""
  },
  { id:"c021", type:"term", topic:"1.3",
    front:"Public Cloud",
    back:"Infrastructure owned and operated by a third-party cloud provider (e.g. Microsoft Azure), shared across many organisations over the public internet. Customers rent capacity; no capital expenditure; near-unlimited scalability.",
    why:""
  },
  { id:"c022", type:"term", topic:"1.3",
    front:"Private Cloud",
    back:"Infrastructure dedicated exclusively to a single organisation. May be in the organisation's own data centre or a dedicated third-party facility. Not shared. Maximum control, data sovereignty, and compliance — but high cost and limited scalability.",
    why:""
  },
  { id:"c023", type:"term", topic:"1.3",
    front:"Hybrid Cloud",
    back:"A combination of public and private clouds, connected so that data and applications can move between them. Sensitive workloads stay on-premises; scalable/public workloads run in the public cloud.",
    why:""
  },
  { id:"c024", type:"term", topic:"1.3",
    front:"Multi-Cloud",
    back:"Using services from two or more public cloud providers simultaneously (e.g. Azure + AWS). Used to avoid vendor lock-in, access best-in-class services, or meet geographic redundancy needs.",
    why:""
  },
  { id:"c025", type:"term", topic:"1.3",
    front:"Vendor Lock-In",
    back:"Over-dependence on a single provider's technology, making it difficult or costly to switch to another provider. Multi-cloud is one strategy to mitigate this.",
    why:""
  },
  { id:"c026", type:"term", topic:"1.3",
    front:"Data Sovereignty",
    back:"The requirement that data must remain within a specific geographic or organisational boundary and is subject to the laws of the country/region where it is stored.",
    why:""
  },
  { id:"c027", type:"scenario", topic:"1.3",
    front:"A national bank must ensure customer financial data never leaves the country and must be stored on infrastructure the bank fully controls. Which cloud model should they use?",
    back:"<strong>Private cloud.</strong> Signals: 'data must not leave the country' (data sovereignty), 'fully controls the infrastructure' (maximum control), strict regulatory/compliance requirements.",
    why:"Private cloud = max control + data sovereignty + compliance. No shared infrastructure."
  },
  { id:"c028", type:"scenario", topic:"1.3",
    front:"A hospital keeps patient records in its own data centre (strict regulatory control) but runs its public appointment website on Azure to handle demand. Which cloud model is this?",
    back:"<strong>Hybrid cloud.</strong> Signals: 'keep some data on-premises' + 'use cloud for scalable workloads'. Two environments connected securely (e.g. via Azure VPN Gateway).",
    why:"Hybrid = private for sensitive/regulated data + public for scalable/public-facing services."
  },
  { id:"c029", type:"scenario", topic:"1.3",
    front:"A two-person startup needs to launch a mobile app in two weeks with no budget for hardware. Which cloud model is most appropriate?",
    back:"<strong>Public cloud.</strong> Signals: 'no budget for hardware', 'launch quickly', small organisation, no need for special data sovereignty.",
    why:"Public cloud = low/zero upfront cost, fast provisioning, on-demand scalability."
  },
  { id:"c030", type:"scenario", topic:"1.3",
    front:"A large enterprise uses Azure for most workloads but has deployed some AI services on Google Cloud because Google's AI tools better suit a specific project. What cloud model is this?",
    back:"<strong>Multi-cloud.</strong> Signal: using two public cloud providers simultaneously (Azure + Google Cloud).",
    why:"Multi-cloud = two or more public cloud providers. Not the same as hybrid (which mixes public + private)."
  },
  { id:"c031", type:"qa", topic:"1.3",
    front:"What are the key weaknesses of the private cloud model compared to public cloud?",
    back:"1. <strong>High upfront cost</strong> — buy and maintain hardware. 2. <strong>Limited scalability</strong> — bounded by owned hardware. 3. <strong>High maintenance burden</strong> — dedicated IT staff required. 4. <strong>Slow to provision</strong> new resources.",
    why:""
  },

  // ─── TOPIC 1.4 ───────────────────────────────────────────────────────────────
  { id:"c032", type:"scenario", topic:"1.4",
    front:"An e-commerce retailer receives 10x normal traffic every Black Friday. Buying servers for peak load would waste money the other 51 weeks. Which cloud model and feature solves this?",
    back:"<strong>Public cloud</strong> — using <strong>elasticity</strong>. Scale up instantly for Black Friday, scale back down immediately after. Pay only for the extra capacity during the peak. No idle hardware.",
    why:"Elasticity = automatic scale up/down in response to demand. Public cloud = no capital expenditure, pay as you go."
  },
  { id:"c033", type:"term", topic:"1.4",
    front:"Elasticity",
    back:"The ability to automatically increase or decrease computing resources in response to demand. Characteristic of public cloud — you are not constrained by owned hardware.",
    why:""
  },
  { id:"c034", type:"term", topic:"1.4",
    front:"Cloud Bursting",
    back:"A hybrid cloud pattern where an application runs on private infrastructure by default but automatically overflows (bursts) into public cloud capacity when demand exceeds private resources. Pay for Azure resources only during the spike.",
    why:""
  },
  { id:"c034b", type:"term", topic:"1.4",
    front:"Gradual Migration",
    back:"A strategy for moving workloads from on-premises to the cloud incrementally rather than all at once. Old and new systems coexist and communicate during the transition, reducing risk. Hybrid cloud is the bridge state during a gradual migration.",
    why:"Contrast with lift-and-shift (IaaS, immediate). Gradual migration = hybrid + incremental."
  },
  { id:"c034c", type:"qa", topic:"1.4",
    front:"What are the key exam signal phrases that identify each cloud model?",
    back:"<strong>Multi-cloud</strong>: 'using Azure AND another cloud provider (AWS, Google Cloud)' — any mention of two or more public providers. <strong>Hybrid</strong>: 'connect existing data centre to Azure', 'burst to cloud', 'keep some on-premises', 'gradual migration'. <strong>Private</strong>: 'data must not leave our facility', 'classified', 'air-gapped'. <strong>Public</strong>: 'no hardware budget', 'launch quickly', 'on-demand scalability'.",
    why:"Memorise these signal phrases. The exam rarely names the model directly — it describes the scenario and expects you to identify it."
  },
  { id:"c035", type:"term", topic:"1.4",
    front:"Air-Gapped (system)",
    back:"A system physically isolated from unsecured networks, including the public internet, for maximum security. Common in defence and government private cloud deployments.",
    why:""
  },
  { id:"c036", type:"scenario", topic:"1.4",
    front:"A defence contractor stores classified government data. Regulations prohibit data from leaving their own facilities. Which cloud model?",
    back:"<strong>Private cloud.</strong> Signals: 'classified data', 'must not leave our facility', 'government/defence'. May use an air-gapped environment.",
    why:""
  },
  { id:"c037", type:"scenario", topic:"1.4",
    front:"A large enterprise has run its own data centre for 20 years and wants to move to Azure, but cannot migrate everything overnight. Which cloud model and what is the migration approach called?",
    back:"<strong>Hybrid cloud</strong> with a <strong>gradual migration</strong> strategy. Old and new systems coexist and communicate. Workloads migrate incrementally; reduces risk.",
    why:"Gradual migration = incremental workload movement. Hybrid is the bridge state during migration."
  },
  { id:"c038", type:"scenario", topic:"1.4",
    front:"A manufacturer normally processes payroll on its own servers. At year-end the workload spikes 20x. Buying 20x server capacity for one week per year is wasteful. Which cloud model?",
    back:"<strong>Hybrid cloud</strong> using <strong>cloud bursting</strong>. Run baseline on-premises; automatically overflow to Azure public cloud only during the spike. Pay for Azure resources only during the spike.",
    why:""
  },

  // ─── TOPIC 1.5 ───────────────────────────────────────────────────────────────
  { id:"c039", type:"term", topic:"1.5",
    front:"CapEx — Capital Expenditure",
    back:"Money spent upfront to buy, build, or improve physical assets used for many years. IT example: buying servers, building a data centre. Value is depreciated over the asset's useful life. Associated with on-premises IT.",
    why:""
  },
  { id:"c040", type:"term", topic:"1.5",
    front:"OpEx — Operational Expenditure",
    back:"Money spent on ongoing services consumed and paid for in the current period. IT example: monthly Azure subscription, SaaS fees. No asset ownership; pay as you go; costs match actual usage. Associated with cloud computing.",
    why:""
  },
  { id:"c041", type:"term", topic:"1.5",
    front:"Depreciation",
    back:"The process of spreading the cost of a physical asset across its useful lifetime in financial accounts. Relevant to CapEx — cloud (OpEx) has no depreciation because you own no asset.",
    why:""
  },
  { id:"c042", type:"term", topic:"1.5",
    front:"Consumption-Based Model",
    back:"The foundational cloud pricing philosophy: pay only for the resources you actually use, for as long as you use them. No fixed fee for owning capacity. Billing stops when use stops.",
    why:""
  },
  { id:"c043", type:"qa", topic:"1.5",
    front:"What are the three benefits of the consumption-based model?",
    back:"1. <strong>No upfront cost</strong> — start immediately without purchasing hardware. 2. <strong>No wasted resources</strong> — stop paying the moment you stop using. 3. <strong>Pay for what you need</strong> — scale up during busy periods, down during quiet ones; cost follows demand.",
    why:""
  },
  { id:"c044", type:"term", topic:"1.5",
    front:"Pay-As-You-Go (PAYG)",
    back:"Default Azure pricing model. Standard rate for resources consumed; billed by the second or hour; no upfront commitment; no minimum spend. Best for: unpredictable workloads, dev/test, new projects.",
    why:""
  },
  { id:"c045", type:"term", topic:"1.5",
    front:"Reserved Instances (Azure Reservations)",
    back:"Commit to using a specific Azure resource (typically a VM) for 1 year or 3 years in exchange for up to 72% discount vs PAYG. Best for: predictable, steady-state, always-on workloads. Trade-off: you pay whether you use it or not.",
    why:""
  },
  { id:"c046", type:"term", topic:"1.5",
    front:"Spot Pricing (Azure Spot VMs)",
    back:"Purchase unused Azure capacity at up to 90% off PAYG. Trade-off: Azure can evict (terminate) your workload with 30 seconds' notice if it needs the capacity back. Best for: interruptible, fault-tolerant batch workloads. Not suitable for production or databases.",
    why:""
  },
  { id:"c047", type:"term", topic:"1.5",
    front:"Eviction (Azure Spot VMs)",
    back:"The process by which Azure terminates a Spot VM when it needs to reclaim the underlying capacity. The workload is given 30 seconds' notice.",
    why:""
  },
  { id:"c048", type:"term", topic:"1.5",
    front:"Azure Hybrid Benefit",
    back:"A pricing offer allowing organisations that already own Windows Server or SQL Server licences with active Software Assurance to reuse those licences on Azure VMs instead of paying for new ones. Saves up to 40% on Windows VM costs.",
    why:""
  },
  { id:"c049", type:"term", topic:"1.5",
    front:"Software Assurance",
    back:"A Microsoft volume licensing programme that provides upgrade rights and additional benefits (including Azure Hybrid Benefit eligibility) for organisations with volume licence agreements.",
    why:""
  },
  { id:"c050", type:"scenario", topic:"1.5",
    front:"A company runs a SQL Server database 24/7/365. Usage is consistent and predictable. They want to minimise monthly spend. Which Azure pricing model should they use?",
    back:"<strong>Reserved Instances</strong> (1 or 3 year commitment). Always-on + predictable = Reserved. Saves up to 72% vs PAYG. The steady-state nature means no risk of paying for unused reservation.",
    why:"Reserved Instances = maximum savings for always-on, never-changing workloads."
  },
  { id:"c051", type:"scenario", topic:"1.5",
    front:"A film studio runs a rendering pipeline. Jobs are submitted randomly and can be restarted if interrupted. They want the absolute lowest cost. Which pricing model?",
    back:"<strong>Spot Pricing.</strong> Interruptible + fault-tolerant + cheapest = Spot. Up to 90% off PAYG. The job can be restarted if Azure evicts it.",
    why:"Spot = cheapest, but Azure can terminate with 30 seconds' notice. Only safe for restartable workloads."
  },
  { id:"c052", type:"scenario", topic:"1.5",
    front:"An enterprise is migrating its on-premises Windows Server workloads to Azure. They already have active Software Assurance licences. Which pricing option reduces their licensing costs?",
    back:"<strong>Azure Hybrid Benefit.</strong> Reuse existing on-premises Windows Server licences on Azure VMs. Saves up to 40% vs paying for new Azure licensing.",
    why:""
  },
  { id:"c053", type:"qa", topic:"1.5",
    front:"How does cloud computing shift IT spending from CapEx to OpEx?",
    back:"On-premises IT requires <strong>CapEx</strong> — large upfront hardware purchases owned and depreciated by the company. Cloud is <strong>OpEx</strong> — the provider owns the hardware; you pay a recurring subscription/usage fee for the current period with no asset ownership.",
    why:""
  },
  { id:"c053b", type:"qa", topic:"1.5",
    front:"Compare CapEx vs OpEx across five factors.",
    back:"<strong>Payment:</strong> CapEx = large upfront lump sum · OpEx = ongoing, pay as used. <strong>Ownership:</strong> CapEx = you own the asset · OpEx = provider owns it. <strong>Scalability:</strong> CapEx = fixed by hardware purchased · OpEx = instant, scale up or down. <strong>Risk:</strong> CapEx = high (must guess future needs) · OpEx = low (pay only for actual use). <strong>Cloud model:</strong> CapEx = on-premises · OpEx = cloud.",
    why:"The five-factor table is a common exam comparison. If you see 'large upfront purchase' or 'own the hardware' → CapEx. If you see 'pay monthly' or 'no asset ownership' → OpEx."
  },
  { id:"c053c", type:"qa", topic:"1.5",
    front:"What are the key exam signal phrases for Azure pricing models?",
    back:"<strong>CapEx:</strong> 'large upfront purchase', 'own the hardware', 'depreciate over time'. <strong>PAYG:</strong> 'unpredictable workload', 'dev/test', 'no commitment'. <strong>Reserved Instances:</strong> 'always-on', 'predictable', 'steady-state', 'minimise cost long-term'. <strong>Spot:</strong> 'interruptible', 'can be restarted', 'lowest possible cost', 'batch job'. <strong>Azure Hybrid Benefit:</strong> 'already have Windows Server / SQL Server licences', 'Software Assurance'.",
    why:"Memorise the signal phrase for each model. The exam describes a workload and expects you to name the correct pricing option."
  },

  // ─── TOPIC 1.6 ───────────────────────────────────────────────────────────────
  { id:"c054", type:"term", topic:"1.6",
    front:"Serverless Computing",
    back:"A cloud execution model where the provider dynamically manages all infrastructure allocation. Developers deploy code without provisioning or managing servers. Billing is per execution (milliseconds), not per reserved capacity. Between executions: cost = zero.",
    why:""
  },
  { id:"c055", type:"qa", topic:"1.6",
    front:"Does 'serverless' mean there are no servers?",
    back:"<strong>No.</strong> There are always physical servers running the code. 'Serverless' means the developer never sees, provisions, configures, patches, or manages those servers. The cloud provider handles all infrastructure. A more accurate term would be 'server-abstracted'.",
    why:"Common misconception tested on the exam."
  },
  { id:"c056", type:"term", topic:"1.6",
    front:"Event-Driven (computing pattern)",
    back:"A computing pattern where code executes only in response to a specific trigger or event, rather than running continuously. Core characteristic of serverless computing.",
    why:""
  },
  { id:"c057", type:"term", topic:"1.6",
    front:"Trigger (serverless)",
    back:"The event that causes a serverless function to execute. Examples: an HTTP request arriving, a file uploaded to storage, a message entering a queue, a timer firing.",
    why:""
  },
  { id:"c058", type:"term", topic:"1.6",
    front:"Invocation (serverless)",
    back:"A single execution of a serverless function triggered by one event. Billing is typically measured per invocation and per millisecond of execution time.",
    why:""
  },
  { id:"c059", type:"term", topic:"1.6",
    front:"Stateless (serverless functions)",
    back:"Each function execution is independent and has no memory of previous executions. The function does not retain state between invocations unless explicitly using external storage.",
    why:""
  },
  { id:"c060", type:"term", topic:"1.6",
    front:"Azure Functions",
    back:"Microsoft's primary serverless compute service. Runs event-triggered code without managing infrastructure. Billing is per invocation and per millisecond of execution time.",
    why:""
  },
  { id:"c061", type:"term", topic:"1.6",
    front:"Azure Logic Apps",
    back:"A serverless workflow automation service. Integrates applications and services using a visual, low-code designer — without writing code. Example: send a Slack message every time a new database row is added.",
    why:""
  },
  { id:"c062", type:"term", topic:"1.6",
    front:"Azure Event Grid",
    back:"A serverless event routing service that connects event sources to event handlers across Azure. Example: notify an Azure Function when a blob is created in Azure Storage.",
    why:""
  },
  { id:"c063", type:"term", topic:"1.6",
    front:"Microservices",
    back:"An architecture pattern where an application is built as a collection of small, independent services each responsible for a single function. Serverless functions are a natural fit for microservices patterns.",
    why:""
  },
  { id:"c064", type:"term", topic:"1.6",
    front:"Webhook",
    back:"An HTTP callback — a serverless function (or endpoint) that fires automatically when an external system sends an HTTP request to a specific URL.",
    why:""
  },
  { id:"c065", type:"scenario", topic:"1.6",
    front:"An HR system sends a welcome email every time a new employee is added to the database. New employees are added a few times per day at unpredictable times. Is serverless a good fit? Why?",
    back:"<strong>Yes — excellent fit.</strong> The workload is sporadic (few times/day), event-driven (new record triggers the email), short execution time, and idle for most of the day. Azure Functions is ideal. Cost near-zero between events.",
    why:"Serverless shines for: sporadic, event-driven, short, stateless tasks."
  },
  { id:"c066", type:"scenario", topic:"1.6",
    front:"A bank's core transaction processing system runs 24/7 at 50,000 transactions/second and maintains complex session state. Is serverless appropriate?",
    back:"<strong>No — not suitable.</strong> Reasons: always-on (serverless is event-driven, not continuously running), stateful (serverless is stateless by default), extremely high throughput (continuous load may be cheaper on reserved VMs). Use a VM or dedicated compute.",
    why:"Serverless is NOT for: always-on, stateful, high-sustained-throughput workloads."
  },
  { id:"c067", type:"scenario", topic:"1.6",
    front:"A data science team runs a machine learning training job every Sunday night that takes 8 hours to complete. Is serverless appropriate?",
    back:"<strong>No — not suitable.</strong> Azure Functions has an execution timeout limit (default 5 minutes on Consumption plan, extendable to 10 minutes). An 8-hour job exceeds this. Use a VM or Azure Batch.",
    why:"Serverless functions have execution time limits. Long-running jobs need VMs or batch compute."
  },
  { id:"c068", type:"qa", topic:"1.6",
    front:"What is the key exam signal that points to Azure Logic Apps vs Azure Functions?",
    back:"<strong>Azure Logic Apps</strong>: 'automate a workflow between services <em>without coding</em>' or 'visual designer' or 'low-code integration'. <strong>Azure Functions</strong>: 'run code triggered by an event' or 'pay only when code executes'.",
    why:""
  },
  { id:"c068b", type:"qa", topic:"1.6",
    front:"Compare serverless vs a traditional VM across three billing dimensions.",
    back:"<strong>Billing unit:</strong> VM = per hour whether idle or busy · Serverless = per millisecond of actual execution only. <strong>Idle cost:</strong> VM = yes, you pay even when no requests arrive · Serverless = zero cost between executions. <strong>Scaling:</strong> VM = manual or rule-based, slower · Serverless = automatic and instant, scales to zero.",
    why:"'Scales to zero' is the key serverless differentiator — a stopped VM still costs money; a serverless function with no invocations costs nothing."
  },

  // ─── TOPIC 1.7 ───────────────────────────────────────────────────────────────
  { id:"c069", type:"term", topic:"1.7",
    front:"High Availability (HA)",
    back:"A design principle ensuring a system remains operational and accessible for the maximum possible time, even when individual components fail. Achieved through redundancy — running multiple copies of components so a single failure does not cause downtime.",
    why:""
  },
  { id:"c070", type:"term", topic:"1.7",
    front:"Redundancy",
    back:"Running duplicate components so that if one fails, another takes over without service interruption. The mechanism that enables high availability.",
    why:""
  },
  { id:"c071", type:"term", topic:"1.7",
    front:"Downtime",
    back:"The period during which a system is unavailable or not operational. Minimised through high availability design.",
    why:""
  },
  { id:"c072", type:"term", topic:"1.7",
    front:"SLA — Service Level Agreement",
    back:"A formal contract between a provider and a customer defining the minimum guaranteed level of service — including uptime percentage — and consequences if that level is not met. Azure publishes SLAs for all its services.",
    why:""
  },
  { id:"c073", type:"term", topic:"1.7",
    front:"Nines (availability shorthand)",
    back:"Industry shorthand for availability percentages. 'Three nines' = 99.9% (≈8.76 hours downtime/year). 'Four nines' = 99.99% (≈52.6 minutes/year). 'Five nines' = 99.999% (≈5.26 minutes/year).",
    why:""
  },
  { id:"c074", type:"qa", topic:"1.7",
    front:"How much downtime per year does a 99.9% SLA allow?",
    back:"<strong>8.76 hours per year</strong> (approximately 43.8 minutes per month). Three nines.",
    why:"Memorise: 99.9% = 3 nines = ~8.76 hrs/year. 99.99% = 4 nines = ~52.6 min/year."
  },
  { id:"c075", type:"term", topic:"1.7",
    front:"Availability Zone (Azure)",
    back:"A physically separate data centre within an Azure region, with independent power, cooling, and networking. Deploying across Availability Zones protects against data centre-level failure. Azure's SLA for VMs across zones = 99.99%.",
    why:""
  },
  { id:"c076", type:"term", topic:"1.7",
    front:"Availability Set (Azure)",
    back:"A logical grouping that distributes VMs across separate physical hardware racks (fault domains and update domains) within a single data centre. Protects against localised hardware rack failures — not full data centre failures.",
    why:""
  },
  { id:"c077", type:"term", topic:"1.7",
    front:"Load Balancer (Azure)",
    back:"A service that distributes incoming network traffic across multiple healthy backend VM instances. If one VM fails, traffic is routed to the others automatically. Essential for both HA and scalability.",
    why:""
  },
  { id:"c078", type:"term", topic:"1.7",
    front:"Scalability",
    back:"The ability to adjust computing resources to meet changing demand — either adding more capacity when needed or reducing it when demand falls. Protects against both overload and wasted idle capacity.",
    why:""
  },
  { id:"c079", type:"term", topic:"1.7",
    front:"Vertical Scaling (Scale Up / Scale Down)",
    back:"Increasing or decreasing the power of an <em>existing</em> resource — adding more CPU, RAM, or storage to the same machine. Has a ceiling (max VM size). Still a single point of failure.",
    why:""
  },
  { id:"c080", type:"term", topic:"1.7",
    front:"Horizontal Scaling (Scale Out / Scale In)",
    back:"Adding more <em>instances</em> of a resource (scale out) or removing instances when no longer needed (scale in). Near-unlimited; distributes load across multiple machines. Built-in redundancy.",
    why:""
  },
  { id:"c081", type:"term", topic:"1.7",
    front:"vCPU — Virtual CPU",
    back:"A virtualised processor allocated to a cloud VM. Vertical scaling involves increasing vCPU count on an existing VM (e.g. from 4 vCPUs to 16 vCPUs).",
    why:""
  },
  { id:"c082", type:"term", topic:"1.7",
    front:"Azure Virtual Machine Scale Sets",
    back:"An Azure service that automatically creates and manages a group of identical, load-balanced VMs that can scale in or out based on demand or a schedule. Used for horizontal autoscaling.",
    why:""
  },
  { id:"c083", type:"term", topic:"1.7",
    front:"Autoscale",
    back:"The ability of a cloud service to automatically add or remove resources based on defined rules or metrics (e.g. 'if CPU > 70% for 5 minutes, add 2 VMs'). No manual intervention needed.",
    why:""
  },
  { id:"c084", type:"qa", topic:"1.7",
    front:"What is the key distinction between High Availability and Scalability?",
    back:"<strong>High Availability</strong>: keeps the system running even when components fail. Protects against <em>failure</em>. Key question: 'Will my system stay up if a server crashes?' <br><br><strong>Scalability</strong>: adjusts resources to match demand. Protects against <em>overload and waste</em>. Key question: 'Can my system handle 10x more traffic?'",
    why:"These are complementary — a well-architected system should be both. Do not confuse them."
  },
  { id:"c085", type:"scenario", topic:"1.7",
    front:"A gaming company expects 500,000 simultaneous players at launch vs normal 50,000. They want to add web servers automatically during the launch window. What type of scaling is this?",
    back:"<strong>Horizontal scaling (Scale Out)</strong> using Azure VM Scale Sets and autoscale rules. Adding more VM instances to handle the increased concurrent user load.",
    why:"Scale Out = more instances. Autoscale rules trigger this automatically."
  },
  { id:"c086", type:"scenario", topic:"1.7",
    front:"A database server struggles with a complex query requiring more RAM. The team upgrades the VM from 32 GB to 128 GB RAM. What type of scaling is this?",
    back:"<strong>Vertical scaling (Scale Up)</strong>. Increasing the power (RAM) of an existing single machine. Note: this has a ceiling (max VM size) and does not improve redundancy.",
    why:""
  },
  { id:"c087", type:"scenario", topic:"1.7",
    front:"A hospital's patient records system must never go offline. The IT team deploys it across three Azure Availability Zones. What benefit does this primarily provide?",
    back:"<strong>High Availability.</strong> Deploying across three physically separate Availability Zones means if one zone loses power, the other two continue serving users. Azure SLA = 99.99% for VMs across zones.",
    why:""
  },
  { id:"c087b", type:"scenario", topic:"1.7",
    front:"An application is slow under heavy load and needs more CPU and RAM. The team also wants to handle a sudden 10x traffic spike by adding more servers automatically. Which scaling type solves each problem?",
    back:"<strong>Slow under load (needs more CPU/RAM on existing machine):</strong> Vertical scaling (Scale Up) — increase the power of the existing VM. <strong>10x traffic spike (need more instances):</strong> Horizontal scaling (Scale Out) — add more VM instances via VM Scale Sets and autoscale. Note: vertical scaling hits a ceiling and does not add redundancy; horizontal scaling is near-unlimited and adds redundancy.",
    why:"Vertical = bigger machine. Horizontal = more machines. Real architectures often combine both."
  },

  // ─── TOPIC 1.8 ───────────────────────────────────────────────────────────────
  { id:"c088", type:"term", topic:"1.8",
    front:"Reliability (cloud benefit)",
    back:"The ability of a system to recover from failures automatically and continue to function correctly. A reliable system is resilient: it anticipates failures and handles them gracefully without data loss or manual intervention.",
    why:""
  },
  { id:"c089", type:"term", topic:"1.8",
    front:"Resilience",
    back:"The capacity of a system to withstand and recover from disruptions — hardware failure, network outages, software bugs — without losing data or availability.",
    why:""
  },
  { id:"c090", type:"term", topic:"1.8",
    front:"Disaster Recovery (DR)",
    back:"The process and infrastructure for restoring systems and data after a catastrophic failure or regional outage (fire, flood, cyberattack). Distinct from HA: DR handles large-scale/regional failures, not just individual component failures.",
    why:""
  },
  { id:"c091", type:"term", topic:"1.8",
    front:"Failover",
    back:"The automatic switching of a workload from a failed component to a healthy standby component. Example: an entire Azure region fails; workloads fail over to the paired region automatically.",
    why:""
  },
  { id:"c092", type:"term", topic:"1.8",
    front:"Region Pair (Azure)",
    back:"Two Azure regions within the same geography, paired so that platform updates are rolled out sequentially (never simultaneously) and regional disasters can trigger automatic failover. Each pair is at least 300 miles apart.",
    why:""
  },
  { id:"c093", type:"term", topic:"1.8",
    front:"Azure Backup",
    back:"A managed service for automated, policy-driven backup of Azure and on-premises workloads (VMs, databases, files). Protects against accidental deletion or data corruption.",
    why:""
  },
  { id:"c094", type:"term", topic:"1.8",
    front:"Azure Site Recovery",
    back:"A disaster recovery service that continuously replicates entire workloads to a secondary location. Enables rapid failover if the primary site goes down. Used for regional DR scenarios.",
    why:""
  },
  { id:"c095", type:"qa", topic:"1.8",
    front:"What is the key difference between High Availability and Reliability?",
    back:"<strong>High Availability</strong>: staying online during <em>localised</em> failures (one server, one zone). Protects against component failure. <br><br><strong>Reliability</strong>: recovering correctly after <em>any</em> failure — including catastrophic/regional ones — and maintaining data integrity. HA is a spare tyre; Reliability is also knowing how to change it and having roadside assistance for any breakdown.",
    why:"Common exam trap. HA = localised failure tolerance. Reliability = full recovery including disaster scenarios."
  },
  { id:"c096", type:"term", topic:"1.8",
    front:"Azure Well-Architected Framework",
    back:"Microsoft's official set of best practices across five pillars for building high-quality Azure solutions: <strong>Reliability</strong>, <strong>Security</strong>, <strong>Cost Optimisation</strong>, <strong>Operational Excellence</strong>, and <strong>Performance Efficiency</strong>.",
    why:""
  },
  { id:"c097", type:"term", topic:"1.8",
    front:"RTO — Recovery Time Objective",
    back:"The maximum acceptable time for a system to be offline after a failure before service is restored. 'How long can we be down?' Relevant to disaster recovery planning.",
    why:""
  },
  { id:"c098", type:"term", topic:"1.8",
    front:"RPO — Recovery Point Objective",
    back:"The maximum acceptable amount of data loss measured in time — how far back in time can you afford to restore from a backup? 'How much data can we afford to lose?' Relevant to backup and DR planning.",
    why:""
  },
  { id:"c099", type:"term", topic:"1.8",
    front:"Predictability (cloud benefit)",
    back:"Confidence that you can forecast both how a system will perform AND what it will cost — before committing. Has two dimensions: performance predictability and cost predictability.",
    why:""
  },
  { id:"c100", type:"term", topic:"1.8",
    front:"Performance Predictability",
    back:"Confidence that a system will consistently deliver expected performance for customers as demand fluctuates. Enabled by autoscaling, load balancing, Azure CDN, and Azure Monitor.",
    why:""
  },
  { id:"c101", type:"term", topic:"1.8",
    front:"Cost Predictability",
    back:"The ability to accurately forecast cloud spend in advance, avoiding unexpected charges. Enabled by Azure Pricing Calculator, Azure Cost Management, Reserved Instances, and resource Tags.",
    why:""
  },
  { id:"c102", type:"term", topic:"1.8",
    front:"CDN — Content Delivery Network (Azure CDN)",
    back:"A distributed network of servers that caches content close to end users to reduce latency and deliver consistent performance globally. Enables performance predictability for global applications.",
    why:""
  },
  { id:"c103", type:"term", topic:"1.8",
    front:"Latency",
    back:"The time delay between a user sending a request and receiving a response. Lower latency = faster experience. Azure CDN reduces latency by serving content from geographically closer servers.",
    why:""
  },
  { id:"c104", type:"term", topic:"1.8",
    front:"Azure Pricing Calculator",
    back:"A free web tool for estimating Azure costs before deployment. Input expected resource configurations and usage to get a monthly cost breakdown. Enables cost predictability.",
    why:""
  },
  { id:"c105", type:"term", topic:"1.8",
    front:"Azure Cost Management",
    back:"An Azure service for monitoring, analysing, and optimising cloud spend. Set budgets and alerts so you are notified before overspending. Enables ongoing cost predictability and control.",
    why:""
  },
  { id:"c106", type:"term", topic:"1.8",
    front:"Tags (Azure resource tags)",
    back:"Key-value metadata labels applied to Azure resources for cost tracking, governance, and organisation. Example: Environment: Production or CostCentre: Marketing. Used to track and forecast costs per business unit.",
    why:""
  },
  { id:"c107", type:"scenario", topic:"1.8",
    front:"An earthquake destroys an Azure data centre in one region. Customer workloads automatically switch to the paired region within minutes with no data loss. Which benefit is this?",
    back:"<strong>Reliability</strong> (specifically disaster recovery). Azure Region Pairs + Azure Site Recovery enable automatic failover to a geographically distant paired region after a catastrophic regional failure.",
    why:"Not HA — HA handles localised failures. This is a full regional outage → Reliability/DR territory."
  },
  { id:"c108", type:"scenario", topic:"1.8",
    front:"A CFO wants a report projecting the Azure bill for next quarter before approving the cloud migration budget. Which benefit and tool applies?",
    back:"<strong>Cost Predictability</strong>. Tool: <strong>Azure Pricing Calculator</strong>. Estimate expected resource usage and configurations to generate a monthly cost forecast before deployment.",
    why:""
  },
  { id:"c109", type:"scenario", topic:"1.8",
    front:"A global e-commerce site serves product images from servers in 40 countries, ensuring fast load times in Tokyo and Toronto. Which benefit and Azure service?",
    back:"<strong>Performance Predictability</strong>. Service: <strong>Azure CDN</strong>. Content cached close to users globally reduces latency and delivers consistent performance regardless of user location.",
    why:""
  },

  // ─── TOPIC 1.9 ───────────────────────────────────────────────────────────────
  { id:"c110", type:"term", topic:"1.9",
    front:"Security (cloud benefit)",
    back:"Cloud providers offer a broad set of physical and digital security capabilities — many prohibitively expensive to replicate on-premises — and maintain/patch cloud infrastructure continuously against emerging threats. Security is a shared responsibility.",
    why:""
  },
  { id:"c111", type:"term", topic:"1.9",
    front:"Microsoft Entra ID (formerly Azure Active Directory)",
    back:"Azure's cloud-based identity and access management service. Manages who can sign in and access Azure resources. Provides SSO, MFA, and conditional access. Formerly known as Azure Active Directory (Azure AD).",
    why:""
  },
  { id:"c112", type:"term", topic:"1.9",
    front:"SSO — Single Sign-On",
    back:"An authentication method allowing a user to log in once and access multiple applications without re-entering credentials. Provided by Microsoft Entra ID.",
    why:""
  },
  { id:"c113", type:"term", topic:"1.9",
    front:"MFA — Multi-Factor Authentication",
    back:"A security method requiring two or more verification factors to prove identity — e.g. password plus a one-time code sent to a phone. Configured via Microsoft Entra ID. Dramatically reduces risk of credential compromise.",
    why:""
  },
  { id:"c114", type:"term", topic:"1.9",
    front:"RBAC — Role-Based Access Control",
    back:"A system that grants permissions to users based on their assigned role rather than individual permissions. Example: a 'Reader' role can view resources but not modify them. Managed via Azure RBAC integrated with Microsoft Entra ID.",
    why:""
  },
  { id:"c115", type:"term", topic:"1.9",
    front:"DDoS — Distributed Denial of Service",
    back:"An attack that floods a system with traffic from many sources simultaneously, attempting to make it unavailable. Azure DDoS Protection detects and absorbs such attacks at the network edge before they reach your resources.",
    why:""
  },
  { id:"c116", type:"term", topic:"1.9",
    front:"Azure Key Vault",
    back:"A managed Azure service for securely storing and managing secrets (passwords, connection strings), encryption keys, and certificates used by applications. Replaces insecure practices like storing secrets in code.",
    why:""
  },
  { id:"c117", type:"term", topic:"1.9",
    front:"Microsoft Defender for Cloud",
    back:"A unified security monitoring and threat detection service that continuously monitors Azure resources for vulnerabilities and active threats. Provides a security posture score and compliance dashboard.",
    why:""
  },
  { id:"c118", type:"term", topic:"1.9",
    front:"Governance (cloud benefit)",
    back:"The set of policies, rules, and controls that ensure cloud resources are deployed and used in a way that is consistent, compliant, and aligned with organisational and regulatory requirements. Prevents cloud sprawl.",
    why:""
  },
  { id:"c119", type:"term", topic:"1.9",
    front:"Compliance (governance context)",
    back:"Adherence to external laws, regulations, or industry standards — such as GDPR, HIPAA, or ISO 27001. Azure governance tools help organisations demonstrate and enforce compliance.",
    why:""
  },
  { id:"c120", type:"term", topic:"1.9",
    front:"Cloud Sprawl",
    back:"The uncontrolled proliferation of cloud resources across an organisation — inconsistently named, untagged, non-compliant, and expensive to audit. Governance tools (Azure Policy, tags, locks) prevent cloud sprawl.",
    why:""
  },
  { id:"c121", type:"term", topic:"1.9",
    front:"Azure Policy",
    back:"A service for defining and enforcing organisational rules across Azure resources. Example: 'All VMs must be deployed in approved regions only.' Non-compliant resources are flagged or blocked automatically at deployment time and continuously.",
    why:""
  },
  { id:"c122", type:"term", topic:"1.9",
    front:"Resource Lock (Azure)",
    back:"A setting applied to an Azure resource that prevents accidental deletion or modification. Two types: <strong>Read-only</strong> (can view but not change) and <strong>Delete</strong> (can modify but not delete). Governance tool.",
    why:""
  },
  { id:"c123", type:"term", topic:"1.9",
    front:"Microsoft Purview",
    back:"A unified data governance and compliance service for discovering, classifying, and managing data across an organisation — including data in Azure and on-premises. Helps with regulatory compliance and data oversight.",
    why:""
  },
  { id:"c124", type:"term", topic:"1.9",
    front:"Azure Activity Log",
    back:"A platform log recording all management-plane operations performed on Azure resources — who did what, when, and from where. Used for audit trails and compliance investigation.",
    why:""
  },
  { id:"c125", type:"term", topic:"1.9",
    front:"Audit Trail",
    back:"A chronological record of all actions taken on a system, used for compliance reporting and forensic investigation. Azure Activity Log provides this for all Azure resources.",
    why:""
  },
  { id:"c126", type:"qa", topic:"1.9",
    front:"What is the key distinction between Security and Governance as cloud benefits?",
    back:"<strong>Security</strong>: protecting resources from external and internal <em>threats</em> — unauthorised access, attacks, data breaches. (Lock on the door.) <br><br><strong>Governance</strong>: ensuring resources are used <em>correctly and consistently</em> according to organisational and regulatory rules. (Policy that says who may enter and that all visits must be logged.)",
    why:"Common exam trap. Know which Azure tool belongs to which category."
  },
  { id:"c127", type:"scenario", topic:"1.9",
    front:"A company wants to ensure no Azure resource can be deployed outside of UK South and UK West regions, to comply with data residency regulations. Which Azure tool?",
    back:"<strong>Azure Policy.</strong> Define a policy that allows deployment only in UK South and UK West. Non-compliant deployments are automatically blocked. This is a <strong>governance</strong> measure.",
    why:""
  },
  { id:"c128", type:"scenario", topic:"1.9",
    front:"The development team stores database connection strings and API keys in application code. The security team wants these moved to a secure centralised store. Which Azure service?",
    back:"<strong>Azure Key Vault.</strong> Securely stores secrets, encryption keys, and certificates. Applications retrieve secrets at runtime without embedding them in code. This is a <strong>security</strong> measure.",
    why:""
  },
  { id:"c129", type:"scenario", topic:"1.9",
    front:"A production SQL database was accidentally deleted by a junior engineer. Management wants to prevent this from ever happening again. Which Azure tool?",
    back:"<strong>Resource Lock (Delete lock).</strong> Apply a Delete lock to the SQL Database resource. This prevents deletion regardless of user permissions until the lock is explicitly removed. This is a <strong>governance</strong> measure.",
    why:""
  },
  { id:"c130", type:"scenario", topic:"1.9",
    front:"The finance team needs to prove to external auditors exactly who approved and deployed a specific virtual machine last Tuesday. Which Azure tool provides this?",
    back:"<strong>Azure Activity Log.</strong> Records all management-plane operations — who performed each action, when, and from where. Provides the audit trail needed for compliance investigations.",
    why:""
  },

  // ─── TOPIC 1.10 ──────────────────────────────────────────────────────────────
  { id:"c131", type:"term", topic:"1.10",
    front:"Manageability (cloud benefit) — two dimensions",
    back:"Has two dimensions: <br>1. <strong>Management OF the cloud</strong>: what Azure manages automatically for you (autoscaling, self-healing, auto-patching, template deployment, monitoring). <br>2. <strong>Management IN the cloud</strong>: the tools you use to interact with and control Azure (Portal, CLI, PowerShell, REST APIs, Cloud Shell).",
    why:""
  },
  { id:"c132", type:"term", topic:"1.10",
    front:"Management OF the Cloud",
    back:"Capabilities Azure provides to manage resources automatically — automatic scaling, automatic deployment via templates, health monitoring, self-healing (replacing failed instances), and automatic updates of underlying infrastructure.",
    why:""
  },
  { id:"c133", type:"term", topic:"1.10",
    front:"Management IN the Cloud",
    back:"The interfaces and tools used to interact with, deploy, configure, monitor, and control Azure resources: Azure Portal, Azure CLI, Azure PowerShell, REST APIs, Azure Cloud Shell.",
    why:""
  },
  { id:"c134", type:"term", topic:"1.10",
    front:"ARM Template — Azure Resource Manager Template",
    back:"A JSON file that declaratively defines Azure resources to deploy. Ensures every deployment is identical, fast, and error-free. Used for repeatable, consistent infrastructure-as-code deployments.",
    why:""
  },
  { id:"c135", type:"term", topic:"1.10",
    front:"Bicep",
    back:"A domain-specific language (DSL) that simplifies writing ARM templates. Compiles down to ARM JSON. Cleaner syntax than raw JSON. Used for the same infrastructure-as-code purpose as ARM templates.",
    why:""
  },
  { id:"c136", type:"term", topic:"1.10",
    front:"Self-Healing (cloud management)",
    back:"The ability of a cloud platform to automatically detect and replace failed components without human intervention. Example: Azure detects an unresponsive VM in a Scale Set, stops routing traffic to it, and provisions a replacement — all automatically.",
    why:""
  },
  { id:"c137", type:"term", topic:"1.10",
    front:"Azure Monitor",
    back:"Azure's unified monitoring service that collects metrics and logs from resources, triggers alerts, and can initiate automated actions. Enables proactive detection of issues before users are affected.",
    why:""
  },
  { id:"c138", type:"term", topic:"1.10",
    front:"Hypervisor",
    back:"Software that creates and manages virtual machines on physical hardware. In Azure, Microsoft operates and maintains the hypervisor. Customers never interact with it directly. Part of the physical layer (provider's responsibility).",
    why:""
  },
  { id:"c139", type:"term", topic:"1.10",
    front:"Azure Portal",
    back:"Microsoft's web-based graphical user interface (GUI) for managing Azure resources, accessible at portal.azure.com. Best for: beginners, exploration, one-off tasks, visual dashboards. No commands to memorise.",
    why:""
  },
  { id:"c140", type:"term", topic:"1.10",
    front:"Azure CLI — Command-Line Interface",
    back:"A cross-platform command-line tool for managing Azure resources. Commands use the <strong>az</strong> prefix. Works on Windows, macOS, and Linux. Best for scripting, automation, and repeatable tasks across any OS.",
    why:""
  },
  { id:"c141", type:"term", topic:"1.10",
    front:"Azure PowerShell",
    back:"A PowerShell module providing Azure-specific cmdlets for managing Azure resources. Follows Verb-Noun convention (e.g. New-AzVM). Best for automation and scripting in Windows-centric or Microsoft-heavy environments.",
    why:""
  },
  { id:"c142", type:"term", topic:"1.10",
    front:"Cmdlet",
    back:"A lightweight PowerShell command designed to perform a single function. Pronounced 'command-let'. Azure PowerShell uses cmdlets following the Verb-Noun pattern (e.g. Get-AzVM, Remove-AzResourceGroup).",
    why:""
  },
  { id:"c143", type:"term", topic:"1.10",
    front:"REST API (Azure REST APIs)",
    back:"HTTP-based Application Programming Interfaces for interacting with Azure programmatically. Used by developers building applications that need to create or manage Azure resources programmatically. Representational State Transfer.",
    why:""
  },
  { id:"c144", type:"term", topic:"1.10",
    front:"Azure Cloud Shell",
    back:"A browser-based command-line environment built directly into the Azure Portal. Provides both Azure CLI and Azure PowerShell without any local installation. Persistent storage saves scripts between sessions. Manage Azure from any device with a browser.",
    why:""
  },
  { id:"c145", type:"scenario", topic:"1.10",
    front:"A DevOps engineer needs to deploy an identical copy of a 20-resource production environment into a new region every time a new client signs up. The process must be repeatable and error-free. Which tool and which dimension of manageability?",
    back:"<strong>ARM Templates or Bicep</strong> — infrastructure as code. This is <strong>Management OF the cloud</strong> (automated, consistent, repeatable deployment). Define the environment once; deploy identically every time.",
    why:""
  },
  { id:"c146", type:"scenario", topic:"1.10",
    front:"An Azure VM in a Scale Set crashes at 4 a.m. No engineer is on call. The company requires the application to keep running without manual intervention. Which capability and dimension of manageability?",
    back:"<strong>Self-healing via VM Scale Sets</strong> — this is <strong>Management OF the cloud</strong>. Azure health probes detect the failure, the load balancer stops routing to the failed VM, and Azure automatically provisions a replacement from the Scale Set configuration.",
    why:""
  },
  { id:"c147", type:"scenario", topic:"1.10",
    front:"A system administrator in a Windows-heavy environment wants to write a script that stops all VMs tagged 'Environment: Dev' every evening to save costs. Which Azure management tool?",
    back:"<strong>Azure PowerShell</strong>. Windows-centric environment + scripting + cmdlets = PowerShell. This is <strong>Management IN the cloud</strong>.",
    why:"Linux/macOS scripting → Azure CLI. Windows/Microsoft environment → Azure PowerShell."
  },
  { id:"c148", type:"scenario", topic:"1.10",
    front:"A software company is building a SaaS product that needs to provision Azure resources on behalf of customers programmatically when they sign up. Which management interface?",
    back:"<strong>Azure REST APIs (or Azure SDK)</strong>. Embedding Azure resource management in custom application code requires the REST API or an Azure SDK. This is <strong>Management IN the cloud</strong>.",
    why:""
  },

  // ─── TOPIC 1.11 ──────────────────────────────────────────────────────────────
  { id:"c149", type:"term", topic:"1.11",
    front:"IaaS — Infrastructure as a Service",
    back:"A cloud service model in which the provider supplies virtualised computing infrastructure (servers, storage, networking) over the internet. The customer is responsible for everything above the hardware layer: OS, middleware, runtime, applications, and data. Maximum control; maximum responsibility.",
    why:""
  },
  { id:"c150", type:"term", topic:"1.11",
    front:"Virtual Machine (VM) — Azure",
    back:"A software-based emulation of a physical computer, running an OS and applications on shared physical hardware managed by the cloud provider. The primary IaaS compute resource in Azure. You configure and manage everything from the OS upward.",
    why:""
  },
  { id:"c151", type:"term", topic:"1.11",
    front:"Middleware",
    back:"Software that sits between the operating system and applications, providing services such as messaging, authentication, or data access. In IaaS: customer's responsibility. In PaaS/SaaS: provider's responsibility.",
    why:""
  },
  { id:"c152", type:"term", topic:"1.11",
    front:"Runtime",
    back:"The software environment in which an application executes — e.g. the Java Runtime Environment or the .NET runtime. In IaaS: customer's responsibility. In PaaS/SaaS: provider's responsibility.",
    why:""
  },
  { id:"c153", type:"term", topic:"1.11",
    front:"Lift-and-Shift (migration strategy)",
    back:"Moving an existing on-premises application to the cloud with no architectural changes. The application runs on a VM exactly as it did on physical hardware. No code changes required. Classic IaaS use case.",
    why:""
  },
  { id:"c154", type:"term", topic:"1.11",
    front:"Legacy Application",
    back:"An application built on older technology that may be difficult to modernise but must continue to run. Often requires a specific OS version, driver, or dependency that only IaaS can accommodate.",
    why:""
  },
  { id:"c155", type:"term", topic:"1.11",
    front:"Azure Managed Disk",
    back:"A virtualised hard disk attached to an Azure VM. Microsoft manages the underlying storage infrastructure. The customer manages the data stored on the disk. Primary IaaS storage resource.",
    why:""
  },
  { id:"c156", type:"term", topic:"1.11",
    front:"VNet — Azure Virtual Network",
    back:"An isolated, private network in Azure that you define and control. Used to connect Azure resources securely. Analogous to a traditional on-premises LAN. Part of Azure IaaS networking.",
    why:""
  },
  { id:"c157", type:"term", topic:"1.11",
    front:"NSG — Network Security Group",
    back:"A set of rules that controls inbound and outbound network traffic to Azure resources. The cloud equivalent of a firewall rule list. Applied to subnets or individual VM network interfaces.",
    why:""
  },
  { id:"c158", type:"term", topic:"1.11",
    front:"Azure Dedicated Host",
    back:"A physical server in Azure allocated exclusively to one organisation, not shared with other customers. Used for compliance requirements (regulatory mandates for dedicated hardware) or specific licensing needs.",
    why:""
  },
  { id:"c159", type:"term", topic:"1.11",
    front:"Azure Bastion",
    back:"A managed service providing secure RDP and SSH access to VMs through the Azure Portal browser without requiring a public IP address on the VM. Eliminates the attack surface of exposing RDP/SSH ports directly to the internet.",
    why:""
  },
  { id:"c160", type:"term", topic:"1.11",
    front:"SSH — Secure Shell",
    back:"A protocol for securely connecting to and managing Linux/Unix systems remotely over an encrypted channel. Used to access Linux VMs in Azure (often via Azure Bastion).",
    why:""
  },
  { id:"c161", type:"term", topic:"1.11",
    front:"RDP — Remote Desktop Protocol",
    back:"Microsoft's protocol for remotely connecting to and controlling a Windows desktop or server. Used to access Windows VMs in Azure (often via Azure Bastion).",
    why:""
  },
  { id:"c162", type:"qa", topic:"1.11",
    front:"In IaaS, what is the boundary between Azure's responsibility and the customer's responsibility?",
    back:"The <strong>hypervisor</strong>. Everything <em>below</em> the hypervisor (physical data centre, network, servers, virtualisation layer) is Azure's responsibility. Everything <em>above</em> (OS, middleware, runtime, applications, data) is the customer's responsibility.",
    why:""
  },
  { id:"c163", type:"scenario", topic:"1.11",
    front:"A company runs a payroll application on Windows Server 2016 in their own data centre. They want to move it to Azure as quickly as possible with no code changes. Which service type?",
    back:"<strong>IaaS</strong> — Azure Virtual Machine. Classic lift-and-shift. No code changes; same OS, same application, now running on a VM in Azure. Customer retains full OS control.",
    why:""
  },
  { id:"c164", type:"scenario", topic:"1.11",
    front:"After moving a payroll application to an Azure VM, who is responsible for applying Windows security updates — Microsoft or the company?",
    back:"<strong>The company (customer).</strong> OS patching is always the customer's responsibility in IaaS. Azure never patches your VM's operating system for you.",
    why:"Critical IaaS rule. Frequently tested."
  },

  // ─── TOPIC 1.12 ──────────────────────────────────────────────────────────────
  { id:"c165", type:"term", topic:"1.12",
    front:"PaaS — Platform as a Service",
    back:"A cloud service model in which the provider manages the underlying infrastructure AND the platform layer (OS, middleware, runtime, patching, scaling). The customer focuses exclusively on developing, deploying, and managing their applications and data.",
    why:""
  },
  { id:"c166", type:"term", topic:"1.12",
    front:"Managed Service (PaaS context)",
    back:"A cloud resource where the provider handles patching, scaling, backups, and availability automatically. The customer configures and uses it but does not maintain the underlying platform. Example: Azure SQL Database is a managed database service.",
    why:""
  },
  { id:"c167", type:"qa", topic:"1.12",
    front:"In PaaS, what is the boundary between Azure's responsibility and the customer's?",
    back:"The <strong>runtime</strong>. Azure manages everything up to and including the runtime (OS, middleware, runtime). The customer manages what runs <em>inside</em> the runtime: application code, data, and access control. The customer never logs into a server.",
    why:""
  },
  { id:"c168", type:"term", topic:"1.12",
    front:"Azure App Service",
    back:"A fully managed PaaS web hosting platform supporting multiple programming languages (.NET, Java, Python, Node.js, PHP, Ruby). No server, OS, or runtime management required. Supports auto-scaling and CI/CD deployment.",
    why:""
  },
  { id:"c169", type:"term", topic:"1.12",
    front:"Azure SQL Database",
    back:"A fully managed PaaS relational database based on SQL Server. Azure handles backups, patching, high availability, and scaling automatically. No DBA required to maintain the database engine.",
    why:""
  },
  { id:"c170", type:"term", topic:"1.12",
    front:"Azure Cosmos DB",
    back:"A fully managed, globally distributed NoSQL database service. Automatically scales throughput and storage. Supports multiple data models (documents, key-value, graph). PaaS service.",
    why:""
  },
  { id:"c171", type:"term", topic:"1.12",
    front:"NoSQL (database)",
    back:"A category of database designed for flexible, non-tabular data structures (documents, key-value pairs, graphs). Does not use traditional SQL rows and columns. Example: Azure Cosmos DB.",
    why:""
  },
  { id:"c172", type:"term", topic:"1.12",
    front:"AKS — Azure Kubernetes Service",
    back:"A managed Kubernetes service. Azure provisions and maintains the Kubernetes control plane entirely; you deploy containerised applications. PaaS service — removes the operational burden of managing Kubernetes infrastructure.",
    why:""
  },
  { id:"c173", type:"term", topic:"1.12",
    front:"Kubernetes",
    back:"An open-source container orchestration system for automating deployment, scaling, and management of containerised applications. Azure Kubernetes Service (AKS) is Azure's managed offering.",
    why:""
  },
  { id:"c174", type:"term", topic:"1.12",
    front:"Control Plane (Kubernetes)",
    back:"The management layer of a Kubernetes cluster that schedules workloads and maintains cluster state. In AKS, Azure manages the control plane entirely — reducing operational overhead for the customer.",
    why:""
  },
  { id:"c175", type:"term", topic:"1.12",
    front:"CI/CD — Continuous Integration / Continuous Delivery",
    back:"A software practice where code changes are automatically tested and deployed to production, reducing manual steps and release delays. Azure App Service integrates natively with CI/CD pipelines.",
    why:""
  },
  { id:"c176", type:"scenario", topic:"1.12",
    front:"A startup is building a customer web app in Python (Django). They want to deploy today, never patch web servers, and scale automatically as users grow. They have two developers and no infrastructure engineer. Which service type and Azure service?",
    back:"<strong>PaaS</strong> — <strong>Azure App Service</strong>. Azure manages the web server, OS, runtime, and scaling. The two developers focus entirely on features. Python is a supported runtime.",
    why:""
  },
  { id:"c177", type:"scenario", topic:"1.12",
    front:"A security researcher needs to install custom network monitoring tools at the OS level on an Azure server to analyse traffic patterns. Which service type?",
    back:"<strong>IaaS</strong> — Azure Virtual Machine. PaaS does not permit OS-level access or installation of arbitrary software. Only IaaS gives you root/administrator access to the OS.",
    why:"Key PaaS limitation: you cannot log into a server, install OS-level software, or customise the underlying platform."
  },
  { id:"c178", type:"scenario", topic:"1.12",
    front:"A company needs a SQL Server database with automatic backups, high availability, and no DBA required. Which service type and Azure service?",
    back:"<strong>PaaS</strong> — <strong>Azure SQL Database</strong>. Fully managed; Azure patches SQL Server, manages failover, and performs backups. Customer connects and uses the database — never administers the engine.",
    why:""
  },
  { id:"c179", type:"scenario", topic:"1.12",
    front:"A manufacturer runs specialist CAD software that only supports Windows Server 2012 R2 and requires a specific graphics driver. Which service type?",
    back:"<strong>IaaS</strong> — Azure Virtual Machine with a custom OS image. Only IaaS allows a specific OS version and custom hardware driver installation. PaaS abstracts the OS away entirely.",
    why:""
  },

  // ─── TOPIC 1.13 ──────────────────────────────────────────────────────────────
  { id:"c180", type:"term", topic:"1.13",
    front:"SaaS — Software as a Service",
    back:"A cloud service model in which the provider hosts and manages a complete, ready-to-use software application delivered over the internet (typically via a web browser). Customer manages only data and user access. Provider manages everything including the application.",
    why:""
  },
  { id:"c181", type:"term", topic:"1.13",
    front:"Subscription Model (SaaS pricing)",
    back:"A pricing approach where the customer pays a recurring fee (monthly or annually) for access to a software product rather than purchasing a perpetual licence. Standard pricing model for SaaS.",
    why:""
  },
  { id:"c182", type:"term", topic:"1.13",
    front:"Multi-Tenancy (SaaS architecture)",
    back:"A SaaS architecture where a single instance of the application serves multiple customers simultaneously, with data kept logically isolated between them. Enables economies of scale for the provider.",
    why:""
  },
  { id:"c183", type:"qa", topic:"1.13",
    front:"In a SaaS model, what are the three things the customer is ALWAYS responsible for?",
    back:"1. <strong>Their data</strong> — what is stored, how it is classified, who can export it. 2. <strong>Their user accounts and access</strong> — who has a licence, permissions, enforcing MFA. 3. <strong>Their devices (endpoints)</strong> — security of laptops, phones, tablets used to access the application.",
    why:"Most common SaaS exam trap: students assume provider manages everything = no customer responsibility. Wrong."
  },
  { id:"c184", type:"term", topic:"1.13",
    front:"Microsoft 365",
    back:"Microsoft's flagship SaaS productivity suite. Includes Word, Excel, PowerPoint, Teams, Outlook, SharePoint, and OneDrive — delivered via subscription over the internet. Customer manages user accounts, data stored, and access permissions.",
    why:""
  },
  { id:"c185", type:"term", topic:"1.13",
    front:"CRM — Customer Relationship Management",
    back:"Software for managing a company's interactions with customers and prospects. Example SaaS CRM products: Salesforce, Microsoft Dynamics 365. Customer manages business data, user roles, and integrations.",
    why:""
  },
  { id:"c186", type:"term", topic:"1.13",
    front:"ERP — Enterprise Resource Planning",
    back:"Software integrating core business processes — finance, HR, supply chain — into a single system. Example: Microsoft Dynamics 365. Often delivered as SaaS.",
    why:""
  },
  { id:"c187", type:"scenario", topic:"1.13",
    front:"A 200-person company wants to give all employees email and document collaboration tools. They have no IT team. Which service model?",
    back:"<strong>SaaS</strong> — <strong>Microsoft 365</strong>. No IT team needed; instant deployment; accessible from any device; Microsoft manages everything. Customer manages user accounts, permissions, and data.",
    why:""
  },
  { id:"c188", type:"scenario", topic:"1.13",
    front:"A company uses Microsoft 365 (SaaS). An employee sets a confidential spreadsheet's sharing link to 'Anyone with the link'. Whose responsibility is this — Microsoft's or the company's?",
    back:"<strong>The company's (customer).</strong> Data and access permissions are always the customer's responsibility in SaaS. Microsoft provides the sharing controls; the customer is responsible for using them correctly.",
    why:""
  },
  { id:"c189", type:"scenario", topic:"1.13",
    front:"A financial services firm needs a CRM operational within 48 hours with no desire to manage servers or databases. Which service model?",
    back:"<strong>SaaS</strong> — Microsoft Dynamics 365 or Salesforce. Operational immediately after licence purchase; provider manages everything; customer configures fields, workflows, and user permissions.",
    why:""
  },
  { id:"c190", type:"qa", topic:"1.13",
    front:"Who patches the application itself in a SaaS model?",
    back:"<strong>The provider.</strong> In SaaS, the provider manages and patches everything including the application. Automatic updates mean users always have the latest features and security patches with no IT intervention.",
    why:""
  },

  // ─── TOPIC 1.14 ──────────────────────────────────────────────────────────────
  { id:"c191", type:"qa", topic:"1.14",
    front:"What is the three-step rapid triage for choosing IaaS, PaaS, or SaaS on the exam?",
    back:"1. <strong>Using or building software?</strong> Using ready-made software → SaaS. Building/deploying an application → IaaS or PaaS. <br>2. <strong>If building — need OS control?</strong> Specific OS / custom drivers / legacy → IaaS. Just deploy code → PaaS. <br>3. <strong>Who patches the OS?</strong> Customer → IaaS. Provider → PaaS or SaaS.",
    why:"Memorise this triage. It resolves almost every service-type scenario question."
  },
  { id:"c192", type:"qa", topic:"1.14",
    front:"What signal words in a scenario reliably indicate IaaS?",
    back:"'Migrate without re-writing code', 'lift-and-shift', 'need full control of the OS', 'specific OS version or custom driver', 'legacy application', 'root/administrator access to the server', 'install custom software at the OS level'.",
    why:""
  },
  { id:"c193", type:"qa", topic:"1.14",
    front:"What signal words in a scenario reliably indicate PaaS?",
    back:"'Deploy a web app without managing servers', 'managed database — no DBA needed', 'focus on code not infrastructure', 'automatic OS patching and scaling', 'build and deploy quickly', 'CI/CD pipeline'.",
    why:""
  },
  { id:"c194", type:"qa", topic:"1.14",
    front:"What signal words in a scenario reliably indicate SaaS?",
    back:"'Use email / Teams / Word without IT overhead', 'access software from any browser or device', 'no installation — instant access', 'subscription-based productivity tools', 'CRM or ERP with no infrastructure', 'always up-to-date software — no patching needed'.",
    why:""
  },
  { id:"c195", type:"scenario", topic:"1.14",
    front:"A retailer wants to host a new e-commerce website in Node.js. Three developers. They want automatic scaling and zero server management. IaaS, PaaS, or SaaS?",
    back:"<strong>PaaS</strong> — Azure App Service. Signals: 'no server management', 'automatic scaling', 'new Node.js web app'. Azure manages OS, runtime, web server. Developers deploy code only.",
    why:""
  },
  { id:"c196", type:"scenario", topic:"1.14",
    front:"A government agency runs a critical case management system on Windows Server 2003. It cannot be re-written. It must be moved to Azure. IaaS, PaaS, or SaaS?",
    back:"<strong>IaaS</strong> — Azure Virtual Machine. Signals: 'Windows Server 2003' (specific old OS), 'cannot be re-written' (lift-and-shift). Only IaaS supports a custom OS image with this specific version.",
    why:""
  },
  { id:"c197", type:"scenario", topic:"1.14",
    front:"A data analytics company needs nightly ML training jobs on GPU-accelerated hardware. Jobs take 6 hours. The team must install custom CUDA libraries at the OS level. IaaS, PaaS, or SaaS?",
    back:"<strong>IaaS</strong> — Azure N-series GPU VMs. Signals: 'GPU-accelerated hardware' (specific VM type), 'custom CUDA libraries at OS level' (requires OS access). PaaS does not permit OS-level software installation.",
    why:""
  },
  { id:"c198", type:"scenario", topic:"1.14",
    front:"A startup needs a globally distributed NoSQL database for their mobile app, automatic scaling, and never wants to manage database infrastructure. IaaS, PaaS, or SaaS?",
    back:"<strong>PaaS</strong> — Azure Cosmos DB. Signals: 'managed NoSQL database', 'automatic scaling', 'never manage database infrastructure'. Fully managed PaaS service — customer connects and uses it.",
    why:"'Managed database' always = PaaS, even though there are servers underneath."
  },
  { id:"c199", type:"scenario", topic:"1.14",
    front:"A sales team of 30 needs a CRM to track leads and pipeline. They want it running by end of the week. IaaS, PaaS, or SaaS?",
    back:"<strong>SaaS</strong> — Microsoft Dynamics 365 or Salesforce. Signals: 'CRM', 'running by end of the week', no infrastructure mentioned. Operational immediately after licence purchase.",
    why:""
  },
  { id:"c200", type:"qa", topic:"1.14",
    front:"What is a common exam trap about Azure Functions and service type classification?",
    back:"Azure Functions (serverless) is a <strong>subcategory of PaaS</strong> for exam purposes. The provider manages everything below the function code. Students sometimes confuse it as a separate category — it is not. Treat serverless as PaaS.",
    why:""
  },
  { id:"c201", type:"qa", topic:"1.14",
    front:"Can an organisation use IaaS and PaaS simultaneously in Azure?",
    back:"<strong>Yes.</strong> Service models are not mutually exclusive. A single organisation might run a legacy application on Azure VMs (IaaS), host a new web app on Azure App Service (PaaS), and use Microsoft 365 (SaaS) for productivity — all at the same time.",
    why:""
  },
  { id:"c202", type:"term", topic:"1.14",
    front:"HPC — High-Performance Computing",
    back:"Workloads requiring large amounts of compute power, typically GPU-accelerated or massively parallel. Example: pharmaceutical molecular simulations, ML training, rendering. Best suited to IaaS (Azure N-series GPU VMs) for custom OS and hardware configuration.",
    why:""
  },
  { id:"c203", type:"term", topic:"1.14",
    front:"CUDA",
    back:"A parallel computing platform and programming model created by NVIDIA for GPU-accelerated computing. Required by many scientific and ML workloads. Must be installed at the OS level — requires IaaS (VM), not PaaS.",
    why:""
  },
  { id:"c204", type:"term", topic:"1.14",
    front:"Azure DevTest Labs",
    back:"A PaaS service for creating, managing, and auto-deleting development and test environments cost-efficiently. VMs can be set to auto-shut-down, keeping costs low. Used when teams need frequent, isolated test environments.",
    why:""
  },
  { id:"c205", type:"term", topic:"1.14",
    front:"Docker",
    back:"An open-source platform for building, shipping, and running applications in containers. Containers package an application and its dependencies together in a lightweight, portable unit. Used with AKS (PaaS) or on IaaS VMs.",
    why:""
  },
  { id:"c206", type:"term", topic:"1.14",
    front:"Container (cloud context)",
    back:"A lightweight, portable unit of software that packages an application and all its dependencies together, ensuring it runs consistently across any environment. Orchestrated at scale using Kubernetes/AKS.",
    why:""
  },

  // ─── CROSS-TOPIC ─────────────────────────────────────────────────────────────
  { id:"c207", type:"qa", topic:"1.7-1.10",
    front:"What are all seven cloud benefits covered in AZ-900 Phase 1?",
    back:"1. <strong>High Availability</strong> — stays up despite failures. 2. <strong>Scalability</strong> — handles any demand. 3. <strong>Reliability</strong> — recovers automatically. 4. <strong>Predictability</strong> — forecast performance and cost. 5. <strong>Security</strong> — protected from threats. 6. <strong>Governance</strong> — used correctly and compliantly. 7. <strong>Manageability</strong> — easy to deploy, monitor, and control.",
    why:"The exam allocates 25–30% to cloud concepts. All seven benefits can be tested."
  },
  { id:"c208", type:"qa", topic:"1.11-1.13",
    front:"Summarise the three service models (IaaS, PaaS, SaaS) in one line each.",
    back:"<strong>IaaS</strong>: rent raw compute/storage/networking; you manage OS and above. <br><strong>PaaS</strong>: rent a platform; you manage only apps and data. <br><strong>SaaS</strong>: use ready-made software; you manage only data and user access.",
    why:"Core comparison. If you can say this from memory, the scenario questions become straightforward."
  }

];
