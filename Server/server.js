// Require express
const express = require('express');
const { manageEnvelopeRouter } = require('./Router/manageEnvelops');
const viewEnvelopesRouter = require('./Router/viewEnvelopes');
// Create express app instance
const app = express();

// Use manage Envelops router
app.use('/manage-envelopes', manageEnvelopeRouter);
app.use('/view-envelopes', viewEnvelopesRouter);


// Start server
app.listen(4000, () => {
    console.log('Server listening on port 4000');
})