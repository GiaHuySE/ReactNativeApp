import { useState, useEffect, useRef } from "react";

interface CountDonwn {
    value: number;
    isRunning: boolean;
    start: () => void;
    stop: () => void;
}
const useCountDown = (intitalDuration: number, isStartImmediately: boolean = false): CountDonwn => {
    const [value, setValue] = useState<number>(intitalDuration);
    const [isRunning, setIsRunning] = useState<boolean>(isStartImmediately);
    const countdownRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (isRunning) {
            countdownRef.current = setInterval(() => {
                setValue((preValue) => {
                    if (preValue === 0) {
                        setIsRunning(false);
                        // clearInterval(countdownRef.current!);
                        return 0;
                    }
                    return preValue - 1;
                })
            }, 1000)
        } else {
            clearInterval(countdownRef.current!);
        }
        return () => {

        }
    }, [isRunning]);

    const start = () => {
        if (value === 0) {
            setValue(30)
        }
        setIsRunning(true);
    }
    const stop = () => {
        setIsRunning(false);
        // clearInterval(countdownRef.current!);
    };

    return {
        value,
        isRunning,
        start,
        stop
    }
}

export default useCountDown;