import qr from './../qr_code.png';
import { Link } from 'react-router-dom';
export default function Register() {
    const buttonStyle = {
        backgroundColor: '#4285f4', // Google blue
        color: '#fff', // White text
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '10px 2px',
        cursor: 'pointer',
    };
    return (
        <div style={{marginTop:'10vh'}}>
            <center style={{backgroundColor:'#ffffff', color:'black'}}><h2>Register Here</h2></center>
            <div>
                <Link to="https://docs.google.com/forms/d/10wpudoCMS5MYDam_7TGhiBq0XL7xnrnhrxZEKSLZnYA/edit?ts=6534c35e" target="_blank">
                    <center><button style={buttonStyle}>Register</button></center>
                </Link>
            </div>
            <hr />
            <center style={{backgroundColor:'#ffffff', color:'black', marginTop:'5vh', }}><h2>Make Payment</h2></center>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', margin:20 }}>
                <img src={qr} alt="QR code" height={500} />
                <ul style={{listStyleType:'none'}}>
                    <h5>Payment Details </h5>
                    <li>CANARA BANK</li>
                    <li>Account Branch-6174-IIT PALAKKAD BRANCH 678557</li>
                    <li>IFSC-CNRB0006174</li>
                    <li>MICR-678015010</li>
                    <li>Account No-6174101001452</li>
                    <li>Product Name : SAVINGS BANK POWER PLUS</li>
                    <li>Customer ID-127576799</li>
                    <li>Account Name-Messrs CENTRE FOR CONTINUING EDUCATION IIT PKD</li>
                    <li>Address -  AHALIA INTEGRATEd CAMPUS, KOZHIPPARA, PALAKKAD,KERALA,IN,678557</li>
                </ul>


            </div>
        </div>
    )
}