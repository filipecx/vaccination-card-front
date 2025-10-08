import React, { useState } from "react";
import { AddButton } from "../UIComponents/AddButton"
import { SelectButton } from "../UIComponents/SelectButton"
import { ActivePet } from "./ActivePet"
import { AddPetForm } from "./AddPetForm";
import { RemoveButton } from "./RemoveButton";

type Pet = {
    id: number;
    name: string;
    imageUrl: string;
    active?: boolean;
}
interface PetProps {
    selectedPet: Pet;
    petsList: Pet[];
    setSelectedPet: React.Dispatch<React.SetStateAction<PetProps>>;
    setPets: React.Dispatch<React.SetStateAction<any>>;
}
export function PetDisplay ( { petsList, setSelectedPet, selectedPet, setPets }: PetProps){
    const [open, setOpen] = useState(false);
    const petsData = petsList.map((pet) => ({id: pet.id, name: pet.name, imageUrl: pet.imageUrl}));
    const handleDelete = () => {
        setPets(petsData.filter(pet => pet.id !== selectedPet.id))
    }
    return (
        <div className="flex justify-around rounded-lg bg-white">
            <div className="flex flex-col justify-end pb-4"
            onClick={() => setOpen(open => !open)}
            >
            <AddButton />
            
            </div>
            <div onClick={handleDelete}>
                <RemoveButton petId={selectedPet.id} />
            </div>
            
            <ActivePet name={selectedPet.name} image_url={selectedPet.imageUrl} />
            {
                open && <AddPetForm setOpen={setOpen} setPets={setPets} pets={petsList} />
            }        
            <SelectButton setSelectedPet={setSelectedPet} pets={petsList}/>
        </div>
    )
}