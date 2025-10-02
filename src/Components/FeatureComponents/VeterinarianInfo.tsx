export interface VeterinarianProps {
    name: String,
    crmv: String
}
export function VeterinarianInfo({ name, crmv }: VeterinarianProps) {
    return (
        <div className="flex justify-around text-blue-950">
            <div className="flex-col text-lef w-2/3 pl-2">
                <p className="font-bold">Veterinário</p>
                <p className="font-semibold">{name}</p>
            </div>
            <div className="flex-col text-left w-1/3">
                <p className="font-bold">CRMV </p>
                <p className="font-semibold">{crmv}</p>
            </div>
            
        </div>
    )
}