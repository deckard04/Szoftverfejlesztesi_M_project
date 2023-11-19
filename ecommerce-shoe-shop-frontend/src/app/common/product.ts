export class Product {

    constructor(
        public id: number,
        public brand:string, 
        public model: string,
        public color: string,
        public releaseDate: Date,
        public price: number,
        public description: string,
        public imgUrl: string) {}
}
