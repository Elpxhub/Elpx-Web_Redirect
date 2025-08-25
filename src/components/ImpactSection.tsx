const ImpactSection = () => {
  const steps = [
    {
      number: "1",
      title: "Set Up Your Profile",
      description: "Create your profile and tell us about your goals and the impact you want to make in your community."
    },
    {
      number: "2", 
      title: "Create a Campaign",
      description: "Launch your campaign with clear goals, timeline, and transparent use of funds for maximum donor confidence."
    },
    {
      number: "3",
      title: "Receive Funding Commitment",
      description: "Get connected with donors who believe in your vision and are ready to support your journey to success."
    },
    {
      number: "4",
      title: "Share Campaign",
      description: "Amplify your reach by sharing your campaign across networks and building a community of supporters."
    }
  ];

  return (
    <section className="w-full py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-5xl font-bold mb-6">
              How We Make an
              <br />
              Impact <span className="text-primary">Together</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-[500px]">
              From emergency relief to long-term development projects and political compaigns, your help can make a crucial difference.
            </p>
          </div>

          {/* Right Content - Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-white">{step.number}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;