import { rubikNormal } from '@/fonts/font';
import { cn } from '@/lib/utils';
import React from 'react'

interface PreviewProps {
    audioUrl : string
    videoUrl : string
    className? : string
}

const Preview = ({audioUrl , videoUrl , className , ...props} : PreviewProps) => {
  return (
    <>
    <div className={cn(rubikNormal.className, "")}>
          <p>Preview</p>
          <div className="h-[3px] w-[5.5rem] bg-custom-gradient rounded-lg"></div>
    </div>
    <div className={cn("p-4 flex aspect-video border items-center justify-center" , className)} {...props}>
        {(audioUrl && !videoUrl) && (
              <audio controls className="w-full">
                <source src={audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
        )}

        {videoUrl && (
        <div className="mt-4">
          <video src={videoUrl} controls className="w-full max-w-2xl rounded-lg shadow-lg" />
        </div>
      )}
    </div>
    </>
  )
}

export default Preview;