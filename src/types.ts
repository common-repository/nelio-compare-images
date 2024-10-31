export type Attributes = {
	readonly align?: string;

	readonly beforeId?: number;
	readonly beforeAlt?: string;
	readonly beforeUrl?: string;

	readonly afterId?: number;
	readonly afterAlt?: string;
	readonly afterUrl?: string;

	readonly caption?: string;
	readonly isVertical: boolean;
	readonly dividerLocation: number;
};
