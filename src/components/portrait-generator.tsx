
'use client';

import PortraitGeneratorForm from "./portrait-generator-form";
import type { GenerateFormState, PublishFormState } from "@/app/page";

type PortraitGeneratorProps = {
    generateAction: (prevState: GenerateFormState, formData: FormData) => Promise<GenerateFormState>;
    publishAction: (prevState: PublishFormState, formData: FormData) => Promise<PublishFormState>;
}

export default function PortraitGenerator({ generateAction, publishAction }: PortraitGeneratorProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <PortraitGeneratorForm 
        generateAction={generateAction}
        publishAction={publishAction}
      />
    </div>
  );
}
