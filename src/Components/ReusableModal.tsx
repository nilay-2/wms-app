import React, { ReactNode } from 'react';
import { Dialog, DialogProps, DialogTitle, DialogContent, Divider, IconButton, DialogActions, Button, Grid, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface ReusableModalProps extends DialogProps {
    title: string;
    children: ReactNode;
    onClose: () => void;
    hasDialogAction?: boolean;
    onSave?: () => void;
}

const ReusableModal: React.FC<ReusableModalProps> = ({ title, children, onClose, hasDialogAction = false, onSave, ...props }) => {
    return (
        <Box sx={{ borderRadius: 1 }}>
            <Dialog onClose={onClose} {...props}>
                <DialogTitle>
                    {title}
                    <IconButton aria-label="close" onClick={onClose} sx={{ position: 'absolute', right: 8, top: 8 }}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <Divider sx={{ mx: 2 }}></Divider>
                <DialogContent>
                    {children}
                    {hasDialogAction && (
                        <DialogActions sx={{ mt: 1, mb: 0 }}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={6} container justifyContent="flex-end">
                                    <Button onClick={onClose} color="primary">
                                        Cancel
                                    </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button onClick={onSave} color="primary">
                                        Save
                                    </Button>
                                </Grid>
                            </Grid>
                        </DialogActions>
                    )}
                </DialogContent>
            </Dialog>
        </Box>
    );
};

export default ReusableModal;