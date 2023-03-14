import { useEffect, useState } from "react";
import { ISizes }              from "../../types/common";
import breakpoints             from "./breakpoints";

const useBreakpoint = (): ISizes[keyof ISizes] => {
	const [breakpoint, setBreakPoint] = useState("xl");
	const [windowSize, setWindowSize] = useState({
		width : undefined,
		height: undefined,
	});

	const handleResize = () => {
		setWindowSize({
			width : window.innerWidth,
			height: window.innerHeight,
		});
	};

	useEffect(() => {
		window?.addEventListener("resize", handleResize);
		handleResize();

		if (0 < windowSize.width && windowSize.width < 639.98) {
			setBreakPoint(breakpoints[0]);
		}
		if (640 < windowSize.width && windowSize.width < 999.98) {
			setBreakPoint(breakpoints[640]);
		}
		if (1000 < windowSize.width && windowSize.width < 1449.98) {
			setBreakPoint(breakpoints[1000]);
		}
		if (1450 < windowSize.width && windowSize.width < 1919.98) {
			setBreakPoint(breakpoints[1450]);
		}
		if (windowSize.width >= 1920) {
			setBreakPoint(breakpoints[1920]);
		}

		return () => window.removeEventListener("resize", handleResize);
	}, [windowSize?.width]);
	return breakpoint as ISizes[keyof ISizes];
};

export default useBreakpoint;
