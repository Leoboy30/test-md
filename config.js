/* Copyright (C) 2022 Alien-Alfa.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Alien-Alfa Alien-Alfa
*/
const fs = require("fs");
const { Sequelize } = require("sequelize");
if (fs.existsSync("config.env"))
require("dotenv").config({ path: "./config.env" });
DATABASE_URL = process.env.DATABASE_URL || "./lib/database.db";
let HANDLER = "";
module.exports = {
  //------------------------------------------------------------------------------------------------
  //      CONFIG VARS                                             MANUAL CONFIG
  //------------------------------------------------------------------------------------------------
  LOGS:  process.env.LOGS                                       || true,
  //------------------------------------------------------------------------------------------------
  ANTILINK_ACTION:  process.env.ANTILINK_ACTION                 || "ban",
  //------------------------------------------------------------------------------------------------
  SESSION_ID: process.env.SESSION_ID                            ||  "",
  //------------------------------------------------------------------------------------------------
  LANG:  process.env.LANG                                       || "EN",
  //------------------------------------------------------------------------------------------------
  RMBG_KEY:  process.env.RMBG_KEY                               || false,
  //------------------------------------------------------------------------------------------------
  BRANCH:  process.env.BRANCH                                   || "latest",
  //------------------------------------------------------------------------------------------------
  PACKNAME:  process.env.PACKNAME                               || "Aurora" ,
  //------------------------------------------------------------------------------------------------
  WELCOME_MSG: process.env.WELCOME_MSG                          || "Hi @user Welcome to @gname",
  //------------------------------------------------------------------------------------------------
  GOODBYE_MSG: process.env.GOODBYE_MSG                          || "Hi @user It was Nice Seeing you",
  //------------------------------------------------------------------------------------------------
  AUTHOR:  process.env.AUTHOR                                   || "Alien-Alfa" ,
  //------------------------------------------------------------------------------------------------
  SUDO:  process.env.SUDO                                       || "",
  //------------------------------------------------------------------------------------------------
  OWNER_NAME:  process.env.OWNER_NAME                           || "Alien-Alfa",
  //------------------------------------------------------------------------------------------------
  BOT_NAME:  process.env.BOT_NAME                               || "Aurora",
  //------------------------------------------------------------------------------------------------
  WORK_TYPE:  process.env.WORK_TYPE                             ||  "private",
  //------------------------------------------------------------------------------------------------
  MODE:  process.env.MODE                                       || "private",
  //------------------------------------------------------------------------------------------------
  ALIVE: process.env.ALIVE                                      || "```I am active```",
  //------------------------------------------------------------------------------------------------
  FOOTER:   process.env.FOOTER                                  ||  "Alien-Alfa",
  //------------------------------------------------------------------------------------------------
  THEME:  process.env.THEME                                     ||  "alfa",
  //------------------------------------------------------------------------------------------------
  FONT_STYLE:  process.env.FONT_STYLE                           || "1" ,
  //------------------------------------------------------------------------------------------------
  LANGUAGE:  process.env.LANGUAGE                               || "EN",
  //------------------------------------------------------------------------------------------------
  INTERNAL_MENU:  process.env.INTERNAL_MENU                     || "active" ,
  //------------------------------------------------------------------------------------------------
  STORAGE_JID:  process.env.STORAGE_JID                         || "",
  //------------------------------------------------------------------------------------------------
  B1:'╭════〘 ',
  //------------------------------------------------------------------------------------------------
  B2:' 〙════⊷❍',
  //------------------------------------------------------------------------------------------------
  B3:'┃✧╭─────────────────',
  //------------------------------------------------------------------------------------------------
  B4:'┃✧│',
  //------------------------------------------------------------------------------------------------
  B5:'┃✧╰─────────────────\n╰══════════════════⊷❍',
  //------------------------------------------------------------------------------------------------
  HEROKU_APP_NAME:  process.env.HEROKU_APP_NAME,
  //------------------------------------------------------------------------------------------------
  HEROKU_API_KEY:  process.env.HEROKU_API_KEY,
  //------------------------------------------------------------------------------------------------
  KOYEB_APP_NAME: process.env.KOYEB_APP_NAME,
  //------------------------------------------------------------------------------------------------
  KOYEB_API_KEY:process.env.KOYEB_API_KEY,
  //------------------------------------------------------------------------------------------------
  DATABASE_URL: DATABASE_URL,
  //------------------------------------------------------------------------------------------------
  DATABASE:DATABASE_URL === "./lib/database.db"? new Sequelize({dialect: "sqlite",storage: DATABASE_URL,logging: false,}): new Sequelize(DATABASE_URL, {dialect: "postgres",ssl: true,protocol: "postgres",dialectOptions: {native: true,ssl: { require: true, rejectUnauthorized: false },},logging: false,}),
  //------------------------------------------------------------------------------------------------
  HANDLERS:process.env.HANDLER === "false" ? "" :process.env.HANDLER,

};


