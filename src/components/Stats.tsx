const Stats = () => {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
            </div>
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
            </div>
          </div>
          
          <div className="mb-8">
            <div className="flex items-baseline justify-center space-x-2">
              <span className="text-6xl font-bold text-foreground">263</span>
              <span className="text-2xl text-primary">+</span>
            </div>
            <p className="text-muted-foreground mt-2">
              people have joined our network
              <br />
              and helped each other
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;