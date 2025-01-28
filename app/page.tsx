import React from 'react'
import Hero from './components/Hero'
import { client } from '@/sanity/lib/client'


const Homepage = async() => {

const query= `*[_type == "blog" ] | order(_updatedAt asc)
{Title,image,Paragraph,"slug":slug.current}`

const data:dtype[]=await client.fetch(query)
// console.log(data);

  return (
    <div className=' pl-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  '>
    {data.map((data:dtype)=>(
    <Hero data={data} key={data.slug}/>
    ))}
        
    </div>
  )}

export default Homepage