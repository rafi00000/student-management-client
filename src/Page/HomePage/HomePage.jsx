import Banner from "./Home_component/Banner";
import Partners from './Home_component/Partners';
import PopularCourse from './Home_component/PopularCourse';
import TeacherJoin from './Home_component/TeacherJoin';

const HomePage = () => {

    return (
        <div>
            <Banner></Banner>
            <Partners></Partners>
            <PopularCourse></PopularCourse>
            <TeacherJoin></TeacherJoin>
        </div>
    );
};

export default HomePage;