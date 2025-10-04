import { useEffect, useState } from "react";
import { PetDisplay } from "../FeatureComponents/PetDisplay";
import VaccinationContainer from "../FeatureComponents/VaccinationContainer";
import axios from "axios";

function Home () {
    const [selectedPet, setSelectedPet] = useState<number>(0)
    const vaccinationInfo = {
        name: 'Polivalente',
        date: '02/10/2025',
        dateNext: '02/10/2026',
        vaccineBatchNumber: '342',
        vaccineManufacturer: 'Biovac',
        veterinarianName: 'Hugo',
        veterinarianCrmv: '1234'

    }

   const petArray = [
    {
        active: true,
        id: 6,
        imageUrl: "urldaimage",
        name: "Maya6"
    },
    {
        active: true,
        id: 1,
        imageUrl: "urldaimage",
        name: "Maya"
    },
    {
        active: true,
        id: 7,
        imageUrl: "urldaimage",
        name: "Hugo"
    },
        
    ]
   const fetchPets = async ()  => {
    try {
        const response = await axios.get(`http://localhost:8080/pets/actives`)
        const data = response.data
        console.log(data)
    } catch (error) {
        console.error(error);
    }
   }

   useEffect(() => {
    setSelectedPet(petArray[0].id);
    fetchPets();
   }, [])


    return (
        <div className="flex flex-col w-full lg:w-1/4 m-6 lg:mx-40 gap-4">
            <h1 className="text-3xl font-bold underline">{selectedPet}</h1>
            <PetDisplay petsList={petArray} setSelectedPet={setSelectedPet}/>
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