import React from 'react';
import styles from '../Profile.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={styles.bgAva} src="https://static3.depositphotos.com/1000454/256/i/600/depositphotos_2567474-stock-photo-wide-panorama-of-french-alps.jpg" alt="#"/>
            </div>
            <div>
                <img className={styles.ava} src='https://cdn.vox-cdn.com/thumbor/N7E4hPnlQT-gkairuvCVi4CNmOs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19658558/the_child_star_wars_gallery_5e3204be4f668.jpg' alt='#'/>
                <h4 className={styles.desc}>description</h4>
            </div>
        </div>
    );
};

export default ProfileInfo;