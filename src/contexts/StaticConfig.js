import ProjectDetailsCard from "../routes/portfolio/ProjectDetailsCard";

export const base_url =
    process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://uilennest.net/cv"

export const projects = [

    {"name": "ATDB",
        "short_description" : "Observation and Pipeline management for APERTIF/WSRT Telescope. Microservices architecture in Django and Python.",
        "description" : "APERTIF Task Database. Observation and Pipeline management for APERTIF/WSRT Telescope. Microservices architecture in Django and Python.",
        "type": "backend django",
        "developed" : "2017 - 2018",
        "operational": "2018 - now",
        "role" : "main developer",
        "thumbnail": "/assets/atdb_gui_main.png",
        "details_card": ProjectDetailsCard,

        "details" : [
            { "image" : "/assets/atdb_gui_main.png",
                "description" : "The main GUI shows the observation tasks with just enough metadata needed for operation." },
            { "image" : "/assets/atdb_contextdiagram.png",
                "description" : "The CONTEXT diagram shows the environment that ATDB operates in" },
            { "image" : "/assets/atdb_deploymentdiagram.png",
                "description" : "The DEPLOYMENT diagram shows where ATDB is deployed in the system" },
            { "image" : "/assets/atdb_statediagram.png",
                "description" : "The STATE diagram shows the possible states that an observation can be in, and which of the micro services respond to that state" },
        ]
    },

    {"name": "ATDB-LDV",
        "short_description" : "Pipeline Execution Framework for the LOFAR Data Validation project (LDV). Based on ATDB for APERTIF.",
        "description" : "Pipeline Execution Framework for the LOFAR Data Validation project (LDV). Based on ATDB for APERTIF.",
        "type": "backend django",
        "developed" : "2021",
        "operational": "2021 - now",
        "role" : "main developer",
        "thumbnail": "/assets/atdb_ldv_gui_main.png",
        "details_card": ProjectDetailsCard,

        "details" : [
            { "image" : "/assets/atdb_ldv_gui_main.png",
                "description" : "The main GUI shows the observation tasks with just enough metadata needed for operation." },
            { "image" : "/assets/atdb_contextdiagram.png",
                "description" : "The CONTEXT diagram shows the environment that ATDB operates in" },
            { "image" : "/assets/atdb_deploymentdiagram.png",
                "description" : "The DEPLOYMENT diagram shows where ATDB is deployed in the system" },
            { "image" : "/assets/atdb_statediagram.png",
                "description" : "The STATE diagram shows the possible states that an observation can be in, and which of the micro services respond to that state" },
        ]
    },

    {"name": "AstroView",
        "short_description" : "Frontend for astrophotography database (AstroBase). Various async image processing pipelines. Image cutouts",
        "description" : "Frontend for astrophotography database (AstroBase). Various async image processing pipelines. Image cutouts",
        "type": "private,frontend reactjs",
        "thumbnail": "/assets/astroview.png",
        "details_card": ProjectDetailsCard,

        "details" : [
            { "image" : "/assets/astroview_splash.png",
                "description" : "Opening screen" },
            { "image" : "/assets/astroview_main.png",
                "description" : "main screen" },
            { "image" : "/assets/astroview.png",
                "description" : "details screen" },
            { "image" : "/assets/astroview_cutout.png",
                "description" : "image cutouts across all the images" },
            { "image" : "/assets/astrobase_diagram.png",
                "description" : "this is the documentation" },
        ]
    },

    {"name": "AstroBase",
        "short_description" : "Astrophotography backend/API in Django. Based on ATDB for APERTIF",
        "description" : "Astrophotography backend/API in Django. Based on ATDB for APERTIF",
        "type": "private,backend django",
        "thumbnail": "/assets/astrobase.png",
        "details_card": ProjectDetailsCard,

        "details" : [
            { "image" : "/assets/astroview_main.png",
                "description" : "main screen" },
            { "image" : "/assets/astroview_cutout.png",
                "description" : "these are image cutouts" },
            { "image" : "/assets/astrobase_diagram.png",
                "description" : "this is the documentation" },
        ]
    },

    {"name": "EnergyView",
        "short_description" : "Frontend in ReactJS for EnergyServer. Displays live and historical energy usage and weather.",
        "description" : "Frontend in ReactJS for EnergyServer. Displays live and historical energy usage and weather.",
        "type": "private,frontend reactjs",
        "thumbnail": "/assets/my_energy_view.png",
        "details_card": ProjectDetailsCard,

        "details" : [
            { "image" : "/assets/astroview_main.png",
                "description" : "main screen" },
            { "image" : "/assets/astroview_cutout.png",
                "description" : "these are image cutouts" },
            { "image" : "/assets/astrobase_diagram.png",
                "description" : "this is the documentation" },
        ]
    },

    {"name": "EnergyServer",
        "short_description" : "Django backend running on Raspberry Pi, connected to a smart energy meter. Interfaces with Domoticz home automation and external solar panel API.",
        "description" : "Django backend running on Raspberry Pi, connected to a smart energy meter. Interfaces with Domoticz home automation and external solar panel API.",
        "type": "private,backend django",
        "thumbnail": "/assets/my_energy_server.png",
        "details_card": ProjectDetailsCard,

        "details" : [
            { "image" : "/assets/astroview_main.png",
                "description" : "main screen" },
            { "image" : "/assets/astroview_cutout.png",
                "description" : "these are image cutouts" },
            { "image" : "/assets/astrobase_diagram.png",
                "description" : "this is the documentation" },
        ]
    },

    {"name": "MoM WSRT",
        "short_description" : "Project Administration for Observations of the Westerbork Synthesis Radio Telescope (WSRT)",
        "description" : "Project Administration for Observations of the Westerbork Synthesis Radio Telescope (WSRT)",
        "type": "java",
        "thumbnail": "/assets/mom_2004.jpg",
        "details_card": ProjectDetailsCard,

        "details" : [
            { "image" : "/assets/mom_2004.jpg",
                "description" : "main screen" },
            { "image" : "/assets/astroview_cutout.png",
                "description" : "these are image cutouts" },
            { "image" : "/assets/astrobase_diagram.png",
                "description" : "this is the documentation" },
        ]
    },

]