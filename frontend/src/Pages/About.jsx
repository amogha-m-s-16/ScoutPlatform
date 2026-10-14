import React, { useState } from 'react'
import { IoStar, IoLocationOutline, IoCheckmarkCircle, IoFlame, IoEyeOutline } from 'react-icons/io5';
import PlayerCards from '../Components/PlayerCards';

const players = [
  {
    id: 1,
    name: "Arjun Verma",
    age: 18,
    sport: "Football",
    position: "Central Midfielder",
    location: "Mumbai District League",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80",
    rating: 9.3,
    potential: 96,
    tags: ["Unsigned", "Top Playmaker"],
    coachVouches: 14,
    stats: [
      { label: "Vision", value: "94%" },
      { label: "Pace", value: "88%" },
      { label: "Passing", value: "92%" }
    ]
  },
  {
    id: 2,
    name: "Kwame Mensah",
    age: 17,
    sport: "Athletics",
    position: "100m / 200m Sprinter",
    location: "Accra Grassroots Track Club",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=600&q=80",
    rating: 9.1,
    potential: 95,
    tags: ["Regional Record", "High Stamina"],
    coachVouches: 18,
    stats: [
      { label: "100m", value: "10.42s" },
      { label: "Explosion", value: "96%" },
      { label: "Stamina", value: "90%" }
    ]
  },
  {
    id: 3,
    name: "Priya Nair",
    age: 19,
    sport: "Cricket",
    position: "All-Rounder",
    location: "Kerala State Amateur Cup",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
    rating: 9.4,
    potential: 97,
    tags: ["Match Winner", "Fast Seam"],
    coachVouches: 22,
    stats: [
      { label: "Batting Avg", value: "48.5" },
      { label: "Bowling Econ", value: "4.8" },
      { label: "Fielding", value: "93%" }
    ]
  },
  {
    id: 4,
    name: "Marcus Chen",
    age: 18,
    sport: "Basketball",
    position: "Point Guard",
    location: "East Coast Youth Circuit",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=600&q=80",
    rating: 9.0,
    potential: 94,
    tags: ["Sharpshooter", "High IQ"],
    coachVouches: 11,
    stats: [
      { label: "3PT %", value: "41.2%" },
      { label: "Assists", value: "8.4/g" },
      { label: "Court Vision", value: "91%" }
    ]
  }
];

const About = () => {
  const [selectedSport, setSelectedSport] = useState("All");

  const filteredPlayers = selectedSport === "All"
    ? players
    : players.filter(p => p.sport.toLowerCase() === selectedSport.toLowerCase());

  return (
    <div className='min-h-screen items-center justify-center'>

      <div className='flex flex-col items-center justify-center gap-4 md:gap-8 px-10 md:px-20'>
        <span className='flex text-[#404346] font-google-sans border-2 border-black rounded-full tracking-xs font-medium text-[12px] md:text-[16px] text-center px-2 mt-20 py-2 md:px-5 md:py-2'>
          <IoFlame className='mr-1 text-orange-500 text-[22px]'/> Discover the next generation of excellence
        </span>
      </div>

      <div>
        <h1 className='text-[#5a5b5c] font-instrument text-5xl md:text-7xl  text-center py-10 md:py-15'>
          Raw Talent,
          <span className='text-black font-instrument italic px-1'>Verified Potential</span>
        </h1>
      </div>

      <PlayerCards />
    </div>
  )
}

export default About