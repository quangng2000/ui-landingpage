import DeveloperCard from "../components/developer-card";
import InboxContact from "../components/inbox-contact";
import ClientContainer from "../components/client-container";
import Component4 from "../components/component4";
import styles from "./index.module.css";

const Frame = () => {
  return (
    <div className={styles.ellipseParent}>
      <div className={styles.frameChild} />
      <img
        className={styles.gradientCirclesIcon}
        alt=""
        src="/gradient-circles.svg"
      />
      <div className={styles.frameItem} />
      <div className={styles.frameInner} />
      <div className={styles.ellipseDiv} />
      <div className={styles.frameChild1} />
      <img className={styles.vectorIcon} alt="" src="/vector-10.svg" />
      <img className={styles.frameChild2} alt="" src="/vector-6.svg" />
      <div className={styles.rectangleDiv} />
      <img className={styles.frameChild3} alt="" src="/vector-4.svg" />
      <img className={styles.frameChild4} alt="" src="/vector-1.svg" />
      <img className={styles.frameChild5} alt="" src="/vector-9.svg" />
      <div className={styles.maskGroup} />
      <div className={styles.weHelpYouContainer}>
        <p className={styles.weHelpYouToGrowYour}>
          <b className={styles.weHelpYou}>{`We Help you `}</b>
          <span className={styles.toGrowYour}>to grow your</span>
        </p>
        <p className={styles.business}>Business</p>
      </div>
      <div className={styles.ourTeamOf}>
        Our team of experts is dedicated to helping you stay ahead of the curve,
        protect your digital assets, and create stunning online experiences for
        your customers.
      </div>
      <div className={styles.frameChild6} />
      <b className={styles.getStarted}>Get Started</b>
      <b className={styles.aboutUs}>
        <p className={styles.weHelpYouToGrowYour}>About Us</p>
      </b>
      <div className={styles.loremIpsumHas}>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </div>
      <div className={styles.atRiftCompany}>
        At Rift Company, we're dedicated to making your digital aspirations a
        reality while ensuring your online assets remain secure. Join us on this
        journey to success.
      </div>
      <div className={styles.loremIpsumHas1}>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </div>
      <div className={styles.frameChild7} />
      <b className={styles.getStarted}>Get Started</b>
      <div className={styles.frameChild8} />
      <b className={styles.exploreMore}>Explore More</b>
      <img className={styles.frameChild9} alt="" src="/vector-11.svg" />
      <div className={styles.whatWeDoContainer}>
        <p className={styles.weHelpYouToGrowYour}>
          <b>What We Do</b>
        </p>
        <p className={styles.business}>For Your Business</p>
      </div>
      <div className={styles.viewWork}>View Work</div>
      <div className={styles.frameChild10} />
      <div className={styles.frameChild11} />
      <div className={styles.readyToTake}>
        Ready to take your web presence and cybersecurity to the next level?
        Reach out to us today for a free consultation. Our experts are eager to
        discuss your unique needs and provide tailored solutions that drive
        results.
      </div>
      <b className={styles.getInTouch}>Get In Touch</b>
      <img
        className={styles.dCasualLifeDesignCompositiIcon}
        alt=""
        src="/3dcasuallifedesigncomposition-1@2x.png"
      />
      <img
        className={styles.dCasualLifeAdminPanelInteIcon}
        alt=""
        src="/3dcasuallifeadminpanelinterfacewithinfographicsandcharts-1@2x.png"
      />
      <img
        className={styles.dCasualLifeSmilingWomanHoIcon}
        alt=""
        src="/3dcasuallifesmilingwomanholdinggraph-1@2x.png"
      />
      <img
        className={styles.dCasualLifeYoungPeopleDisIcon}
        alt=""
        src="/3dcasuallifeyoungpeoplediscussingtheproject-1@2x.png"
      />
      <DeveloperCard />
      <img className={styles.riftCo2} alt="" src="/rift-co-2@2x.png" />
      <InboxContact />
      <div className={styles.riftCoCopyrightAndRightsWrapper}>
        <div className={styles.riftCoCopyright}>
          © 2023 Rift Co. Copyright and rights reserved
        </div>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.supportParent}>
          <div className={styles.support}>Support</div>
          <div className={styles.helpCenter}>Help center</div>
          <div className={styles.contactUs}>Contact Us</div>
          <div className={styles.about}>About</div>
        </div>
        <div className={styles.talkToSupportParent}>
          <div className={styles.helpCenter}>Talk to support</div>
          <div className={styles.contactUs}>Support docs</div>
          <div className={styles.about}>System status</div>
          <div className={styles.support}>Help and Solution</div>
        </div>
        <div className={styles.updateParent}>
          <div className={styles.helpCenter}>Update</div>
          <div className={styles.contactUs}>Security</div>
          <div className={styles.about}>Beta test</div>
          <div className={styles.support}>Product</div>
        </div>
      </div>
      <div className={styles.termsAndCondtionsParent}>
        <div className={styles.termsAndCondtions}>Terms and Condtions</div>
        <div className={styles.groupChild} />
        <div className={styles.privacyPolicy}>Privacy Policy</div>
      </div>
      <ClientContainer />
      <img className={styles.groupIcon} alt="" src="/group-240.svg" />
      <Component4 />
    </div>
  );
};

export default Frame;
