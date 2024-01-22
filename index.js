import {
  addContact,
  removeContact,
  listContacts,
  getContactById,
} from "./contacts.js";

import { program } from "commander";

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  let result;
  switch (action) {
    case "list":
      result = await listContacts();
      console.log(result);
      break;

    case "get":
      result = await getContactById(id);
      console.log(result);
      break;

    case "add":
      result = await addContact(name, email, phone);
      console.log(result);
      break;

    case "remove":
      result = await removeContact(id);
      console.log(result);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);
