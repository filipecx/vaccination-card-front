import { VaccinationDates } from "./VaccineDates";
import { VaccineInfo } from "./VaccineInfo";
import { VeterinarianInfo } from "./VeterinarianInfo";
import { DelVacButton } from "../UIComponents/DelVacButton";
import { useState } from "react";

interface VaccinationProps {
    vaccinationId: number
    vaccineName: string,
    vaccineBatchNumber: string,
    vaccineManufacturer: string,
    vaccinationDate: string,
    nextAdministration: string,
    veterinarianName: string,
    veterinarianCrmv: string
}

function VaccinationContainer({
    vaccinationId,
    vaccineName,
    vaccineBatchNumber,
    vaccineManufacturer,
    vaccinationDate,
    nextAdministration,
    veterinarianName,
    veterinarianCrmv }: VaccinationProps) {
    const [dOpen, setDopen] = useState(false);
    return (
        <div>
            <div className="rounded-lg bg-gray-200 shadow-sm shadow-cyan-200 "
                onClick={() => setDopen(dOpen => !dOpen)}>
                <div className="flex bg-indigo-50 rounded-md">
                    <VaccineInfo vaccineName={vaccineName} vaccineBatchNumber={vaccineBatchNumber} vaccineManufacturer={vaccineManufacturer} />
                    <VaccinationDates date={vaccinationDate} nextShot={nextAdministration} />
                </div>
                <VeterinarianInfo name={veterinarianName} crmv={veterinarianCrmv} />

            </div>
            <div className="flex justify-end">
                {dOpen &&
                    <DelVacButton id={vaccinationId}/>
                }
            </div>


        </div>

    )
}

export default VaccinationContainer;