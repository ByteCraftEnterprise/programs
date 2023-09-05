import '../App.css';
import Program from "../components/Program.js"
import programCard from "../programs-data"
import instructions from '../documents/instructions.pdf';



function Programs() {
    const gradient = {
        background: 'linear-gradient(90deg, #0F8B8D 0%, #725AC1 100%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: "bold",
    };

    const programCards = programCard.map(item => {
        return (
            <Program
                key={item.id}
                item={item}
            />
        )
    })


    return (
        <div className="App">
            <div className='main'>
                <header className="App-header">
                    <div className='coursera'>
                        <h3>
                            Coursera
                        </h3>
                        <p><span style={gradient}>Coursera</span> stands out as an exceptional website for learning to program for numerous compelling reasons. While we are not officially associated with Coursera, we <span style={gradient}>highly recommend</span> their courses.</p>

                        <p>Coursera offers a range of paid options that allow participants to earn valuable certificates. One notable advantage is the <span style={gradient}> tangible proof of course completion </span> that these certificates provide. However, if obtaining a certificate is not your priority, you have the convenient option to <span style={gradient}>audit the course for free</span>. This flexibility allows learners to tailor their experience according to their specific needs and preferences.</p>
                        <h4><span style={gradient}>Instructions on how to enroll are <span className='underline'> <a href={instructions} target="_blank">here</a> </span></span></h4>
                        <p>See programs below👇</p>
                    </div>
                </header>
                <h3>Programs</h3>
                <div className='programs'>
                    {programCards}
                </div>

            </div>

        </div>

    );
}

export default Programs;