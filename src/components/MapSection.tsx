'use client'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useReport } from '@/contexts/ReportContext'
import L from 'leaflet'
import { useEffect } from 'react'
import HeadingNumber from './HeadingNumber'

interface Props { number: number }

const MapSection = ({ number }: Props) => {
  const { data, setData, editing } = useReport()

  useEffect(() => {
    if (!data) return
    // ensure default icon paths work
    delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    })
  }, [data])

  if (!data || !data.locations || data.locations.length === 0) return null

  const center: [number, number] = [data.locations[0].lat, data.locations[0].lng]

  return (
    <div id="locations" className="mb-20 scroll-mt-20">
      <h2
        className="text-3xl font-bold text-slate-800 mb-10 flex items-baseline"
        {...(editing
          ? {
              contentEditable: true,
              suppressContentEditableWarning: true,
              onBlur: (e: React.FocusEvent<HTMLElement>) => {
                const newData = { ...(data as typeof data) }
                newData.locationsTitle = e.currentTarget.textContent || ''
                setData(newData)
              },
            }
          : {})}
      >
        <HeadingNumber number={number} />
        {data.locationsTitle}
      </h2>
      <div className="w-full h-96 rounded-xl overflow-hidden shadow-xl">
        <MapContainer center={center} zoom={9} className="h-full w-full">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {data.locations.map((loc, i) => (
            <Marker key={i} position={[loc.lat, loc.lng]}>
              <Popup>{loc.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  )
}

export default MapSection
