// src/pages/Home.jsx
import CardHome from '../components/CardHome';
import LocationCard from '../components/LocationCard';
import MindCard from '../components/MindCard';

const Home = () => {
    return (
        <div className="container mx-auto mt-12">
            <div className="flex flex-col space-y-6 md:flex-row md:space-x-6">
                <div className="flex flex-col space-y-6">
                    <LocationCard/>
                </div>
                <div className="grid grid-cols-1 gap-6 justify-items-center lg:grid-cols-2">
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
                        imageSrc="/assets/projects.png"
                        link="/projects"
                    />
                    <CardHome
                        className="bg-gray-500"
                        title="Say hello"
                        description="for a job offer or just to connect."
                        link="/contact"
                        icon="🤘"
                        backgroundImage="/assets/background.png"
                    />
                </div>
            </div>
            {/* <div>
                <MindCard/>
            </div> */}
        </div>
    );
}

export default Home;
