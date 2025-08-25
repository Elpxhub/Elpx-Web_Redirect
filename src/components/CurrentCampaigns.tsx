import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CurrentCampaigns = () => {
  const campaigns = [
    {
      id: 1,
      title: "Help John Doe Achieve His Aims Dream",
      description:
        "Support John's journey to achieving his educational goals and creating a better future for his community.",
      raised: 35000,
      goal: 78000,
      image: "/lovable-uploads/bb3e1413-70c3-441e-a7e6-5977e3bbb1f9.png",
    },
    {
      id: 2,
      title: "Help John Doe Achieve His Aims Dream",
      description:
        "Support John's journey to achieving his educational goals and creating a better future for his community.",
      raised: 25000,
      goal: 78000,
      image: "/lovable-uploads/bb3e1413-70c3-441e-a7e6-5977e3bbb1f9.png",
    },
    {
      id: 3,
      title: "Help John Doe Achieve His Aims Dream",
      description:
        "Support John's journey to achieving his educational goals and creating a better future for his community.",
      raised: 45000,
      goal: 78000,
      image: "/lovable-uploads/bb3e1413-70c3-441e-a7e6-5977e3bbb1f9.png",
    },
    {
      id: 4,
      title: "Help John Doe Achieve His Aims Dream",
      description:
        "Support John's journey to achieving his educational goals and creating a better future for his community.",
      raised: 55000,
      goal: 78000,
      image: "/lovable-uploads/bb3e1413-70c3-441e-a7e6-5977e3bbb1f9.png",
    },
  ];

  const calculateProgress = (raised: number, goal: number) => {
    return Math.round((raised / goal) * 100);
  };

  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Current Campaigns</h2>
            <p className="text-muted-foreground">
              From emergency relief to long-term development projects and
              political compaigns, your help can make a crucial difference.
            </p>
          </div>
          <Button
            size="sm"
            className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-full w-10 h-10 p-0"
          >
            →
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {campaigns.map((campaign) => (
            <Card
              key={campaign.id}
              className="overflow-hidden bg-white border border-border hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2 text-sm">
                  {campaign.title}
                </h3>

                <p className="text-xs text-muted-foreground mb-4 line-clamp-2">
                  {campaign.description}
                </p>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-muted-foreground">
                        ₦{campaign.raised.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground">
                        {calculateProgress(campaign.raised, campaign.goal)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div
                        className="bg-primary h-1.5 rounded-full transition-all duration-300"
                        style={{
                          width: `${calculateProgress(
                            campaign.raised,
                            campaign.goal
                          )}%`,
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground text-xs"
                    >
                      Donate
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 text-xs"
                    >
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentCampaigns;
