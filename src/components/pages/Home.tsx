import {useState} from 'react';
//const testURL = 'http://localhost:5000';
const Home = () => {
    const [url, setUrl] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [delay, setDelay] = useState<number>(0);
    
    const handleSchedule = async () => {
        if (!url || !message || delay < 0) {
            alert('Please fill in all fields correctly.');
            return;
        }
        try {
            await fetch('/api/schedule', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message, delay, url })
            }).then((response) => {
                if (response.ok) {
                    alert('Message scheduled successfully!');
                } else {
                    alert('Failed to schedule message.');
                }
            });
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className='home'>
            <h1>Schedule a Message</h1>
            <div className='input-container'>
                <p>Enter the URL</p>
                <input
                    type="text"
                    placeholder="Enter the URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
            </div>

            <div className='input-container'>
                <p>Enter message</p>
                <input
                type="text"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            

            <div className='input-container'>
                <p>Enter delay in seconds</p>
                <input
                    type="number"
                    min={0}
                    placeholder="e.g., 5"
                    value={delay}
                    onChange={(e) => setDelay(Number(e.target.value))}
                />
            </div>
            <button onClick={async ()=>handleSchedule()}>Click Me</button>
        </div>
    );
}

export default Home