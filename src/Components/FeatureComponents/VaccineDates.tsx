export interface VaccinationDatesProps {
    date: String,
    nextShot: String
}
export function VaccinationDates( { date, nextShot }: VaccinationDatesProps ) {
    return (
        <div className="flex flex-col bg-indigo-50 rounded-tr-md w-3/8 pl-2">
            <p className="font-bold">Aplicação: </p>
            <p>{date}</p>
            <p className="font-bold">Reforço: </p>
            <p>{nextShot}</p>          
        </div>
    )
}