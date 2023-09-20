import About from '@/components/about'
import Footer from '@/components/footer'
import Header from '@/components/header'
import ProjectsMobile from '@/components/mobile/projectsMobile'
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
      <ProjectsMobile />
      <Footer />
    </main>
  )
}