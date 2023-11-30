import Banner from "./Home_component/Banner";
import Partners from './Home_component/Partners';
import PopularCourse from './Home_component/PopularCourse';
import Stats from "./Home_component/Stats";
import TeacherJoin from './Home_component/TeacherJoin';
import FaqSection from './Home_component/FaqSection';
import OurTeachers from './Home_component/OurTeachers';

const HomePage = () => {

    return (
        <div>
            <Banner></Banner>
            <Partners></Partners>
            <PopularCourse></PopularCourse>
            <TeacherJoin></TeacherJoin>
            <Stats></Stats>
            <OurTeachers></OurTeachers>
            <FaqSection></FaqSection>
        </div>
    );
};

export default HomePage;