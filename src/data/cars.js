import GolfFront from "../assets/Cars/voswagen/GTI/front.webp"
import GolfBack from "../assets/Cars/voswagen/GTI/back.webp"
import GolfInside from "../assets/Cars/voswagen/GTI/inside.webp"

import StepwayFront from "../assets/Cars/dacia/stepway/front.webp"
import StepwayBack from "../assets/Cars/dacia/stepway/back.webp"
import StepwayInside from "../assets/Cars/dacia/stepway/inside.webp"

import AccentFront from "../assets/Cars/hyundai/accent/front.jpg"
import AccentBack from "../assets/Cars/hyundai/accent/back.jpg"
import AccentInside from "../assets/Cars/hyundai/accent/inside.jpg"

import SportageFront from  "../assets/Cars/kia/sportage/front.jpeg"
import SportageBack from "../assets/Cars/kia/sportage/back.jpeg"
import SportageInside from "../assets/Cars/kia/sportage/inside.jpeg"

import _308Front from "../assets/Cars/peugeot/308/front.avif"
import _308Back from "../assets/Cars/peugeot/308/back.jpg"
import _308Inside from "../assets/Cars/peugeot/308/inside.jpg"

import _208Front from "../assets/Cars/peugeot/208/front.webp"
import _208Back from "../assets/Cars/peugeot/208/back.webp"
import _208Inside from "../assets/Cars/peugeot/208/inside.jpg"

export default [
    {
        "brand" : "Volswagen",
        "cars" : [
            {
                "name" : "Golf GTI",
                "price" : 25000 ,
                "front" : GolfFront,
                "back" : GolfBack,
                "inside" : GolfInside
            }
        ] 
    },
    {
        "brand" : "Dacia",
        "cars" : [
            {
                "name" : "Stepway",
                "price" : 18500 ,
                "front" : StepwayFront,
                "back" : StepwayBack,
                "inside" : StepwayInside
            }
        ] 
    },
    {
        "brand" : "Hyundai",
        "cars" : [
            {
                "name" : "Accent",
                "price" : 20000,
                "front" : AccentFront,
                "back" : AccentBack,
                "inside" : AccentInside
            }
        ] 
    },
    {
        "brand" : "Kia",
        "cars" : [
            {
                "name" : "Sportage",
                "price" : 22000 ,
                "front" :SportageFront,
                "back" : SportageBack,
                "inside" : SportageInside
            }
        ] 
    },
    {
        "brand" : "Peugeot",
        "cars" : [
            {
                "name" : "308" ,
                "price" : 20000 ,
                "front" : _308Front,
                "back" : _308Back,
                "inside" : _308Inside
            },
            {
                "name" : "208" ,
                "price" : 1850 ,
                "front" : _208Front,
                "back" : _208Back,
                "inside" : _208Inside
            }

        ] 
    }
]