import { Block } from "payload";
import { title } from "process";

export const Cover:Block = {
    slug:'cover',
    fields:[
        {
            name:'title',
            label:'Title',
            type:'text',
            required:true
        },
        {
            name:'subtitle',
            type:'text',
            label:'Subtitle',
            required:true
        },
    ]
}