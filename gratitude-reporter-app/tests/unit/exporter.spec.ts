import { Exporter } from "@/export/exporter";
import { Report } from "@/storage/report";
import { v4 } from "uuid";

describe('Exporter Test', () => {
    it('should create a valid CSV export', () => {
        const reports: Array<Report> = [
            {
                content: 'First report',
                timestamp: Date.now() - 1000
            },
            {
                content: 'Second report',
                timestamp: Date.now() - 900
            },
            {
                content: 'Third report',
                timestamp: Date.now() - 800
            },
            {
                content: 'Fourth report',
                timestamp: Date.now() - 700
            }
        ];

        const participantId = v4();
        
        const expectedCsv =
            'participant_id;timestamp\n' +
            `${participantId};${reports[0].timestamp}\n` +
            `${participantId};${reports[1].timestamp}\n` +
            `${participantId};${reports[2].timestamp}\n` +
            `${participantId};${reports[3].timestamp}\n`;

        const generatedCsv = Exporter.generateExport(participantId, reports);
        
        expect(generatedCsv).toEqual(expectedCsv);
    })
});