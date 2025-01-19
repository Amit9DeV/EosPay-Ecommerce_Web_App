import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { HeartIcon, PlusIcon } from "lucide-react";


export default function ProductCard({ Element, index }) {
  return (
    <div className="w-[300px] group relative space-y-4 border rounded-lg  p-1 shadow-lg shadow-sky-600">
      <figure className="group-hover:opacity-80">
        <img
          className="w-full rounded-[2rem] aspect-square object-cover p-5 "
          src={Element.imagePath}
          alt={Element.name}
        />
      </figure>
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg">
            <Link href={Element.p_Name}>
     
              {Element.p_Name}
            </Link>
          </h3>
          <p className="text-sm text-muted-foreground">{Element.description}</p>
        </div>
        <p className="text-lg font-semibold">{Element.price}</p>
      </div>
      <div className="flex gap-4">
        <Button variant="outline" size="icon" className="flex-shrink-0">
          <HeartIcon className="size-4" />
        </Button>
        <Button variant="outline" className=" active:bg-green-600 w-full hover:text-slate-400">
          <PlusIcon className="size-4 me-1" /> Add to Card
        </Button>
      </div>
    </div>
  )
}
