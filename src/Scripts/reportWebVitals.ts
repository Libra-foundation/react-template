import type { ReportHandler } from 'web-vitals';

type Handler = (onReport: ReportHandler, reportAllChanges?: boolean | undefined) => void

const REPORT_WEB_VITALS = (on_perf_entry?: ReportHandler): void => {
  if (on_perf_entry && on_perf_entry instanceof Function) {
    let a = import('web-vitals')
    a.then(
      (
        { getCLS: get_cls, getFID: get_fid, getFCP: get_fcp, getLCP: get_lcp, getTTFB: get_ttfb }:
          Readonly<{ // the names cannot be redefined
            // eslint-disable-next-line @typescript-eslint/naming-convention
            getCLS: Handler
            // eslint-disable-next-line @typescript-eslint/naming-convention
            getFCP: Handler
            // eslint-disable-next-line @typescript-eslint/naming-convention
            getFID: Handler
            // eslint-disable-next-line @typescript-eslint/naming-convention
            getLCP: Handler
            // eslint-disable-next-line @typescript-eslint/naming-convention
            getTTFB: Handler
          }>
      ) => {
        get_cls(on_perf_entry);
        get_fid(on_perf_entry);
        get_fcp(on_perf_entry);
        get_lcp(on_perf_entry);
        get_ttfb(on_perf_entry);
      },
      (reason) => {
        console.error(reason)
      }
    );
  }
};

export default REPORT_WEB_VITALS;
