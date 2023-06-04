const fs = require('fs');
const path = require('path');

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const Goal = require('./models/goal');
const { exit } = require('process');

const app = express();
