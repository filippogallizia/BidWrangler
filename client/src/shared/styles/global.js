const fonts = {
	fontsFamily: {
		base: 'Montserrat'
	},

	fontsWeight: {
		bold: '700',
		semibold: '600',
		medium: '500',
		regular: '400'
	},

	fontSize: {
		xxs: '0.579rem', // 9.26px
		xs: '0.694rem', // 11.11px
		sm: '0.833rem', // 13.33px
		md: '1rem', // 16px
		lg: '1.2rem', // 19.20px
		xl: '1.44rem', // 23.04px
		xxl: '1.728rem', // 27.65px
		xxxl: '2.074rem', // 33.10px
		giant: '2.488rem' // 39.01px
	}
};

const lineHeight = {
	default: '100%',
	tiny: '115%',
	small: '133%',
	medium: '150%',
	large: '170%'
};

const letterSpacing = {
	default: '0px',
	tiny: '-0.03rem', // 0.5px
	small: '-0.019rem', // 0.3px
	medium: '-0.006rem', // 0.1px
	large: '0.06rem' // 1px
};

const border = {
	borderRadius: {
		xs: '4px',
		sm: '8px',
		m: '10px',
		md: '16px',
		lg: '24px',
		circular: '50%',
		pill: '100px'
	},

	borderWidths: {
		none: '0px',
		hairline: '0.06rem', // 1px
		thin: '0.12rem', // 2px
		thick: '0.25rem', // 4px
		heavy: '0.5rem' // 8px
	}
};

const opacityLevels = {
	semiOpaque: '0.80',
	intense: '0.64',
	medium: '0.32',
	light: '0.16',
	semiTransparent: '0.08'
};

const shadowLevels = {
	level1: '0.5rem 0px 0.25rem',
	level2: '1.5rem 0px 0.5rem',
	level3: '2rem 0px 1rem',
	level4: '48px 0px 1rem'
};

const spacing = {
	stack: {
		quark: '0.25rem',
		nano: '0.5rem',
		xxxs: '1rem',
		xxs: '1.5rem',
		xs: '2rem',
		sm: '2.5rem',
		md: '3rem',
		lg: '3.5rem',
		xl: '4rem',
		xxl: '5rem',
		xxxl: '7.5rem',
		huge: '10rem',
		giant: '12.5rem'
	},

	inline: {
		quark: '0.25rem',
		nano: '0.5rem',
		xxxs: '1rem',
		xxs: '1.5rem', // 24px
		xs: '2rem',
		sm: '2.5rem',
		md: '3rem',
		lg: '4rem',
		xl: '5rem'
	},

	squish: {
		quark: '0.25rem 0.5rem', // 4px 8px,
		nano: '0.5rem 1rem', // 8px 16px
		xs: '1rem 1.5rem', // 16px 24px
		s: '1.5rem 2rem', // 24px 32px
		sm: '1rem 2rem', // 16px 32px,
		m: '1.5rem 2.5rem' // 24px 40px,
	},

	inset: {
		quark: '0.25rem',
		nano: '0.5rem',
		xs: '1rem', // 16px
		sm: '1.5rem', // 24px
		md: '2rem', // 32px
		lg: '2.5rem' // 40px
	}
};

export const global = {
	fonts,
	lineHeight,
	letterSpacing,
	border,
	opacityLevels,
	shadowLevels,
	spacing
};
