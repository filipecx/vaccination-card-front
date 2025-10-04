import { useEffect, useState } from "react";
import { PetDisplay } from "../FeatureComponents/PetDisplay";
import VaccinationContainer from "../FeatureComponents/VaccinationContainer";
import axios from "axios";

interface VaccinationInterface {
            id: number;
            vaccineName: string;
            date: string;
            nextAdministration: string;
            completed: boolean;          
            vaccineManufacturer: string;
            vaccineBatchNumber: string;
            veterinarianName: string;          
            veterinarianCrmv: string;
            petId: number;
}

interface PetInteface {
    id: number;
    name: string;
    imageUrl: string;
}

function Home () {
    const [selectedPet, setSelectedPet] = useState<number>(0)
    const [pets, setPets] = useState<PetInteface[]>([])
    const [vaccinationInfo, setVaccinationInfo] = useState<VaccinationInterface[]>([])
    /*
    const vaccinationInfo = {
        name: 'Polivalente',
        date: '02/10/2025',
        dateNext: '02/10/2026',
        vaccineBatchNumber: '342',
        vaccineManufacturer: 'Biovac',
        veterinarianName: 'Hugo',
        veterinarianCrmv: '1234'

    }
*/
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
        setPets(data);
        console.log(data)
    } catch (error) {
        console.error(error);
    }
   }
   const fetchVaccination = async (id: number) => {
    try {
        const response = await axios.get(`http://localhost:8080/vaccinations/${id}`)
        const data = response.data;
        setVaccinationInfo(Array.isArray(data) ? data : [data]);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
   }

   useEffect(() => {
    fetchPets();
    setSelectedPet(petArray[0].id);
   }, []);

   useEffect(() => {
    if (!selectedPet) return;
    setVaccinationInfo([]);
    fetchVaccination(selectedPet);
   }, [selectedPet]);


    return (
        <div className="flex flex-col w-full lg:w-1/4 m-6 lg:mx-40 gap-4">
            <h1 className="text-3xl font-bold">Carteirinha de vacinação</h1>
            <PetDisplay petsList={pets} setSelectedPet={setSelectedPet} selectedPet={selectedPet}/>        
            {vaccinationInfo.length > 0 ? 
            vaccinationInfo.map((vaccination) => {
                return (
                <VaccinationContainer 
                vaccineName={vaccination.vaccineName}
                vaccinationDate={vaccination.date}
                nextAdministration={vaccination.nextAdministration}
                vaccineBatchNumber={vaccination.vaccineBatchNumber}
                vaccineManufacturer={vaccination.vaccineManufacturer}
                veterinarianCrmv={vaccination.veterinarianCrmv}
                veterinarianName={vaccination.veterinarianName}
                key={vaccination.id}
            />
                )
            })          
            : <p>Não há vacinações registradas para esse pet!</p>
            }
        </div>
    )
}

export default Home;