import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";

const Hero = () => {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm mb-4 rounded-[32px] inline-block px-4 py-2 border border-[rgba(223,227,232,1)] text-inherit">
              Easily launch crowdfunding campaigns, attract donors, and manage funds.
            </p>
            <h1 className="text-[64px] leading-[80px] font-bold mb-6">
              Empowering <span className="text-primary">Africans</span>
              <br />
              To Support Each Other
            </h1>
            <p className="text-lg font-[500] text-muted-foreground mb-8 max-w-xl mx-auto">
              By leveraging the power of community and digital connectivity,
              Elpx will empower Africans to support each other and address
              pressing financial and political needs.
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
