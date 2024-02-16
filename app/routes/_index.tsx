import type { MetaFunction } from "@remix-run/node";
import About from '~/components/About';
import Projects from '~/components/Projects';
import Contact from '~/components/Contact';
import Footer from '~/components/Footer';

export const meta: MetaFunction = () => {
  return [
    { title: "James Hilt's Web Developer Portfolio" },
    { name: "James Hilts", content: "Welcome to my web development portfolio!" },
    ];
};

export default function Index() {
  return (
   <main>
   <About />
   <Projects />
   <Contact />
   <Footer />
   </main>
   );
}
