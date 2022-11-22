import type { ReportHandler } from 'web-vitals';

type handler = (onReport: ReportHandler, reportAllChanges?: boolean | undefined) => void

const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(
      (
        { getCLS, getFID, getFCP, getLCP, getTTFB }:
          Readonly<{
            getCLS: handler,
            getFCP: handler
            getFID: handler
            getLCP: handler
            getTTFB: handler
          }>
      ) => {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      },
      (reason) => {
        console.error(reason)
      }
    );
  }
};

export default reportWebVitals;
