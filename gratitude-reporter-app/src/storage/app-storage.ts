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

    public static getParticipantId(): Promise<string> {
        const stateValue = localStorage.getItem(ROOT_KEY);

         if (!stateValue) {
            return Promise.reject('state may not be null');
        }

        const state: State = JSON.parse(stateValue);

        return Promise.resolve(state.userId);
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

    public static loadReports(): Promise<Array<Report>> {
        const stateValue = localStorage.getItem(ROOT_KEY);

        if (!stateValue) {
            return Promise.reject('state may not be null');
        }

        const state: State = JSON.parse(stateValue);

        return Promise.resolve(state.reports);
    }

    public static deleteReport(timestamp: number): Promise<void> {
        const stateValue = localStorage.getItem(ROOT_KEY);

        if (!stateValue) {
            return Promise.reject('state may not be null');
        }

        const state: State = JSON.parse(stateValue);


        const filteredReports = state.reports.filter(report => report.timestamp !== timestamp);
        state.reports = filteredReports;

        localStorage.setItem(ROOT_KEY, JSON.stringify(state));

        return Promise.resolve();
    }
}
