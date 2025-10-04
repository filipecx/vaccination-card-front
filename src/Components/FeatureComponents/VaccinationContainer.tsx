import { VaccinationDates } from "./VaccineDates";
import { VaccineInfo } from "./VaccineInfo";
import { VeterinarianInfo } from "./VeterinarianInfo";

interface VaccinationProps {
    vaccineName: string,
    vaccineBatchNumber: string,
    vaccineManufacturer: string,
    vaccinationDate: string,
    nextAdministration: string,
    veterinarianName:string,
    veterinarianCrmv: string
}

function VaccinationContainer({ 
    vaccineName,
    vaccineBatchNumber,
    vaccineManufacturer,
    vaccinationDate,
    nextAdministration,
    veterinarianName,
    veterinarianCrmv}: VaccinationProps) {
    return(
        <div className="rounded-lg bg-gray-200 shadow-sm shadow-cyan-200 ">
            <div className="flex bg-indigo-50 rounded-md">
                <VaccineInfo vaccineName={vaccineName} vaccineBatchNumber={vaccineBatchNumber} vaccineManufacturer={vaccineManufacturer}/>
                <VaccinationDates date={vaccinationDate} nextShot={nextAdministration}/> 
            </div>
            <VeterinarianInfo name={veterinarianName} crmv={veterinarianCrmv}/>    
        </div>
    )
}

export default VaccinationContainer;