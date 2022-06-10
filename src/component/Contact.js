import React from "react"
import {
  Section,
  Div,
  Div1,
  H2,
  Ul,
  Anchor,
  Div2,
  Span,
} from "./styles/Contact/Contact"
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet"

const socialPlatforms = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kent-michael-san",
    iconName: "linkedin",
    color: "#04AEC4",
  },
  {
    name: "Github",
    link: "https://github.com/kentmichael",
    iconName: "github",
    color: "#BB29BB",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/kentmichaels4n",
    iconName: "twitter",
    color: "#079BF5",
  },
  {
    name: "Email me",
    link: "mailto:kentmichaelsan.work@gmail.com",
    iconName: "at",
    color: "#079BF5",
  },
]

const Contact = () => {
  return (
    <Section>
      <Div>
        <Div1>
          <H2>Connect with me</H2>
          <Ul>
            {socialPlatforms.map((platform, idx) => {
              return (
                <li key={idx}>
                  <Span
                    iconColor={platform.color}
                    className={`fa-brands fa-${platform.iconName}`}
                  />
                  <Anchor href={platform.link} target="_blank">
                    {platform.name}
                  </Anchor>
                </li>
              )
            })}
          </Ul>
        </Div1>
        <Div2>
          <MapContainer
            id="map"
            center={[14.624298271497267, 121.11660694035244]}
            zoom={7}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[14.624298271497267, 121.11660694035244]}>
              <Popup>You clicked me &#128151;</Popup>
              <Tooltip offset={[-15, 0]} direction="top" permanent>
                Hello, I am here!
              </Tooltip>
            </Marker>
          </MapContainer>
        </Div2>
      </Div>
    </Section>
  )
}

export default Contact
