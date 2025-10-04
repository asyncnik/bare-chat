import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle } from "lucide-react";

interface NameSetupProps {
  onNameSubmit: (name: string) => void;
}

const NameSetup = ({ onNameSubmit }: NameSetupProps) => {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onNameSubmit(name.trim());
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary to-muted p-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-3xl shadow-2xl p-8 space-y-6 backdrop-blur-sm border border-border/50">
          <div className="flex flex-col items-center space-y-3">
            <div className="bg-primary/10 p-4 rounded-2xl">
              <MessageCircle className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">Welcome</h1>
            <p className="text-muted-foreground text-center">
              Enter your name to start chatting
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-12 text-lg rounded-xl border-2 focus:border-primary transition-colors"
              maxLength={30}
              autoFocus
            />
            <Button
              type="submit"
              className="w-full h-12 text-lg rounded-xl bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02]"
              disabled={!name.trim()}
            >
              Start Chatting
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NameSetup;
