import logo from './logo.svg';
import './App.css';
const user = {
    name: "Dr. A. P. J. Abdul Kalam",
    imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/A._P._J._Abdul_Kalam.jpg/800px-A._P._J._Abdul_Kalam.jpg",
    imageSize: 250,
};
function App() {
    return (
        <>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={"Photo of " + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize,
                }}
            />
            <h2>" Missile Man of India , The People's President "</h2>
            <h3>Here's a time-line of his Life..</h3>
            <p>A very simple person who lived an unpretentious lifestyle. He had a keen interest in literature and wrote poems. He never married.
                He always faced media himself for his failures while let others address for the success.
                He remained active till the very end. He died while delivering a lecture at the IIM.</p>
            <ul>
                <li><strong>1931</strong>Born in Rameswaram, Tamil Nadu.</li>
                <li><strong>1954</strong>Graduated in Physics from University of Madras.</li>
                <li><strong>1960</strong>Graduated in Aerospace Engineering from Madras Institute of Technology.</li>
                <li><strong>1961</strong>Joined DRDO as a scientist.</li>
                <li><strong>1969</strong>Joined Space Research at ISRO.</li>
                <li><strong>1980</strong>Became the project Director for India's First Indegenous Satellite Program.</li>
                <li><strong>1980</strong>Was involved in the development of several Indegenous Missiles for India like Agni, Prithvi.</li>
                <li><strong>1981</strong>Awarded Padma Bhushan.</li>
                <li><strong>1990</strong>Awarded Padma Vibhushan.</li>
                <li><strong>1992</strong>Chief Advisor for the India's Nuclear Program.</li>
                <li><strong>1997</strong>Awarded Bharat Ratna.</li>
                <li><strong>2002</strong>Became 11th President of India.</li>
                <li><strong>2015</strong>The People's President passes away while doing what he loved the most, addressing students.</li>
            </ul>
            <h4>For further Information visit <a href="https://en.wikipedia.org/wiki/A._P._J._Abdul_Kalam">this link</a>.</h4>

        </>
    );
}
export default App;