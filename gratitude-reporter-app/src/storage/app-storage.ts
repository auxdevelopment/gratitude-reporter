import { Report } from "./report";

export const ROOT_KEY = "gratitude-reporter";

export interface State {
    userId: string;
    reports: Array<Report>;
}

export class AppStorage {
    private static buildInitialState(id: string): string {
        const initialState: State = {
            userId: id,
            reports: []
        };

        return JSON.stringify(initialState);
    }

    public static initialiseIfNeeded(id: string): Promise<void> {
        const appData = localStorage.getItem(ROOT_KEY);

        if (!appData) {
            localStorage.setItem(ROOT_KEY, this.buildInitialState(id));
        }

        return Promise.resolve();
    }

    public static addReport(report: Report): Promise<void> {
        const stateValue = localStorage.getItem(ROOT_KEY);

        if (!stateValue) {
            return Promise.reject('state may not be null');
        }

        const state: State = JSON.parse(stateValue);

        state.reports.push(report);
        localStorage.setItem(ROOT_KEY, JSON.stringify(state));

        return Promise.resolve();
    }

    public static deleteReport(timestamp: number) {
        const stateValue = localStorage.getItem(ROOT_KEY);

        if (!stateValue) {
            return Promise.reject('state may not be null');
        }

        const state: State = JSON.parse(stateValue);

        const filteredReports = state.reports.filter(report => report.getTimestamp() !== timestamp);
        state.reports = filteredReports;


        localStorage.setItem(ROOT_KEY, JSON.stringify(state));
    }
}
