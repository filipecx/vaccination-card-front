export interface VaccineProps  {
    vaccineName: string,
    vaccineManufacturer: string,
    vaccineBatchNumber: string
}
export function VaccineInfo( {vaccineName, vaccineManufacturer, vaccineBatchNumber}: VaccineProps) {
    return (
        <div className="flex flex-col bg-indigo-400 w-5/8 pl-1 pr-3 pt-1 text-indigo-50 border-cyan-50 rounded-md">
            <p className="text-4xl font-bold mb-5 break-all">{vaccineName}</p>
            <div className="flex justify-between">
                <p><b>Fabricante:</b> </p>
                <p className="font-light">{vaccineManufacturer}</p>
                <p><b>Lote:</b> </p>
                <p>{vaccineBatchNumber}</p>
            </div>       
        </div>
    )
}