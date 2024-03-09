import React from 'react'
const data=[
    {
        type:'Diverse Topics, One Platform',
        data:`Dive into a well-organized repository of notes covering a wide array of subjects crucial for placement exams. Whether you're brushing up on Data Structures, mastering Java, or delving into the intricacies of C programming, our collection has you covered.`

    },{
        type:'Quality Content',
        data:`Our notes are crafted by experienced professionals and educators, ensuring accuracy, clarity, and relevance. Each topic is explained in a way that caters to both beginners and those looking for advanced insights.`

    }
    ,{
        type:'Free Access',
        data:` We believe in making quality education accessible to all. Enjoy unlimited and free access to our notes section, allowing you to enhance your skills without any financial barriers.`

    },
    {
        type:'Regular Updates',
        data:` Stay ahead of the curve with our regularly updated notes. As technology evolves, so do our resources. We keep our content fresh and relevant to align with the latest trends in placement exams and industry requirements.`
    }
]
export default function Features() {
  return (
<React.Fragment>
<h4 className='text-primary' style={{fontWeight:'bold'}}>Key Features:</h4>
{
    data.map((dtata,index)=>{
        return(
            <React.Fragment key={index}>
            <p><span style={{fontWeight:'bold'}} className='text-warning'>{dtata.type}</span>:{dtata.data}</p>
            </React.Fragment>
        )
    })
}
<p>😊 Start exploring now and pave the way for a successful career in the dynamic world of technology. Happy learning!</p>
</React.Fragment>
    )
}
