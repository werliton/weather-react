/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { IconType } from 'react-icons/lib'
import { WiDayStormShowers, WiDaySnowWind, WiHail, WiRain, WiDayFog, WiDaySunny, WiNightClear, WiCloudy,
    WiDayCloudy, WiNightAltCloudy, WiRaindrop} from 'react-icons/wi'

const ConditionSlug = {
    storm: WiDayStormShowers,    
    snow: WiDaySnowWind,
    hail: WiHail,
    rain: WiRain,
    fog: WiDayFog,
    clear_day: WiDaySunny,
    clear_night: WiNightClear,
    cloud: WiCloudy,
    cloudly_day: WiDayCloudy,
    cloudly_night: WiNightAltCloudy,
    none_day: WiDaySunny,
    none_night: WiRaindrop,
}
const Condition: React.FC<{condition: string, size?: number}> = ({ condition, size=35}) => {
    
    const CondIcon = (ConditionSlug as Record<string, IconType | undefined>)[condition] as IconType

    if(CondIcon) return <CondIcon size={size} />
    return <ConditionSlug.none_day />
}

export default Condition