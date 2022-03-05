import React from 'react';
import { FaCalendarTimes, FaEnvelopeOpen, FaMapMarkerAlt, FaPhoneAlt, FaUser, FaUserCircle } from 'react-icons/fa';
import { DateFormat, FormatPhone } from '../../Modules/Format.Module';

import {
    CardContainer,
    CardDetailsContainer,
    CardDetailsImageContainer,
    CardDetailsParagraphContainer,
    CardDetailsSpanContainer
} from './Card.Styled';

const Card = (props: any) =>
{
    return (
        <CardContainer>
            <CardDetailsContainer>
                <CardDetailsImageContainer src={props.item.picture.large} alt='' />
                <CardDetailsParagraphContainer className='name'>
                    <FaUserCircle className='soc-icon' />{' '}
                    <CardDetailsSpanContainer className='name'>
                        { props.item.name.first + ' ' + props.item.name.last }{' '}
                    </CardDetailsSpanContainer>
                </CardDetailsParagraphContainer>
                <CardDetailsParagraphContainer>
                    <FaEnvelopeOpen className='soc-icon' />
                    <CardDetailsSpanContainer>
                        { props.item.email }
                    </CardDetailsSpanContainer>
                </CardDetailsParagraphContainer>
                <CardDetailsParagraphContainer>
                    <FaCalendarTimes className='soc-icon' />{' '}
                    <CardDetailsSpanContainer>
                        { DateFormat(props.item.dob.date) }
                    </CardDetailsSpanContainer>
                </CardDetailsParagraphContainer>
                <CardDetailsParagraphContainer>
                    <FaMapMarkerAlt className='soc-icon' />
                    <CardDetailsSpanContainer>
                        {
                            props.item.location.city +
                            ', ' +
                            props.item.location.state +
                            ' - ' +
                            props.item.location.postcode
                        }
                    </CardDetailsSpanContainer>
                </CardDetailsParagraphContainer>
                <CardDetailsParagraphContainer>
                    <FaPhoneAlt className='soc-icon' />{' '}
                    <CardDetailsSpanContainer>
                        { FormatPhone(props.item.phone) }
                    </CardDetailsSpanContainer>
                </CardDetailsParagraphContainer>
            </CardDetailsContainer>
        </CardContainer>
    );
};

export default Card;
