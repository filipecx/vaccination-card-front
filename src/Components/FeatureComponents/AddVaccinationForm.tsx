import { useState } from "react";
import { InputField } from "../UIComponents/InputField";
import axios from "axios";
const url = import.meta.env.VITE_API_URL;

export function AddVaccinationForm({ petId, vaccinationInfo, setVaccinationInfo }: any) {
    const [addOpen, setAddOpen] = useState(false);
    const [vacName, setVacName] = useState('');
    const [manufacturer, setManufacturer] = useState('')
    const [batchNumber, setBatchnumber] = useState('')
    const [date, setDate] = useState('')
    const [nextDate, setNextDate] = useState('')
    const [vet, setVet] = useState('')
    const [crmv, setCrmv] = useState('')

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setAddOpen(addOpen => !addOpen);
        const vaccination = {
            date: date,
            nextAdministration: nextDate,
            vaccineName: vacName,
            vaccineManufacturer: manufacturer,
            vaccineBatchNumber: batchNumber,
            veterinarianName: vet,
            veterinarianCrmv: crmv,
            petId: petId

        }
        try {
            const response = await axios.post(url + '/vaccinations',
                vaccination
            )
            setVaccinationInfo(...vaccinationInfo, vaccination)
            console.log(response.data)
        } catch (error) {
            console.error('Could not register a vaccination')
        }
    }

    return (
        <div className="flex justify-end">
            <button type="button"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-semibold"
                onClick={() => setAddOpen(addOpen => !addOpen)}>Registrar vacinação</button>
            {addOpen &&
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-45"
                        onClick={() => console.log("clicked")} />
                    <div className="relative bg-white rounded-xl shadow-lg w-11/12 max-w-md mx-auto p-6 z-10">
                        <h2 className="text-xl font-semibold mb-4">Registrar vacinação</h2>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <InputField
                                label="Data de aplicação"
                                type="text"
                                placeholder="Digite a data da aplicação"
                                setStatus={setDate}
                            />
                            <InputField
                                label="Data do reforço"
                                type="text"
                                placeholder="Digite a data do reforço"
                                setStatus={setNextDate}
                            />
                            <p className="font-semibold">Vacina: </p>
                            <InputField
                                label="Nome"
                                type="text"
                                placeholder="Digite o nome da vacina"
                                setStatus={setVacName}
                            />
                            <InputField
                                label="Fabricante"
                                type="text"
                                placeholder="Digite o fabricante da vacina"
                                setStatus={setManufacturer}
                            />
                            <InputField
                                label="Número de lote"
                                type="text"
                                placeholder="Digite o número de lote da vacina"
                                setStatus={setBatchnumber}
                            />
                            <p className="font-semibold">Veterinário: </p>
                            <InputField
                                label="Nome"
                                type="text"
                                placeholder="Digite o nome do veterinário"
                                setStatus={setVet}
                            />
                            <InputField
                                label="Crmv"
                                type="text"
                                placeholder="Digite o crmv do veterinário"
                                setStatus={setCrmv}
                            />

                            <div className="flex justify-end gap-2 pt-2">
                                <button
                                    onClick={() => setAddOpen(addOpen => !addOpen)}
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
            }

        </div>

    )
}