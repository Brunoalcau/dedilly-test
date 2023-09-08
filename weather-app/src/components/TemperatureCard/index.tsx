import { Icon } from "../Icons"
type TempratureCardProps = {
    day?: string | null;
    climate?: string;
    max?: number;
    min?: number
    isDay?: string
}
export const TempratureCard = ({ day, climate, isDay, max, min }: TempratureCardProps) => (
    <div className="flex flex-col w-5/5">
        <div className="flex justify-center items-center text-sm text-gray-200">{day}</div>
        <div className="flex justify-center items-center">
            <Icon size="medium" name={`${climate}-${isDay}`} />
        </div>
        <div className="flex flex-col justify-center items-center">
            <div className="text-sm text-gray-200">{climate}</div>
            <div>
                <span className="text-sm text-gray-100">{max}ºc</span>
                <span className="text-sm text-gray-400 ml-2">{min}ºc</span>
            </div>
        </div>
    </div>
)