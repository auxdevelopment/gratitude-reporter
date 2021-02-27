import { Report } from "@/storage/report";

const CSV_HEADER = 'participant_id;timestamp\n';

class CsvRow {
    constructor(private participantId: string, private report: Report) {}

    public toString(): string {
        return `${this.participantId};${this.report.timestamp}\n`;
    }
}

export class Exporter {
    static generateExport(participantId: string, reports: Array<Report>): string {
        const csvExport = reports
        .map(report => new CsvRow(participantId, report))
        .map(csvRow => csvRow.toString())
        .reduce((previous, current) => previous + current);

        return CSV_HEADER + csvExport;
    }
}
