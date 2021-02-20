import { Report } from "./report";

const ROOT_KEY = "gratitude-reporter";

interface State {
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
        const stateString = localStorage.getItem(ROOT_KEY);

        if (!stateString) {
            return Promise.reject('state may not be null');
        }

        const state: State = JSON.parse(stateString);

        state.reports.push(report);
        localStorage.setItem(ROOT_KEY, JSON.stringify(state));

        return Promise.resolve();
    }
}