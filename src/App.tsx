import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import HowItWorks from './components/HowItWorks'
import Architecture from './components/Architecture'
import TokenEconomy from './components/TokenEconomy'
import Challenges from './components/Challenges'
import Roadmap from './components/Roadmap'
import Waitlist from './components/Waitlist'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#020817] text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Architecture />
        <TokenEconomy />
        <Challenges />
        <Roadmap />
        <Waitlist />
      </main>
      <Footer />
    </div>
  )
}
