import ProjectDetailsCard from "../routes/portfolio/ProjectDetailsCard";

export const base_url =
    process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://uilennest.net/cv"

export const config = {
    "image_width" : "800",
    "image_welcome" : base_url + "/assets/welcome_image.png",
    "image_nico" : base_url + "/assets/nico.jpg",
    "image_ancient_skills" : base_url + "/assets/ancient_skills.jpg",
    "image_previous_skills" : base_url + "/assets/previous_skills.jpg",
    "image_current_skills" : base_url + "/assets/atdb_deploymentdiagram.png",
}

export const projects = [
    {"name": "ATDB (2018)",
        "route" : "atdb",
        "short_description" : "Observation and Pipeline management for APERTIF/WSRT Telescope. Microservices architecture in Django and Python.",
        "description" : "APERTIF Task Database. Observation and Pipeline management for APERTIF/WSRT Telescope. Microservices architecture in Django and Python. " +
            "An important part of this project where the diagrams, the models of diffent aspects of the ATDB system, " +
            "I considered them the 'central campfire' around we all sit and talk about our requirements and plans.",
        "type": "backend_django",
        "thumbnail": "/assets/atdb_gui_main.png",
        "details_card": ProjectDetailsCard,
        "bullets" : [
            { "title" : "Technology", "text" : "Django, DRF, Python, Postgres" },
            { "title" : "Developed", "text" : "in 2018. Operational from 2018 until 2021." },
            { "title" : "My role", "text" : "software architect, main developer." },
        ],
        "links" : [
            { "title" : "See also", "text" : "ATDB-LDV", "url" : "/cv/portfolio/all/atdb-ldv" },
            { "title" : "See also", "text" : "ALTA", "url" : "/cv/portfolio/all/alta-gui" },
        ],
        "details" : [
            { "image" : "/assets/atdb_gui_main.png",
                "description" : "The main GUI shows the observation tasks with just enough metadata needed for operation. " +
                    "The tasks are created with a python script and uploaded to ATDB through its ReST API." },
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
        "route" : "atdb-ldv",
        "short_description" : "Pipeline Execution Framework for the LOFAR Data Validation project (LDV). Micro-services architecture, based on ATDB for APERTIF.",
        "description" : "Pipeline Execution Framework for the LOFAR Data Validation project (LDV). " +
            "A micro-services architecture, based on ATDB for APERTIF, but with much more user facing functionality. ",
        "type": "backend_django",

        "thumbnail": "/assets/atdb_ldv_gui_main.png",
        "details_card": ProjectDetailsCard,
        "bullets" : [
            { "title" : "Technology", "text" : "Django, DRF, Python, Postgres" },
            { "title" : "Developed", "text" : "in 2021. Operational from 2021." },
            { "title" : "My role", "text" : "main developer." },
        ],
        "links" : [
            { "title" : "See also", "text" : "ATDB (2018)", "url" : "/cv/portfolio/all/atdb" },
            { "title" : "See also", "text" : "ldv-specification", "url" : "/cv/portfolio/all/ldvspec" },
        ],
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
            { "image" : "/assets/ldvspec-deployment.png",
                "description" : "Deployment diagram" },
        ]
    },

    {"name": "ESAP-GUI / ADEX-GUI (2020)",
        "route" : "esap-gui",
        "short_description" : "ESAP-GUI for the European Escape Project, also deployed as ADEX for the ASTRON science portal",
        "description" : "ESAP-GUI for the European Escape Project, also deployed as ADEX for the ASTRON science portal",
        "type": "frontend_reactjs",
        "thumbnail": "/assets/esap_gui.png",
        "details_card": ProjectDetailsCard,
        "bullets" : [
            { "title" : "Technology", "text" : "ReactJS, Bootstrap" },
            { "title" : "Developed", "text" : "in 2020, further development handed over to other team members " },
            { "title" : "My role", "text" : "software architect, main developer for the first iteration." },
        ],
        "links" : [
            { "title" : "See also", "text" : "ESAP-API", "url" : "/cv/portfolio/all/esap-api" },
        ],
        "details" : [
            { "image" : "/assets/esap_gui.png",
                "description" : "Main screen with the overview of the available archives as configured in the underlying sqlite database." },
            { "image" : "/assets/esap_gui_query.png",
                "description" : "Query resuls on one of the archives (APERTIF)" },
        ]
    },

    {"name": "ESAP-API (2020)",
        "route" : "esap-api",
        "short_description" : "ESAP-API Backend for the European Escape Project.",
        "description" : "ESAP-API Backend for the European Escape Project.",
        "type": "backend_django",
        "technology" : "Django, DRF, Sqlite",
        "thumbnail": "/assets/esap_api.png",
        "details_card": ProjectDetailsCard,
        "bullets" : [
            { "title" : "Technology", "text" : "Django, DRF, Sqlite" },
            { "title" : "Developed", "text" : "in 2020, further development handed over to other team members." },
            { "title" : "My role", "text" : "software architect, main developer for the first iteration." },
        ],
        "links" : [
            { "title" : "See also", "text" : "ESAP-GUI", "url" : "/cv/portfolio/all/esap-gui" },
        ],
        "details" : [
            { "image" : "/assets/esap_api.png",
                "description" : "Main screen of the Query app, with REST API endpoints" },
            { "image" : "/assets/esap_api_architecture.png",
                "description" : "Overall architecture of ESAP" },
            { "image" : "/assets/esap_datamodel.png",
                "description" : "Datamodel" },
        ]
    },


    {"name": "ADEX-backend-django (2022)",
        "route" : "adex-backend-django",
        "short_description" : "ADEX Backend for the ASTRON Data Explorer with Django.",
        "description" : "ADEX Backend for the ASTRON Data Explorer, replacing the temporary ESAP-API backend solution.",
        "type": "backend_django",
        "thumbnail": "/assets/adex_backend_django.png",
        "details_card": ProjectDetailsCard,
        "bullets" : [
            { "title" : "Technology", "text" : "Django, DRF, Postgres" },
            { "title" : "Developed", "text" : "Under development in 2022." },
            { "title" : "My role", "text" : "software architect, single developer." },
        ],
        "links" : [
            { "title" : "See also", "text" : "ESAP-API", "url" : "/cv/portfolio/all/esap-api" },
        ],
        "details" : [
            { "image" : "/assets/adex_backend_django.png",
                "description" : "Main screen of the Query app, with REST API endpoints" },
            { "image" : "/assets/adex_architecture.png",
                "description" : "Architecture and Technology choices" },
            { "image" : "/assets/adex_backend_django_deploymentdiagram.png",
                "description" : "Deployment Diagram" },
        ]
    },

    {"name": "ADEX-backend-fastapi (2022)",
        "route" : "adex-backend-fastapi",
        "short_description" : "ADEX Backend for the ASTRON Data Explorer with FastAPI.",
        "description" : "DEX Backend for the ASTRON Data Explorer with FastAPI, investigating a solution for replacing the temporary ESAP-API backend solution.",
        "type": "backend_django",
        "thumbnail": "/assets/adex_backend_fastapi.png",
        "details_card": ProjectDetailsCard,
        "bullets" : [
            { "title" : "Technology", "text" : "FastAPI, DRF, Postgres" },
            { "title" : "Developed", "text" : "in 2022 as a benchmarking experiment." },
            { "title" : "My role", "text" : "software architect, single developer." },
        ],
        "links" : [
            { "title" : "See also", "text" : "ADEX-backend-django", "url" : "/cv/portfolio/all/adex-backend-django" },
            { "title" : "See also", "text" : "adex-labs", "url" : "/cv/portfolio/all/adex-labs" },
            { "title" : "See also", "text" : "aladin-testbed", "url" : "/cv/portfolio/all/aladin-testbed" },
        ],
        "details" : [
            { "image" : "/assets/adex_backend_fastapi.png",
                "description" : "Main screen of the Query app, with REST API endpoints" },
            { "image" : "/assets/aladin_testbed.png",
                "description" : "The results visualized with Aladin LIght in a ReactJS frontend." },
            { "image" : "/assets/adex_backend_fastapi_deployment.png",
                "description" : "Deployment Diagram" },
        ]
    },

    {"name": "adex-labs (2022)",
        "route" : "adex-labs",
        "short_description" : "Frontend web application to test, validate and experiment with ADEX technology.",
        "description" : "Frontend web application to test, validate and experiment with ADEX technology.",
        "type": "frontend_reactjs",
        "thumbnail": "/assets/adex_labs.png",
        "details_card": ProjectDetailsCard,
        "bullets" : [
            { "title" : "Technology", "text" : "ReactJS, Bootstrap, Aladin Light" },
            { "title" : "My role", "text" : "single developer" },
        ],
        "links" : [
            { "title" : "See also", "text" : "ADEX-backend-django", "url" : "/cv/portfolio/all/adex-backend-django" },
            { "title" : "Live view", "text" : "Aladin-testbed", "url" : "https://uilennest.net/aladin-testbed/" },
        ],
        "details" : [
            { "image" : "/assets/adex_labs.png",
                "description" : "Testing out different backends with multiple query options. " },
            { "image" : "/assets/adex_labs_backends.png",
                "description" : "There are 2 types of backends, django and fastapi, located in 5 different places. " +
                    "Selecting a different backend, or changing any of the other filters, results in fetching and timing the data. " +
                    "This way the combination of backend technology (fastapi or django) and machine configuration can be compared. " },
            { "image" : "/assets/adex_labs_welcome.png",
                "description" : "" },

        ]
    },

    {"name": "HiPS (2020)",
        "route" : "hips",
        "short_description" : "HiPS website for ASTRON surveys in Virtual Observatory (VO)",
        "description" : "HiPS website for ASTRON surveys in Virtual Observatory (VO). " +
            "This is a simple frontend application that displays local DACHS websites in an iframe. " +
            "VO engineers can add surveys by editing a configuration file without the need to update this software.",
        "type": "frontend_reactjs",
        "thumbnail": "/assets/hips_dr2.png",
        "details_card": ProjectDetailsCard,
        "bullets" : [
            { "title" : "Technology", "text" : "ReactJS, Bootstrap, Aladin Light" },
            { "title" : "My role", "text" : "main developer" },
        ],
        "details" : [
            { "image" : "/assets/hips.png",
                "description" : "" },
            { "image" : "/assets/hips_dr2.png",
                "description" : "LoTSS DR2 High survey page " },
        ]
    },

    {"name": "LDV-specification (2022)",
        "route" : "ldvspec",
        "short_description" : "Django application for specifying tasks for ATDB-LDV.",
        "description" : "Django application for specifying tasks for ATDB-LDV. " +
            "This only shows the initial application with API endpoints, " +
            "other team members added extra functionality and a GUI for the users later.",
        "type": "backend_django",
        "technology" : "Django, Postgres, Bootstrap",
        "thumbnail": "/assets/ldvspec.png",
        "details_card": ProjectDetailsCard,
        "bullets" : [
            { "title" : "Technology", "text" : "Django, Postgres, Bootstrap" },
            { "title" : "My role", "text" : "coordinator, lead developer." },
        ],
        "links" : [
            { "title" : "See also", "text" : "ATDB-LDV", "url" : "/cv/portfolio/all/atdb-ldv" },
        ],
        "details" : [
            { "image" : "/assets/ldvspec.png",
                "description" : "API screen" },
            { "image" : "/assets/ldvspec-deployment.png",
                "description" : "Deployment diagram for ATDB-LDV and LDV-specification" },
        ],
    },


    {"name": "ALTA-GUI (2017 - 2018)",
        "route" : "alta-gui",
        "short_description" : "Frontend for the Apertif Long Term Archive (ALTA)",
        "description" : "Frontend for the Apertif Long Term Archive (ALTA)",
        "type": "frontend_reactjs",
        "thumbnail": "/assets/alta_gui.png",
        "details_card": ProjectDetailsCard,
        "bullets" : [
            { "title" : "Technology", "text" : "ReactJS, Bootstrap" },
            { "title" : "Developed", "text" : "in 2017/2018." },
            { "title" : "My role", "text" : "main frontend developer." },
        ],
        "links" : [
            { "title" : "See also", "text" : "ALTA-API", "url" : "/cv/portfolio/all/alta-api" },
            { "title" : "See also", "text" : "ATDB", "url" : "/cv/portfolio/all/atdb" },
        ],
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
        "route" : "alta-api",
        "short_description" : "Backend/API for the Apertif Long Term Archive.",
        "description" : "Backend/API for the Apertif Long Term Archive. Not only a backend for the ALTA-GUI frontend, " +
            "but also for the iRODS based data services.",
        "type": "backend_django",
        "thumbnail": "/assets/alta_api.png",
        "details_card": ProjectDetailsCard,
        "bullets" : [
            { "title" : "Technology", "text" : "Django, DRF, Postgres" },
            { "title" : "Developed", "text" : "in 2017/2018." },
            { "title" : "My role", "text" : "main backend developer." },
        ],
        "links" : [
            { "title" : "See also", "text" : "ALTA-GUI", "url" : "/cv/portfolio/all/alta-gui" },
        ],
        "details" : [
            { "image" : "/assets/alta_api.png",
                "description" : "ALTA backend REST API endpoints" },
            { "image" : "/assets/alta_datamodel.png",
                "description" : "ALTA datamodel" },
        ]
    },

    {"name": "MoM Reverse Engineering (2016)",
        "route" : "mom-sd",
        "short_description" : "MoM3 System Design, reverse engineering its functionality as preparation for TMSS.",
        "description" : "MoM3 System Design, reverse engineering its functionality as preparation for TMSS.",
        "type": "architecture,java",
        "thumbnail": "/assets/mom3_contextdiagram.png",
        "details_card": ProjectDetailsCard,
        "bullets" : [
            { "title" : "Methodology", "text" : "Structured Analyses/Structured Design (SA/SD)" },
            { "title" : "My role", "text" : "software architect" },
        ],
        "links" : [
            { "title" : "See also", "text" : "MoM (LOFAR)", "url" : "/cv/portfolio/all/mom-lofar" },
        ],
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

    {"name": "MoM Ecosystem (2016)",
        "route" : "mom-ecosystem",
        "short_description" : "The broader MoM3 ecosystem.",
        "description" : "The broader MoM3 ecosystem. This diagram shows the different instances of the MoM " +
            "software deployed for various purposes. It also shows dependencies, interfaces and configuration.",
        "type": "architecture",
        "thumbnail": "/assets/mom3_ecosystem_detailed.png",
        "details_card": ProjectDetailsCard,
        "bullets" : [
            { "title" : "My role", "text" : "main developer" },
        ],
        "links" : [
            { "title" : "See also", "text" : "MoM (LOFAR)", "url" : "/cv/portfolio/all/mom-lofar" },
        ],
        "details" : [
            { "image" : "/assets/mom3_ecosystem_detailed.png",
                "description" : "The broader MoM3 ecosystem. This diagram shows the different instances of the MoM " +
                    "software deployed for various purposes. It also shows dependencies, interfaces and configuration." },
        ]
    },

    {"name": "MoM WSRT (2004 - 2009)",
        "route" : "mom-wsrt",
        "short_description" : "Project Administration for Observations of the Westerbork Synthesis Radio Telescope (WSRT)",
        "description" : "Project Administration for Observations of the Westerbork Synthesis Radio Telescope (WSRT)",
        "type": "java",
        "technology" : "Java, Struts, Hibernate, MySQL",
        "thumbnail": "/assets/mom_2004.jpg",
        "details_card": ProjectDetailsCard,
        "bullets" : [
            { "title" : "Technology", "text" : "Java, Struts, Hibernate, MySQL" },
            { "title" : "My role", "text" : "web developer. Initially following the main (external) developer, later by myself." },
        ],
        "links" : [
            { "title" : "See also", "text" : "MoM (LOFAR)", "url" : "/cv/portfolio/all/mom-lofar" },
        ],
        "details" : [
            { "image" : "/assets/mom_2004.jpg",
                "description" : "main screen" },
        ]
    },

    {"name": "MoM LOFAR (2009 - 2016)",
        "route" : "mom-lofar",
        "short_description" : "Project Administration for Observations of the LOFAR Telescope",
        "description" : "Project Administration for Observations of the LOFAR Telescope",
        "type": "java",
        "thumbnail": "/assets/mom3_main.png",
        "details_card": ProjectDetailsCard,
        "bullets" : [
            { "title" : "Technology", "text" : "Java, Struts, Hibernate, MySQL" },
            { "title" : "My role", "text" : "main developer" },
        ],
        "links" : [
            { "title" : "See also", "text" : "MoM (WSRT)", "url" : "/cv/portfolio/all/mom-wsrt" },
            { "title" : "See also", "text" : "MoM Reverse Engineering", "url" : "/cv/portfolio/all/mom-sd" },
        ],
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

    {"name": "MoM3 Django API (2017)",
        "route" : "mom3api",
        "short_description" : "Wrapping the MoM3 MySQL database in a Django Rest API.",
        "description" : "Wrapping the MoM3 MySQL database in a Django Rest API. " +
            "This experiment was meant to provide a way to bootstrap the TMSS project with a REST API around the MoM database.",
        "type": "backend_django",
        "thumbnail": "/assets/alta_mom_api.jpg",
        "details_card": ProjectDetailsCard,
        "bullets" : [
            { "title" : "Technology", "text" : "Django, DRF, MySQL" },
            { "title" : "My role", "text" : "single developer." },
        ],
        "links" : [
            { "title" : "See also", "text" : "MoM (LOFAR)", "url" : "/cv/portfolio/all/mom-lofar" },
            { "title" : "Github Repository", "text" : "https://github.com/vermaas/mom3api", "url" : "https://github.com/vermaas/mom3api" },
        ],
        "details" : [
            { "image" : "/assets/mom3_django_api1.png",
                "description" : "" },
            { "image" : "/assets/mom3_django_api2.png",
                "description" : "" },
            { "image" : "/assets/mom3_django_api3.png",
                "description" : "" },
            { "image" : "/assets/alta_mom_api.jpg",
                "description" : "Visualisation of MoM database in ALTA Frontend (experimental)" },
            { "image" : "/assets/lofar_red_blob.jpg",
                "description" : "Visualisation of MoM database in Aladin Light " }
        ],
    },

    {"name": "System Modeling Examples",
        "route" : "architecture",
        "short_description" : "Examples of Architecture and modelling",
        "description" : "This shows a range of types of diagrams that I use to model a 'system', or a series of software components.",
        "type": "architecture",
        "thumbnail": "/assets/map_sdc_rainbow.png",
        "details_card": ProjectDetailsCard,
        "bullets" : [
            { "title" : "Methodology", "text" : "Modeling techniques from SA/SD" },
            { "title" : "My role", "text" : "architect" },
        ],
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

    {"name": "CRAFT (2012)",
        "route" : "craft",
        "short_description" : "A set of standalone modules to aid in assembling LOFAR components",
        "description" : "A set of standalone modules to aid in assembling LOFAR components. ",
        "type": "java",
        "thumbnail": "/assets/screenshot_craftmodule_connectingcablesutp5.jpg",
        "details_card": ProjectDetailsCard,
        "bullets" : [
            { "title" : "Technology", "text" : "Java, Struts, Hibernate, MySQL" },
            { "title" : "My role", "text" : "single developer" },
        ],
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
        "route" : "astroview",
        "short_description" : "Frontend for astrophotography database (AstroBase). Various async image processing pipelines. Image cutouts",
        "description" : "Frontend for astrophotography database (AstroBase). Various async image processing pipelines. Image cutouts",
        "type": "private,frontend_reactjs",
        "thumbnail": "/assets/astroview.png",
        "details_card": ProjectDetailsCard,
        "bullets" : [
            { "title" : "Technology", "text" : "ReactJS, Bootstrap, Aladin Light" },
            { "title" : "My role", "text" : "single developer" },
        ],
        "links" : [
            { "title" : "See also", "text" : "Astrobase", "url" : "/cv/portfolio/all/astrobase" },
        ],
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
            { "image" : "/assets/the_home_observatory.jpg",
                "description" : "The home observatory" },
        ]
    },

    {"name": "AstroBase (2019)",
        "route" : "astrobase",
        "short_description" : "Astrophotography backend/API in Django. Based on ATDB for APERTIF",
        "description" : "Astrophotography backend/API in Django. Based on ATDB for APERTIF",
        "type": "private,backend_django",
        "thumbnail": "/assets/astrobase.png",
        "details_card": ProjectDetailsCard,
        "bullets" : [
            { "title" : "Technology", "text" : "Django, DRF, Sqlite, Python, Celery, RabbitMQ, Gitlab actions, Docker" },
            { "title" : "My role", "text" : "single developer." },
        ],
        "links" : [
            { "title" : "See also", "text" : "AstroView", "url" : "/cv/portfolio/all/astroview" },
            { "title" : "See also", "text" : "ATDB", "url" : "/cv/portfolio/all/atdb" },
        ],
        "details" : [
            { "image" : "/assets/astrobase.png",
                "description" : "main screen" },
        ]
    },


    {"name": "EnergyView (2017)",
        "route" : "energyview",
        "short_description" : "Frontend in ReactJS for EnergyServer. Displays live and historical energy usage and weather.",
        "description" : "Frontend in ReactJS for EnergyServer. Displays live and historical energy usage and weather.",
        "type": "private,frontend_reactjs",
        "thumbnail": "/assets/my_energy_view.png",
        "details_card": ProjectDetailsCard,
        "bullets" : [
            { "title" : "Technology", "text" : "ReactJS, Bootstrap" },
            { "title" : "My role", "text" : "single developer." },
        ],
        "links" : [
            { "title" : "See also", "text" : "Energy Server", "url" : "/cv/portfolio/all/energyserver" },
        ],
        "details" : [
            { "image" : "/assets/my_energy_view.png",
                "description" : "Electricity usage for the current day. The yellow bars show the nett usage/delivery that is read from the smart meter. " +
                    "The green line is what the external API for the solar panel reports. From that the red line is calculated, which shows the actual power usage."},
            { "image" : "/assets/my_energy_view_solarpanels.png",
                "description" : "The total output of the solar panels for the current year."},
            { "image" : "/assets/my_energy_view_gas_week.png",
                "description" : "Gas usage per week. This is read and stored by the 3rd Domoticz software on a Raspberry Pi. " +
                    "My homemade 'EnergyServer' Django backend reads the Domoticz database and adds the data to its own database. " +
                    "The EnergyView frontend contacts the EnergyServer through a REST API and displays the data." },
            { "image" : "/assets/my_energy_view_weather.png",
                "description" : "Rain and Temperature. Also read from the Domoticz database." },
            { "image" : "/assets/my_energy_view_structurechart.png",
                "description" : "Documentation of the source code." },
        ]
    },

    {"name": "EnergyServer (2017)",
        "route" : "energyserver",
        "short_description" : "Django backend running on Raspberry Pi, connected to a smart energy meter. Interfaces with Domoticz home automation and external solar panel API.",
        "description" : "Django backend running on Raspberry Pi, connected to a smart energy meter. Interfaces with Domoticz home automation and external solar panel API.",
        "type": "private,backend_django",
        "thumbnail": "/assets/my_energy_server.png",
        "details_card": ProjectDetailsCard,
        "bullets" : [
            { "title" : "Technology", "text" : "Django, DRF, Sqlite, RabbitMQ, Raspberry Pi, Domoticz, smart meter" },
            { "title" : "My role", "text" : "single developer." },
        ],
        "links" : [
            { "title" : "See also", "text" : "EnergyView", "url" : "/cv/portfolio/all/energyview" },
        ],
        "details" : [
            { "image" : "/assets/my_energy_server.png",
                "description" : "main screen" },
            { "image" : "/assets/my_energy_server_documentation.png",
                "description" : "Deployment Diagran and Structure Chart of the source code" },
        ]
    },


    {"name": "Aladin-Testbed (2022)",
        "route" : "aladin-testbed",
        "short_description" : "Frontend web application to test out various API's and visualisations with Aladin Light.",
        "description" : "Frontend web application to test out various API's and visualisations with Aladin Light.",
        "type": "frontend_reactjs,private",
        "thumbnail": "/assets/aladin_testbed.png",
        "details_card": ProjectDetailsCard,
        "bullets" : [
            { "title" : "Technology", "text" : "ReactJS, Bootstrap, Aladin Light, Gitlab actions" },
            { "title" : "My role", "text" : "single developer" },
        ],
        "links" : [
            { "title" : "See also", "text" : "Exoplanets", "url" : "/cv/portfolio/all/exoplanets" },
            { "title" : "Live view", "text" : "Aladin-testbed", "url" : "https://uilennest.net/aladin-testbed/" },
        ],
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
        "route" : "exoplanets",
        "short_description" : "Technology demonstration to show how to use Aladin Light in a ReactJS frontend.",
        "description" : "Technology demonstration to show how to use Aladin Light in a ReactJS frontend." +
            "This project was created to assist a French/US development team, from the University of Amsterdam, that was refered to me by CDS.",
        "type": "frontend_reactjs,private",
        "thumbnail": "/assets/exoplanets.jpg",
        "details_card": ProjectDetailsCard,
        "bullets" : [
            { "title" : "Technology", "text" : "ReactJS, Bootstrap, Aladin Light, Gitlab actions" },
            { "title" : "My role", "text" : "single developer" },
        ],
        "links" : [
            { "title" : "See also", "text" : "Aladin-testbed", "url" : "/cv/portfolio/all/aladin-testbed" },
            { "title" : "Live view", "text" : "Exoplanets", "url" : "https://sdc-dev.astron.nl/exoplanets" },
        ],
        "details" : [
            { "image" : "/assets/exoplanets.jpg",
                "description" : "The goal is the visualisation in Aladin Light. " +
                    "The data itself is served by my private 'Astrobase' project through a ReST API, " +
                    "which already existed to plot stars with exoplanets in my 'AstroView' project." },
        ]
    },

    {"name": "StarCharts (2022)",
        "route" : "starcharts",
        "short_description" : "Drawing starcharts based on the 114 million star UCAC4 dataset, converted to a Postgres database.",
        "description" : "Drawing starcharts based on the 114 milion star UCAC4 dataset, converted to a Postgres database.",
        "type": "private,backend_django",
        "thumbnail": "/assets/starcharts.png",
        "details_card": ProjectDetailsCard,
        "bullets" : [
            { "title" : "Technology", "text" : "Django, Python, Postgres, Gitlab actions, Docker" },
            { "title" : "My role", "text" : "single developer." },
        ],
        "links" : [
            { "title" : "See also", "text" : "AstroBase", "url" : "/cv/portfolio/all/astrobase" },
        ],
        "details" : [
            { "image" : "/assets/starcharts.png",
                "description" : "The GUI can be used to generate a starchart and tweak desired settings into a 'scheme'. " +
                    "But the main interface is a REST API endpoint, containing sky coordinates and a scheme, to generate a skymap image on the server that an be displayed or downloaded." },
            { "image" : "/assets/starcharts_diagram.png",
                "description" : "This shows the architecture and it documents the implementation proces. " +
                    "It shows how the original binary dataset was downloaded from CDS," +
                    " converted into a Postgres datatabase and finally hosted as a remove Docker volume on a NAS." },
            { "image" : "/assets/starcharts_transients.jpg",
                "description" : "Hooking up the Starcharts app to the Transients app. " +
                    "This shows the path of Ceres over 5 days. " },
            { "image" : "/assets/starchart_new_gui.png",
                "description" : "Development is still ongoing to refine and expand the possiblities." },
        ]
    },

    {"name": "MyHiking (2016)",
        "route" : "my_hiking",
        "short_description" : "Django application showing all my hikes stored in a sqlite database.",
        "description" : "Django application showing all my hikes stored in a sqlite database. This was my first Django application",
        "type": "private,backend_django",
        "technology" : "Django, Sqlite, Bootstrap",
        "thumbnail": "/assets/my_hiking.png",
        "details_card": ProjectDetailsCard,
        "bullets" : [
            { "title" : "Technology", "text" : "Django, Sqlite, Bootstrap, Gitlab actions, Docker" },
            { "title" : "My role", "text" : "single developer." },
        ],
        "details" : [
            { "image" : "/assets/my_hiking.png",
                "description" : "main screen" },
            { "image" : "/assets/my_hiking_details.png",
                "description" : "details screen" },
            { "image" : "/assets/my_hiking_gallery.png",
                "description" : "image gallery" }
        ],
    },

    {"name": "OneTreeWood (2020)",
        "route" : "onetreewood",
        "short_description" : "Frontend in ReactJS for my private website. It shows the content from the Django 'homebase' backend application.",
        "description" : "Frontend in ReactJS for my private website. It shows the content from the Django 'homebase' backend application.",
        "type": "private,frontend_reactjs",
        "thumbnail": "/assets/onetreewood.png",
        "details_card": ProjectDetailsCard,
        "bullets" : [
            { "title" : "Technology", "text" : "ReactJS, Bootstrap" },
            { "title" : "My role", "text" : "single developer." },
        ],
        "details" : [
            { "image" : "/assets/onetreewood.png",
                "description" : "main screen" },
            { "image" : "/assets/onetreewood_travel.png",
                "description" : "details of the travel page" }
        ]
    },

    {"name": "Curriculum Vitae (2022)",
        "route" : "cv",
        "short_description" : "The ReactJS Single Page Application (SPA) that you are currently navigating.",
        "description" : "The ReactJS Single Page Application (SPA) that you are currently navigating.. Frontend in ReactJS. All content is defined in a single JSON structure, which makes the application easily customizable and re-usable as boilerplate for similar portfolio applications.",
        "type": "private,frontend_reactjs",
        "thumbnail": "/assets/cv.png",
        "details_card": ProjectDetailsCard,
        "bullets" : [
            { "title" : "Technology", "text" : "ReactJS, Bootstrap" },
            { "title" : "My role", "text" : "single developer." },
        ],
        "links" : [
            { "title" : "Repository on github", "text" : "https://github.com/nvermaas/my_cv", "url" : "https://github.com/nvermaas/my_cv" },
        ],
        "details" : [
            { "image" : "/assets/cv.png",
                "description" : "main screen" },
            { "image" : "/assets/cv_portfolio.png",
                "description" : "Portfolio" }
        ]
    },

    {"name": "LOFAR Software Landscape (2018)",
        "route" : "lofar-ecosystem",
        "short_description" : "The LOFAR system overview.",
        "description" : "This shows the software landscape of the Radio Obsevatory departement. " +
            "The goal of this overview was to provide knowledge for 'software support'",
        "type": "architecture",
        "thumbnail": "/assets/lofar_system_overview.png",
        "details_card": ProjectDetailsCard,
        "bullets" : [
            { "title" : "My role", "text" : "main developer" },
        ],
        "links" : [
            { "title" : "See also", "text" : "MoM (LOFAR)", "url" : "/cv/portfolio/all/mom-lofar" },
        ],
        "details" : [
            { "image" : "/assets/lofar_system_overview.png",
                "description" : "This shows the software landscape of the Radio Obsevatory departement. " +
                    "The goal of this overview was to provide knowledge for 'software support'. " +
                    "The links in the diagram link to all the available documentation and live systems where possible." },
        ]
    },
]