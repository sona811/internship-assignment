import { useEffect, useRef } from 'react';
import styles from './PDFViewer.module.scss';

export const PdfViewer = () => {

	const containerRef = useRef(null);

	useEffect(() => {
		let PSPDFKit;
        let container;
		(async function () {
			PSPDFKit = await import('pspdfkit');
            container = containerRef.current;
			const instance = await PSPDFKit.load({
				container,
				document: 'example.pdf',
				baseUrl: `${window.location.protocol}//${window.location.host}/`,
			});
		})();

		return () => PSPDFKit && PSPDFKit.unload(container);
	}, []);

	return (
		<div
			ref={containerRef}
			className={styles.pdfContainer} />
	);
}