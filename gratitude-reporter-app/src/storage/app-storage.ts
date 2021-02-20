const ROOT_KEY = "gratitude-reporter";

export class AppStorage {
    private static buildInitialState(id: string): string {
        const initialState = {
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
}