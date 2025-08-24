// Copyright Epic Games, Inc. All Rights Reserved.

import { useEffect, useRef } from 'react';
import {
    Config,
    PixelStreaming
} from '@epicgames-ps/lib-pixelstreamingfrontend-ue5.6';
import { 
    Application, 
    PixelStreamingApplicationStyle 
} from '@epicgames-ps/lib-pixelstreamingfrontend-ui-ue5.6';

import type { AllSettings } from '@epicgames-ps/lib-pixelstreamingfrontend-ue5.6/dist/types/Config/Config';

export interface PixelStreamingWrapperProps {
    initialSettings?: Partial<AllSettings>;
    useUrlParams?: boolean;
}

export const PixelStreamingWrapper = ({
    initialSettings,
    useUrlParams = true
}: PixelStreamingWrapperProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            // Apply styles (exactly like showcase.ts)
            const PixelStreamingApplicationStyles = new PixelStreamingApplicationStyle();
            PixelStreamingApplicationStyles.applyStyleSheet();

            // Create a config object (exactly like showcase.ts)
            const config = new Config({ useUrlParams, initialSettings });

            // Create Pixel Streaming application (exactly like showcase.ts)
            const stream = new PixelStreaming(config);
            const application = new Application({
                stream,
                onColorModeChanged: (isLightMode: boolean) => PixelStreamingApplicationStyles.setColorMode(isLightMode)
            });

            // Append to container (exactly like showcase.ts)
            containerRef.current.appendChild(application.rootElement);

            return () => {
                try {
                    stream.disconnect();
                } catch {
                    // Ignore errors during disconnect
                }
            };
        }
    }, [initialSettings, useUrlParams]);

    return (
        <div
            ref={containerRef}
            style={{
                width: '100%',
                height: '100%'
            }}
        />
    );
};
