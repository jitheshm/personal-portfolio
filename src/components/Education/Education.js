import React from 'react'
import styles from '../../styles/Education.module.css'
function Education() {
    return (
        <div className={`container-fluid ${styles.edu}`}>
            <div className={`col-12 col-md-8 ${styles.educationContainer} mt-md-5 py-5`}>
                <div className={`${styles.eduCard} col-8 col-lg-3 pt-2`}><i className="fa fa-university" />
                    <h6 className="mt-4">MSC COMPUTER SCIENCE</h6>
                    <h6 className="mt-2">University of Calicut</h6>
                    <h6 className="mt-2">2021 - 2023</h6>
                </div>
                <div className={`${styles.eduCard} col-8 col-lg-3 pt-2`}><i className="fa fa-university" />
                    <h6 className="mt-4">BSC MATHEMATICS</h6>
                    <h6 className="mt-2">University of Calicut</h6>
                    <h6 className="mt-2">2018 - 2021</h6>
                </div>
                <div className={`${styles.eduCard} col-8 col-lg-3 pt-2`}><i className="fa fa-university" />
                    <h6 className="mt-4">HIGHER SECONDARY</h6>
                    <h6 className="mt-2"><strong>DHSE Kerala</strong></h6>
                    <h6 className="mt-2">2016 - 2018</h6>
                </div>
            </div>
        </div>

    )
}

export default Education