import { Icon } from "../Icons";
import { Dict } from "../../@type/Dict";
type Day = 'night' | 'day';


const maps: Dict = {
    'clear-day': 'bg-clear-day',
    'clear-night': 'bg-clear-night',
    'cloudy-day': 'bg-cloudy-day',
    'cloudy-night': 'bg-cloudy-night',
    'few-clouds-day': 'bg-few-clouds-day',
    'few-clouds-night': 'bg-few-clouds-night',
    'rain-day': 'bg-rain-day',
    'rain-night': 'bg-rain-night',
    'snow-day': 'bg-snow-day',
    'snow-night': 'bg-snow-night',
    'storm-day': 'bg-storm-day',
    'storm-night': 'bg-storm-night'
}

type CardProps = {
    title?: string
    subText?: string | null;
    date?: string;
    hour?: string | null;
    degrees?: number;
    day?: Day;
    prefix?: string;
    max?: number;
    min?: number;
    climate?: string;
};


export const Card = ({ title, climate, max, min, subText, hour, degrees, prefix, day }: CardProps) => {
    const iconName = `${prefix}-${day}`;
    const mode = `${maps[iconName]} w-11/12 sm:w-full h-[359px] bg-no-repeat bg-cover relative rounded`;
    return (
        <div className={mode}>
            <div className="flex justify-between items-center p-4">
                <div className="text-white w-[200px] break-words">
                    <p className="overflow-hidden truncate ">{title}</p>
                    <span className="text-xs text-gray-100">{subText}</span>
                </div>
                <div className="text-white">
                    {hour}
                </div>
            </div>
            <div className="absolute bottom-0 p-4 w-full">
                <div className="flex justify-between relative">
                    <div>
                        <p className="text-5xl font-bold text-white">
                            {degrees}ºc
                        </p>
                        <p className="text-white mt-2">
                            {max}ºc / {min}ºc | {climate}
                        </p>
                    </div>
                    <div className="absolute right-[-50px] bottom-[-50px]">
                        <Icon size='large' name={iconName} />
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
};