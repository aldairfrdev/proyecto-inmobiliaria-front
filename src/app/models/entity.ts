export interface Provincia{

    id?:number;
    nombre:string;
    activo:any;
}

export interface Poblacion{

    id?:number;
    nombre:string;
    provincia:Provincia
    activo:any;
}

export interface Tipo{

    id?:number;
    nombre:string
    activo:any;
}


export interface Inmueble{

    id?:number;
    activo:any;
    apertura:string;
    ascensor:any;
    cp:string;
    descripcion:string;
    plazasGaraje:number;
    jardin:any;
    nbalcones:number;
    nbanhos:number;
    nhabitaciones:number;
    nombreVia:string;
    numero:string;
    orientacion:string;
    amueblado:any;
    trastero:any;
    piscina:any;
    planta:string;
    portada:any;
    precio:number;
    puerta:string;
    superficieConstruida:string;
    superficieUtil:string;
    tendedero:any;
    tipoCalefaccion:string;
    titular:string;
    via:string;
    poblacion:Poblacion;
    tipo:Tipo;
    direccionCompleta?:string;

}


export interface Credentials {
    
    username:string;
    password:string;
}