export default{
    name:'abouts',
    title:'Abouts',   // Title in Sanity Studio
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'string'
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            // Hotspot true is for cropping image
            options: {
              hotspot: true,
            },
        },
        
    ]
}