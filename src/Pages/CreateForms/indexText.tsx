
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Galleria } from 'primereact/galleria';
import { Image } from 'primereact/image';
import React, { useEffect, useState } from 'react';


const MediaDemo = () => {


    const galleriaResponsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '960px',
            numVisible: 4
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];
    const carouselResponsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];


    const carouselItemTemplate = (product: any) => {
        return (
            <div className="border-1 surface-border border-round m-1 text-center py-5">
                {/* <div className="mb-3">
                    <img src={`/demo/images/product/${product.image}`} alt={product.name} className="w-6 shadow-2" />
                </div> */}
                <div>
                    <h4 className="p-mb-1">{product.name}</h4>
                    {/* <h6 className="mt-0 mb-3">${product.price}</h6>
                    <span className={`product-badge status-${product.inventoryStatus?.toLowerCase()}`}>{product.inventoryStatus}</span>
                    <div className="car-buttons mt-5">
                        <Button type="button" rounded className=" mr-2" icon="pi pi-search"></Button>
                        <Button type="button" rounded severity="success" className="mr-2" icon="pi pi-star"></Button>
                        <Button type="button" rounded severity="help" icon="pi pi-cog"></Button>
                    </div> */}
                </div>
            </div>
        );
    };


    return (
        <div className="grid p-fluid">
            <div className="col-12">
                <div className="card">
                    <h5>Carousel</h5>
                    <Carousel value={[{name: "euu"}, {name: "euu"}, {name: "euu"}, {name: "euu"}]} numVisible={3} numScroll={3} responsiveOptions={carouselResponsiveOptions} itemTemplate={carouselItemTemplate}></Carousel>
                </div>
            </div>

        </div>
    );
};

export default MediaDemo;
