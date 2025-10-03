import type { Dispatch, SetStateAction } from "react";
import { InputField } from "../UIComponents/InputField";


type ChildProps = {
        setOpen: Dispatch<SetStateAction<boolean>>
    }

export function AddPetForm( {setOpen}: ChildProps ) {
    const handleSubmit = () => {
        console.log("mandou mamae")
    }
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-45"
                onClick={() => setOpen(open => !open)}/>
                <div className="relative bg-white rounded-xl shadow-lg w-11/12 max-w-md mx-auto p-6 z-10">
                    <h2 className="text-xl font-semibold mb-4">Adicionar pet</h2>                       
                    <form className="space-y-4" action={handleSubmit}>
                        <InputField
                            label="Nome"
                            type="text"
                            placeholder="Digite o nome"
                        />
                        <InputField
                            label="Foto"
                            type="text"
                            placeholder="Insira a url da foto"
                        />

                        <div className="flex justify-end gap-2 pt-2">
                            <button
                                onClick={() => setOpen(open => !open)}
                                type="button"
                                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
                            >
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                            >
                                Salvar
                            </button>
                        </div>
                    </form>                  
                </div>
            </div>
          
    )
}