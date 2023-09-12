import About from '@/components/about'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Nav from '@/components/nav'
import Projects from '@/components/projects'
import Skills from '@/components/skills'


export default function Home() {
  
  return (
    <main>
      <Nav />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </main>
  )
}