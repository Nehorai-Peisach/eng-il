import WaveSurfer from "wavesurfer.js";
import { useEffect, useRef, useState } from "react";
import { Recording } from "@/public/types";
import { BsFillPlayFill, BsPauseFill, BsFillVolumeDownFill, BsFillVolumeMuteFill, BsFillVolumeUpFill, BsFillVolumeOffFill } from "react-icons/bs";
import s from './styles.module.scss';

const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const playbackRates = [0.5, 0.75, 1, 1.25, 1.5];

export default function AudioWavesurfer({ recording }: { recording: Recording }) {
    const waveformRef = useRef<HTMLDivElement | null>(null);
    const wavesurferRef = useRef<WaveSurfer | null>(null);

    const [totalTime, setTotalTime] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioRate, setAudioRate] = useState(playbackRates[1]); // Default to 0.75x speed

    useEffect(() => {
        if (waveformRef.current && !wavesurferRef.current) {
            wavesurferRef.current = WaveSurfer.create({
                container: waveformRef.current,
                height: 40,
                waveColor: "#26424d",
                progressColor: "#52dcff",
                cursorColor: "#FFFFFF",
                cursorWidth: 5,
                url: recording.path,
                dragToSeek: true,
                normalize: true,
                barGap: 1,
                barRadius: 20,
                barWidth: 5,
                audioRate: audioRate
            });

            wavesurferRef.current?.setVolume(1);

            wavesurferRef.current.on("ready", () => {
                setTotalTime(wavesurferRef.current?.getDuration() || 0);
            });

            wavesurferRef.current.on('audioprocess', () => {
                if (wavesurferRef.current?.isPlaying()) {
                    const currentTime = wavesurferRef.current.getCurrentTime();
                    setCurrentTime(currentTime);
                }
            });

            wavesurferRef.current.on('play', () => {
                setIsPlaying(true);
            });

            wavesurferRef.current.on('pause', () => {
                setIsPlaying(false);
            });

            wavesurferRef.current.on('finish', () => {
                setIsPlaying(false);
                setCurrentTime(0);
            });
        }

        return () => {
            if (wavesurferRef.current) {
                wavesurferRef.current.destroy();
                wavesurferRef.current = null; // Reset ref after destroying
            }
        };
    }, [recording.path]);

    const handlePlayPause = () => {
        wavesurferRef.current?.playPause();
    };

    const volumes = [.1, .5, 1]
    const handleVolume = () => {
        const newIndex = getVolumeIndex() + 1;
        const value = volumes[newIndex < volumes.length ? newIndex : 0];
        wavesurferRef.current?.setVolume(value);
    }
    const getVolumeIndex = () => {
        return volumes.findIndex(x => x === wavesurferRef.current?.getVolume()) || 0;
    }

    const handleSpeedChange = () => {
        const currentIndex = playbackRates.indexOf(audioRate);
        const nextIndex = (currentIndex + 1) % playbackRates.length;
        const nextRate = playbackRates[nextIndex];
        setAudioRate(nextRate);
        wavesurferRef?.current?.setPlaybackRate(nextRate);
    };

    return (
        <div className={s.wavesurfer}>
            {recording.title && <p className={s.title}>{recording.title}</p>}
            <div className={s.timesContainer}>
                <div className={s.rateContainer}>
                    <button className={s.rateButton} onClick={handleSpeedChange}>{audioRate}x</button>
                </div>
                <div>{formatTime(currentTime)}</div>
                <div className={s.last}>{formatTime(totalTime)}</div>
            </div>
            <div className={s.waveContainer}>
                <button className={s.btn} onClick={handlePlayPause}>
                    {isPlaying ? <BsPauseFill /> : <BsFillPlayFill />}
                </button>
                <div className={s.wave} ref={waveformRef} />
                <button className={s.btn} onClick={handleVolume}>
                    {getVolumeIndex() === 0 ? <BsFillVolumeOffFill />
                        : getVolumeIndex() === 1 ? <BsFillVolumeDownFill />
                            : <BsFillVolumeUpFill />
                    }
                </button>
            </div>
        </div>
    );
}
