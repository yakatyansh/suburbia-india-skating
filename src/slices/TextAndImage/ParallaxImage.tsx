"use client";

import { ImageField } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import clsx from 'clsx';
import React, { useEffect } from 'react'

type Props = {
    foregroundImage: ImageField;
    backgroundImage: ImageField;
    classname?: string;
}

export  function ParallaxImage({
    foregroundImage,
    backgroundImage,
    classname
}: Props) {
    const backgroundRef = React.useRef<HTMLDivElement>(null)
    const foregroundRef = React.useRef<HTMLDivElement>(null)

    const targetPosition = React.useRef({x:0,y:0})
    useEffect(()=>{
        window.addEventListener("mousemove",onMouseMove)
        function onMouseMove(event:MouseEvent){
            const {innerWidth,innerHeight} = window;
            
        }
    },[])

  return (
    <div className={clsx("grid grid-cols-1 place-items-center",classname)}>
    <div ref = {backgroundRef} className="col-start-1 row-start-1 transition-transform">
    <PrismicNextImage field={backgroundImage} alt='' className="w-11/12" />
    </div>
    <div ref = {foregroundRef}className="col-start-1 row-start-1 transition-transform h-full w-full place-items-center ">
    <PrismicNextImage field={foregroundImage} alt='' imgixParams={{height : 600}} className="h-full max-h-[500px] w-auto"/>
    </div>
    </div>
   
  )
}