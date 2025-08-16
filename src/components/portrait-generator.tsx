'use client';

import { useState, useRef, useEffect, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import Image from 'next/image';
import { Camera, Sparkles, Wand2, Share2, RefreshCw } from 'lucide-react';
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
  dogName: '',
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
  'Newsboy Cap', 'Turban', 'Ushanka', 'Safari Helmet', 'Mortar Board'
];

const HATS_TO_SHOW = 7;

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

function PublishButton({ dogName, hatStyle, portraitDataUri }: { dogName?: string; hatStyle?: string; portraitDataUri?: string; }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant="secondary" className="w-full" disabled={pending || !portraitDataUri}>
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
  const [generateState, generateAction] = useActionState(handleGeneratePortrait, initialGenerateState);
  const [publishState, publishAction] = useActionState(handlePublishPortrait, initialPublishState);

  const { toast } = useToast();
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoDataUri, setPhotoDataUri] = useState<string>('');
  const [selectedHat, setSelectedHat] = useState('');
  const [customHat, setCustomHat] = useState('');
  const [displayedHats, setDisplayedHats] = useState<string[]>([]);
  const [generatedPortraits, setGeneratedPortraits] = useState<
    { portraitDataUri: string; hatStyle: string }[]
  >([]);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const generateFormRef = useRef<HTMLFormElement>(null);

  const shuffleHats = () => {
    const shuffled = [...allHatOptions].sort(() => 0.5 - Math.random());
    setDisplayedHats(shuffled.slice(0, HATS_TO_SHOW));
  };
  
  useEffect(() => {
    shuffleHats();
  }, []);

  useEffect(() => {
    if (generateState.success && generateState.portraitDataUri) {
      setGeneratedPortraits((prev) => [
        ...prev,
        { portraitDataUri: generateState.portraitDataUri!, hatStyle: getHatStyle() },
      ]);
    }
    if (generateState.message && !generateState.success) {
       toast({
        title: 'Oops!',
        description: generateState.message,
        variant: 'destructive',
      });
    }
  }, [generateState, toast]);

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
      setPhotoPreview(URL.createObjectURL(file));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoDataUri(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const getHatStyle = () => {
    if (selectedHat === 'Custom') return customHat;
    if (selectedHat === 'None') return 'no hat';
    return selectedHat;
  };

  const handleHatSelect = (hat: string) => {
    setSelectedHat(hat);
  }

  const currentPortrait = generateState.success ? generateState.portraitDataUri : undefined;

  const { pending: isGenerating } = useFormStatus();

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <Card>
          <CardHeader>
            <CardTitle as="h2">Create Your Masterpiece</CardTitle>
            <CardDescription as="p">Follow these simple steps to get a portrait of your furry friend.</CardDescription>
          </CardHeader>
          <CardContent>
            <form ref={generateFormRef} action={generateAction} className="space-y-6">
              <input type="hidden" name="photoDataUri" value={photoDataUri} />
              <input type="hidden" name="hatStyle" value={getHatStyle()} />

              <div className="space-y-2">
                <Label htmlFor="dog-photo">1. Upload a Photo</Label>
                <div
                  className="relative flex justify-center items-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer hover:border-primary transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                >
                  {photoPreview ? (
                    <Image
                      src={photoPreview}
                      alt="Dog preview"
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
                  id="dog-photo"
                  name="dog-photo-file"
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dogName">2. Name Your Dog</Label>
                <Input
                  id="dogName"
                  name="dogName"
                  placeholder="e.g., Buddy"
                />
              </div>

             <div className="space-y-4">
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
                  <Button
                    type="button"
                    variant={selectedHat === 'Custom' ? 'default' : 'outline'}
                    onClick={() => handleHatSelect('Custom')}
                  >
                    Custom...
                  </Button>
                   <Button
                    type="button"
                    variant={selectedHat === 'None' ? 'default' : 'outline'}
                    onClick={() => handleHatSelect('None')}
                  >
                    None
                  </Button>
                </div>
                {selectedHat === 'Custom' && (
                  <Textarea
                    name="customHatStyle"
                    placeholder="Describe the hat in detail (e.g., 'a funky rainbow propeller hat with a blue brim')"
                    value={customHat}
                    onChange={(e) => setCustomHat(e.target.value)}
                    className="mt-2"
                  />
                )}
              </div>

              <GenerateButton />
            </form>
          </CardContent>
        </Card>

        <Card className="sticky top-20">
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
                  alt="Generated dog portrait"
                  width={512}
                  height={512}
                  className="object-cover w-full h-full transition-opacity duration-500 opacity-100"
                  priority
                />
              ) : (
                <div className="text-center text-muted-foreground p-8">
                  <Wand2 className="mx-auto h-16 w-16" />
                  <p className="mt-4">Your dog's portrait awaits!</p>
                </div>
              )}
            </div>
          </CardContent>
           {currentPortrait && (
            <CardFooter>
                 <form action={publishAction} className="w-full">
                    <input type="hidden" name="dogName" value={generateState.dogName || ''} />
                    <input type="hidden" name="hatStyle" value={generateState.hatStyle || ''} />
                    <input type="hidden" name="portraitDataUri" value={generateState.portraitDataUri || ''} />
                    <PublishButton 
                        dogName={generateState.dogName}
                        hatStyle={generateState.hatStyle}
                        portraitDataUri={generateState.portraitDataUri}
                    />
                </form>
            </CardFooter>
           )}
        </Card>
      </div>

      <SessionGallery portraits={generatedPortraits} />
    </>
  );
}
