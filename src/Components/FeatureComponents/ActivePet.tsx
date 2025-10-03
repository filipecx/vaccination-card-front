export interface PetProps {
    name: string,
    image_url: string
}
export function ActivePet( {name, image_url}: PetProps ) {
    return (
        <div className="flex flex-col">
                <img className="w-24 h-24 rounded-full object-cover" src={image_url} alt="" />
                <p className="font-bold text-center mb-6">{name}</p>
            </div> 
    )
}