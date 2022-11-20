import ProjectDetailsCard from "../routes/portfolio/ProjectDetailsCard";

export const base_url =
    process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://uilennest.net/cv"

export const projects = [

    {"name": "ATDB (2018)",
        "short_description" : "Observation and Pipeline management for APERTIF/WSRT Telescope. Microservices architecture in Django and Python.",
        "description" : "APERTIF Task Database. Observation and Pipeline management for APERTIF/WSRT Telescope. Microservices architecture in Django and Python. " +
            "An important part of this project where the diagrams, the models of diffent aspects of the ATDB system, " +
            "I considered them the 'central campfire' around we all sit and talk about our requirements and plans.",
        "type": "backend_django",
        "year": " (2018)",
        "technology" : "Django, DRF, Python, Postgres",
        "developed" : "Developed in 2018. Operational from 2018 until 2021.",
        "operational": "2018 - now",
        "role" : "my role: main developer",
        "thumbnail": "/assets/atdb_gui_main.png",
        "details_card": ProjectDetailsCard,

        "details" : [
            { "image" : "/assets/atdb_gui_main.png",
                "description" : "The main GUI shows the observation tasks with just enough metadata needed for operation. " +
                    "The tasks are created with a python script (not visible) and added through the ATDB REST API." },
            { "image" : "/assets/atdb_contextdiagram.png",
                "description" : "The CONTEXT diagram shows the environment that ATDB operates in. " +
                    "The central yellow circle is the ATDB backend, surrounded by a cloud of micro-services, " +
                    "spread over 4 different machines (the 4 quadrants of the diagram)." +
                    "The 'green zones' is the ATDB ecosystem, where the micro-services live that are maintained by " +
                    "the ATDB development team. This diagram shows how ATDB and those micro-services interface with " +
                    "the rest of the world." },
            { "image" : "/assets/atdb_deploymentdiagram.png",
                "description" : "The DEPLOYMENT diagram shows where ATDB is deployed in the system. " +
                    "The scope is enhanced a bit, to also show the systems that ATDB interfaces with." +
                    "Its own micro-services, but also its sister application, ALTA. The Apertif Long Term Archive." },
            { "image" : "/assets/atdb_statediagram.png",
                "description" : "The STATE diagram shows the possible states that an observation can be in, " +
                    "and which of the micro services respond to those states. " +
                    "So this is a data oriented model, and really helps to understand some of the behaviour of the ATDB " +
                    "system as a whole." },
        ]
    },

    {"name": "ATDB-LDV (2021)",
        "short_description" : "Pipeline Execution Framework for the LOFAR Data Validation project (LDV). Micro-services architecture, based on ATDB for APERTIF.",
        "description" : "Pipeline Execution Framework for the LOFAR Data Validation project (LDV). " +
            "A micro-services architecture, based on ATDB for APERTIF, but with much more user facing functionality. ",
        "type": "backend_django",
        "year": " (2021)",
        "technology" : "Django, DRF, Python, Postgres",
        "developed" : "Developed and operatinal in 2021, operational.",
        "role" : "main developer",
        "thumbnail": "/assets/atdb_ldv_gui_main.png",
        "details_card": ProjectDetailsCard,

        "details" : [
            { "image" : "/assets/atdb_ldv_gui_main.png",
                "description" : "The TASKS screen shows the pipeline tasks and their status. " +
                    "The user can do some basic filtering, control the priority of individual tasks" +
                    " and access more detailed information with the 'details' and 'workflow' buttons." },
            { "image" : "/assets/atdb_ldv_details.png",
                "description" : "The DETAILS screen shows more details per task and has links to additional information, " +
                    "logfiles, the ReST API and contents of JSON blobs." },
            { "image" : "/assets/atdb_ldv_dashboard.png",
                "description" : "The DASHBOARD shows the overall progress through per workflow (pipeline)." },
            { "image" : "/assets/atdb_ldv_filter.png",
                "description" : "The FILTER screen provides detailed filtering and buttons to change the status of multiple " +
                    "tasks at once. This powerful functionality requires users with the proper operational rights." },
            { "image" : "/assets/atdb_ldv_quality.png",
                "description" : "The QUALITY screen shows an overview of properties that are used to automatically estimate the quality of the data. " +
                    "There is also access to a range of quality plots to assist the user in assessing the quality manually." },
            { "image" : "/assets/atdb_ldv_validation.png",
                "description" : "The VALIDATION screen shows an important manual step in the proces. " +
                    "Before the output data of the workflows is allowed to be ingested in the LOFAR archive (LTA)," +
                    "it has to be manually validated by an operator/astronomer. " +
                    "Once a 'Poor', 'Medium' or 'Good' button is clicked, the flow continues and the data will be ingested in the LTA. " },
            { "image" : "/assets/atdb_ldv_failures.png",
                "description" : "The FAILURES screen gives an overview of tasks that failed in any of the steps in the workflow. " +
                    "The 'retry' button will set the status of a tasks to an appropriate value so that the failed step can be retried." },
            { "image" : "/assets/atdb_ldv_monitoring.png",
                "description" : "The MONITORING screen gives an overview of the status of the micro-services by showing when they last checked in. " +
                    ", showing a 'late' indication in red when that last check-in exceeds the expected time. " +
                    "This page also gives access to the monitoring of the Spider cluster through Grafana and Ganglia" },
            { "image" : "/assets/atdb_ldv_configuration.png",
                "description" : "Many of the configuration parameters of the LDV framework are stored centrally in the ATDB database. " +
                    "The are accessable by the services through the REST API, and editable by admins in this configuration screen." },

        ]
    },

    {"name": "ESAP-GUI (2020)",
        "short_description" : "ESAP-GUI Frontend for the European Escape Project",
        "description" : "ESAP-GUI Frontend or the European Escape Project",
        "type": "frontend_reactjs",
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

    {"name": "ESAP-API (2020)",
        "short_description" : "ESAP-API Backend or the European Escape Project.",
        "description" : "ESAP-API Backend or the European Escape Project.",
        "type": "backend_django",
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

    {"name": "ALTA-GUI (2017 - 2018)",
        "short_description" : "Frontend for the Apertif Long Term Archive (ALTA)",
        "description" : "Frontend for the Apertif Long Term Archive (ALTA)",
        "type": "frontend_reactjs",
        "technology" : "ReactJS, Bootstrap",
        "thumbnail": "/assets/alta_gui.png",
        "details_card": ProjectDetailsCard,

        "details" : [
            {
                "image" : "/assets/alta_gui.png",
                "description" : "Main screen with the overview of the available archives as configured in the underlying sqlite database." },
            {
                "image" : "/assets/alta_details.png",
                "description" : "Observation details" },
            {
                "image" : "/assets/alta_gui_list.png",
                "description" : "List view" },
            {
                "image" : "/assets/alta_inspectionplots.png",
                "description" : "Inspectionplots" },
            {
                "image" : "/assets/alta_ingest_monitor.png",
                "description" : "Ingest Monitor" },
            {
                "image" : "/assets/alta_advanced_query.png",
                "description" : "Advanced query page to search deeper in the ALTA archive. This is a separate ReactJS application that operates on the ALTA frontend." },
        ]
    },

    {"name": "ALTA-API (2017 - 2018)",
        "short_description" : "ALTAPI Backend for the Apertif Long Term Archive.",
        "description" : "ALTAPI Backend for the Apertif Long Term Archive.",
        "type": "backend_django",
        "technology" : "Django, DRF, Postgres",
        "thumbnail": "/assets/alta_api.png",
        "details_card": ProjectDetailsCard,

        "details" : [
            { "image" : "/assets/alta_api.png",
                "description" : "ALTA backend REST API endpoints" },
            { "image" : "/assets/alta_datamodel",
                "description" : "ALTA datamodel" },
        ]
    },

    {"name": "Aladin-Testbed (2022)",
        "short_description" : "Frontend web application to test out various API's and visualisations with Aladin Light.",
        "description" : "Frontend web application to test out various API's and visualisations with Aladin Light.",
        "type": "frontend_reactjs,private",
        "technology" : "ReactJS, Bootstrap",
        "thumbnail": "/assets/aladin_testbed.png",
        "details_card": ProjectDetailsCard,

        "details" : [
            { "image" : "/assets/aladin_testbed.png",
                "description" : "Testing backend technology by selecting a backend/API server and visualizing the APERTIF dataset in Aladin Light." },
            { "image" : "/assets/aladin_hips_catalog.png",
                "description" : "Testing the aladin 'hips catalog' technology." +
                    "A dataset is converted with the hipsgen software into a multi layered HiPS catalog." },
            { "image" : "/assets/aladin_testbed_ucac4.png",
                "description" : "Demonstrating a very large dataset (114M stars) served by FastAPI" },
        ]
    },

    {"name": "Exoplanets (2021)",
        "short_description" : "Technology demonstration to show how to use Aladin Light in a ReactJS frontend.",
        "description" : "Technology demonstration to show how to use Aladin Light in a ReactJS frontend." +
            "This project was created to assist a french/us development team at the university of Amsterdam",
        "type": "frontend_reactjs,private",
        "technology" : "ReactJS, Bootstrap",
        "thumbnail": "/assets/exoplanets.jpg",
        "details_card": ProjectDetailsCard,

        "details" : [
            { "image" : "/assets/exoplanets.jpg",
                "description" : "Technology demonstration to show how to use Aladin Light in a ReactJS frontend." },
        ]
    },

    {"name": "HiPS (2020)",
        "short_description" : "HiPS website for ASTRON surveys in Virtual Observatory (VO)",
        "description" : "HiPS website for ASTRON surveys in Virtual Observatory (VO). " +
            "This is a simple frontend application that displays server side instances of DACHS in an iframe." +
            "VO personal can add surveys by editing a configuration file without the need to update this software.",
        "type": "frontend_reactjs",
        "technology" : "ReactJS, Bootstrap",
        "thumbnail": "/assets/hips_dr2.png",
        "details_card": ProjectDetailsCard,

        "details" : [
            { "image" : "/assets/hips_dr2.png",
                "description" : "Main welcome." },
            { "image" : "/assets/hips.png",
                "description" : "One of the survey pages." },
        ]
    },

    {"name": "MoM SD (2016)",
        "short_description" : "MoM3 System Design, reverse engineering its functionality as preparation for the LEI/TMSS project.",
        "description" : "MoM3 System Design, reverse engineering its functionality as preparation for the LEI/TMSS project.",
        "type": "architecture,java",
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

    {"name": "MoM WSRT (2004 - 2009)",
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

    {"name": "MoM LOFAR (2009 - 2016)",
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


    {"name": "Architecture",
        "short_description" : "Examples of Architecture and modelling",
        "description" : "This shows a range of types of diagrams that I use to model a 'system', or a series of software components.",
        "type": "architecture",
        "thumbnail": "/assets/map_sdc_rainbow.png",
        "details_card": ProjectDetailsCard,

        "details" : [
            {
                "image" : "/assets/map_sdc_rainbow.png",
                "description" : "Architecture Diagram: shows the overview of interrelated software components and dataflows" },
            {
                "image" : "/assets/adex_implementation_sadt.png",
                "description" : "SADT: shows the flow of steps of a development process and it dependencies" },
            {
                "image" : "/assets/diagrams_context.png",
                "description" : "Context Diagram: shows a 'system', or a software component, in the center" +
                    " surrounded by the environment outside of that system. It shows how the component interfaces with its environment." },
            {
                "image" : "/assets/diagram_deployment_adex.png",
                "description" : "Deployment Diagram: shows how and where components are deployed in the real world" },
            {
                "image" : "/assets/diagram_deployment_atdb_ldv.png",
                "description" : "Deployment Diagram: shows how and where components are deployed in the real world" },
            {
                "image" : "/assets/diagram_datamodel.png",
                "description" : "Datamodel: shows the structure of the database" },
            {
                "image" : "/assets/diagram_std.png",
                "description" : "State Transition Diagram: shows how state in a software component changes" },
            {
                "image" : "/assets/diagram_structurechart.png",
                "description" : "Structurechart: shows the internal implementation of a software component" },

        ]
    },

    {"name": "CRAFT (2010)",
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

    {"name": "AstroView (2019)",
        "short_description" : "Frontend for astrophotography database (AstroBase). Various async image processing pipelines. Image cutouts",
        "description" : "Frontend for astrophotography database (AstroBase). Various async image processing pipelines. Image cutouts",
        "type": "private,frontend_reactjs",
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

    {"name": "AstroBase (2019)",
        "short_description" : "Astrophotography backend/API in Django. Based on ATDB for APERTIF",
        "description" : "Astrophotography backend/API in Django. Based on ATDB for APERTIF",
        "type": "private,backend_django",
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

    {"name": "EnergyView (2017)",
        "short_description" : "Frontend in ReactJS for EnergyServer. Displays live and historical energy usage and weather.",
        "description" : "Frontend in ReactJS for EnergyServer. Displays live and historical energy usage and weather.",
        "type": "private,frontend_reactjs",
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

    {"name": "EnergyServer (2017)",
        "short_description" : "Django backend running on Raspberry Pi, connected to a smart energy meter. Interfaces with Domoticz home automation and external solar panel API.",
        "description" : "Django backend running on Raspberry Pi, connected to a smart energy meter. Interfaces with Domoticz home automation and external solar panel API.",
        "type": "private,backend_django",
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

    {"name": "MyHiking (2016)",
        "short_description" : "Django application showing all my hikes stored in a sqlite database.",
        "description" : "Django application showing all my hikes stored in a sqlite database.",
        "type": "private,backend_django",
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