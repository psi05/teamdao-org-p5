"use client";
import React, { ReactNode, useEffect, useState } from "react";

type Props = {
	children: ReactNode;
};

const RehydrationWrapper = ({ children }: Props) => {
	// * To avoid hydration issues in Brave Browser
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);
	if (!mounted) return null;

	return <>{children}</>;
};

export default RehydrationWrapper;
