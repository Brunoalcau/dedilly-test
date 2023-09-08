import { Icon } from "../Icons";

type DetailsProps = {
    title: string;
    thermalSensation: string;
    windSpeed: string;
    rainProbability: string;
    uv: string
}


export const Details = ({ title, thermalSensation, rainProbability, windSpeed, uv }: DetailsProps) => (
    <div className="p-4 rounded bg-gray-800">
        <span className="text-gray-400">{title}</span>
        <div>
            <div className="h-[56px] pt-4 pb-4 flex justify-between items-center border-b border-opacity-5 border-gray-100">
                <div className="flex items-center">
                    <div className="w-10 h-10 flex items-center">
                        <Icon size="small" name="temperature" />
                    </div>
                    <span className="text-gray-200 text-sm">Sensação térmica</span>
                </div>
                <span className="text-gray-100 font-bold">{thermalSensation}ºc</span>
            </div>

            <div className="h-[56px] pt-4 pb-4 flex justify-between items-center border-b border-opacity-5 border-gray-100">
                <div className="flex items-center">
                    <div className="w-10 h-10 flex items-center">
                        <Icon size="small" name="rain" />
                    </div>
                    <span className="text-gray-200 text-sm">Probabilidade de chuva</span>
                </div>
                <span className="text-gray-100 font-bold">{rainProbability}%</span>
            </div>
            <div className="h-[56px] pt-4 pb-4 flex justify-between items-center border-b border-opacity-5 border-gray-100">
                <div className="flex items-center">
                    <div className="w-10 h-10 flex items-center">
                        <Icon size="small" name="wind" />
                    </div>
                    <span className="text-gray-200 text-sm">Velocidade do vento</span>
                </div>
                <span className="text-gray-100 font-bold">{windSpeed}km/h</span>
            </div>
            <div className="h-[56px] pt-4 pb-4 flex justify-between items-center border-b border-opacity-5 border-gray-100">
                <div className="flex items-center">
                    <div className="w-10 h-10 flex items-center">
                        <Icon size="small" name="uv" />
                    </div>
                    <span className="text-gray-200 text-sm">Índice UV</span>
                </div>
                <span className="text-gray-100 font-bold">{uv}</span>
            </div>
        </div>
    </div>
);