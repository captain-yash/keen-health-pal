import heroImage from "@/assets/healthcare-hero.jpg";
import { Heart, Shield, Activity } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background">
      <div className="absolute inset-0 opacity-10">
        <img src={heroImage} alt="Healthcare" className="w-full h-full object-cover" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Your Personal <span className="text-primary">Healthcare</span> Assistant
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            AI-powered symptom analysis and disease prediction for better health insights
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/10">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Heart className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Symptom Analysis</h3>
              <p className="text-sm text-muted-foreground text-center">
                Describe your symptoms and get instant analysis
              </p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-accent/10">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                <Activity className="text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Disease Prediction</h3>
              <p className="text-sm text-muted-foreground text-center">
                AI-powered predictions based on medical knowledge
              </p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/10">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Shield className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Health Guidance</h3>
              <p className="text-sm text-muted-foreground text-center">
                Personalized lifestyle and wellness recommendations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
