import { rubikNormal } from '@/fonts/font';
import { cn } from '@/lib/utils';
import React from 'react'

interface PreviewProps {
    audioUrl : string
    videoUrl : string
    className? : string
    generationProgress : number
}

const Preview = ({audioUrl , videoUrl , generationProgress , className , ...props} : PreviewProps) => {
  return (
    <>
    <div className={cn(rubikNormal.className, "")}>
          <p>Preview</p>
          <div className="h-[3px] w-[5.5rem] bg-custom-gradient rounded-lg"></div>
    </div>
    <div className={cn("p-4 flex aspect-video border items-center justify-center" , className)} {...props}>
        {(audioUrl && !videoUrl) && (

              
              <div className="flex flex-col space-y-2 w-full h-full items-center justify-center">
                <div className="w-full bg-gray-900 rounded-full h-2.5 mx-10">
                  <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `${generationProgress}%` }}></div>
                </div>
                <div className="flex">
                  Your AI video is being <span className='bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text ml-2 text-transparent'>Generated.</span>
                </div>
              </div>
              // <audio controls className="w-full">
              //   <source src={audioUrl} type="audio/mpeg" />
              //   Your browser does not support the audio element.
              // </audio>
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