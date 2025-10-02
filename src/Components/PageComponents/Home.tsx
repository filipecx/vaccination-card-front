import VaccinationContainer from "../FeatureComponents/VaccinationContainer";

function Home () {
    
   const vaccinationInfo = {
    name: 'Polivalente',
    date: '02/10/2025',
    dateNext: '02/10/2026',
    vaccineBatchNumber: '342',
    vaccineManufacturer: 'Biovac',
    veterinarianName: 'Hugo',
    veterinarianCrmv: '1234'

   }


    return (
        <div className="flex flex-col w-full lg:w-1/4">
            <h1 className="text-3xl font-bold underline">Welcome</h1>
            <p>fotos pets</p>
            <VaccinationContainer 
            vaccineName={vaccinationInfo.name}
            vaccinationDate={vaccinationInfo.date}
            nextShot={vaccinationInfo.dateNext}
            vaccineBatchNumber={vaccinationInfo.vaccineBatchNumber}
            vaccineManufacturer={vaccinationInfo.vaccineManufacturer}
            veterinarianCrmv={vaccinationInfo.veterinarianCrmv}
            veterinarianName={vaccinationInfo.veterinarianName}
            />
        </div>
    )
}

export default Home;