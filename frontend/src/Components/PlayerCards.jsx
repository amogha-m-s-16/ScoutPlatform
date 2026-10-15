import React, { useState } from 'react';
import { 
  IoStar, 
  IoLocationOutline, 
  IoCheckmarkCircle, 
  IoArrowForward, 
  IoBookmarkOutline, 
  IoBookmark,
  IoFlashOutline
} from 'react-icons/io5';

const initialPlayers = [
  {
    id: 1,
    name: "Arjun Verma",
    age: 18,
    sport: "Football",
    position: "Attacking Midfielder",
    club: "Mumbai District Youth League",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=700&q=80",
    rating: 9.3,
    potential: 96,
    status: "Open to Trials",
    tags: ["Playmaker", "Two-Footed", "Set-Piece Specialist"],
    vouchedBy: 14,
    metrics: [
      { name: "Vision", value: 94 },
      { name: "Pace", value: 89 },
      { name: "Passing", value: 93 },
    ]
  },
  {
    id: 2,
    name: "Priya Nair",
    age: 19,
    sport: "Cricket",
    position: "Fast Bowling All-Rounder",
    club: "Kerala Amateur Cup Circuit",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=700&q=80",
    rating: 9.5,
    potential: 98,
    status: "State Camp Selected",
    tags: ["128 km/h Seam", "Power Hitter", "Top Fielder"],
    vouchedBy: 21,
    metrics: [
      { name: "Pace", value: 95 },
      { name: "Economy", value: 91 },
      { name: "Batting SR", value: 88 },
    ]
  },
  {
    id: 3,
    name: "David Mensah",
    age: 17,
    sport: "Athletics",
    position: "100m & 200m Sprinter",
    club: "Accra Grassroots Track Club",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=700&q=80",
    rating: 9.1,
    potential: 95,
    status: "Regional Record Holder",
    tags: ["10.38s PR", "Explosive Start", "High Cadence"],
    vouchedBy: 19,
    metrics: [
      { name: "Burst", value: 97 },
      { name: "Top Speed", value: 94 },
      { name: "Stamina", value: 88 },
    ]
  },
  {
    id: 4,
    name: "Marcus Chen",
    age: 18,
    sport: "Basketball",
    position: "Lead Guard",
    club: "East Coast Youth Metro",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=700&q=80",
    rating: 9.0,
    potential: 94,
    status: "Unsigned Prospect",
    tags: ["41% 3PT", "High Court IQ", "Clutch Scorer"],
    vouchedBy: 12,
    metrics: [
      { name: "Shooting", value: 92 },
      { name: "Playmaking", value: 90 },
      { name: "Defense", value: 86 },
    ]
  }
];

const PlayerCards = () => {
  const [selectedSport, setSelectedSport] = useState("All");
  const [shortlisted, setShortlisted] = useState({});

  const toggleShortlist = (id) => {
    setShortlisted(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const sports = ["All", "Football", "Cricket", "Basketball", "Athletics"];

  const filteredPlayers = selectedSport === "All"
    ? initialPlayers
    : initialPlayers.filter(p => p.sport.toLowerCase() === selectedSport.toLowerCase());

  return (
    <div className='w-full max-w-7xl mx-auto px-6 md:px-12 py-8'>
      
      <div className='flex items-center justify-center gap-2 flex-wrap mb-12'>
        {sports.map(sport => {
          const isActive = selectedSport === sport;
          return (
            <button
              key={sport}
              onClick={() => setSelectedSport(sport)}
              className={`px-5 py-2 rounded-full text-xs font-mono font-medium transition-all duration-300 cursor-pointer ${
                isActive 
                  ? 'bg-black text-white shadow-md -translate-y-0.5' 
                  : 'bg-white text-[#5a5b5c] border border-[#e5e5e5] hover:border-black hover:text-black'
              }`}
            >
              {sport}
            </button>
          );
        })}
      </div>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {filteredPlayers.map((player) => {
          const isSaved = shortlisted[player.id];

          return (
            <div
              key={player.id}
              className='group bg-white rounded-2xl border border-[#ebe7e4] overflow-hidden hover:border-black hover:shadow-xl transition-all duration-300 flex flex-col justify-between'
            >
              <div>
                
                <div className='relative h-64 w-full overflow-hidden bg-neutral-900'>
                  <img
                    src={player.image}
                    alt={player.name}
                    className='w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out'
                    loading="lazy"
                  />            
                  
                  <div className='absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30' />

                  <div className='absolute top-3 inset-x-3 flex items-center justify-between'>
                    
                    <span className='bg-white/90 backdrop-blur-md text-[#171717] px-2.5 py-1 rounded-full text-[11px] font-mono font-bold flex items-center gap-1 shadow-xs'>
                      <IoFlashOutline className='text-amber-600' />
                      POT {player.potential}
                    </span>
           
                    <div className='bg-black/75 backdrop-blur-md border border-white/25 text-white px-2.5 py-1 rounded-full flex items-center gap-1 text-[11px] font-mono font-bold shadow-xs'>
                      <IoStar className='text-amber-400 text-xs' />
                      <span>{player.rating}</span>
                      <span className='text-[9px] text-neutral-400'>/10</span>
                    </div>
                  </div>
          
                  <button
                    onClick={() => toggleShortlist(player.id)}
                    aria-label="Shortlist player"
                    className='absolute top-12 right-3 w-8 h-8 rounded-full bg-black/40 hover:bg-black/75 backdrop-blur-md text-white flex items-center justify-center transition cursor-pointer'
                  >
                    {isSaved ? <IoBookmark className='text-amber-400 text-sm' /> : <IoBookmarkOutline className='text-sm' />}
                  </button>
              
                  <div className='absolute bottom-3 inset-x-3 text-white'>
                    <span className='inline-block text-[10px] font-mono uppercase tracking-wider text-neutral-300 mb-0.5'>
                      {player.sport} • {player.position}
                    </span>
                    <h3 className='text-xl font-poppins font-bold tracking-tight leading-tight'>
                      {player.name}
                    </h3>
                  </div>
                </div>
                
                <div className='p-4'>
                  
                  <div className='flex items-center gap-1 text-xs text-[#5a5b5c] font-google-sans mb-3'>
                    <IoLocationOutline className='text-sm shrink-0 text-neutral-400' />
                    <span className='truncate'>{player.club} • Age {player.age}</span>
                  </div>

                  
                  <div className='mb-3'>
                    <span className='inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#f4f3ef] text-[#2c2b29] border border-[#e4e2dd]'>
                      <span className='w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse'></span>
                      {player.status}
                    </span>
                  </div>

                 
                  <div className='flex flex-wrap gap-1 mb-4'>
                    {player.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className='text-[10px] font-mono text-[#5a5b5c] bg-[#fafaf8] border border-[#eae8e4] px-2 py-0.5 rounded'
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  
                  <div className='bg-[#fafaf8] border border-[#eae8e4] rounded-xl p-3 space-y-2 mb-3'>
                    {player.metrics.map((metric, idx) => (
                      <div key={idx}>
                        <div className='flex justify-between items-center text-[11px] font-mono mb-1'>
                          <span className='text-[#6a6b6c]'>{metric.name}</span>
                          <span className='font-bold text-[#171717]'>{metric.value}%</span>
                        </div>
                        <div className='h-1.5 w-full bg-[#ebe7e4] rounded-full overflow-hidden'>
                          <div 
                            className='h-full bg-neutral-900 rounded-full transition-all duration-500'
                            style={{ width: `${metric.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  
                  <div className='flex items-center gap-1.5 text-xs text-emerald-800 font-google-sans font-medium'>
                    <IoCheckmarkCircle className='text-emerald-600 text-sm shrink-0' />
                    <span>{player.vouchedBy} Grassroots Coaches Vouched</span>
                  </div>

                </div>
              </div>

              
              <div className='p-4 pt-0'>
                <button className='w-full py-2.5 px-3 rounded-xl border border-neutral-300 bg-white text-xs font-mono font-medium text-[#171717] hover:bg-black hover:text-white hover:border-black transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-2xs'>
                  <span>View Scouting Dossier</span>
                  <IoArrowForward className='text-xs group-hover:translate-x-0.5 transition-transform' />
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};

export default PlayerCards;
