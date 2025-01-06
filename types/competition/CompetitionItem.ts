export interface CompetitionItem {
    id: number;
    name: string;
    year: string;
    host: string;
    location: string;
    eventStartDate: Date;
    regStartDate: Date | null;
    regEndDate: Date | null;
    link: string;
    fee: number;
    imgs: string[];
}