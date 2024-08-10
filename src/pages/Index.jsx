import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cat } from "lucide-react";

const Index = () => {
  const catBreeds = [
    { name: "Siamese", origin: "Thailand" },
    { name: "Maine Coon", origin: "United States" },
    { name: "Persian", origin: "Iran" },
    { name: "British Shorthair", origin: "United Kingdom" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 flex items-center">
          <Cat className="mr-2" /> All About Cats
        </h1>
        <img
          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
          alt="Cute cat"
          className="mx-auto object-cover w-full h-[400px] rounded-lg mb-8"
        />
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Fascinating Felines</CardTitle>
            <CardDescription>Learn about these amazing creatures</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Cats are one of the most popular pets in the world. They are known for their
              independence, agility, and affectionate nature. Domesticated cats have been
              living alongside humans for thousands of years.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Characteristics of Cats</h2>
            <ul className="list-disc list-inside mb-4">
              <li>Excellent night vision</li>
              <li>Flexible bodies and sharp reflexes</li>
              <li>Retractable claws for hunting and climbing</li>
              <li>Highly developed sense of smell and hearing</li>
              <li>Ability to purr, which is believed to have healing properties</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Popular Cat Breeds</CardTitle>
            <CardDescription>Discover some well-known cat breeds</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 gap-4">
              {catBreeds.map((breed) => (
                <li key={breed.name} className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold">{breed.name}</h3>
                  <p className="text-sm text-gray-600">Origin: {breed.origin}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
