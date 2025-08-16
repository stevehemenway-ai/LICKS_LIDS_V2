'use client';

import { useState, useRef, useEffect } from 'react';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import Image from 'next/image';
import { Camera, Sparkles, Wand2, Share2, RefreshCw, ShoppingCart, RefreshCcw, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { handleGeneratePortrait, handlePublishPortrait } from '@/app/actions';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SessionGallery } from '@/components/session-gallery';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { Textarea } from './ui/textarea';


const initialGenerateState = {
  success: false,
  message: '',
  portraitDataUri: '',
  petName: '',
  hatStyle: '',
};

const initialPublishState = {
    success: false,
    message: '',
}

const allHatOptions = [
  'Top Hat', 'Cowboy Hat', 'Beanie', 'Fez', 'Beret', 'Baseball Cap', 
  'Graduation Cap', 'Sombrero', 'Wizard Hat', 'Chef Hat', 'Sailor Hat', 
  'Detective Hat', 'Propeller Beanie', 'Crown', 'Viking Helmet', 'Pirate Hat',
  'Hard Hat', 'Jester Hat', 'Bowler Hat', 'Fedora', 'Santa Hat', 'Elf Hat',
  'Newsboy Cap', 'Turban', 'Ushanka', 'Safari Helmet', 'Mortar Board',
  'Party Hat', 'Tricorne', 'Pork Pie Hat', 'Kepi', 'Deerstalker'
];

const HATS_TO_SHOW = 15;

function GenerateButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant="accent" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <Sparkles className="mr-2 h-4 w-4 animate-spin" />
          Creating Magic...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Generate Portrait
        </>
      )}
    </Button>
  );
}

function PublishButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant="secondary" className="w-full" disabled={pending}>
      {pending ? (
          <>
            <Sparkles className="mr-2 h-4 w-4 animate-spin" />
            Publishing...
          </>
      ) : (
          <>
            <Share2 className="mr-2 h-4 w-4" />
            Publish to Gallery
          </>
      )}
    </Button>
  );
}


export default function PortraitGenerator() {
  const [generateState, generateAction, isGenerating] = useActionState(handleGeneratePortrait, initialGenerateState);
  const [publishState, publishAction] = useActionState(handlePublishPortrait, initialPublishState);

  const { toast } = useToast();
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoDataUri, setPhotoDataUri] = useState<string>('');
  const [petName, setPetName] = useState('');
  const [selectedHat, setSelectedHat] = useState('');
  const [customHat, setCustomHat] = useState('');
  const [displayedHats, setDisplayedHats] = useState<string[]>([]);
  const [generatedPortraits, setGeneratedPortraits] = useState<
    { portraitDataUri: string; hatStyle: string }[]
  >([]);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const hatSelectionRef = useRef<HTMLDivElement>(null);
  const portraitSectionRef = useRef<HTMLDivElement>(null);
  
  const resetPortrait = () => {
    // This function now only resets the visual state of the portrait,
    // keeping the photo and pet name intact for a "remix" experience.
    if (generateState.success) {
      generateState.portraitDataUri = undefined;
      generateState.success = false;
    }
    
    setSelectedHat('');
    setCustomHat('');

    // Scroll the user back to the hat selection area.
    hatSelectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const shuffleHats = () => {
    const shuffled = [...allHatOptions].sort(() => 0.5 - Math.random());
    setDisplayedHats(shuffled.slice(0, HATS_TO_SHOW));
  };
  
  useEffect(() => {
    shuffleHats();
  }, []);

  useEffect(() => {
    if (isGenerating) {
        portraitSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [isGenerating]);

  useEffect(() => {
    if (generateState.success && generateState.portraitDataUri) {
      setGeneratedPortraits((prev) => [
        ...prev,
        { portraitDataUri: generateState.portraitDataUri!, hatStyle: getHatStyle() },
      ]);
      // Persist pet name after generation
      if (generateState.petName) {
          setPetName(generateState.petName);
      }
    }
    if (generateState.message && !isGenerating && !generateState.success) {
       toast({
        title: 'Oops!',
        description: generateState.message,
        variant: 'destructive',
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [generateState, isGenerating]);

  useEffect(() => {
      if (publishState.message) {
          toast({
              title: publishState.success ? 'Success!' : 'Oops!',
              description: publishState.message,
              variant: publishState.success ? 'default' : 'destructive',
          });
      }
  }, [publishState, toast])

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const newPhotoUrl = URL.createObjectURL(file);
      setPhotoPreview(newPhotoUrl);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoDataUri(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const getHatStyle = () => {
    return customHat || selectedHat;
  };

  const handleHatSelect = (hat: string) => {
    setSelectedHat(hat);
    setCustomHat('');
  }
  
  const handleCustomHatChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCustomHat(e.target.value);
      setSelectedHat('');
  }

  const handleDownload = () => {
    if (!currentPortrait) return;
    const link = document.createElement('a');
    link.href = currentPortrait;
    const timestamp = new Date().getTime();
    const petNameForFile = petName || 'pet';
    const hatStyleForFile = (getHatStyle() || 'portrait').replace(/\s+/g, '_');
    link.download = `${petNameForFile}_in_${hatStyleForFile}_${timestamp}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const currentPortrait = generateState.success ? generateState.portraitDataUri : undefined;

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <Card>
          <CardHeader>
            <CardTitle as="h2">Create Your Masterpiece</CardTitle>
            <CardDescription as="p">Follow these simple steps to get a portrait of your furry friend.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={generateAction} className="space-y-6">
              <input type="hidden" name="photoDataUri" value={photoDataUri} />
              <input type="hidden" name="hatStyle" value={getHatStyle()} />

              <div className="space-y-2">
                <Label htmlFor="pet-photo">1. Upload a Photo</Label>
                <div
                  className="relative flex justify-center items-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer hover:border-primary transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                >
                  {photoPreview ? (
                    <Image
                      src={photoPreview}
                      alt="Pet preview"
                      fill
                      className="object-contain rounded-lg p-1"
                    />
                  ) : (
                    <div className="text-center text-muted-foreground">
                      <Camera className="mx-auto h-12 w-12" />
                      <p>Click to upload a photo</p>
                    </div>
                  )}
                </div>
                <Input
                  id="pet-photo"
                  name="pet-photo-file"
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="petName">2. Name Your Pet</Label>
                <Input
                  id="petName"
                  name="petName"
                  placeholder="e.g., Buddy"
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                />
              </div>

             <div className="space-y-4" ref={hatSelectionRef}>
                <Label>3. Choose a Hat Style</Label>
                <div className="flex flex-wrap gap-2">
                  {displayedHats.map((hat) => (
                    <Button
                      key={hat}
                      type="button"
                      variant={selectedHat === hat ? 'default' : 'outline'}
                      onClick={() => handleHatSelect(hat)}
                    >
                      {hat}
                    </Button>
                  ))}
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={shuffleHats}
                  >
                    <RefreshCw className="mr-2 h-4 w-4" />
                    More Choices
                  </Button>
                </div>
                 <Textarea
                    name="customHatStyle"
                    placeholder="...or describe a custom hat in detail (e.g., 'a funky rainbow propeller hat')"
                    value={customHat}
                    onChange={handleCustomHatChange}
                    className="mt-2"
                  />
              </div>

              <GenerateButton />
            </form>
          </CardContent>
        </Card>

        <div ref={portraitSectionRef} className="lg:sticky top-20">
            <Card>
              <CardHeader>
                <CardTitle as="h2">Your Portrait</CardTitle>
                <CardDescription as="p">The generated portrait will appear here.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-square w-full rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                  {isGenerating ? (
                    <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
                      <Skeleton className="h-full w-full" />
                      <p className="text-muted-foreground animate-pulse">Dipping the brushes...</p>
                    </div>
                  ) : currentPortrait ? (
                    <Image
                      src={currentPortrait}
                      alt="Generated pet portrait"
                      width={512}
                      height={512}
                      className="object-cover w-full h-full transition-opacity duration-500 opacity-100"
                      priority
                    />
                  ) : (
                    <div className="text-center text-muted-foreground p-8">
                      <Wand2 className="mx-auto h-16 w-16" />
                      <p className="mt-4">Your pet's portrait awaits!</p>
                    </div>
                  )}
                </div>
              </CardContent>
               {currentPortrait && (
                <CardFooter className="flex-col gap-4">
                    <form action={publishAction} className="w-full">
                        <input type="hidden" name="petName" value={petName || ''} />
                        <input type="hidden" name="hatStyle" value={getHatStyle() || ''} />
                        <input type="hidden" name="portraitDataUri" value={currentPortrait || ''} />
                        <PublishButton />
                    </form>
                    <div className="w-full grid grid-cols-3 gap-2">
                        <Button asChild variant="outline" className="w-full">
                            <a
                             href={`https://www.amazon.com/s?k=${encodeURIComponent((getHatStyle() || '') + ' for pet')}&tag=logonitro-20`}
                             target="_blank"
                             rel="noopener noreferrer"
                            >
                                <ShoppingCart /> Shop this look
                            </a>
                        </Button>
                        <Button variant="outline" className="w-full" onClick={resetPortrait}>
                            <RefreshCcw /> Choose another hat
                        </Button>
                        <Button variant="outline" className="w-full" onClick={handleDownload}>
                            <Download /> Download
                        </Button>
                    </div>
                    <p className="text-xs text-muted-foreground text-center w-full pt-2">
                        As an Amazon Associate, we earn from qualifying purchases.
                    </p>
                </CardFooter>
               )}
            </Card>
        </div>
      </div>

      <SessionGallery portraits={generatedPortraits} />
    </>
  );
}
