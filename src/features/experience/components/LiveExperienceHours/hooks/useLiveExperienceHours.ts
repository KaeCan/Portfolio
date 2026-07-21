import { useEffect, useState } from 'react';
import {
    getExperienceMetrics,
    type ExperienceMetrics,
} from '@/features/experience/utils/experience-hours';

const TICK_MS = 5000;

const toDurations = (durations: string[]) =>
    durations.map(duration => ({ duration }));

export function useLiveExperienceHours(durations: string[]): ExperienceMetrics {
    const [metrics, setMetrics] = useState(() =>
        getExperienceMetrics(toDurations(durations))
    );

    useEffect(() => {
        const experienceDurations = toDurations(durations);

        const update = (): void => {
            setMetrics(getExperienceMetrics(experienceDurations));
        };

        update();
        const intervalId = window.setInterval(update, TICK_MS);
        return (): void => window.clearInterval(intervalId);
    }, [durations]);

    return metrics;
}
