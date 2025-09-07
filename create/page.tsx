import type { Metadata } from 'next';
import Image from 'next/image';
import PortraitGeneratorForm from "@/components/portrait-generator-form";

export const metadata: Metadata = {
  title: 'Free AI Pet Hat Portrait Generator | Licks and Lids',
  description: "Generate funny, beautiful AI portraits of your dog or cat in custom hats for free. Create the perfect dog hat or cat hat picture instantly and share with friends.",
};

export default function CreatePage() {
  return (
    <div className="container mx-auto px-2 py-8">
      <div className="text-center mb-8 md:mb-12">
        <div className="mb-8">
            <Image
                src="/licks-and-lids-hero.png"
                alt="A fun banner showing pets wearing hats"
                width={800}
                height={300}
                className="rounded-lg shadow-md mx-auto w-full h-auto"
                data-ai-hint="pets hats"
                priority
            />
        </div>
      </div>
       <div className="max-w-2xl mx-auto">
          <PortraitGeneratorForm />
       </div>
    </div>
  );
}
