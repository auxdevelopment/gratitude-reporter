export class Report {
    private timestamp: number;

    constructor(private content: string) {
        this.timestamp = Date.now();
    }

    public getContent(): string {
        return this.content;
    }

    public getTimestamp(): number {
        return this.timestamp;
    }
}