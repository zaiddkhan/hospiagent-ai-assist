
import { Check, Mic, Calendar, ClipboardList, Activity, Heart, Book, Search, Users, Shield, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const agents = [
  {
    id: 1,
    title: "Documentation Agent",
    description: "Transcribes doctor-patient conversations into structured notes without clinical suggestions.",
    icon: <Mic className="h-8 w-8 text-hospi-500" />,
    benefits: [
      "Save 2-3 hours daily on administrative work",
      "Generate structured documentation efficiently",
      "Purely administrative with no clinical suggestions",
      "Review and approve all content before finalizing"
    ]
  },
  {
    id: 2,
    title: "Practice Manager Agent",
    description: "Automates appointments, billing, follow-ups, referrals, and inventory.",
    icon: <Calendar className="h-8 w-8 text-hospi-500" />,
    benefits: [
      "WhatsApp integration for patient bookings",
      "Automated reminders and payment collection",
      "Inventory tracking and alerts",
      "Daily business performance summaries"
    ]
  },
  {
    id: 3,
    title: "Triage Assistant Agent",
    description: "Collects symptoms pre-consult, flags urgency, prepares doctor.",
    icon: <ClipboardList className="h-8 w-8 text-hospi-500" />,
    benefits: [
      "Pre-visit symptom collection",
      "Priority assignment for urgent cases",
      "Structured handoff to physicians",
      "Improved consultation efficiency"
    ]
  },
  {
    id: 4,
    title: "Clinical Image Organizer",
    description: "Enhances and organizes medical images without offering interpretations or diagnoses.",
    icon: <Activity className="h-8 w-8 text-hospi-500" />,
    benefits: [
      "Image enhancement for better visibility",
      "Organized storage and retrieval of images",
      "Highlights areas for physician attention",
      "No diagnostic interpretations provided"
    ]
  },
  {
    id: 5,
    title: "Patient Communication Tool",
    description: "Collects and displays patient-reported data without clinical interpretations.",
    icon: <Heart className="h-8 w-8 text-hospi-500" />,
    benefits: [
      "Connect with patient monitoring devices",
      "Display patient-reported data clearly",
      "Facilitate communication between visits",
      "No automated clinical interpretations"
    ]
  },
  {
    id: 6,
    title: "Multilingual Education Agent",
    description: "Sends post-visit instructions and health education in local languages.",
    icon: <Book className="h-8 w-8 text-hospi-500" />,
    benefits: [
      "Voice/text instructions in local languages",
      "Improved treatment adherence",
      "Delivered via SMS or WhatsApp",
      "Better understanding for semi-literate populations"
    ]
  },
  {
    id: 7,
    title: "Medical Reference Tool",
    description: "Provides access to published guidelines without suggesting specific treatments.",
    icon: <Search className="h-8 w-8 text-hospi-500" />,
    benefits: [
      "Access to established medical guidelines",
      "Literature references with citations",
      "No patient-specific treatment suggestions",
      "All final decisions rest with the provider"
    ]
  },
  {
    id: 8,
    title: "Referral Coordination Agent",
    description: "Manages referrals, creates handoffs, shares summaries, and tracks.",
    icon: <Users className="h-8 w-8 text-hospi-500" />,
    benefits: [
      "Directory of trusted specialists",
      "One-click referral summary generator",
      "Feedback loop integration",
      "Ensures continuity of care"
    ]
  },
  {
    id: 9,
    title: "Audit Compliance Agent",
    description: "Flags missing documentation, consent forms, malpractice risks.",
    icon: <Shield className="h-8 w-8 text-hospi-500" />,
    benefits: [
      "Periodic scan of EMR data",
      "Compliance rule engine",
      "Risk reports for internal QA teams",
      "Avoid penalties and lawsuits"
    ]
  },
  {
    id: 10,
    title: "Clinical Training Agent",
    description: "Simulates patient cases, quizzes doctors, and provides feedback.",
    icon: <GraduationCap className="h-8 w-8 text-hospi-500" />,
    benefits: [
      "LLM-powered case simulators",
      "Branching case paths with feedback",
      "Performance tracking for students",
      "Sharpen diagnostic thinking"
    ]
  }
];

const AgentsSection = () => {
  return (
    <section id="agents" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our Physician Productivity Tools
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Purpose-built AI assistants designed to enhance productivity and efficiency. All tools emphasize that final decisions always rest with the healthcare provider.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <Card key={agent.id} className="border border-gray-200 rounded-xl overflow-hidden card-hover">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-accent rounded-lg p-3 mr-4">
                    {agent.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{agent.title}</h3>
                </div>
                <p className="text-gray-600 mb-5">{agent.description}</p>
                <ul className="space-y-2">
                  {agent.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
