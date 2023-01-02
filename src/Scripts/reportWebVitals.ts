import type {ReportHandler} from "web-vitals";

type Handler = (
  onReport: ReportHandler,
  reportAllChanges?: boolean | undefined
) => void;

function ReportWebVitals(on_perf_entry?: ReportHandler): void {
  if (on_perf_entry && on_perf_entry instanceof Function) {
    const A = import("web-vitals");
    A.then(
      ({
        getCLS: get_cls,
        getFID: get_fid,
        getFCP: get_fcp,
        getLCP: get_lcp,
        getTTFB: get_ttfb,
      }: Readonly<{
        // eslint-disable-next-line @typescript-eslint/naming-convention -- the names cannot be redefined
        getCLS: Handler;
        // eslint-disable-next-line @typescript-eslint/naming-convention -- the names cannot be redefined
        getFCP: Handler;
        // eslint-disable-next-line @typescript-eslint/naming-convention -- the names cannot be redefined
        getFID: Handler;
        // eslint-disable-next-line @typescript-eslint/naming-convention -- the names cannot be redefined
        getLCP: Handler;
        // eslint-disable-next-line @typescript-eslint/naming-convention -- the names cannot be redefined
        getTTFB: Handler;
      }>) => {
        get_cls(on_perf_entry);
        get_fid(on_perf_entry);
        get_fcp(on_perf_entry);
        get_lcp(on_perf_entry);
        get_ttfb(on_perf_entry);
      },
      (reason) => {
        console.error(reason);
      }
    );
  }
}

export default ReportWebVitals;
