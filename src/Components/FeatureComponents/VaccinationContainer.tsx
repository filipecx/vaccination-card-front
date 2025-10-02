import { VaccinationDates } from "./VaccineDates";
import { VaccineInfo } from "./VaccineInfo";
import { VeterinarianInfo } from "./VeterinarianInfo";

interface VaccinationProps {
    vaccineName: String,
    vaccineBatchNumber: String,
    vaccineManufacturer: String,
    vaccinationDate: String,
    nextShot: String,
    veterinarianName: String,
    veterinarianCrmv: String
}

function VaccinationContainer({ 
    vaccineName,
    vaccineBatchNumber,
    vaccineManufacturer,
    vaccinationDate,
    nextShot,
    veterinarianName,
    veterinarianCrmv}: VaccinationProps) {
    return(
        <div className="rounded-lg bg-gray-200 shadow-sm shadow-cyan-200 ">
            <div className="flex bg-indigo-50 rounded-md">
                <VaccineInfo vaccineName={vaccineName} vaccineBatchNumber={vaccineBatchNumber} vaccineManufacturer={vaccineManufacturer}/>
                <VaccinationDates date={vaccinationDate} nextShot={nextShot}/> 
            </div>
            <VeterinarianInfo name={veterinarianName} crmv={veterinarianCrmv}/>    
        </div>
    )
}

export default VaccinationContainer;