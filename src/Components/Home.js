import React from 'react'
import Hero from './Hero';

function Home() {
  return (
    <div>
      <Hero
        img="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        head="Your Journey Your Story"
        btn="Travel plan"
        content="Choose Your Favorite destination"
        />
    </div>
  )
}

export default Home
