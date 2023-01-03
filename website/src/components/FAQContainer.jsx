import * as React from 'react';



import FAQ from './FAQ';


export default function FAQContainer() {
    const [faq, setFaq] = React.useState([]);

    React.useEffect(() => {
        fetch('http://127.0.0.1:8000/api/faq/')
        .then(response => response.json())
        .then(data => setFaq(data))
    }, [])

    return (
        <div>
        {faq.map((faq) => (
            <FAQ {...faq}/>
        ))}
        </div>
    );
}
