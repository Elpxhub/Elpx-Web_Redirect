import { Card } from "@/components/ui/card";

const DonationsMatter = () => {
  const features = [
    {
      title: "Direct Impact",
      description: "Your donation goes directly to those in need, ensuring immediate and effective support for our causes."
    },
    {
      title: "Proven Track Record", 
      description: "Our projects consistently reach their goals, making a real difference in the lives of those we serve."
    },
    {
      title: "Transparent Operations",
      description: "We prioritize transparency from how donations are used to the outcomes of our projects."
    }
  ];

  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Your Donations <span className="text-primary">Matter</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether it's through donations, campaigning or fundraising,
             there are many ways to support someone. Here’s why you should use Eplx:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-white border border-border hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-gray-300 rounded"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonationsMatter;