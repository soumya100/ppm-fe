import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { FC, ReactNode } from 'react';
import text from '@/languages/en_US.json'
import { ButtonFieldInput } from '@/common';

interface FormModalCommon {
    open: boolean,
    handleClose(): void,
    dialogTitle?: string,
    dialogContentTxtCls?: string,
    dialoguContentTxt: string,
    dialogContent: ReactNode,
    handleAdd(): void,
    addTxt?: string
}

const FormModal: FC<FormModalCommon> = ({dialogContent, handleAdd, handleClose,
     open, dialogContentTxtCls,dialogTitle, dialoguContentTxt,addTxt }) => {
    return <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
            component: 'form'
        }}
    >
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
            <DialogContentText className={dialogContentTxtCls}>
                {dialoguContentTxt}
            </DialogContentText>
            {dialogContent}
        </DialogContent>
        <DialogActions>
            <ButtonFieldInput handleClick={handleClose} name={text.buttonNames.cancel} 
            type={'button'}
             variant={`outlined`} buttonextracls={` rounded-full capitalize`}/>
            <ButtonFieldInput handleClick={handleAdd} 
            name={addTxt ?? text.buttonNames.add} variant={`outlined`}
             buttonextracls={`rounded-full capitalize bg-green-500`} extraTextCls={`text-green-500`}/>
        </DialogActions>
    </Dialog>
}

export default FormModal