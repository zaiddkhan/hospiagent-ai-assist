
import { Check, Mic, Calendar, ClipboardList, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const agents = [
  {
    id: 1,
    title: "Clinical Scribe Agent",
    description: "Converts doctor-patient conversations into structured notes, prescriptions, and diagnosis codes.",
    icon: <Mic className="h-8 w-8 text-hospi-500" />,
    benefits: [
      "Save 2-3 hours daily on documentation",
      "Generate SOAP notes automatically",
      "Accurate ICD codes and EMR integration",
      "Review and approve before finalizing"
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
    title: "Diagnostic Support Agent",
    description: "Interprets imaging, labs, ECGs, and flags probable diagnoses.",
    icon: <Activity className="h-8 w-8 text-hospi-500" />,
    benefits: [
      "X-ray and ECG interpretation assistance",
      "Lab result analysis and flagging",
      "Visual annotations for review",
      "Confidence level indicators"
    ]
  }
];

const AgentsSection = () => {
  return (
    <section id="agents" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our AI Agents
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Purpose-built AI assistants designed specifically for the needs and workflows of Indian healthcare practitioners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
