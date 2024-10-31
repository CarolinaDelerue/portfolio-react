// src/pages/Home.jsx
import CardHome from '../components/CardHome';
const Home = () => {
    return (
        <div className="container p-4 mx-auto">
            <h1 className="text-3xl font-bold underline">Welcome to My Home Page</h1>
            <p>This is the home page of my application.</p>

            <div className="container py-8 mx-auto">
      <h2 className="mb-6 text-3xl font-bold text-gray-800">Example Cards</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <CardHome
          title="My skills"
          // description="A brief description of Project One."
          imageUrl="/assets/placeholder.svg"
          link="https://example.com/project-one"
        />
        <CardHome
          title="My projects"
          // description="A brief description of Project Two."
          imageUrl="/assets/placeholder.svg"
          link="https://example.com/project-two"
        />
        <CardHome
          title="My hobbies"
          // description="A brief description of Project Three."
          imageUrl="/assets/placeholder.svg"
          link="https://example.com/project-three"
        />
      </div>
    </div>
        </div>


    )
}

export default Home
