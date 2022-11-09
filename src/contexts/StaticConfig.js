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
        "technology" : "Django, DRF, Python, Postgres",
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
        "technology" : "Django, DRF, Python, Postgres",
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

    {"name": "ESAP-GUI",
        "short_description" : "ESAP-GUI Frontend or the European Escape Project",
        "description" : "ESAP-GUI Frontend or the European Escape Project",
        "type": "frontend reactjs",
        "technology" : "ReactJS, Bootstrap",
        "thumbnail": "/assets/esap_gui.png",
        "details_card": ProjectDetailsCard,

        "details" : [
            { "image" : "/assets/esap_gui.png",
                "description" : "Main screen with the overview of the available archives as configured in the underlying sqlite database." },
            { "image" : "/assets/esap_gui_query.png",
                "description" : "Query resuls on one of the archives (APERTIF)" },
        ]
    },

    {"name": "ESAP-API",
        "short_description" : "ESAP-API Backend or the European Escape Project.",
        "description" : "ESAP-API Backend or the European Escape Project.",
        "type": "backend django",
        "technology" : "Django, DRF, Sqlite",
        "thumbnail": "/assets/esap_api.png",
        "details_card": ProjectDetailsCard,

        "details" : [
            { "image" : "/assets/esap_api.png",
                "description" : "Main screen of the Query app, with REST API endpoints" },
            { "image" : "/assets/esap_api_architecture.png",
                "description" : "Overall architecture of ESAP" },
        ]
    },

    {"name": "AstroView",
        "short_description" : "Frontend for astrophotography database (AstroBase). Various async image processing pipelines. Image cutouts",
        "description" : "Frontend for astrophotography database (AstroBase). Various async image processing pipelines. Image cutouts",
        "type": "private,frontend reactjs",
        "technology" : "ReactJS, Bootstrap, Aladin Light",
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
            { "image" : "/assets/the_home_observatory.png",
                "description" : "The home observatory" },
        ]
    },

    {"name": "AstroBase",
        "short_description" : "Astrophotography backend/API in Django. Based on ATDB for APERTIF",
        "description" : "Astrophotography backend/API in Django. Based on ATDB for APERTIF",
        "type": "private,backend django",
        "technology" : "Django, DRF, Sqlite, Python, Celery, RabbitMQ",
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
        "technology" : "ReactJS, Bootstrap",
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
        "technology" : "Django, DRF, Sqlite, RabbitMQ",
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

    {"name": "HiPS",
        "short_description" : "HiPS website for ASTRON surveys in Virtual Observatory (VO)",
        "description" : "HiPS website for ASTRON surveys in Virtual Observatory (VO). " +
            "This is a simple frontend application that displays server side instances of DACHS in an iframe." +
            "VO personal can add surveys by editing a configuration file without the need to update this software.",
        "type": "frontend reactjs",
        "technology" : "ReactJS, Bootstrap",
        "thumbnail": "/assets/hips_dr2.png",
        "details_card": ProjectDetailsCard,

        "details" : [
            { "image" : "/assets/hips.png",
                "description" : "Main welcome." },
            { "image" : "/assets/hips_dr2.png",
                "description" : "One of the survey pages." },
        ]
    },

    {"name": "MoM WSRT",
        "short_description" : "Project Administration for Observations of the Westerbork Synthesis Radio Telescope (WSRT)",
        "description" : "Project Administration for Observations of the Westerbork Synthesis Radio Telescope (WSRT)",
        "type": "java",
        "technology" : "Java, Struts, Hibernate, MySQL",
        "thumbnail": "/assets/mom_2004.jpg",
        "details_card": ProjectDetailsCard,

        "details" : [
            { "image" : "/assets/mom_2004.jpg",
                "description" : "main screen" },
        ]
    },

    {"name": "MoM LOFAR",
        "short_description" : "Project Administration for Observations of the LOFAR Telescope",
        "description" : "Project Administration for Observations of the LOFAR Telescope",
        "type": "java",
        "technology" : "Java, Struts, Hibernate, MySQL",
        "thumbnail": "/assets/mom3_main.png",
        "details_card": ProjectDetailsCard,

        "details" : [
            { "image" : "/assets/mom3_main.png",
                "description" : "main screen" },
            { "image" : "/assets/mom3_explorer.png",
                "description" : "Project explorer" },
            { "image" : "/assets/mom3_query.png",
                "description" : "Query screen" },
            { "image" : "/assets/mom3_dataproducts.png",
                "description" : "Dataproducts" },
        ]
    },

    {"name": "CRAFT",
        "short_description" : "A set of standalone modules to aid in assembling LOFAR components",
        "description" : "A set of standalone modules to aid in assembling LOFAR components. ",
        "type": "java",
        "technology" : "Java, Struts, Hibernate, MySQL",
        "thumbnail": "/assets/screenshot_craftmodule_connectingcablesutp5.jpg",
        "details_card": ProjectDetailsCard,

        "details" : [
            { "image" : "/assets/screenshot_craftmodule_cabinet_assembly.gif",
                "description" : "cabinet assembly" },
            { "image" : "/assets/screenshot_craftmodule_subrack_assembly.jpg",
                "description" : "subrack assembly" },
            { "image" : "/assets/screenshot_craftmodule_subrack_assembly2.jpg",
                "description" : "subrack assembly" },
            { "image" : "/assets/screenshot_lba1.jpg",
                "description" : "assembling the LBA (low band antenna)" },
            { "image" : "/assets/screenshot_lba2.jpg",
                "description" : "assembling the LBA (low band antenna)" },
            { "image" : "/assets/screenshot_hba1.jpg",
                "description" : "assembling the HBA (high band antenna)" },
            { "image" : "/assets/screenshot_hba2.jpg",
                "description" : "assembling the HBA (high band antenna)" },
            { "image" : "/assets/screenshot_hba3.jpg",
                "description" : "assembling the HBA (high band antenna)" },
            { "image" : "/assets/screenshot_craftmodule_connectingcablesrcu1.jpg",
                "description" : "connecting cables to RCU" },
            { "image" : "/assets/screenshot_craftmodule_connectingcablesutp1.jpg",
                "description" : "connecting utp cables" },
            { "image" : "/assets/screenshot_craftmodule_connectingcablesutp2.jpg",
                "description" : "connecting utp cables" },
            { "image" : "/assets/screenshot_craftmodule_connectingcablesutp3.jpg",
                "description" : "connecting utp cables" },
            { "image" : "/assets/screenshot_craftmodule_connectingcablesutp4.jpg",
                "description" : "connecting utp cables" },
            { "image" : "/assets/screenshot_craftmodule_connectingcablesutp5.jpg",
                "description" : "connecting utp cables" },
            { "image" : "/assets/screenshot_craftmodule_lofarwan1.jpg",
                "description" : "assembling WAN" },
            { "image" : "/assets/screenshot_craftmodule_lofarwan2.jpg",
                "description" : "assembling WAN" },
            { "image" : "/assets/screenshot_craftmodule_lofarwan3.jpg",
                "description" : "assembling WAN" },
            { "image" : "/assets/screenshot_craftmodule_lofarwan4.jpg",
                "description" : "assembling WAN" },
            { "image" : "/assets/screenshot_craftmodule_exchangecomponents1.jpg",
                "description" : "exchange components" },
        ]
    },

    {"name": "MoM SD",
        "short_description" : "MoM3 System Design, reverse engineering its functionality as preparation for the LEI/TMSS project.",
        "description" : "MoM3 System Design, reverse engineering its functionality as preparation for the LEI/TMSS project.",
        "type": "architecture",
        "thumbnail": "/assets/mom3_contextdiagram.png",
        "details_card": ProjectDetailsCard,

        "details" : [
            { "image" : "/assets/mom3_contextdiagram.png",
                "description" : "Context Diagram" },
            { "image" : "/assets/mom3_dfd0.png",
                "description" : "Dataflow Diagram - level 0" },
            { "image" : "/assets/mom3_dfd2_specification.png",
                "description" : "1.0 - Specification" },
            { "image" : "/assets/mom3_dfd2_ingest.png",
                "description" : "2.0 -  Ingest" },
            { "image" : "/assets/mom3_dfd2_controlreport.png",
                "description" : "3.0 -  Control & Reporting" },
            { "image" : "/assets/mom3_dfd2_project.png",
                "description" : "4.0 -  Projects" },
            { "image" : "/assets/mom3_gui_diagram.png",
                "description" : "Overview of all the possible user interactions with MoM3 through the GUI." },
            { "image" : "/assets/mom3_status_transitions.png",
                "description" : "Overview of all the possible status transitions of observations and pipelines in MoM" },
        ]
    },

    {"name": "MyHiking",
        "short_description" : "Django application showing all my hikes stored in a sqlite database.",
        "description" : "Django application showing all my hikes stored in a sqlite database.",
        "type": "private,backend django",
        "technology" : "Django, Sqlite, Bootstrap",
        "thumbnail": "/assets/my_hiking.png",
        "details_card": ProjectDetailsCard,

        "details" : [
            { "image" : "/assets/my_hiking.png",
                "description" : "main screen" },
            { "image" : "/assets/my_hiking_details.png",
                "description" : "details screen" },
            { "image" : "/assets/my_hiking_gallery.png",
                "description" : "image gallery" }
        ]
    },
]