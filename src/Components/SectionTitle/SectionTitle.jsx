

const SectionTitle = ({heading,subheading}) => {
  return (
   <>
   <div className="md:w-4/12 mx-auto mb-5">
    <p className="text-yellow-600 mb-2 text-center text-lg">---{subheading}---</p>
    <h3 className="text-3xl text-black text-center uppercase border-y-2 py-2">{heading}</h3>
   </div>
   
   
   </>
  )
}

export default SectionTitle