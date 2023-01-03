import * as React from 'react';
import { styled } from '@mui/material/styles';
import Arrow from '../components/assets/Arrow.jsx';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion style={{ borderRadius: '8px' }} disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    style={{ borderRadius: '8px' }}
    expandIcon={<Arrow />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? '#A1A1A1'
      : '#FDA021',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '0px solid rgba(0, 0, 0, .125)',
  borderRadius: '8px',
}));

export default function TemplateFAQ({id, question, answer}) {
  const [expanded, setExpanded] = React.useState(1);

  const handleChange = (id) => {
    return (event, newExpanded) => {
      setExpanded(newExpanded ? id : true);
    };
  };
  

  //limit the description to 15 words max
  const words = answer.split(' ');
  const limitedAnswer = words.slice(0, 40).join(' ');

  return (
    <div>
      <Accordion expanded={expanded === id} onChange={handleChange(id)}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>{question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {limitedAnswer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}