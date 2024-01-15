import DateSquare from "./DateSquare";


export default function Calender() {

    return (
        <div className="h-screen flex justify-center items-center">
            <div className=" h-3/5 w-3/5 card brutShadow">
                <DateSquare />
            </div>
        </div>
    )
}