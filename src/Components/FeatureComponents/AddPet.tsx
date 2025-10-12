import { useState } from "react";
import { AddPetForm } from "./AddPetForm";

export function AddPet({setPets, petsList}: any) {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <button
            onClick={() => setOpen(open => !open)}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-semibold"
            type="button">Adicionar pet</button>
            {
                            open && <AddPetForm setOpen={setOpen} setPets={setPets} pets={petsList} />
            }
        </div>
    )
}