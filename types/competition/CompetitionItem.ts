export interface CompetitionItem {
    id: number;
    name: string;
    year: string;
    host: string;
    location: string;
    eventStartDate: Date | null;
    regStartDate: Date | null;
    regEndDate: Date | null;
    link: string;
    fee: number;
    goal1: string | null;
    goal2: string | null;
    goal3: string | null;
    goal4: string | null;
    imgs: string[];
}