
'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Camera, Sparkles, Wand2, ShoppingCart, RefreshCcw, Download, ArrowDown, Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { handleGeneratePortrait } from '@/app/actions';
import type { GenerateActionResult } from '@/app/actions';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import { Textarea } from './ui/textarea';
import { cn } from '@/lib/utils';

const allHatOptions = [
  'Top Hat', 'Cowboy Hat', 'Beanie', 'Fez', 'Beret', 'Baseball Cap', 
  'Graduation Cap', 'Sombrero', 'Wizard Hat', 'Chef Hat', 'Sailor Hat', 
  'Detective Hat', 'Propeller Beanie', 'Crown', 'Viking Helmet', 'Pirate Hat',
  'Hard Hat', 'Jester Hat', 'Bowler Hat', 'Fedora', 'Santa Hat', 'Elf Hat',
  'Newsboy Cap', 'Turban', 'Ushanka', 'Safari Helmet', 'Mortar Board',
  'Party Hat', 'Tricorne', 'Pork Pie Hat', 'Kepi', 'Deerstalker'
];

const HATS_TO_SHOW = 15;

type PortraitState = 'idle' | 'generating' | 'generated';

export default function PortraitGeneratorForm() {
  const { toast } = useToast();
  
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
  const [isShareable, setIsShareable] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const portraitSectionRef = useRef<HTMLDivElement>(null);
  
  const getHatStyle = () => customHat.trim() || selectedHat;
  
  const resetForRemix = () => {
    setPortraitState('idle');
    setGeneratedPortraitUri('');
    setSelectedHat('');
    setCustomHat('');
  };
  
  const shuffleHats = () => {
    const shuffled = [...allHatOptions].sort(() => 0.5 - Math.random());
    setDisplayedHats(shuffled.slice(0, HATS_TO_SHOW));
  };
  
  useEffect(() => {
    shuffleHats();
    // Check for Web Share API support on component mount
    if (navigator.share) {
      setIsShareable(true);
    }
  }, []);

  useEffect(() => {
    if (portraitState === 'generated') {
      portraitSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [portraitState]);

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
  
  const handleGenerationSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const hatStyle = getHatStyle();

    // Client-side validation
    if (!photoDataUri) {
      toast({ title: 'Oops!', description: 'Please upload a photo of your pet.', variant: 'destructive' });
      return;
    }
    if (!petName) {
      toast({ title: 'Oops!', description: "Please enter your pet's name.", variant: 'destructive' });
      return;
    }
    if (!hatStyle) {
      toast({ title: 'Oops!', description: 'Please select or describe a hat style.', variant: 'destructive' });
      return;
    }
    
    setPortraitState('generating');
    setGeneratedPortraitUri('');

    const result: GenerateActionResult = await handleGeneratePortrait({ petName, photoDataUri, hatStyle });
    
    if (result.success && result.portraitDataUri) {
      setGeneratedPortraitUri(result.portraitDataUri);
      setPortraitState('generated');
    } else {
      toast({ 
        title: 'Generation Failed', 
        description: result.message || 'Please check your input for any offensive language or try a different prompt.', 
        variant: 'destructive',
        duration: 9000,
      });
      setPortraitState('idle');
    }
  }

  const handleHatSelect = (hat: string) => {
    setSelectedHat(hat);
    setCustomHat('');
  }
  
  const handleCustomHatChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCustomHat(e.target.value);
      setSelectedHat('');
  }

  const handleDownload = () => {
    if (!generatedPortraitUri) return;

    const link = document.createElement('a');
    link.href = generatedPortraitUri;
    const timestamp = new Date().getTime();
    const petNameForFile = petName || 'pet';
    const hatStyleForFile = (getHatStyle() || 'portrait').replace(/\s+/g, '_');
    link.download = `${petNameForFile}_in_${hatStyleForFile}_${timestamp}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async () => {
    if (!navigator.share || !generatedPortraitUri) {
      toast({
        title: 'Sharing not available',
        description: 'Your browser does not support the Web Share API or you are not on a secure connection (https).',
        variant: 'destructive',
      });
      return;
    }

    try {
      const response = await fetch(generatedPortraitUri);
      const blob = await response.blob();
      const file = new File([blob], 'licks-and-lids-portrait.png', { type: 'image/png' });

      const shareData = {
        title: 'My Licks & Lids Creation!',
        text: 'Created by Licks & Lids: www.licksandlids.com',
        files: [file],
      };

      if (navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        // Fallback for when files can't be shared
        await navigator.share({
            title: shareData.title,
            text: shareData.text,
            url: 'https://www.licksandlids.com',
        });
      }
    } catch (error) {
      console.error('Sharing failed', error);
      toast({
        title: 'Sharing failed',
        description: 'There was an error trying to share your portrait.',
        variant: 'destructive',
      });
    }
  };

  const isGenerating = portraitState === 'generating';

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle as="h2">Create Your Masterpiece</CardTitle>
          <CardDescription as="p">Follow these simple steps to get a portrait of your furry friend.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleGenerationSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="pet-photo" className="text-base">1. Upload a Photo</Label>
              <div
                className="relative flex justify-center items-center w-full h-48 md:h-64 border-2 border-dashed rounded-lg cursor-pointer hover:border-primary transition-colors"
                onClick={() => fileInputRef.current?.click()}
                data-ai-hint="pet photo"
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
                disabled={isGenerating}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="petName" className="text-base">2. Name Your Pet</Label>
              <Input
                id="petName"
                name="petName"
                placeholder="e.g., Buddy"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                disabled={isGenerating}
              />
            </div>

           <div className="space-y-4">
              <Label className="text-base">3. Choose a Hat Style</Label>
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
                  className="mt-2"
                  disabled={isGenerating}
                />
            </div>

            <Button type="submit" variant="accent" size="lg" className="w-full" disabled={isGenerating}>
              {isGenerating ? (
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
              <CardTitle as="h2">Your Portrait</CardTitle>
              <CardDescription as="p">Behold! Your pet's masterpiece.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-square w-full rounded-lg bg-muted flex items-center justify-center overflow-hidden" data-ai-hint="generated portrait">
                {isGenerating ? (
                  <div className="w-full h-full flex flex-col items-center justify-center space-y-4 bg-muted p-4">
                    <Skeleton className="h-full w-full" />
                    <p className="text-muted-foreground animate-pulse">Dipping the brushes...</p>
                  </div>
                ) : (generatedPortraitUri &&
                  <Image
                    src={generatedPortraitUri}
                    alt="Generated pet portrait"
                    width={512}
                    height={512}
                    className="object-cover w-full h-full transition-opacity duration-500 opacity-100"
                    priority
                  />
                )}
              </div>
            </CardContent>
             {portraitState === 'generated' && (
              <CardFooter className="flex-col gap-4">
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                      <Button asChild variant="outline" className="w-full">
                          <a
                           href={`https://www.amazon.com/s?k=${encodeURIComponent((getHatStyle() || '') + ' for pet')}&tag=logonitro-20`}
                           target="_blank"
                           rel="noopener noreferrer"
                          >
                              <ShoppingCart /> 
                              Shop Look
                          </a>
                      </Button>
                      <Button variant="outline" className="w-full" onClick={resetForRemix}>
                          <RefreshCcw /> 
                          Create New
                      </Button>
                      <Button variant="outline" className="w-full" onClick={handleDownload}>
                          <Download /> 
                           Download
                      </Button>
                      {isShareable && (
                        <Button variant="outline" className="w-full" onClick={handleShare}>
                            <Share2 /> 
                            Share
                        </Button>
                      )}
                  </div>
                  <p className="text-xs text-muted-foreground text-center w-full pt-2">
                      As an Amazon Associate, we earn from qualifying purchases.
                  </p>
              </CardFooter>
             )}
          </Card>
        </div>
      )}
    </div>
  );
}
