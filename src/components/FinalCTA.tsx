import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Your Voice, Your Action:
          <br />
          <span className="text-primary">
            Together, We Build a Brighter World
          </span>
        </h2>

        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of changemakers who are already making a difference.
          Every action counts, every voice matters.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Create a Campaign
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
          >
            Donate to a campaign
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
