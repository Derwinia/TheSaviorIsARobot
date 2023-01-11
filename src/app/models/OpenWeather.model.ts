export interface AirPollution {
  coord : number[]
  list : details[]
}

export interface details{
  components : components
  dt: number
  main : mainDetail
}

export interface mainDetail{
  aqi: number
}

export interface components{
  co: number
  nh3 : number
  no : number
  no2 : number
  o3 : number
  pm2_5 : number
  pm10 : number
  so2 : number
}

export interface FormatForChart{
  label: string,
  backgroundColor: string,
  data: number[]
}

// {
//   "coord":[
//     50,
//     50
//   ],
//   "list":[
//     {
//       "dt":1605182400,
//       "main":{
//         "aqi":1
//       },
//       "components":{
//         "co":201.94053649902344,
//         "no":0.01877197064459324,
//         "no2":0.7711350917816162,
//         "o3":68.66455078125,
//         "so2":0.6407499313354492,
//         "pm2_5":0.5,
//         "pm10":0.540438711643219,
//         "nh3":0.12369127571582794
//       }
//     }
//   ]
// }
