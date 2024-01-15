
import { createClient } from "contentful"
import { useEffect, useState } from "react"


const Project = () => {
  const[loading,setLoading]=useState(false);
  const [projects,setProjects]=useState([])
  const client = createClient({
    space: '9rsaq6vnkupv',
    environment: 'master', // defaults to 'master' if not set
    accessToken:"FNcQao3wr05KQQ77a1g_wANZB0aID77iyDLKDLCw3xI",
  })
  const getData=async()=>{
    try{

      const response=await client.getEntries({content_type:'projects'})
      const projects=response.items.map((item)=>{
const {title,url,image}=item.fields;
const id=item.sys.id;
const img=image?.fields?.file?.url;
return {title,id,img,url}
      })
      setProjects(projects)
      setLoading(false)

    }
    catch(error){
setLoading(false)
    }

    
  }
  useEffect(()=>{
    getData()
  },[])

console.log(projects)

  return (
    <section
      className="p-8  bg-black mt-20 w-full "
      // style={{
      //   backgroundImage:
      //     'url(https://cutewallpaper.org/27/black-wallpaper-vintage/420331107.jpg)',
      // }}
    id='project'>
      <div>
        <h2
          className="text-6xl text-white font-bold mb-8 text-center"
          style={{
            textShadow:
              ' 0 1px 0 #000, 0 2px 0 #000, 0 3px 0 #000, 0 4px 0 #000,0 5px 0 #000, 0 6px 0 #000,0 7px 0 #000, 0 8px 0 #100f0f,0 9px 0 #000, 0 10px 0 #000,0 11px 0 #000, 0 12px 0 #222020, 0 20px 30px rgba(148, 148, 148, 0.5)',
          }}
        >
          Projects
        </h2>
      </div>

      <div className="grid items-center justify-center gap-6 lg:grid-cols-2 xl:grid-cols-3 ">
        {projects.map((project) => {
          const { id, img, url, title } = project
          return (
            <div
              className="card w-96 bg-zinc-900 drop-shadow-2xl transition-transform hover:translate-y-4 "
              key={id}
            >
              <figure>
                <img className="grayscale" src={img} alt="Shoes" />
              </figure>
              <div className="card-body text-white">
                <h2 className="card-title">
                  {title}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Html css Javascript</p>
                <div className="card-actions justify-end">
                  <a href={url} className="badge badge-outline">
                    see live
                  </a>
                  <div className="badge badge-outline">Source code</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Project

