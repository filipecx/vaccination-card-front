interface PetName {
    nameList: string[];
}

export function SelectButton( { nameList }: PetName) {
    return (
        <div className=" flex flex-col justify-end pb-4">
            <select name="select_pet" id="select_pet">
                {
                    nameList.map((name) => {return (
                        <option value={name}>{name}</option>
                    )})
                }
            </select>
        </div>
    )
}