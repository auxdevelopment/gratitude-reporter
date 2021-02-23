export class Report {
    private timestamp: number;

    constructor(private content: string, timestamp?: number) {
        if (!!timestamp) {
            this.timestamp = timestamp;
        } else {
            this.timestamp = Date.now();
        }
    }

    public getContent(): string {
        return this.content;
    }

    public getTimestamp(): number {
        return this.timestamp;
    }
}
