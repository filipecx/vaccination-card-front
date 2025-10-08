
type Pet = {
    id: number;
    name: string;
}

interface PetData {
    pets: Pet[];
    setSelectedPet: React.Dispatch<React.SetStateAction<any>>
}

export function SelectButton( { pets, setSelectedPet }: PetData) {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let opet = pets.filter(pet => pet.id == Number(e.target.value));
        setSelectedPet(opet[0])
    }
    return (
        <div className=" flex flex-col justify-end pb-4">
            <select name="select_pet" id="select_pet" onChange={handleChange}>
                {
                    pets.map((pet) => {return (
                        <option value={pet.id}>{pet.name}</option>
                    )})
                }
            </select>
        </div>
    )
}