
import PortraitGeneratorForm from "@/components/portrait-generator-form";

export default function CreatePage() {
  return (
    <div className="container mx-auto px-4 py-4 md:py-8">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold font-headline tracking-tight lg:text-5xl">
          Turn Your Pet Into a Portrait of Distinction
        </h1>
        <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
          Welcome to Licks & Lids! Have you ever wondered what your furry friend would look like in a crown, a cowboy hat, or even a wizard's cap? Now you can find out! Just upload a photo, choose a hat style, and let our AI create a unique, photorealistic masterpiece for you to share and adore.
        </p>
      </div>
       <div className="max-w-2xl mx-auto">
          <PortraitGeneratorForm />
       </div>
    </div>
  );
}
