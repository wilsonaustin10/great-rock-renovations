import { Metadata } from "next";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import { MapPin, Calendar, DollarSign, Ruler, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Houston Construction Projects | Portfolio | Great Rock Renovations",
  description: "View our completed construction projects in Houston, TX. Real examples of deck building, fence installation, kitchen remodeling with timelines and costs. Call (832) 979-6414.",
  keywords: "Houston construction projects, renovation portfolio, deck examples, fence projects, kitchen remodel before after",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Construction Project Portfolio",
  "description": "Completed construction and renovation projects by Great Rock Renovations in Houston, TX",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Great Rock Renovations",
    "telephone": "+18329796414"
  },
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "CreativeWork",
        "name": "Cypress Composite Deck Project",
        "description": "400 sq ft Trex composite deck with built-in seating in Cypress, TX. Completed in 3 weeks for $18,000.",
        "dateCreated": "2024-10",
        "locationCreated": {
          "@type": "Place",
          "address": "Cypress, TX"
        }
      },
      {
        "@type": "CreativeWork",
        "name": "Spring Privacy Fence Installation",
        "description": "200 linear feet cedar privacy fence in Spring, TX. Completed in 5 days for $6,000.",
        "dateCreated": "2024-09",
        "locationCreated": {
          "@type": "Place",
          "address": "Spring, TX"
        }
      },
      {
        "@type": "CreativeWork",
        "name": "Katy Kitchen Renovation",
        "description": "Complete kitchen remodel with quartz countertops in Katy, TX. 6-week project, $32,000 investment.",
        "dateCreated": "2024-08",
        "locationCreated": {
          "@type": "Place",
          "address": "Katy, TX"
        }
      }
    ]
  }
};

const projects = [
  {
    id: 1,
    title: "Cypress Composite Deck with Built-in Seating",
    category: "Deck Building",
    location: "Cypress, TX 77429",
    timeline: "3 weeks",
    cost: "$18,000",
    size: "400 sq ft",
    description: "Complete deck construction featuring Trex Transcend composite decking in Island Mist color. Project included custom built-in seating, LED stair lighting, and aluminum railing system.",
    features: [
      "Trex Transcend composite decking",
      "Built-in perimeter seating with storage",
      "LED riser lights on all stairs",
      "Aluminum railing with glass panels",
      "10-year workmanship warranty"
    ],
    materials: "Composite decking, pressure-treated framing, concrete footings",
    challenges: "Sloped yard required custom foundation design",
    outcome: "Increased home value by $25,000 per appraisal",
    images: ["/images/Fence and Patio/Deck1.png", "/images/Fence and Patio/Deck2.png"]
  },
  {
    id: 2,
    title: "Spring Cedar Privacy Fence Installation",
    category: "Fence Installation",
    location: "Spring, TX 77379",
    timeline: "5 days",
    cost: "$6,000",
    size: "200 linear feet",
    description: "6-foot cedar privacy fence with board-on-board design. Included two pedestrian gates and one double-wide vehicle gate with decorative hardware.",
    features: [
      "Western Red Cedar construction",
      "Board-on-board for no gaps",
      "Steel-reinforced gate frames",
      "Decorative post caps",
      "Weather-resistant stain applied"
    ],
    materials: "Cedar pickets, 4x4 posts, 2x4 rails, concrete",
    challenges: "Property line had mature trees requiring custom routing",
    outcome: "Enhanced privacy and increased property value",
    images: ["/images/Fence and Patio/Fence1.png", "/images/Fence and Patio/Fence2.png"]
  },
  {
    id: 3,
    title: "Katy Modern Kitchen Renovation",
    category: "Kitchen Remodeling",
    location: "Katy, TX 77494",
    timeline: "6 weeks",
    cost: "$32,000",
    size: "250 sq ft",
    description: "Complete kitchen transformation featuring white shaker cabinets, Calacatta quartz countertops, and subway tile backsplash. Added large island with breakfast bar seating for four.",
    features: [
      "42-inch upper cabinets with crown molding",
      "Soft-close drawers and doors",
      "Quartz countertops with waterfall edge",
      "Stainless steel appliance package",
      "Under-cabinet LED lighting"
    ],
    materials: "Shaker cabinets, quartz countertops, ceramic tile, hardwood flooring",
    challenges: "Load-bearing wall removal required engineered beam",
    outcome: "Open concept design improved flow and functionality",
    images: ["/images/Examples/Kitchen.webp", "/images/Examples/09 Kitchen & Counters.jpg"]
  },
  {
    id: 4,
    title: "Houston Heights Bathroom Renovation",
    category: "Bathroom Remodeling",
    location: "Houston Heights, TX 77008",
    timeline: "4 weeks",
    cost: "$18,500",
    size: "100 sq ft",
    description: "Master bathroom renovation featuring walk-in shower with frameless glass, double vanity with quartz top, and heated tile floors.",
    features: [
      "Frameless glass shower enclosure",
      "Rain shower head with hand wand",
      "Double vanity with soft-close drawers",
      "Heated porcelain tile flooring",
      "Modern LED vanity lighting"
    ],
    materials: "Porcelain tile, quartz countertops, frameless glass, chrome fixtures",
    challenges: "Second-floor location required floor reinforcement",
    outcome: "Spa-like retreat with improved resale value",
    images: ["/images/Examples/25 Master Bathroom.jpg", "/images/Examples/27 Master Bathroom Shower.jpg"]
  },
  {
    id: 5,
    title: "Sugar Land Patio Cover Addition",
    category: "Patio Construction",
    location: "Sugar Land, TX 77479",
    timeline: "2 weeks",
    cost: "$12,000",
    size: "320 sq ft",
    description: "Attached patio cover with cedar beam construction and metal roofing. Integrated ceiling fans and recessed lighting for year-round comfort.",
    features: [
      "Insulated metal roofing",
      "Cedar beam construction",
      "Two ceiling fans with lights",
      "Recessed LED lighting",
      "Matches home's architecture"
    ],
    materials: "Cedar beams, metal roofing, electrical components",
    challenges: "HOA approval required specific design elements",
    outcome: "Extended living space usable in all weather",
    images: ["/images/Fence and Patio/Patio1.png", "/images/Fence and Patio/Patio2.png"]
  }
];

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Houston Construction Projects
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Real projects, real timelines, real costs. See what we can build for you.
              </p>
              
              {/* Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-2xl font-bold text-blue-600">$15-60k</div>
                  <div className="text-sm text-gray-600">Project Range</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-2xl font-bold text-blue-600">2-8 wks</div>
                  <div className="text-sm text-gray-600">Typical Timeline</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-2xl font-bold text-blue-600">98%</div>
                  <div className="text-sm text-gray-600">On-Time Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {projects.map((project) => (
                <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="grid lg:grid-cols-2">
                    {/* Project Images */}
                    <div className="bg-gray-100 p-8">
                      <div className="grid grid-cols-2 gap-4">
                        {project.images.map((image, idx) => (
                          <div key={idx} className="relative h-48 bg-gray-200 rounded-lg overflow-hidden">
                            <Image
                              src={image}
                              alt={`${project.title} - Image ${idx + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="p-8">
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full">
                          {project.category}
                        </span>
                      </div>
                      
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        {project.title}
                      </h2>

                      {/* Key Metrics */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{project.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{project.timeline}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-gray-400" />
                          <span className="text-sm font-semibold text-gray-900">{project.cost}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Ruler className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{project.size}</span>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-6">
                        {project.description}
                      </p>

                      {/* Project Features */}
                      <div className="mb-6">
                        <h3 className="font-semibold text-gray-900 mb-2">Project Features:</h3>
                        <ul className="space-y-1">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Additional Details */}
                      <div className="space-y-3 pt-4 border-t border-gray-200">
                        <div>
                          <span className="font-semibold text-gray-900">Materials: </span>
                          <span className="text-gray-700">{project.materials}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">Challenge: </span>
                          <span className="text-gray-700">{project.challenges}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">Result: </span>
                          <span className="text-gray-700">{project.outcome}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What This Means For You Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                What This Means For Your Project
              </h2>
              
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
                    <p className="text-gray-700">
                      Our Houston projects typically range from $6,000 for fence installations to $32,000 for 
                      kitchen remodels. We provide detailed quotes with no hidden fees.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Realistic Timelines</h3>
                    <p className="text-gray-700">
                      Based on our completed projects: fences take 3-7 days, decks 2-4 weeks, kitchen remodels 
                      4-8 weeks. Weather and permits may affect timeline.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Quality Materials</h3>
                    <p className="text-gray-700">
                      We use trusted brands like Trex decking, Caesarstone quartz, and Western Red Cedar. All 
                      materials meet Houston building codes and come with manufacturer warranties.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Problem Solving</h3>
                    <p className="text-gray-700">
                      Every project has challenges - from HOA requirements to structural modifications. Our 
                      experience with 500+ Houston projects means we can handle yours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section with Lead Form */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  Start Your Project Today
                </h2>
                <p className="text-center text-gray-700 mb-8">
                  Get a free quote based on similar projects in your area
                </p>
                <LeadForm source="projects-page" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}