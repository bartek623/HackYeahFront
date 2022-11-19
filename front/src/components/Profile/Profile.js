import style from './Profile.module.css';


function Profile(){
    return <div className={style.container}>
        <section>
            <div className={style.nav}></div>
            <div className={style.content}></div>
        </section>
    </div>;
}

export default Profile;