export const product={
    name:"product",
    type:"document",
    title:"product",
    fields:[
        {
            name:"title",
            title:"title",
            type:"string"
        },
        {
            name:"id",
            title:"id",
            type:"number"
        },
        {
            name:"description",
            title:"product description",
            type:"string",
            rows:3
        },
        {
            name:"image",
            title:"product image",
            type:"image"
        },
        {
            name:"price",
            title:"product price",
            type:"number"
        },
        {
            name:"category",
            title:"product category",
            type:"reference",
            to:[
                {
                    type:"category"
                }
            ]
        }

    ]
}