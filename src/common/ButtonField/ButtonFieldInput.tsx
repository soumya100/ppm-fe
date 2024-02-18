import React from 'react'
import { CircularProgress } from "@mui/material";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import Image from "next/image";


const ButtonFieldInput = (props: any) => {

    return (
        <Button
            variant={props.variant}
            className={`${props.buttonextracls}`}
            onClick={props.handleClick}
            component={props.component}
            startIcon={props.startIcon}
            endIcon={props.endIcon}
            to={props.to}
            disabled={props.disabled}
            type={props.type ? props.type : "submit"}
            data-cy={props.dataCy}
            style={props.style}
            disableRipple={props.disableRipple}
            color={props.color}
            sx={props.sx}
        >
            {props.loading === true ? (
                <div className='loaderwithtxt'>
                    <CircularProgress size={18} className={``} color='inherit' />
                </div>
            ) : (
                    <div className={`flex items-center justify-center w-full ${!props.btnName && `gap-2` }${props.btnImgPosition}`}>
                    <p className={props.extraTextCls}>{props.btnName}</p>
                    {props.btnImg && (
                            <div className={`${!props.btnName ? `mr-2` : ``} flex`}>
                            <Image
                                src={props.btnImg}
                                height={props.height ? props.height : 20}
                                width={props.width ? props.width : 20}
                                    alt='Button image'
                                    className={props.btnImgCls}
                            />
                        </div>
                    )}
                        {!props.btnName && <p className={props.extraTextCls}>{props.name}</p>}
                </div>
            )}
        </Button>
    )
}

ButtonFieldInput.propTypes = {
    variant: PropTypes.string,
    className: PropTypes.string,
    handleClick: PropTypes.func,
    component: PropTypes.any,
    to: PropTypes.any,
    type: PropTypes.any,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    name: PropTypes.string,
    startIcon: PropTypes.node,
    endIcon: PropTypes.node,
    buttonextracls: PropTypes.string,
    extraTextCls: PropTypes.string,
    btnImg: PropTypes.object || PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    btnName: PropTypes.string,
    btnImgCls: PropTypes.string,
    btnImgPosition: PropTypes.string,
    disableRipple: PropTypes.bool,
    color: PropTypes.string,
    sx: PropTypes.object
};

export default ButtonFieldInput