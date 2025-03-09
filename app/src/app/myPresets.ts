import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const Noir = definePreset(Aura, {
    semantic: {
        primary: {
            50: '#FBEAE1',
            100: '#FDD8C9',
            200: '#FBC6A4',
            300: '#F4A9A8',
            400: '#E493A6',
            500: '#CE97B0',
            600: '#B78FAF',
            700: '#AFB9C8',
            800: '#8E96AD',
            900: '#6E7A92',
            950: '#4E5A72'
        },
        colorScheme: {
            light: {
                primary: {
                    color: '#F4A9A8',
                    inverseColor: '#FFFFFF',
                    hoverColor: '#FBC6A4', 
                    activeColor: '#CE97B0'
                },
                highlight: {
                    background: '#FBC6A4',
                    focusBackground: '#CE97B0',
                    color: '#FFFFFF',
                    focusColor: '#FFFFFF'
                }
            },
            dark: {
                primary: {
                    color: '#AFB9C8',
                    inverseColor: '#1E1E1E',
                    hoverColor: '#CE97B0',
                    activeColor: '#F4A9A8'
                },
                highlight: {
                    background: 'rgba(255, 204, 186, 0.16)',
                    focusBackground: 'rgba(255, 204, 186, 0.24)',
                    color: 'rgba(255,255,255,.87)',
                    focusColor: 'rgba(255,255,255,.87)'
                }
            }
        }
    }
});

export default Noir;
