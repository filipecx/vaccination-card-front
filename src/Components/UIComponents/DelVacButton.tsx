import axios from "axios"
const url = import.meta.env.VITE_API_URL;

export function DelVacButton ({id}: any) {
    const handleDelete = async () => {
        try {
            const response = await axios.delete(url + `/vaccinations/${id}`)
        } catch (error) {
            console.error("Could not delete vaccination")
        }
        
    }
    return (
        <button type="button"
        className="px-2 py-1 mt-2 rounded-lg bg-red-400 text-white hover:bg-red-700 font-semibold"
        onClick={handleDelete}>
            Remover
        </button>
    )
}