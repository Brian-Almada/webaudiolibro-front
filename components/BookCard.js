import Image from 'next/image';
import AudioPlayer from './AudioPlayer'
const BookCard = ({book}) => {
    const {thumbnail,title,author, description, audio} = book
    return (
        <>
        <div className="df posr card-container">
            <div className='imagediv'>
                <Image
                    src={thumbnail}
                    alt={title}
                    width={300}
                    height={300}
                    layout='responsive'
                    priority
                />
            </div>
            <div className="df fdc card-body">
                <h1>{title}</h1>
                <p>{author}</p>
                <p>{description}</p>
                <div>
                    <AudioPlayer
                        src={audio}
                    />
                </div>
            </div>
            </div>

            <style jsx>
                {`
                    .card-container {
                        flex-direction: column;
                        background-color: #111;
                        width: 40%;
                        border-radius: 0.5rem;
                        overflow: hidden;
                        box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
                        transition: transform 0.2s ease;
                        margin: 0 auto;
                        }

                        .card-body {
                            width: 100%;
                            padding: 1rem;
                            background-color: #222;
                        }

                        .card-container:hover {
                            transform: scale(1.05);
                            box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
                        }

                        @media screen (max-width: 800px) {
                            .card-container {
                            width: 90%;
                        }
                    }





                `}
            </style>
    </>
    )
}

export default BookCard