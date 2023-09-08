import { useState } from "react"
import { Button } from "./components/ButtonIcon"
import { Card } from "./components/Card"
import { Crosshair1Icon } from '@radix-ui/react-icons'
import { Details } from "./components/Details"
import { format } from "date-fns"
import { TempratureCard } from "./components/TemperatureCard"
import { SearchModal } from "./components/SearchModal"
import { Meteoorology, Daily } from './@type/meteoorology'
import { useWeatherForecast } from './hooks/useMeteorology'


const getDate = (date: string, formatDate: string) => {
  if (!date) return null
  return format(new Date(date || ""), formatDate)
}

function App() {
  const [location, setLocation] = useState<Meteoorology>();
  const { data, isLoading } = useWeatherForecast(location?.lat, location?.lon);

  return (
    <>
      <div className="flex sm:flex-col justify-center items-center">
        <div className="sm:overflow-x-hidden items-center sm:w-full sm:p-4 bg-gray-600 rounded w-10/12 flex flex-rows sm:flex-col">
          <div className="h-full w-full ml-2 mt-2 rounded bg-gray-800 sm:m-0 flex-1">
            <div className="h-full w-full flex justify-center flex-col">
              <div className="h-full w-full flex flex-col justify-center">
                <div className="flex w-full pb-4 pl-5 mt-4">
                  <SearchModal
                    onSelect={item => setLocation(item)}
                    isOpen={true}
                    trigger={
                      <Button>
                        <Crosshair1Icon className="text-gray-100" />
                      </Button>
                    }
                  />

                </div>
                <div className="flex justify-center mb-3">
                  {!isLoading && <Card
                    title={location?.display_name}
                    climate={data?.data?.daily?.[0]?.probability}
                    max={data?.data?.daily?.[0]?.apparent_temperature_max}
                    min={data?.data?.daily?.[0]?.apparent_temperature_min}
                    degrees={data?.data?.current_weather?.temperature}
                    subText={getDate(data?.data?.current_weather?.time, "PPPP")}
                    hour={getDate(data?.data?.current_weather?.time, "hh:mm")}
                    prefix={data?.data?.daily?.[0]?.probability}
                    day={data?.data?.current_weather?.is_day ? 'day' : 'night'}
                  />}
                  {isLoading && (
                    <div role="status" className="w-11/12 sm:w-full h-[359px] bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700" />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="h-full w-full m-2 flex-1 rounded bg-gray-800">
            <div className="h-full">
              <Details
                title="Detalhes do Clima Hoje"
                thermalSensation={data?.data?.daily?.[0]?.apparent_temperature_max}
                rainProbability={data?.data?.daily?.[0]?.precipitation_probability_max}
                windSpeed={data?.data?.current_weather?.windspeed}
                uv={data?.data?.current_weather.weathercode}
              />
              <div className="flex justify-around m-2 sm:pl-4 sm:overflow-x-auto">
                {data?.data?.daily?.map?.((item: Daily) => (
                  <div className="m-2 flex justify-center items-center" key={item.time}>
                    <TempratureCard
                      max={item?.apparent_temperature_max}
                      min={item?.apparent_temperature_min}
                      day={getDate(item.time, "EEEE")}
                      isDay={data?.data?.current_weather?.is_day ? 'day' : 'night'}
                      climate={item.probability}
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
