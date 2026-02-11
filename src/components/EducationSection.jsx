import {
    Card,
    CardContent,
    Typography,
    Stack,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function EducationSection({
    title,
    children,
    defaultExpanded = true
}) {
    return (
        <Card sx={{ borderRadius: 5 }}>
            <Accordion defaultExpanded={defaultExpanded} sx={{ borderRadius: 5 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 4, py: 2 }}>
                    <Typography variant="h5" fontWeight={600}>
                        {title}
                    </Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                        <Stack spacing={4}>
                            {children}
                        </Stack>
                    </CardContent>
                </AccordionDetails>
            </Accordion>
        </Card>
    );
}
