import { Cover } from "@/blocks/cover/schema";
import { Image } from "@/blocks/Image/schema";
import { RichText } from "@/blocks/richText/schema";
import { CollectionConfig } from "payload";

export const Pages:CollectionConfig={
    slug:'pages',
    fields:[
        {
            name:"name",
            label:'Name',
            type:'text'
        },
        {
            name:'slug',
            type:'text',
            label:'Slug',
            admin:{
                position:'sidebar'
            },
            required:true
        },
        {
            name:'layout',
            label:'Layout',
            type:'blocks',
            blocks:[
                Cover,
                Image,
                RichText
            ]
        }
    ]
}