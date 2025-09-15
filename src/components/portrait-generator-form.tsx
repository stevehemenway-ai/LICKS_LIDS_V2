'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Camera, Sparkles, Wand2, RefreshCcw, ArrowDown, Download, Share2, ShoppingBag } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { generatePortrait, GeneratePortraitInput } from '@/ai/generate-portrait-flow';
import { getAnalytics, logEvent, isSupported } from "firebase/analytics";
import { app } from '@/lib/firebase';


import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import { Textarea } from './ui/textarea';

const allHatOptions = [
  'Top Hat', 'Cowboy Hat', 'Beanie', 'Fez', 'Beret', 'Baseball Cap', 
  'Graduation Cap', 'Sombrero', 'Wizard Hat', 'Chef Hat', 'Sailor Hat', 
  'Detective Hat', 'Propeller Beanie', 'Crown', 'Viking Helmet', 'Pirate Hat',
  'Hard Hat', 'Jester Hat', 'Bowler Hat', 'Fedora', 'Santa Hat', 'Elf Hat',
  'Newsboy Cap', 'Turban', 'Ushanka', 'Safari Helmet', 'Mortar Board',
  'Party Hat', 'Tricorne', 'Pork Pie Hat', 'Kepi', 'Deerstalker',
  'Cloche Hat', 'Boater Hat', 'Panama Hat', 'Flat Cap', 'Bucket Hat', 'Visor',
  'Tam o\' Shanter', 'Ghutra', 'Kufi', 'Campaign Hat', 'Pith Helmet', 
  'Bearskin Hat', 'Chullo'
];

const HATS_TO_SHOW = 31;

type PortraitState = 'idle' | 'generating' | 'generated';

// The Gemini 1.5 model supports a specific set of image formats.
// We'll restrict file selection to these to avoid unsupported MIME type errors.
// https://ai.google.dev/gemini-api/docs/prompting_with_media#image_formats
const SUPPORTED_IMAGE_FORMATS = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];


export default function PortraitGeneratorForm() {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  // Form input state
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoDataUri, setPhotoDataUri] = useState<string>('');
  const [petName, setPetName] = useState('');
  const [selectedHat, setSelectedHat] = useState('');
  const [customHat, setCustomHat] = useState('');
  
  // Generation and UI flow state
  const [portraitState, setPortraitState] = useState<PortraitState>('idle');
  const [generatedPortraitUri, setGeneratedPortraitUri] = useState<string>('');
  const [displayedHats, setDisplayedHats] = useState<string[]>([]);
  
  const formTopRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const portraitSectionRef = useRef<HTMLDivElement>(null);

  const [analytics, setAnalytics] = useState<any>(null);

  useEffect(() => {
    // Only initialize Analytics if the projectId is available in the config
    if (app.options.projectId) {
      isSupported().then(supported => {
        if (supported) {
          setAnalytics(getAnalytics(app));
        }
      });
    }
  }, []);
  
  const getHatStyle = () => customHat.trim() || selectedHat;

  const handleCreateNew = () => {
    if (analytics) {
      logEvent(analytics, 'create_new_portrait');
    }
    // Persist the photo and pet name, but clear the rest for a new generation.
    setSelectedHat('');
    setCustomHat('');
    setPortraitState('idle');
    setGeneratedPortraitUri('');
    // Scroll back to the top of the form
    formTopRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownload = async () => {
    if (!generatedPortraitUri) return;
    if (analytics) {
        logEvent(analytics, 'download_portrait');
    }
    try {
        const response = await fetch(generatedPortraitUri);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = url;
        
        const hatStyle = getHatStyle();
        const fileName = `${petName.toLowerCase().replace(/\s/g, '-')}-in-a-${hatStyle.toLowerCase().replace(/\s/g, '-')}.png`;
        link.download = fileName;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error("Download failed:", error);
        toast({ title: 'Download Failed', description: 'Could not prepare image for download. Please try again.', variant: 'destructive'});
    }
  };

  const handleShare = async () => {
      if (analytics) {
        logEvent(analytics, 'share_app');
      }
      try {
        const shareUrl = window.location.origin;
        const hatStyle = getHatStyle() || 'a custom';
        const shareText = `Check out the AI-generated portrait of my pet in ${hatStyle} hat from Licks & Lids! You can make one too. #PetHats #DogHats #CatHats #AIPets`;

        const shareData = {
            title: `Create a Pet Portrait with Licks & Lids!`,
            text: shareText,
            url: shareUrl,
        };
        
        if (navigator.share && navigator.canShare(shareData)) {
            await navigator.share(shareData);
        } else {
            await navigator.clipboard.writeText(shareUrl);
            toast({ title: 'Link Copied!', description: 'A link to the app has been copied to your clipboard.'});
        }
      } catch (error) {
          if ((error as Error).name !== 'AbortError') {
            console.error(error);
            toast({ title: 'Share Failed', description: 'Could not prepare the link for sharing. Please try again.', variant: 'destructive' });
          }
      }
  };

  const handleShopTheLook = () => {
    const hatStyle = getHatStyle();
    if (!hatStyle) return;
    if (analytics) {
      logEvent(analytics, 'shop_the_look', { hat_style: hatStyle });
    }

    const amazonTag = process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG;
    if (!amazonTag) {
        console.error("Amazon Associate Tag is not configured.");
        const searchTerm = encodeURIComponent(`${hatStyle} for pet`);
        window.open(`https://www.amazon.com/s?k=${searchTerm}`, '_blank', 'noopener,noreferrer');
        toast({ title: 'Shopping Error', description: 'The associate link could not be fully generated, but you have been redirected to Amazon.', variant: 'destructive' });
        return;
    }
    
    const searchTerm = encodeURIComponent(`${hatStyle} for pet`);
    const url = `https://www.amazon.com/s?k=${searchTerm}&tag=${amazonTag}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  const shuffleHats = () => {
    if (analytics) {
      logEvent(analytics, 'shuffle_hats');
    }
    const shuffled = [...allHatOptions].sort(() => 0.5 - Math.random());
    setDisplayedHats(shuffled.slice(0, HATS_TO_SHOW));
  };
  
  useEffect(() => {
    shuffleHats();
  }, []);

  useEffect(() => {
    if (portraitState === 'generated') {
      portraitSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [portraitState]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!SUPPORTED_IMAGE_FORMATS.includes(file.type)) {
        toast({
            title: 'Invalid File Type',
            description: `Please select a valid image format: PNG, JPEG, or WEBP.`,
            variant: 'destructive',
        });
        return;
      }

      setPhotoPreview(URL.createObjectURL(file));

      const reader = new FileReader();
      reader.onloadend = () => {
        const dataUri = reader.result as string;
        setPhotoDataUri(dataUri);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleGenerationSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const hatStyle = getHatStyle();

    if (!photoDataUri) {
      toast({ title: 'Oops!', description: 'Please upload a photo of your pet.', variant: 'destructive' });
      return;
    }
    if (!petName) {
      toast({ title: 'Oops!', description: "Please enter your pet\'s name.", variant: 'destructive' });
      return;
    }
    if (!hatStyle) {
      toast({ title: 'Oops!', description: 'Please select or describe a hat style.', variant: 'destructive' });
      return;
    }

    if (analytics) {
      logEvent(analytics, 'generate_portrait', { 
        hat_style: hatStyle, 
        hat_type: customHat.trim() ? 'custom' : 'standard'
      });
    }
    
    setPortraitState('generating');
    setGeneratedPortraitUri('');

    try {
        const input: GeneratePortraitInput = {
          photoDataUri,
          petName,
          hatStyle,
        };
        const { portraitDataUri } = await generatePortrait(input);
        setGeneratedPortraitUri(portraitDataUri);
        setPortraitState('generated');
    } catch (error: any) {
        // Log the full error to the browser console for deeper inspection
        console.error("Full generation error:", error);
        
        const errorMessage = error.message || 'An unknown error occurred. Please try again.';

        // The server-side flow now passes detailed errors.
        // We can display them directly to the user for better feedback.
        let description = errorMessage;

        // Refine the message for better readability in the toast.
        // The server prefixes with "Generation failed: ", which is redundant with the toast's title.
        if (description.startsWith('Generation failed: ')) {
            description = description.substring('Generation failed: '.length);
        }

        // Still provide a simpler, more actionable message for the common safety violation case.
        if (errorMessage.includes('SAFETY_VIOLATION')) {
            description = 'A person was detected in the photo. Please use a photo containing only your pet and try again.';
        }

        toast({ 
            title: 'Generation Failed', 
            description: description, 
            variant: 'destructive',
            duration: 9000, // Give more time to read potentially detailed errors
        });
        setPortraitState('idle');
    }
  }

  const handleHatSelect = (hat: string) => {
    if (analytics) {
        logEvent(analytics, 'select_hat', { hat_style: hat });
    }
    setSelectedHat(hat);
    setCustomHat('');
  }
  
  const handleCustomHatChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCustomHat(e.target.value);
      setSelectedHat('');
  }

  const isGenerating = portraitState === 'generating';

  return (
    <div className="space-y-8">
      <Card ref={formTopRef}>
        <CardHeader>
          <CardTitle as="h2" className="text-2xl sm:text-3xl">Create Your AI Pet Hat Portrait</CardTitle>
          <CardDescription as="p" className="text-base sm:text-lg">Follow these simple steps to get a portrait of your furry friend.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleGenerationSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="pet-photo" className="text-base sm:text-lg">1. Upload Your Pet Photo for Hat Portraits</Label>
              <div
                role="button"
                aria-label="Upload a photo of your pet"
                tabIndex={0}
                className="relative flex justify-center items-center w-full h-48 md:h-64 border-2 border-dashed rounded-lg cursor-pointer hover:border-primary transition-colors"
                onClick={() => fileInputRef.current?.click()}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') fileInputRef.current?.click() }}
              >
                {photoPreview ? (
                  <Image
                    src={photoPreview}
                    alt="Pet preview"
                    fill
                    className={cn("object-contain rounded-lg p-1", isGenerating && "opacity-50")}
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
                accept={SUPPORTED_IMAGE_FORMATS.join(',')}
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
                disabled={isGenerating}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="petName" className="text-base sm:text-lg">2. Name Your Pet</Label>
              <Input
                id="petName"
                name="petName"
                placeholder="e.g., Buddy"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                disabled={isGenerating}
                className="text-lg"
              />
            </div>

           <div className="space-y-4">
              <Label className="text-base sm:text-lg">3. Pick a Lid – Funny, Holiday, or Custom</Label>
              <div className="flex flex-wrap gap-2">
                {displayedHats.map((hat) => (
                  <Button
                    key={hat}
                    type="button"
                    variant={selectedHat === hat ? 'default' : 'outline'}
                    onClick={() => handleHatSelect(hat)}
                    disabled={isGenerating}
                  >
                    {hat}
                  </Button>
                ))}
                <Button
                  type="button"
                  variant="secondary"
                  onClick={shuffleHats}
                  disabled={isGenerating}
                >
                  <RefreshCcw className="mr-2 h-4 w-4" />
                  Shuffle Hats
                </Button>
              </div>
               <Textarea
                  name="customHatStyle"
                  placeholder="...or describe a custom hat in detail (e.g., 'a funky rainbow propeller hat')"
                  value={customHat}
                  onChange={handleCustomHatChange}
                  className="mt-2 text-base"
                  disabled={isGenerating}
                />
            </div>

            <Button type="submit" variant="accent" size="lg" className="w-full text-lg md:text-xl" disabled={isGenerating}>
              {isGenerating ? (
                <>
                  <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                  Creating Magic...
                </>
              ) : (
                <>
                  <Wand2 className="mr-2 h-4 w-4" />
                  Generate AI Pet Portrait
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
      
      {(portraitState === 'generating' || portraitState === 'generated') && (
        <div ref={portraitSectionRef}>
          <div className="flex justify-center items-center text-muted-foreground my-4">
            <ArrowDown className="h-6 w-6 animate-bounce" />
          </div>

          <Card className={cn(portraitState === 'generated' && 'animate-in fade-in zoom-in-95 duration-500')}>
            <CardHeader>
              <CardTitle as="h2" className="text-2xl sm:text-3xl">Your Portrait</CardTitle>
              <CardDescription as="p" className="text-base sm:text-lg">Behold! Your pet's new look.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-square w-full rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                {isGenerating ? (
                  <div className="w-full h-full flex flex-col items-center justify-center space-y-4 bg-muted p-4">
                    <Skeleton className="h-full w-full" />
                    <p className="text-muted-foreground animate-pulse">Dipping the brushes...</p>
                  </div>
                ) : (generatedPortraitUri &&
                  <Image
                    src={generatedPortraitUri}
                    alt={`Generated portrait of ${petName} wearing a ${getHatStyle()}`}
                    width={1024}
                    height={1024}
                    className="object-cover w-full h-full transition-opacity duration-500 opacity-100"
                    priority
                  />
                )}
              </div>
            </CardContent>
             {portraitState === 'generated' && (
                <CardFooter className="flex-col sm:flex-row gap-2 pt-4">
                    <Button onClick={handleDownload} className="flex-1">
                        <Download /> Download
                    </Button>
                    <Button onClick={handleShare} variant="secondary" className="flex-1">
                        <Share2 /> Share App
                    </Button>
                    <Button onClick={handleShopTheLook} variant="secondary" className="flex-1">
                        <ShoppingBag /> Shop the Look
                    </Button>
                    <Button onClick={handleCreateNew} variant="outline" className="flex-1">
                      <RefreshCcw /> Try Another Lid
                    </Button>
                </CardFooter>
             )}
          </Card>
        </div>
      )}
    </div>
  );
}
