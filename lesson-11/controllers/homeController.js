// homeController.js
"use strict";

/**
 * Listing 10.2
 */
exports.respondWithName1 = (req, res) => {
    res.render('index');
}

/**
 * Listing 10.3
 */
exports.getHome =(req,res)=>{ res.render('index',{
    name: "Sarah",
    people: {
        usa:{
            einstein:"Albert Einstenin",
            musk:"Elon Musk",
            Jobs:"steve Jabs"
        },
        korea:{
            psy:"싸이",
            kim:"김민수",
        },
        mexico:{
            jesus:"Jesus Alvarez"
        }
    }
});} // "/" index
// exports.getContact =(req,res)=>{} // "/contact" GET methood
// exports.postContact =(req,res)=>{} // "/contact" POST methood

exports.respondWithName = (req, res) => {
    let paramsName = req.params.myName; //라우트의 매개변수 /name/:myName
    res.render('index', { 
        name: paramsName,
        people: {
            usa:{
                einstein:"Albert Einstenin",
                musk:"Elon Musk",
                Jobs:"steve Jabs"
            },
            korea:{
                psy:"싸이",
                kim:"김민수",
            },
            mexico:{
                jesus:"Jesus Alvarez"
            }
        }
    });
};