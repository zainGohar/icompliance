import React from 'react';
import "./sliders.css"
const  data =[
    {
      id: 1, 
      username: "Mustafa",
      testimonial:"loremsafj;kdjsasadsljs;djfsd;fsdf;sd",
      date:"05-06-2023"
  },
  {
    id: 2, 
    username: "Mustafa",
    testimonial:"loremsafj;kdjsasadsljs;djfsd;fsdf;sd",
    date:"05-06-2023"
  },
  {
    id: 3, 
    username: "Mustafa",
    testimonial:"loremsafj;kdjsasadsljs;djfsd;fsdf;sd",
    date:"05-06-2023"
  },
  {
    id: 4, 
    username: "Mustafa",
    testimonial:"loremsafj;kdjsasadsljs;djfsd;fsdf;sd",
    date:"05-06-2023"
  },
  {
    id: 5, 
    username: "Mustafa",
    testimonial:"loremsafj;kdjsasadsljs;djfsd;fsdf;sd",
    date:"05-06-2023"
  },
  {
    id: 6, 
    username: "Mustafa",
    testimonial:"loremsafj;kdjsasadsljs;djfsd;fsdf;sd",
    date:"05-06-2023"
  },
  {
    id: 7, 
    username: "Mustafa",
    testimonial:"loremsafj;kdjsasadsljs;djfsd;fsdf;sd",
    date:"05-06-2023"
  },
  {
    id: 8, 
    username: "Mustafa",
    testimonial:"loremsafj;kdjsasadsljs;djfsd;fsdf;sd",
    date:"05-06-2023"
  },
  ]
const cards = () => {
  return (
    <div>
   {data.map((user) => (
    <div key={user.id} className="card">
      <div className="username">{user.username}</div>
      <div className="testimonial">{user.testimonial}</div>
      <div className="date">{user.date}</div>
    </div>
  ))}
    </div>
  )
}

export default cards

