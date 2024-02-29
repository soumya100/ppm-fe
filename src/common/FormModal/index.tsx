import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';
import text from '@/languages/en_US.json'
import { ButtonFieldInput, FlexBetween } from '@/common';
import { Close } from '@mui/icons-material';

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

const FormModal: FC<FormModalCommon> = ({ dialogContent, handleAdd, handleClose,
    open, dialogContentTxtCls, dialogTitle, dialoguContentTxt, addTxt }) => {
    return <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
            component: 'form',
            className: 'w-full'
        }}
        className='space-y-5'
    >
        <DialogTitle className='border border-b'>
            <FlexBetween>
                <Typography className={`font-bold text-xl`}>
                    {dialogTitle}
                </Typography>
                <Close className={`text-red-500 cursor-pointer`} onClick={handleClose}/>
            </FlexBetween>
        </DialogTitle>
        <DialogContent>
            <DialogContentText className={`${dialogContentTxtCls} py-5`}>
                {dialoguContentTxt}
            </DialogContentText>
            {dialogContent}
        </DialogContent>
        <DialogActions>
            <ButtonFieldInput handleClick={handleClose} name={text.buttonNames.cancel}
                type={'button'}
                variant={`outlined`} buttonextracls={` rounded-full capitalize`} />
            <ButtonFieldInput handleClick={handleAdd}
                name={addTxt ?? text.buttonNames.add} variant={`outlined`}
                buttonextracls={`rounded-full capitalize bg-green-500`} extraTextCls={`text-green-500`} />
        </DialogActions>
    </Dialog>
}

export default FormModal