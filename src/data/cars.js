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

import MalibuFront from "../assets/Cars/chevrolet/malibu/front.jpg"
import MalibuBack from "../assets/Cars/chevrolet/malibu/back.webp"
import MalibuInside from "../assets/Cars/chevrolet/malibu/inside.webp"

import EscapeFront from "../assets/Cars/ford/escape/front.jpg"
import EscapeBack from "../assets/Cars/ford/escape/back.webp"
import EscapeInside from "../assets/Cars/ford/escape/inside.jpg"

import FusionFront from "../assets/Cars/ford/fusion/front.jpg"
import FusionBack from "../assets/Cars/ford/fusion/back.avif"
import FusionInside from "../assets/Cars/ford/fusion/inside.jpg"

import AccordFront from "../assets/Cars/honda/accord/front.avif"
import AccordBack from "../assets/Cars/honda/accord/back.jpg"
import AccordInside from "../assets/Cars/honda/accord/inside.jpg"

import CivicFront from "../assets/Cars/honda/civic/front.jpg"
import CivicBack from "../assets/Cars/honda/civic/back.webp"
import CivicInside from "../assets/Cars/honda/civic/inside.jpg"

import CamryFront from "../assets/Cars/toyota/camry/front.jpg"
import CamryBack from "../assets/Cars/toyota/camry/back.webp"
import CamryInside from "../assets/Cars/toyota/camry/inside.webp"

import CorollaFront from "../assets/Cars/toyota/corolla/front.jpg"
import CorollaBack from "../assets/Cars/toyota/corolla/back.webp"
import CorollaInside from "../assets/Cars/toyota/corolla/inside.jpg"

export default [    
    {        
        "brand" : "Volswagen",
        "cars" : [   
            {                
                "name" : "Golf GTI",                
                "price" : 25000 ,                
                "front" : GolfFront,                
                "back" : GolfBack,                
                "inside" : GolfInside,                
                "features" : [                    
                    "LED headlights",                    
                    "Wireless smartphone charging",                    
                    "Adaptive suspension",                    
                    "Panoramic sunroof"                
                ]
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
            "inside" : StepwayInside,
            "features" : [
                "Rear parking sensors",
                "Automatic climate control",
                "Smart keyless entry",
                "Electronic stability control"
            ]
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
                "inside" : AccentInside,
                "features" : [
                    "Bluetooth connectivity",
                    "Push-button start",
                    "7-inch touchscreen infotainment system",
                    "Cruise control"
                ]
            }
        ] 
    },
    {
        "brand" : "Kia",
        "cars" : [
            {
                "name" : "Sportage",
                "price" : 22000 ,
                "front" : SportageFront,
                "back" : SportageBack,
                "inside" : SportageInside,
                "features" : [
                    "Apple CarPlay and Android Auto compatibility",
                    "Dual-zone automatic climate control",
                    "Harman Kardon premium sound system",
                    "Wireless phone charger"
                ]
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
                "inside" : _308Inside,
                "features" : [
                    "Automatic emergency braking",
                    "Lane departure warning",
                    "Rearview camera",
                    "Keyless entry and start"
                ]
            },
            {
                "name" : "208" ,
                "price" : 1850 ,
                "front" : _208Front,
                "back" : _208Back,
                "inside" : _208Inside,
                "features" : [
                    "Wireless smartphone projection",
                    "Digital driver display",
                    "Heated front seats",
                    "Auto-dimming rearview mirror"
                ]
            }
        ] 
    },
    {        
        "brand": "Toyota",        
        "cars": [            
            {                
                "name": "Corolla",                
                "price": 21000,                
                "front": CorollaFront,                
                "back": CorollaBack,                
                "inside": CorollaInside,                
                "features": [                    
                    "Adaptive Cruise Control",                    
                    "Lane Departure Alert with Steering Assist",
                    "Pre-Collision System with Pedestrian Detection",
                    "Automatic High Beams"                
                ]
            },
            {
                "name": "Camry",
                "price": 25000,
                "front": CamryFront,
                "back": CamryBack,
                "inside": CamryInside,
                "features": [
                    "Smart Key System",
                    "Dual-Zone Automatic Climate Control",
                    "Blind Spot Monitor with Rear Cross-Traffic Alert",
                    "Bird's Eye View Camera with Perimeter Scan"
                ]
            }
        ]
    },
    {
        "brand": "Honda",
        "cars": [
            {
                "name": "Civic",
                "price": 23000,
                "front": CivicFront,
                "back": CivicBack,
                "inside": CivicInside,
                "features": [
                    "Honda Sensing Suite",
                    "Apple CarPlay and Android Auto integration",
                    "Honda LaneWatch",
                    "Rain-sensing windshield wipers"
                ]
            },
            {
                "name": "Accord",
                "price": 28000,
                "front": AccordFront,
                "back": AccordBack,
                "inside": AccordInside,
                "features": [
                    "Heads-Up Display",
                    "Wireless Phone Charger",
                    "Blind Spot Information System",
                    "Honda Satellite-Linked Navigation System"
                ]
            }
        ]
    },
    {
        "brand": "Ford",
        "cars": [
            {
                "name": "Fusion",
                "price": 24000,
                "front": FusionFront,
                "back": FusionBack,
                "inside": FusionInside,
                "features": [
                    "Ford Co-Pilot360",
                    "SYNC 3 with Apple CarPlay and Android Auto",
                    "Pre-Collision Assist with Automatic Emergency Braking",
                    "FordPass Connect with 4G LTE Wi-Fi hotspot"
                ]
            },
            {
                "name": "Escape",
                "price": 27000,
                "front": EscapeFront,
                "back": EscapeBack,
                "inside": EscapeInside,
                "features": [
                    "Ford Co-Pilot360",
                    "SYNC 3 with Apple CarPlay and Android Auto",
                    "Blind Spot Information System",
                    "FordPass Connect with 4G LTE Wi-Fi hotspot"
                ]
            }
        ]
    },
    {
    "brand": "Chevrolet",
    "cars": [
            {
                "name": "Malibu",
                "price": 25000,
                "front": MalibuFront,
                "back": MalibuBack,
                "inside": MalibuInside,
                "features": [
                    "Chevrolet Infotainment 3 System",
                    "Driver Confidence Package",
                    "Wireless Apple CarPlay and Android Auto",
                    "SYNC 3 with Apple CarPlay and Android Auto"
                ]
            }
        ]
    }
]
