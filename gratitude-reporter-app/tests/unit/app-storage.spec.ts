import { AppStorage, ROOT_KEY, State } from "@/storage/app-storage";
import { Report } from "@/storage/report";

const readState = () => {
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

    it('should add a report', async () => {
        const reportContent = 'New Report';
        const reportToAdd = new Report(reportContent);
        reportToDeleteTimestamp = reportToAdd.getTimestamp();

        await AppStorage.addReport(reportToAdd);

        const state = readState();

        expect(state.reports.length).toEqual(1);

        const storedReport = state.reports[0];

        expect(storedReport.timestamp).not.toBeNull();
        expect(storedReport.content).not.toBeNull();

        expect(storedReport.timestamp).toEqual(reportToAdd.getTimestamp());
        expect(storedReport.content).toEqual(reportToAdd.getContent());
    });

    it('should delete previously created report', async () => {
        await AppStorage.deleteReport(reportToDeleteTimestamp);

        const state = readState();

        expect(state.reports.length).toEqual(0);
    })
})