import Image from 'next/image';
import AudioPlayer from './AudioPlayer'
const BookCard = ({book}) => {
    const {thumbnail,title,author, description, audio, _id} = book
    return (
        <>
        <div key={_id} className="df aic jcsb fdc">
            <div>
                <Image
                    src={thumbnail}
                    alt={title}
                    width={356}
                    height={200}
                    priority
                />
            </div>
            <div>
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
    </>
    )
}

export default BookCard