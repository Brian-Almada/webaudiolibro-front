import { useEffect, useRef } from 'react';

const AudioPlayer = ({ src }) => {
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current = new Audio(src);

        // Opcional: añadir event listeners o configuraciones adicionales
        audioRef.current.addEventListener('canplaythrough', () => {
        console.log('Audio is ready to play');
        });

        return () => {
            // Limpieza al desmontar el componente
            audioRef.current.pause();
            audioRef.current.removeEventListener('canplaythrough', () => {
            console.log('Audio is ready to play');
            });
            audioRef.current = null;
        };
    }, [src]);

    const playAudio = () => {
        if (audioRef.current) {
        audioRef.current.play();
        }
    };

    const pauseAudio = () => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
    };

    return (
        <div>
            <button onClick={playAudio}>Play</button>
            <button onClick={pauseAudio}>Pause</button>
        </div>
    );
};

export default AudioPlayer;
