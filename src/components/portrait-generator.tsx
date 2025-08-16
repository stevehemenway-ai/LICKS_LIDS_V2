
import { handleGeneratePortrait, handlePublishPortrait } from "@/app/actions";
import PortraitGeneratorForm from "./portrait-generator-form";


export default function PortraitGenerator() {
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      {/* 
        This is a server component that passes the server actions 
        down to the client component as props.
      */}
      <PortraitGeneratorForm 
        generateAction={handleGeneratePortrait}
        publishAction={handlePublishPortrait}
      />
    </div>
  );
}
