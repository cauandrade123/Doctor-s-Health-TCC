import './index.scss'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import {Icon} from 'leaflet'

import MarkShadow from 'leaflet/dist/images/marker-shadow.png'
import MarkImage from 'leaflet/dist/images/marker-icon.png'
import Markpng from 'leaflet/dist/images/marker-icon-2x.png'

export default function MapComponent(){
    return( 

        <MapContainer className='leaflet-container' center={[-23.5489, -46.6388]} zoom={16} scrollWheelZoom={false}>
            <TileLayer
                url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=gyOLQf1p4Kwh5caFPgwk"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            />
            
            <Marker position={[-23.5489, -46.6388]} 
                icon={new Icon({
                    iconRetinaUrl: Markpng,
                    iconUrl: MarkImage,
                    shadowUrl: MarkShadow
                })}>        
                    <Popup>
                        Clínica Doctor's Health
                    </Popup>
            </Marker>
        </MapContainer>
    
    )
}