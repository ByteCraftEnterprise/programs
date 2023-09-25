import '../styles/programs.css'


const Program = (props) => {

    return (

        <div className="main-program">
            <div className='program-card'>
                <img src={props.item.img} className="img" alt="Image of the computer" />
                <div className='program-content'>
                    <h4>{props.item.title}</h4>
                    <p>{props.item.paragraph1}</p>
                    <br />
                    <p>{props.item.paragraph2}</p>
                    <br />

                    <p>{props.item.paragraph3}</p>
                    <a href={props.item.link} target="_blank">
                        <button className='button'>Enroll</button>
                    </a>
                </div>
            </div>

        </div>

    );
};

export default Program;