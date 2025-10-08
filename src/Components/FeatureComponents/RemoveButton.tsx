import axios from "axios"
const url = import.meta.env.VITE_API_URL;

export function RemoveButton( { petId }: any ) {
    const removePet =  async (petId: number) => {
        try {
            const response = await axios.delete(url + `/pets/${petId}`)
        } catch (error) {
            console.error("Could not delete pet")
        }
        
    }
    return (     
        <button
        onClick={() => removePet(petId)}
        className="flex items-center justify-center
         lg:hover:bg-blue-100 lg:hover:text-white 
         shadow-md rounded-full w-12 h-12">{petId}</button>
            
    )
}