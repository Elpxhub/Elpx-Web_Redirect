import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      text: "Looking for ways to have a good community to contribute to development and this platform gives us a good opportunity.",
      avatar: "JD"
    },
    {
      name: "Jane Doe", 
      text: "Amazing how a bigger community can contribute to development and give back to others. This platform makes it so easy.",
      avatar: "JD"
    },
    {
      name: "John Doe",
      text: "Providing a safe bigger community for contribution to development and growth. The transparency is incredible.",
      avatar: "JD"
    },
    {
      name: "Mary Jane",
      text: "Creating a bigger community of opportunities to contribute to development and make a real difference in people's lives.",
      avatar: "MJ"
    }
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            What Our Community
            <br />
            <span className="text-primary">Says About Us</span>
          </h2>
          <p className="text-muted-foreground">
            Real stories from our community members
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-white border border-border">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;