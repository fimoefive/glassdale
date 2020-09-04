console.log("main.js, is working");

import { OfficerList } from "./officers/officerList.js";
import {OfficerSelect} from "./officers/officerSelect.js";
import { CriminalList } from "./criminals/criminalList.js";
import { ConvictionList } from "./conviction/ConvictionSelect.js";
import { NoteForm } from "./notes/noteForm.js";
import {NoteList} from "./notes/noteList.js";


OfficerList();
OfficerSelect();
CriminalList();
ConvictionList();
NoteForm();
NoteList();