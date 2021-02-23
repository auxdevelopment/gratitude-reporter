import { AppStorage, ROOT_KEY, State } from "@/storage/app-storage";
import { Report } from "@/storage/report";

function readState(): State {
    const stateValue = localStorage.getItem(ROOT_KEY);
    expect(stateValue).not.toBeNull();

    const state: any = JSON.parse(stateValue!);
    
    return state;
};

describe('AppStorage', () => {
    it('should initialise with userId when localStorage is empty', async () => {
        localStorage.clear();

        const userId = 'user1';

        await AppStorage.initialiseIfNeeded(userId);

        const state = readState();

        const initialState = {
            userId: userId,
            reports: []
        };

        expect(state).toEqual(initialState)

    })

    let reportToDeleteTimestamp: number;

    it('should add a report (for later deletion)', async () => {
        const reportContent = 'New Report';
        const timestamp = Date.now();
        const reportToAdd: Report = {
            content: reportContent,
            timestamp: timestamp
        };

        reportToDeleteTimestamp = timestamp;

        await AppStorage.addReport(reportToAdd);

        const state = readState();

        expect(state.reports.length).toEqual(1);

        const storedReport = state.reports[0];

        expect(storedReport.timestamp).not.toBeNull();
        expect(storedReport.content).not.toBeNull();

        expect(storedReport.timestamp).toEqual(reportToAdd.timestamp);
        expect(storedReport.content).toEqual(reportToAdd.content);
    });

    it('should add another report', async () => {
        const reportContent = 'Another report';
        const timestamp = Date.now();
        const reportToAdd: Report = {
            content: reportContent,
            timestamp
        };

        await AppStorage.addReport(reportToAdd);

        const state = readState();
        const storedReport: Report | undefined = state.reports.find(report => report.timestamp === timestamp);

        expect(storedReport).not.toBeUndefined();

        if (!storedReport) {
            return;
        }

        expect(state.reports.length).toEqual(2);

        expect(storedReport.timestamp).not.toBeNull();
        expect(storedReport.content).not.toBeNull();

        expect(storedReport.timestamp).toEqual(reportToAdd.timestamp);
        expect(storedReport.content).toEqual(reportToAdd.content);
    })

    it('should delete previously created report', async () => {
        await AppStorage.deleteReport(reportToDeleteTimestamp);

        const state = readState();

        expect(state.reports.length).toEqual(1);
        expect(state.reports[0]).not.toEqual(reportToDeleteTimestamp);
    })

    it('should load reports', async () => {
        const reports = await AppStorage.loadReports();

        expect(reports.length).toEqual(0);
    });
})