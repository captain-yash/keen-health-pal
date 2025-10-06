import { Hero } from "@/components/Hero";
import { ChatInterface } from "@/components/ChatInterface";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <div className="flex-1 flex flex-col container py-8">
        <div className="bg-card rounded-lg shadow-lg border flex flex-col overflow-hidden" style={{ height: '600px' }}>
          <ChatInterface />
        </div>
        <p className="text-center text-xs text-muted-foreground mt-4 max-w-2xl mx-auto">
          ⚕️ <strong>Medical Disclaimer:</strong> This AI assistant provides general health information only. 
          Always consult qualified healthcare professionals for medical diagnosis and treatment.
        </p>
      </div>
    </div>
  );
};

export default Index;
