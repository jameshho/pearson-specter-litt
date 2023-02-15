const personnel = [
    {
        id:12011,
        name: "Jessica Pearson",
        img: "jessica-pearson.jpg",
    
        background: "Jessica Pearson is a partner at Pearson Specter Litt, a **Harvard Law School** graduate known for her **intelligence** and **integrity**. Pearson possesses outstanding negotiating skills and leadership abilities. She excels in **Mergers & Acquisitions** and **Leveraged Buyouts**, having represented many prominent companies in various corporate transactions. With **extensive knowledge** in various industries, clients **trust** her to protect their legal interests and achieve their goals.",
        practice: ["Corporate law", "Mergers and Acquisitions", "Securities law", "Intellectual property law", "Labor Law"],
        achievements: ["Successfully represented a major corporation in a multi-billion dollar merger",
            "Won a high-stakes securities fraud case",
            "Negotiated a favorable settlement in a high-profile labor dispute",
            "Secured a key victory for a client in a closely watched intellectual property case"]
    }, 
    {
        id:12002,
        name: "Harvey Spector",
        img: "harvey-spector.jpg",
        background: "Harvey Spector is a **top corporate lawyer** and managing partner at Pearson Specter Litt. He holds a law degree from **Harvard Law School** and has a reputation as a ruthless negotiator.",
        achievements: ["Successfully represented a major corporation in a multi-billion dollar merger", "Won a high-stakes securities fraud case", "Negotiated a favorable settlement in a high-profile labor dispute", "Secured a key victory for a client in a closely watched intellectual property case"],
        
        practice:
        ["Corporate law", "Mergers and Acquisitions", "Securities law", "Intellectual property law", "Labor law"]
    },
    
    {
        id:12001,
        name: "Louis Litt",
        img: "louis-litt.jpg",
        
        background: "Louis Litt is a **Harvard Law School** graduate who worked his way up from an associate to a senior partner at Pearson Specter Litt. He is known for his **attention to detail** and **sharp legal mind**, but also for his eccentric and comical personality.",
        achievements: ["Successfully defended the firm against a former client's lawsuit",
        "Helped negotiate the merger of two large companies",
        "Represented a major entertainment company in a high-stakes intellectual property case",
        "Secured a lucrative contract for the firm with a top financial services company"],
        practice:
        ["Corporate law", "Mergers and Acquisitions", "Securities law", "Intellectual Property Law"]
    },
    {
        id:12004,
        name: "Mike Ross",
        img: "mike-ross.jpg",

        background: "Mike Ross is a talented legal closer who, despite never attending law school, landed a job at Pearson Specter Litt with the help of Harvey Spector. He is known for his **quick thinking** and **excellent memory**, as well as his strong moral compass.",
        practice: ["Corporate law", "Mergers and Acquisitions", "Securities law", "Intellectual property law", "Criminal defense"],
        achievements:
            ["Successfully closed a major corporate deal",
                "Secured a favorable settlement for a client in a securities fraud case",
                "Represented a small business in a high-stakes intellectual property dispute",
                "Assisted in the successful defense of a criminal case."]
    },

    {
        id:12003,
        name: "Rachel Zane",
        img: "rachel-zane.jpg",

        background:

            "Rachel Zane is a paralegal and legal secretary who eventually attends and graduates from **Columbia Law School**. She is known for her **intelligence and ambition**, as well as her strong work ethic and loyalty to her colleagues."
        , 
        achievements: ["Successfully argued a motion in court",
            "Helped negotiate a complex contract for a client",
            "Represented a community organization in a pro bono environmental law case",
            "Assisted in the successful resolution of a civil litigation matter"],

        practice: ["Contract law", "Civil litigation", "Intellectual property law", "Environmental law"]
    }

    ,
    
    {
        id:12012,
        name: "Dana Scott",
        img: "dana-scott.webp",

        background: "Dana Scott is a **top litigator** and partner at Zane Specter Litt. She holds a law degree from **Harvard Law School** and is known for her tough, confident demeanor and her ability to close cases.",
        practice: ["Litigation", "Contract law", "Tort law", "Environmental law", "Intellectual property law"],
        achievements: ["Successfully argued a motion in court",
            "Won a high-stakes civil litigation case",
            "Represented a community organization in a pro bono environmental law case",
            "Assisted in the successful resolution of a complex contract dispute",
            "Secured a favorable settlement for a client in a closely watched intellectual property dispute."]
    },
    {
        id:12005,
        name: "Daniel Hardman",
        img: "daniel-hardman.webp",
        
        background:
            "Daniel Hardman is a successful and cunning attorney who has a law degree from an unnamed university. He is a former partner at Pearson Specter Litt and is known for his ambition, strategic mind, and his willingness to do whatever it takes to win a case. Despite his questionable tactics, he is **highly respected** in the legal community.",
        practice:
            ["Corporate law", "Mergers and Acquisitions", "Securities law", "Intellectual property law", "Labor law"],
        achievements:
            [

                "Successfully negotiated several high-stakes mergers and acquisitions",
                "Won a number of high-profile securities fraud cases",
                "Represented a major corporation in a closely watched intellectual property dispute",
                "Negotiated a favorable settlement in a high-stakes labor dispute",
                "Helped to build Pearson Specter Litt into a top-tier law firm."
            ]

    },


    {
        id:12010,
        name: "Robert Zane",
        img: "robert-zane.webp",

        background: "Robert Zane is a highly respected and successful attorney, who holds a law degree from **Columbia Law School**. He is the founder of his own law firm, **Zane Specter Litt**, and is known for his cunning and strategic mind, as well as his strong sense of loyalty to his family.",
        practice: ["Corporate law", "Mergers and Acquisitions", "Securities law", "Intellectual property law"],
        achievements: ["Successfully negotiated a multi-billion dollar merger",
            "Won a high-stakes securities fraud case",
            " Secured a key victory for a client in a closely watched intellectual property case",
            "Represented a major entertainment company in a high-stakes contract dispute"]
    }
    
    ,
    {
        id:12007,
        name: "Charles Mcgill",
        img: "charles-mcgill.webp",

        background: "Charle has a law degree from **Columbia Law School** and is known for his intelligence, integrity, and attention to detail."
        ,
        practice: ["Corporate Law", "Securities Law", "Intellectual Property Law", "Contract Law", "Environmental Law"],

        achievements: ["Successfully argued a motion in court",
            "Won a high-stakes securities fraud case",
            "Represented a major corporation in a closely watched intellectual property dispute",
            "Assisted in the successful resolution of a complex contract dispute",
            "Represented a community organization in a pro bono environmental law case"]
    }
    ,
    {
        id:12006,
        name: "Saul Goodman",
        img: "saul-goodman.jpg",


        background: "Saul Goodman, real name Jimmy McGill, is a criminal lawyer and the principal character of Better Call Saul. He has a law degree from a correspondence school, but his education is often portrayed as less than adequate. Despite this, he is a cunning and resourceful attorney, **known for his street smarts and his ability to find creative solutions for his clients.**",
        practice: ["Criminal Law", "White - Collar Crime", "Personal Injury", "Consumer Law", "Elder Law"],

        achievements:
            ["Successfully defended a client in a high-stakes criminal case",
                "Won a multi-million dollar settlement in a personal injury case",
                "Assisted in the resolution of several white-collar crime cases",
                "Obtained a favorable settlement for a client in a consumer law dispute",
                "Represented several elderly clients in elder law cases"]

    }
  

    ,
    {
        id:12008,
        name: "Howard Hamlin",
        img: "howard-hamlin.jpg",

        background: "Howard Hamlin is a successful and well - respected attorney and a managing partner at Hamlin, Hamlin & McGill(HHM).He has a law degree from **Harvard Law School** and is known for his intelligence, his strategic mind, and his ability to close deals.Despite his success, he is often portrayed as being somewhat of a ruthless opportunist.",

        practice: ["Corporate Law", "Mergers and Acquisitions", "Securities Law", "Intellectual Property Law", "Labor Law"],

        achievements: ["Successfully negotiated several high-stakes mergers and acquisitions",
            "Won a number of high-profile securities fraud cases",
            "Represented a major corporation in a closely watched intellectual property dispute",
            "Negotiated a favorable settlement in a high-stakes labor dispute",
            "Helped to build Hamlin, Hamlin & McGill into a top-tier law firm"]
    }
    
    ,

    {
        id:12009,
        name: "Kim Wexler",
        img: "kim-wexler.jpg",

        background: "Kim Wexler is a **talented** and **ambitious** attorney who is a secretary at the law firm HHM before eventually becoming a successful solo practitioner.She has a law degree from an unnamed university and is known for her intelligence, her integrity, and her ability to find creative solutions for her clients.Despite her success, she is often portrayed as being somewhat of a underdog.",

        practice:
            ["Corporate Law", "Securities Law", "Intellectual Property Law", "Contract Law", "Environmental Law"],

        achievements:
            ["Successfully argued a motion in court",
                "Won a high-stakes securities fraud case",
                "Represented a major corporation"
            ]
    },
    
    // {
    //     id:12013,
    //     name: "William Oakley",
    //     img: "william-oakley.webp",

    //     background: ' William "Bill" Oakley is a defense attorney based in Albuquerque, New Mexico. He has served as a deputy district attorney for 12 years before transitioning to private practice. This extensive experience in the criminal justice system has provided him with a **deep understanding of the law and legal proceedings.**',

    //     practice:
    //         ["Criminal Defense", "DUI Defense", "Drug Crimes", "White Collar Crimes", "Appeals"],

    //     achievements:
    //         ["Successfully defended clients against a range of criminal charges, including DUI, drug crimes, and white collar crimes",
    //             "Obtained favorable outcomes for clients through plea bargains and motion practice",
    //             "Won several appeals cases, overturning wrongful convictions and securing new trials",
    //             "Developed a reputation as a skilled litigator and dedicated advocate for clients",
    //             "Built a successful private practice with a large client base in Albuquerque and surrounding areas"]

    // }
]
export default personnel