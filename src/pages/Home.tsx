// src/pages/Home.jsx
import CardHome from '../components/CardHome';

const Home = () => {
    return (
        <div className="container mx-auto mt-12">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

                <CardHome
                    title="My skills"
                    description="Tools I enjoy Using"
                    imageSrc="/assets/skillsAsset.png"
                    link="/skills"
                />
                  <CardHome
                    title="About me"
                    imageSrc="/assets/aboutAsset.png"
                    link="/about"
                />
                  <CardHome
                    title="My projects"
                    description="Selected personal or in-house projects"
                    imageSrc="/assets/skillsAsset.png"
                    link="/about"
                />
                <CardHome
                    title="Contact"
                    description="Selected personal or in-house projects"
                    imageSrc="/assets/skillsAsset.png"
                    link="/about"
                />
            </div>
        </div>
    );
}

export default Home;
