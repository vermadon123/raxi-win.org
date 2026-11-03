import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
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
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				gaming: {
					purple: 'hsl(var(--gaming-purple))',
					blue: 'hsl(var(--gaming-blue))',
					orange: 'hsl(var(--gaming-orange))',
					yellow: 'hsl(var(--gaming-yellow))'
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-gaming': 'var(--gradient-gaming)',
				'gradient-3d': 'var(--gradient-3d)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-bg': 'var(--gradient-bg)'
			},
			boxShadow: {
				'3d': 'var(--shadow-3d)',
				'card': 'var(--shadow-card)',
				'button': 'var(--shadow-button)',
				'glow': 'var(--shadow-glow)',
				'floating': 'var(--shadow-floating)',
				'persistent-3d': '0 8px 25px -5px hsl(0 0% 0% / 0.1), 0 20px 40px -10px hsl(var(--gaming-orange) / 0.15), inset 0 1px 0 hsl(0 0% 100% / 0.1)'
			},
			backdropBlur: {
				'gaming': '20px'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'33%': { transform: 'translateY(-20px) rotate(1deg)' },
					'66%': { transform: 'translateY(10px) rotate(-1deg)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(var(--gaming-orange) / 0.4)' },
					'50%': { boxShadow: '0 0 40px hsl(var(--gaming-orange) / 0.8)' }
				},
				'scroll-reveal': {
					from: {
						opacity: '0',
						transform: 'translateY(50px)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'bounce-3d': {
					'0%, 100%': { transform: 'scale(1) rotateY(0deg)' },
					'50%': { transform: 'scale(1.05) rotateY(5deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'scroll-reveal': 'scroll-reveal 0.6s ease-out',
				'bounce-3d': 'bounce-3d 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
