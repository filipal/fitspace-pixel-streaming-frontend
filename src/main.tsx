// Copyright Epic Games, Inc. All Rights Reserved.

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Dinamički biraj koji app renderaš: PixelStreaming ili Frontend
import { App as PixelStreamingApp } from './components/App';
import AppFrontend from './components/AppFrontend';

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error('Root element not found');
}

// Promijeni na 'frontend' za rute, na 'pixelstreaming' za Unreal
const MODE = import.meta.env.VITE_APP_MODE || 'frontend';

const AppToRender = MODE === 'pixelstreaming' ? PixelStreamingApp : AppFrontend;

createRoot(rootElement).render(
    <StrictMode>
        <BrowserRouter>
            <AppToRender />
        </BrowserRouter>
    </StrictMode>
);
