export class Work {
    constructor(
        public id: string,
        public imageUrl: string,
        public workName: string,
        public client: string,
        public workDescription: string,
        public githubRepo: string,
        public link: string,
        public UI: string,
        public languageUsed: string
    ){}
}