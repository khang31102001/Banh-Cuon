import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./Views/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./src/**/*.{html,js,css,ts,tsx}",
		
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				banhcuon: {
					50: '#faf8f5',
					100: '#f2efe8',
					200: '#e2d1c3',
					300: '#d9bea8',
					400: '#c4a079',
					500: '#b68e5f',
					600: '#a27747',
					700: '#86613c',
					800: '#6f5035',
					900: '#5b432e',
					950: '#302218'
				},
				banh: {
					red: '#B83B3A',
					green: "#2ECC71",
					blue: "#3498DB",
					teal: "#43E8E4",
					purple: "#274AF2",
					"bright-red": "#E83845",
					beige: '#F5F2EA',
					cream: '#FFF9E8',
					brown: '#8A6552',
					primary: '#F9C784',
					'primary-dark': '#F4A261',
					coffee: '#4A2F17',

				},
				'tay-ho': {
					coralRed: '#FF5959' ,
					sunflower: '#FAD05A',
					mintTeal: '#49BEB6',
					deepGreen: '#075F63',
				},

				cta: {
					DEFAULT: '#E74C3C',
					hover: '#c0392b'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'slide-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-down': {
					'0%': { transform: 'translateY(-20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'zoom-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'shake': {
					'0%, 100%': { transform: 'translateX(0)' },
					'10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },
					'20%, 40%, 60%, 80%': { transform: 'translateX(2px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'slide-up': 'slide-up 0.5s ease-out',
				'slide-down': 'slide-down 0.5s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'zoom-in': 'zoom-in 0.3s ease-out',
				'shake': 'shake 0.5s ease-in-out'
			},
			fontFamily: {
				 anton: ['Anton', 'sans-serif'],
				'poppins': ['Poppins', 'sans-serif'],
				'roboto': ['Roboto', 'sans-serif'],
				'vietnam': ['Be Vietnam Pro', 'sans-serif'],
				'quicksand': ['Quicksand', 'sans-serif'],
				'playfair': ['Playfair Display', 'serif'],
				 montserrat: ['Montserrat', 'sans-serif'],
				
			},
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;