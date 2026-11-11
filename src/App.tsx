import './App.css'
import { Grid } from '@mui/material'
import HeaderUI from './components/HeaderUI'
import AlertUI from './components/AlertUI'
import SelectorUI from './components/SelectorUI'
import IndicatorUI from './components/IndicatorUI'
import useFetchData from './hooks/useFetchData'
import { useState } from 'react'


function App() {
  const [city, SetCity] = useState('')
  const dataFetcherOutput = useFetchData();

  return (
    <Grid  container spacing = {5} sx = {{justifycontent: 'center', alignItems: 'center'}}>
      {/*Encabezado*/}
      <Grid size = {{xs: 12, md: 12}}>
        <HeaderUI />
      </Grid>

      {/*Alertas*/}
      <Grid size = {{xs: 12, md: 12}}
        container sx={{ justifyContent: 'flex-end', alignItems: 'center' }}>
          <AlertUI description='No se preveen lluvias'></AlertUI>
          <AlertUI description="Índice UV alto" severity="warning" variant="filled" />

      </Grid>

      {/*Selector*/}
      <Grid size = {{xs: 12, md: 3}}>
        <SelectorUI cityInput={city} onCityChange={SetCity}/>
      </Grid>

      {/*Indicadores*/}
      <Grid size = {{xs: 12, md: 9}}>
        <Grid size={{ xs: 12, md: 3 }}>
              {dataFetcherOutput &&
        (<IndicatorUI
            title='Temperatura (2m)'
            description={`${dataFetcherOutput.current.temperature_2m} ${dataFetcherOutput.current_units.temperature_2m}`} />)
              } 
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
            <IndicatorUI title='Temperatura aparente' description='XX °C' />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
            <IndicatorUI title='Velocidad del viento' description='XX km/h' />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
            <IndicatorUI title='Humedad relativa' description='XX %' />
        </Grid>
      </Grid>

      {/*Gráfico*/}
      <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>Elemento: Gráfico</Grid>

      {/*Tabla*/}
      <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>Elemento: Tabla</Grid>

      {/*Información adicional*/}
      <Grid size = {{xs: 12, md: 12}}>Elemento: Información adicional</Grid>
    </Grid>
  
  )
}

export default App
