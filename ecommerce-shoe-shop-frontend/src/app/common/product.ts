export class Product {

    public imgUrl: string = "image-coming-soon-placeholder.png";

    constructor(public brand:string, 
        public model: string,
        public color: string,
        public releaseDate: Date,
        public price: number,
        public description: string){}
}
