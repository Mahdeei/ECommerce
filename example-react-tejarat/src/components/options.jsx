import React, { Component } from 'react';
import { Col} from 'reactstrap';
import '../css/landing.css';
import 'react-toastify/dist/ReactToastify.css';


class options extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Col sm={6} md={3} lg={3}>
                    <p className='op-name'>پشتیبانی 24 ساعته</p>
                    <i className='op-icon fa fa-book'></i>
                    <p className='op-desc'> سعی کرده ایم تا پشتیبانی  همه روزه و 24 ساعته را در اختیار کاربران قرار دهیم تا تمامی مشکلات و سوالات خود را در هر لحظه با ما در میان بگذارند </p>
                </Col>
                <Col sm={6} md={3} lg={3}>
                    <p className='op-name'> ارائه مرغوب ترین و با کیفیت ترین محصولات </p>
                    <i className='op-icon fa fa-book'></i>
                    <p className='op-desc'> شما با ورود به سایت ما ، از سایت های دیگر بی نیاز خواهید شد تا از با کیفیت ترین محصولات برخوردار شوید و مشتری وفادار ما شوید </p>
                </Col>
                <Col sm={6} md={3} lg={3}>
                    <p className='op-name'> ارائه مشاوره تخصصی</p>
                    <i className='op-icon fa fa-book'></i>
                    <p className='op-desc'> ما در کسب و کارمان از افراد خبره و متخصص استفاده کرده ایم تا  مشاوره های تخصصی را خدمت شما عزیزان ارائه دهند  </p>
                </Col>
                <Col sm={6} md={3} lg={3}>
                    <p className='op-name'> تنوع محصولات</p>
                    <i className='op-icon fa fa-book'></i>
                    <p className='op-desc'> تنوع محصولات ما  باعث میشود که  در همین سایت بمانید و تمامی خرید های خود را در وبسایت ما انجام دهید  </p>
                </Col>
            </React.Fragment>
        );
    }
}

export default options;