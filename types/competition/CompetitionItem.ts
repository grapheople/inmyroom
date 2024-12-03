export interface CompetitionItem {
    id: number;
    name: string;
    year: string;
    host: string;
    description: string;
    location: string;
    eventStartDate: Date;
    regStartDate: Date;
    regEndDate: Date;
    link: string;
    fee: number;
    imgs: string[];
}