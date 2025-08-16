'use client';

import { useState, useRef, useEffect, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import Image from 'next/image';
import { Camera, Sparkles, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { handleGeneratePortrait } from '@/app/actions';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SessionGallery } from '@/components/session-gallery';
import { Skeleton } from '@/components/ui/skeleton';

const initialState = {
  success: false,
  message: '',
  portraitDataUri: '',
};

const hatOptions = [
  'Top Hat',
  'Cowboy Hat',
  'Beanie',
  'Fez',
  'Beret',
  'Baseball Cap',
  'Graduation Cap',
  'Sombrero',
  'Wizard Hat',
];

function SubmitButton() {
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

export default function PortraitGenerator() {
  const [state, formAction] = useActionState(handleGeneratePortrait, initialState);
  const { toast } = useToast();
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoDataUri, setPhotoDataUri] = useState<string>('');
  const [selectedHat, setSelectedHat] = useState('');
  const [customHat, setCustomHat] = useState('');
  const [generatedPortraits, setGeneratedPortraits] = useState<
    { portraitDataUri: string; hatStyle: string }[]
  >([]);
  const { pending } = useFormStatus();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success && state.portraitDataUri) {
      setGeneratedPortraits((prev) => [
        ...prev,
        { portraitDataUri: state.portraitDataUri!, hatStyle: getHatStyle() },
      ]);
      formRef.current?.reset();
      setPhotoPreview(null);
      setPhotoDataUri('');
      setSelectedHat('');
      setCustomHat('');
    }
    if (state.message && !pending) {
       toast({
        title: state.success ? 'Success!' : 'Oops!',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
    }
  }, [state, toast, pending]);

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
    return selectedHat === 'Custom' ? customHat : selectedHat;
  };

  const currentPortrait = state.success ? state.portraitDataUri : generatedPortraits[generatedPortraits.length - 1]?.portraitDataUri;

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-headline">Create Your Masterpiece</CardTitle>
            <CardDescription>Follow these simple steps to get a portrait of your furry friend.</CardDescription>
          </CardHeader>
          <CardContent>
            <form ref={formRef} action={formAction} className="space-y-6">
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
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dogName">2. Name Your Dog</Label>
                <Input
                  id="dogName"
                  name="dogName"
                  placeholder="e.g., Buddy"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>3. Choose a Hat Style</Label>
                <Select value={selectedHat} onValueChange={setSelectedHat} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a hat" />
                  </SelectTrigger>
                  <SelectContent>
                    {hatOptions.map((hat) => (
                      <SelectItem key={hat} value={hat}>
                        {hat}
                      </SelectItem>
                    ))}
                    <SelectItem value="Custom">Custom...</SelectItem>
                  </SelectContent>
                </Select>
                {selectedHat === 'Custom' && (
                  <Input
                    name="customHatStyle"
                    placeholder="Describe the hat (e.g., 'a funky rainbow propeller hat')"
                    value={customHat}
                    onChange={(e) => setCustomHat(e.target.value)}
                    required
                  />
                )}
              </div>

              <SubmitButton />
            </form>
          </CardContent>
        </Card>

        <Card className="sticky top-20">
          <CardHeader>
            <CardTitle className="text-2xl font-headline">Your Portrait</CardTitle>
            <CardDescription>The generated portrait will appear here.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-square w-full rounded-lg bg-muted flex items-center justify-center overflow-hidden">
              {pending ? (
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
        </Card>
      </div>

      <SessionGallery portraits={generatedPortraits} />
    </>
  );
}
