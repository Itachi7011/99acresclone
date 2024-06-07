const express = require("express");
const app = express();

const alert = require("alert");
const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");
const cookieParser = require("cookie-parser");
app.use(cookieParser());

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
require("./database/connection");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const cors = require("cors");
app.use(cors());

const NewUserDB = require("./database/schema/users/userRegistration");
const LikedPropertyDB = require("./database/schema/users/likeProperties");
const LikedProjectsDB = require("./database/schema/users/likedProjects");
const PropertyListDB = require("./database/schema/properties/properties");
const ProjectDB = require("./database/schema/projects/newProject");
const DeveloperDB = require("./database/schema/developer/developer");
const LocalitiesDB = require("./database/schema/localitites");
const ErrorReportDB = require("./database/schema/errorReports");
const FeedbackDB = require("./database/schema/feedbacks");
const BankOfferDB = require("./database/schema/BankOffers/bankOffers");
const OfficalEmailDB = require("./database/schema/OfficialWebsiteContactInfo/officialEmails");
const OfficalPhoneNoDB = require("./database/schema/OfficialWebsiteContactInfo/officialPhoneNo");
const AgentServicesDB = require("./database/schema/Agents/services");
const MainSettingsDB = require("./database/schema/settings/configSettings");
// const OfficialEmailDB = require("./database/schema/OfficialWebsiteContactInfo/officialEmails");
// const OfficialPhoneNoDB = require("./database/schema/OfficialWebsiteContactInfo/officialPhoneNo");
const OfficialFacebookDB = require("./database/schema/socialMedia/facebook");
const OfficialInstagramDB = require("./database/schema/socialMedia/instagram");
const OfficialLinkedInDB = require("./database/schema/socialMedia/linkedIn");
const OfficialRedditDB = require("./database/schema/socialMedia/reddit");
const OfficialTwitterDB = require("./database/schema/socialMedia/twitter");

const BannerDB = require("./database/schema/banner");
const ArticlesDB = require("./database/schema/article");
const NewsDB = require("./database/schema/news");
const EventsDB = require("./database/schema/event");

const EnquiryDB = require("./database/schema/enquiries");

app.get("/", (req, res) => {
  res.send("Working");
});
const UserAuthenticate = require("./authenticateFunctions/UserAuthenticate");

const storage1 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../client/src/Components/Uploads/Projects");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload1 = multer({ storage: storage1 });

const storage2 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../client/src/Components/Uploads/Properties");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// const upload2 = multer({ storage: storage2 });

const upload2 = multer({
  storage: storage2,

  limits: {
    fileSize: 10 * 1024 * 1024, // Limit file size to 10MB
  },

  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      // Allow only image files

      return cb(new Error("Please upload an image (JPG, JPEG or PNG)."));
    }

    cb(null, true);
  },
}).fields([
  { name: "propertyImages", maxCount: 5 }, // Allow up to 5 property images

  { name: "floorPlanImages", maxCount: 5 }, // Allow up to 1 floor image
]);

// upload 3

const storage3 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../client/src/Components/Uploads/Projects");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload3 = multer({
  storage: storage3,

  limits: {
    fileSize: 10 * 1024 * 1024, // Limit file size to 10MB
  },

  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      // Allow only image files

      return cb(new Error("Please upload an image (JPG, JPEG or PNG)."));
    }

    cb(null, true);
  },
}).fields([{ name: "projectImage", maxCount: 5 }]);

app.post("/newUserRegistration", async (req, res) => {
  try {
    const Email = req.body.email;
    const Password = req.body.password;
    const Cpassword = req.body.cpassword;
    console.log("Password Is : ",Password);
    console.log("CPassword Is : ",Cpassword);

    const OTP = Math.floor(Math.random() * 1000000 + 1);
    const Transport = async (email, Subject, Text) => {
      try {
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          service: "gmail",
          port: 587,
          secure: Boolean(true),
          auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
          },
        });
        await transporter.sendMail({
          from: process.env.EMAIL,
          to: Email,
          subject: Subject,
          text: Text,
        });
        console.log("Email sent successfully");
      } catch (e) {
        console.log("Error during sending email: ", e);
      }
    };

    if (Password === Cpassword) {
      await Transport(
        "coolsam929@gmail.com",
        "Please use this OTP to verify your 99acres account",
        ` Your OTP is : ${OTP}`
      );
     const Name =  `${req.body.lastName} ${req.body.lastName}`;
     
      const userData = await new NewUserDB({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        name: Name,
        email: req.body.email,
        phoneNo: req.body.phoneNo,
        userType: req.body.userType,
        emailVerification: req.body.emailVerification,
        otp: OTP,
        gender: req.body.gender,
        emailVerification: false,
        state: req.body.state,
        country: req.body.country,
        location: req.body.location,
        subLocation: req.body.subLocation,
        isBlocked: false,
        dateOfEmailValidation: req.body.dateOfEmailValidation,
        dateOfFormSubmission: req.body.dateOfFormSubmission,
        fullAddress: req.body.fullAddress,
        password: req.body.password,
      });

      await userData.save();
      console.log("Saved in Database Successfully");

      res.redirect("/Login");
    } else {
      res.send(
        "Sorry Password and Confirm Password Don't Match, Please Try Again!"
      );
    }
  } catch (err) {
    console.log("Error during Registering User: ", err);
  }
});

app.post("/userEmailVerificationForm", async (req, res) => {
  try {
    const Email = req.body.email;
    const PhoneNo = req.body.phoneNo;
    const OTP = req.body.otp;
    console.log("User email is :", Email);
    console.log("User phone is :", PhoneNo);
    console.log("User otp is :", OTP);

    const UserDB = await NewUserDB.findOne({
      email: Email,
      phoneNo: PhoneNo,
    });
    console.log("User database is :", UserDB);
    console.log("Otp database is :", UserDB.otp);
    if (UserDB.otp == OTP) {
      await UserDB.updateOne({
        emailVerification: true,
      });
      await UserDB.save();
      await UserDB.updateOne({
        otp: null,
      });
      await UserDB.save();

      console.log("Email Verified Successfully.");
    }
  } catch (err) {
    console.log("Error during Email Verification : ", err);
  }
});

app.post("/adminLogin", async (req, res, next) => {
  try {
    let token;
    const Email = req.body.email;
    const Password = req.body.password;
    const data1 = await NewUserDB.findOne({
      email: Email,
    });
    if (data1) {
      const isMatch = await bcryptjs.compare(Password, data1.password);

      if (isMatch == true) {
        const token = await data1.generateAuthToken();

        res.cookie("cookies1", token, {
          expires: new Date(Date.now() + 2592000000),
          httpOnly: true,
        });

        res.redirect("/admin-dashboard");
      } else if (isMatch == false) {
        res.send("Sorry Password And Email Are Not Matched As Per Our System.");
      } else {
        res.send("Sorry!");
      }
    }
  } catch (err) {
    console.log("Error during Login: ", err);
  }
});

app.post("/login", async (req, res, next) => {
  try {
    let token;
    const Email = req.body.email;
    const Password = req.body.password;

    const data1 = await NewUserDB.findOne({
      email: Email,
    });

    if (data1) {
      const isMatch = await bcryptjs.compare(Password, data1.password);

      if (isMatch == true) {
        const token = await data1.generateAuthToken();

        res.cookie("cookies1", token, {
          expires: new Date(Date.now() + 2592000000),
          httpOnly: true,
        });
        if (data1.userType === "admin") {
          res.redirect("/admin-dashboard");
        } else {
          res.redirect("/property-list");
        }
      } else if (isMatch == false) {
        res.send("Sorry Password And Email Are Not Matched As Per Our System.");
      } else {
        res.send("Sorry!");
      }
    }
  } catch (err) {
    console.log("Error during Login: ", err);
  }
});

app.get("/userProfile", UserAuthenticate, async (req, res) => {
  try {
    res.send(req.rootUser);
  } catch (err) {
    console.log(`Error during Employeee Profile Page -${err}`);
  }
});

app.get("/logout", UserAuthenticate, async (req, res) => {
  try {
    res.clearCookie("cookies1", { path: "/" });
    res.send("cookies-deleted");
    consol.log("Logout Successful");
    res.redirect("/Login");
  } catch (err) {
    console.log(`Error During Logout - ${err}`);
  }
});

app.post("/postNewResidentialProperty", async (req, res) => {
  try {
    const userData = await new ResidentialPropertyDB({
      ownerName: req.body.ownerName,
      email: req.body.email,
      phoneNo: req.body.phoneNo,
      userType: req.body.userType,
      actionType: req.body.actionType,
      residentialPropertyType: req.body.residentialPropertyType,
      constructionStatus: req.body.constructionStatus,
      total_floors: req.body.total_floors,
      Property_on_floor: req.body.Property_on_floor,
      bedrooms: req.body.bedrooms,
      bathrooms: req.body.bathrooms,
      balconies: req.body.balconies,
      carpet_total_area: req.body.carpet_total_area,
      isFurnished: req.body.isFurnished,
      reserved_parking: req.body.reserved_parking,
      age_of_property: req.body.age_of_property,
      available_from: req.body.available_from,
      sellingStatus: req.body.sellingStatus,
      maxOfferedPrice: req.body.maxOfferedPrice,
      willing_to_rent_out_to: req.body.willing_to_rent_out_to,
      expected_selling_price: req.body.expected_selling_price,
      expected_renting_price: req.body.expected_renting_price,
      duration_of_aggrement: req.body.duration_of_aggrement,
      security_deposit: req.body.security_deposit,
      security_deposit: req.body.security_deposit,
      months_of_notice: req.body.months_of_notice,
      duration_of_aggrement: req.body.duration_of_aggrement,
      propertyCity: req.body.propertyCity,
      propertySubLocality: req.body.propertySubLocality,
      propertySociety_Apartment_HouseNo: req.body.propertySubLocality,
      dateOfFormSubmission: req.body.dateOfFormSubmission,
    });

    await userData.save();
    console.log("Saved in Database Successfully");

    res.redirect("/postNewResidentialProperty");
  } catch (err) {
    console.log("Error during Posting New Residential Property: ", err);
  }
});
app.post("/postNewProperty", upload2, async (req, res) => {
  try {
    const locality = req.body.propertyLocality;
    const subLocality = req.body.propertySubLocality;
    const fullLocality = locality + " " + subLocality;
    const localityData = await LocalitiesDB.findOne({ locality: fullLocality });
    if (!localityData) {
      const userData = await new LocalitiesDB({
        locality: locality,
        addedByUser: req.body.ownerName,
        addedWithProperty: req.body.property_name,
        isValid: false,
        dateOfFormSubmission: new Date(),
      });
      await userData.save();
      console.log("Locality Saved in Database Successfully");
    } else {
      console.log("Locality already existed");
    }
    // console.log(req.files);
    if (!req.files || !req.files.propertyImages) {
      return res.status(400).send("No Property images were uploaded.");
    }
    if (!req.files || !req.files.floorPlanImages) {
      return res.status(400).send("No Floor plan images were uploaded.");
    }
    const propertyImages = req.files.propertyImages.map((file) => ({
      data: file.filename,

      contentType: "image",
    }));

    const floorPlanImages = req.files.floorPlanImages.map((file) => ({
      data: file.filename,

      contentType: "image",
    }));
    const userData = await new PropertyListDB({
      ownerName: req.body.ownerName,
      email: req.body.email,
      phoneNo: req.body.phoneNo,
      userType: req.body.userType,
      propertyListedBy: req.body.propertyListedBy,
      commercialPropertyType: req.body.commercialPropertyType,
      propertySubType1: req.body.propertySubType1,
      propertySubType2: req.body.propertySubType2,
      constructionStatus: req.body.constructionStatus,
      total_floors: req.body.total_floors,
      Property_on_floor: req.body.Property_on_floor,
      carpet_total_area: req.body.carpet_total_area,
      area: req.body.area,
      price: req.body.price,

      bhkNumber: req.body.bhkNumber,
      nearby_Keypoints: req.body.nearby_Keypoints,
      rent_price: req.body.rent_price,
      duration_of_rent_aggrement: req.body.duration_of_rent_aggrement,
      rent_security_deposit: req.body.rent_security_deposit,
      rent_months_of_notice: req.body.rent_months_of_notice,
      lease_price: req.body.lease_price,
      duration_of_lease_aggrement: req.body.duration_of_lease_aggrement,
      lease_security_deposit: req.body.lease_security_deposit,
      lease_months_of_notice: req.body.lease_months_of_notice,
      property_name: req.body.property_name,
      title_text: req.body.title_text,
      amenities: req.body.amenities,
      status: req.body.status,
      meta_keyword: req.body.meta_keyword,
      meta_description: req.body.meta_description,
      isFurnished: req.body.isFurnished,
      isVerified: false,
      reserved_parking: req.body.reserved_parking,
      super_built_up_area: req.body.super_built_up_area,
      built_up_area: req.body.built_up_area,
      propertyImages: propertyImages,

      floorPlanImages: floorPlanImages,

      servent_accomodation: req.body.servent_accomodation,
      rera_approval: req.body.rera_approval,
      reg: req.body.reg,
      posession_date: req.body.posession_date,
      usp: req.body.usp,
      direction_facing: req.body.direction_facing,
      age_of_property: req.body.age_of_property,
      available_from: req.body.available_from,
      sellingStatus: req.body.sellingStatus,
      maxOfferedPrice: req.body.maxOfferedPrice,
      expected_selling_price: req.body.expected_selling_price,
      name_nearest_metro_station: req.body.name_nearest_metro_station,
      distance_nearest_metro_station: req.body.distance_nearest_metro_station,
      name_nearest_railway_station: req.body.name_nearest_railway_station,
      distance_nearest_railway_station:
        req.body.distance_nearest_railway_station,
      name_nearest_bus_stop: req.body.name_nearest_bus_stop,
      distance_nearest_bus_stop: req.body.distance_nearest_bus_stop,
      property_specicification: req.body.property_specicification,
      propertyCity: req.body.propertyCity,
      propertyCountry: req.body.propertyCountry,
      propertyLocality: req.body.propertyLocality,
      propertySubLocality: req.body.propertySubLocality,
      property_lane_address: req.body.property_lane_address,
      propertySociety_Apartment_HouseNo: req.body.propertySubLocality,
      dateOfFormSubmission: req.body.dateOfFormSubmission,
    });

    await userData.save();
    console.log("Saved in Database Successfully");

    res.redirect("/property-list");
  } catch (err) {
    console.log("Error during Posting New Residential Property: ", err);
  }
});

// app.post("/add-new-project", (req, res) => {
//   try {
//     console.log("data is : ", req.body);
//   } catch (e) {
//     console.log("Error is :", e);
//   }
// });
app.post(
  "/add-new-project",
  upload1.fields([
    { name: "logoImage" },
    {name:"projectImage",maxCount: 5},
    { name: "floorPlanImage" },
    { name: "pricePlanImage" },
    { name: "paymentPlanImage" },
    { name: "e_brochureImage" },
    { name: "constructionUpdateImage" },
    { name: "contactUsImage" },
  ]),
  async (req, res, next) => {
    try {
      console.log("req.body is : ", req.body);
      console.log("req.files is : ", req.files);

      const userData = await new ProjectDB({
        ownerName: req.body.ownerName,
        email: req.body.email,
        phoneNo: req.body.phoneNo,
        userType: req.body.userType,
        projectListedBy: req.body.projectListedBy,
        projectType: req.body.projectType,
        project_name: req.body.project_name,
        bank_offers: JSON.parse(req.body.bank_offers),
        total_floors: req.body.total_floors,
        max_area: req.body.max_area,
        min_area: req.body.min_area,
        bhkNumber: req.body.bhkNumber,
        developerName: req.body.developerName,
        type: String,
        title_text: req.body.title_text,
        amenities: JSON.parse(req.body.amenities),
        metaKeyword: req.body.metaKeyword,
        metaDescription: req.body.metaDescription,
        reserved_parking: req.body.reserved_parking,
        logoImage: {
          data: req.files.logoImage[0].filename,
          contentType: "image",
        },
        projectImage: req.files.projectImage.map((file) => ({
          data: file.filename,

          contentType: "image",
        })),
        // projectImage: {
        //   data: req.files.projectImage[0].filename,
        //   contentType: "image",
        // },
        floorPlanImage: {
          data: req.files.floorPlanImage[0].filename,
          contentType: "image",
        },
        pricePlanImage: {
          data: req.files.pricePlanImage[0].filename,
          contentType: "image",
        },
        paymentPlanImage: {
          data: req.files.paymentPlanImage[0].filename,
          contentType: "image",
        },
        e_brochureImage: {
          data: req.files.e_brochureImage[0].filename,
          contentType: "image",
        },
        constructionUpdateImage: {
          data: req.files.constructionUpdateImage[0].filename,
          contentType: "image",
        },
        contactUsImage: {
          data: req.files.contactUsImage[0].filename,
          contentType: "image",
        },
        rera_approval: req.body.rera_approval,
        youtube_URL: req.body.youtube_URL,
        reg: req.body.reg,
        area: req.body.area,
        isVerified: false,

        projectFor: req.body.projectFor,
        constructionTitle:req.body.constructionTitle,
        constructionData:req.body.constructionData,
        totalAmount: req.body.totalAmount,
        posession_date: req.body.posession_date,
        usp: JSON.parse(req.body.usp),
        featureProject: req.body.featureProject,
        age_of_property: req.body.age_of_property,
        no_of_units: req.body.no_of_units,
        no_of_floor: req.body.no_of_floor,
        no_of_tower: req.body.no_of_tower,
        total_area: req.body.total_area,
        open_area: req.body.open_area,
        sellingStatus: req.body.sellingStatus,
        project_specification: req.body.project_specification,
        locationMap: req.body.locationMap,
        price: req.body.price,
        min_price: req.body.min_price,
        max_price: req.body.max_price,
        pricePlanDetails: req.body.pricePlanDetails,
        paymentPlanDetails: req.body.paymentPlanDetails,
        constructionStatus: req.body.constructionStatus,
        masterPlan: req.body.masterPlan,
        city: req.body.city,
        location: req.body.location,
        sub_location: req.body.sub_location,
        contactUsDetails: req.body.contactUsDetails,
        specificationStatus:req.body.specificationStatus,
        locationMapStatus:req.body.locationMapStatus,
        masterPlanStatus:req.body.masterPlanStatus,
        floorPlanStatus:req.body.floorPlanStatus,
        pricePlanStatus:req.body.pricePlanStatus,
        paymentPlanStatus:req.body.paymentPlanStatus,
        e_brochureStatus:req.body.e_brochureStatus,
        constructionUpdateStatus:req.body.constructionUpdateStatus,
        contactUsStatus:req.body.contactUsStatus,
        dateOfFormSubmission: new Date(),
      });

      await userData.save();
      console.log("Saved in Database Successfully");
      res.send({ status: "Ok", data: "New Developer Details Saved." });
    } catch (err) {
      console.log("Error during Posting New Project is : ", err);
    }
  }
);

app.post("/addLocality", async (req, res) => {
  try {
    const city = req.body.city;
    const locality = req.body.location;
    const subLocality = req.body.sub_location;
    const AddedWithProperty = req.body.property_name;
    //  const fullLocality = (locality + " " + subLocality);
    const localityData = await LocalitiesDB.findOne({
      city: city,
      location: locality,
      sub_location: subLocality,
    });
    if (!localityData) {
      const userData = await new LocalitiesDB({
        city: city,
        location: locality,
        sub_location: subLocality,
        addedByUser: req.body.ownerName,
        addedWithProperty: AddedWithProperty ? req.body.property_name : "",
        isValid: false,
        dateOfFormSubmission: new Date(),
      });
      await userData.save();
      console.log("Locality Saved in Database Successfully");
      res.redirect("/show-sublocalities");
    } else {
      console.log("Locality is:", localityData);
      console.log("Locality already existed");
      res.redirect("/add-localities");
    }
  } catch (err) {
    console.log(err);
    res.redirect("/failure-message");
  }
});
app.post("/addDeveloper", upload1.single("logo"), async (req, res) => {
  try {
    // console.log(req.body);
    // console.log(req.file);
    const userData = await new DeveloperDB({
      name: req.body.name,
      email: req.body.email,
      phoneNo: req.body.phoneNo,
      aboutDeveloper: req.body.aboutDeveloper,
      metaTitle: req.body.ownemetaTitlerName,
      metaKeyword: req.body.metaKeyword,
      metaDescription: req.body.metaDescription,
      logo: {
        data: req.file.filename,
        contentType: "image/png",
      },
      dateOfFormSubmission: new Date(),
    });
    await userData.save();
    console.log("New Developer Added in Database Successfully");
    res.send({ status: "Ok", data: "New Developer Details Saved." });
    // res.redirect("/add-developer");
  } catch (err) {
    console.log(err);
    res.redirect("/failure-message");
  }
});
app.post("/addBankOffer", upload1.single("logo"), async (req, res) => {
  try {
    const userData = await new BankOfferDB({
      bankName: req.body.bankName,
      tenure: req.body.tenure,
      processingFees: req.body.processingFees,
      rateOfInterest: req.body.rateOfInterest,
      prepaymentCharges: req.body.prepaymentCharges,
      loanAmount: req.body.loanAmount,
      foreclosureCharges: req.body.foreclosureCharges,
      logo: {
        data: req.file.filename,
        contentType: "image/png",
      },
      dateOfFormSubmission: new Date(),
    });
    await userData.save();
    console.log("New Bank Offer Added in Database Successfully");
    res.send({ status: "Ok", data: "New Developer Details Saved." });
  } catch (err) {
    console.log(err);
    res.redirect("/failure-message");
  }
});
app.post("/updateBankOffer", async (req, res) => {
  try {
    await BankOfferDB.findOneAndUpdate(
      {
        _id: req.body.id,
      },
      {
        bankOfferName: req.body.bankOfferName,
        bankOfferDetails: req.body.bankOfferDetails,
        applyOnBank: req.body.applyOnBank,
        rateOfInterest: req.body.rateOfInterest,
        startingFrom: req.body.startingFrom,
        endedOn: req.body.endedOn,
        dateOfFormSubmission: new Date(),
      }
    );
    console.log("Bank Offer Updated in Database Successfully");
    res.redirect("/new-bank-offer");
  } catch (err) {
    console.log(err);
    res.redirect("/failure-message");
  }
});

//  Deleting APIs started from here

app.post("/deleteBankOffer", async (req, res) => {
  try {
    await BankOfferDB.deleteOne({
      _id: req.body.id,
    });
    console.log("Bank Offer Deleted from Database Successfully");
    res.redirect("/view-bank-offers");
  } catch (err) {
    console.log(err);
    res.redirect("/failure-message");
  }
});
app.post("/deleteSelectedBankOffers", async (req, res) => {
  try {
    const ObjectId = require("mongoose").Types.ObjectId;
    const ids = req.body.ids;
    const objectIds = ids.map((id) => new ObjectId(id));

    await BankOfferDB.deleteMany({
      _id: { $in: objectIds },
    });
    console.log("Selected Bank Offers Deleted from Database Successfully");
    res.redirect("/view-bank-offers");
  } catch (err) {
    console.log(err);
    res.redirect("/failure-message");
  }
});

app.post("/deleteDeveloper", async (req, res) => {
  try {
    await DeveloperDB.deleteOne({
      _id: req.body.id,
    });
    console.log("Developer Deleted from Database Successfully");
    res.redirect("/view-developer-list");
  } catch (err) {
    console.log(err);
    res.redirect("/failure-message");
  }
});
app.post("/deleteSelectedDeveloper", async (req, res) => {
  try {
    const ObjectId = require("mongoose").Types.ObjectId;
    const ids = req.body.ids;
    const objectIds = ids.map((id) => new ObjectId(id));

    await DeveloperDB.deleteMany({
      _id: { $in: objectIds },
    });
    console.log("Selected Developers Deleted from Database Successfully");
    res.redirect("/view-developer-list");
  } catch (err) {
    console.log(err);
    res.redirect("/failure-message");
  }
});

app.post("/deleteBanners", async (req, res) => {
  try {
    await BannerDB.deleteOne({
      _id: req.body.id,
    });
    console.log("Banner Deleted from Database Successfully");
    res.redirect("/view-banner-list");
  } catch (err) {
    console.log(err);
    res.redirect("/failure-message");
  }
});
app.post("/deleteSelectedBanners", async (req, res) => {
  try {
    const ObjectId = require("mongoose").Types.ObjectId;
    const ids = req.body.ids;
    const objectIds = ids.map((id) => new ObjectId(id));

    await BannerDB.deleteMany({
      _id: { $in: objectIds },
    });
    console.log("Selected Banners Deleted from Database Successfully");
    res.redirect("/view-banner-list");
  } catch (err) {
    console.log(err);
    res.redirect("/failure-message");
  }
});

app.post("/deleteArticles", async (req, res) => {
  try {
    await ArticlesDB.deleteOne({
      _id: req.body.id,
    });
    console.log("Article Deleted from Database Successfully");
    res.send({ status: "OK", data: "Deleted" });

    // res.redirect("/view-article-list");
  } catch (err) {
    console.log(err);
    res.redirect("/failure-message");
  }
});
app.post("/deleteSelectedArticles", async (req, res) => {
  try {
    const ObjectId = require("mongoose").Types.ObjectId;
    const ids = req.body.ids;
    const objectIds = ids.map((id) => new ObjectId(id));

    await ArticlesDB.deleteMany({
      _id: { $in: objectIds },
    });
    console.log("Selected Articles Deleted from Database Successfully");
    res.send({ status: "OK", data: "Deleted" });
    // res.redirect("/view-article-list");
  } catch (err) {
    console.log(err);
    res.redirect("/failure-message");
  }
});

app.post("/deleteNews", async (req, res) => {
  try {
    await NewsDB.deleteOne({
      _id: req.body.id,
    });
    console.log("News Deleted from Database Successfully");
    res.redirect("/view-news-list");
  } catch (err) {
    console.log(err);
    res.redirect("/failure-message");
  }
});
app.post("/deleteSelectedNews", async (req, res) => {
  try {
    const ObjectId = require("mongoose").Types.ObjectId;
    const ids = req.body.ids;
    const objectIds = ids.map((id) => new ObjectId(id));

    await NewsDB.deleteMany({
      _id: { $in: objectIds },
    });
    console.log("Selected News Deleted from Database Successfully");
    res.redirect("/view-news-list");
  } catch (err) {
    console.log(err);
    res.redirect("/failure-message");
  }
});

app.post("/deleteEvents", async (req, res) => {
  try {
    await EventsDB.deleteOne({
      _id: req.body.id,
    });
    console.log("Event Deleted from Database Successfully");
    res.redirect("/view-event-list");
  } catch (err) {
    console.log(err);
    res.redirect("/failure-message");
  }
});
app.post("/deleteSelectedEvents", async (req, res) => {
  try {
    const ObjectId = require("mongoose").Types.ObjectId;
    const ids = req.body.ids;
    const objectIds = ids.map((id) => new ObjectId(id));

    await EventsDB.deleteMany({
      _id: { $in: objectIds },
    });
    console.log("Selected Events Deleted from Database Successfully");
    res.redirect("/view-event-list");
  } catch (err) {
    console.log(err);
    res.redirect("/failure-message");
  }
});

//  Deleting APIs Ended here

app.post(
  "/mainSettings",
  upload1.fields([
    { name: "mainLogo" }, // Allow up to 5 property images

    { name: "robortFile" }, // Allow up to 1 floor image
  ]),
  async (req, res) => {
    try {
      await MainSettingsDB.findOneAndUpdate(
        { settingsId: "ID66560bb28ac1d822aa3cea90" },
        {
          headingText: req.body.headingText,
          homePageDescription: req.body.homePageDescription,
          homePageTitle: req.body.homePageTitle,
          homePageMetaKeyword: req.body.homePageMetaKeyword,
          homePageMetaDescription: req.body.homePageMetaDescription,
          footerText: req.body.footerText,
          googleAnalyticsCode: req.body.googleAnalyticsCode,
          robots_txt_Content: req.body.robots_txt_Content,
          siteMessage: req.body.siteMessage,
          mainLogo: {
            data: req.files.mainLogo[0].filename,
            contentType: "image/png",
          },
          robortFile: {
            data: req.files.robortFile[0].filename,
            contentType: "image/png",
          },
          dateOfFormSubmission: new Date(),
        }
      );
      console.log("Settings Updated Successfully");
      res.redirect("/main-settings");
    } catch (err) {
      console.log(err);
      res.redirect("/failure-message");
    }
  }
);

app.post("/addBanner", upload1.single("logo"), async (req, res) => {
  try {
    const userData = await new BannerDB({
      title: req.body.title,
      subTitle: req.body.subTitle,
      projectUrl: req.body.projectUrl,
      status: req.body.status,
      isUsed: false,
      logo: {
        data: req.file.filename,
        contentType: "image/png",
      },
      dateOfFormSubmission: new Date(),
    });
    await userData.save();
    console.log("New Banner Added in Database Successfully");
    res.redirect("/new-banner");
  } catch (err) {
    console.log(err);
    res.redirect("/failure-message");
  }
});

app.post("/addArticle", upload1.single("articleImage"), async (req, res) => {
  try {
    // console.log(req.file);
    const userData = await new ArticlesDB({
      title: req.body.title,
      metaTitle: req.body.metaTitle,
      metaKeyword: req.body.metaKeyword,
      metaDescription: req.body.metaDescription,
      articleCategory: req.body.articleCategory,
      articleCategory1s: req.body.articleCategory1s,
      developerName: req.body.developerName,
      projectName: req.body.projectName,
      articleContent: req.body.articleContent,
      metaDescription: req.body.metaDescription,
      youtubeUrl: req.body.youtubeUrl,
      status: req.body.status,
      articleImage: {
        data: req.file.filename,
        contentType: "image/png",
      },
      dateOfFormSubmission: new Date(),
    });
    await userData.save();
    console.log("New Article Added in Database Successfully");
    res.send({ status: "Ok", data: "New Article Details Saved." });
  } catch (err) {
    console.log(err);
    res.redirect("/failure-message");
  }
});

app.post("/addNews", upload1.single("image"), async (req, res) => {
  try {
    // console.log(req.file);
    const userData = await new NewsDB({
      category: req.body.category,
      heading: req.body.heading,
      description: req.body.description,
      metaTitle: req.body.metaTitle,
      metaKeyword: req.body.metaKeyword,
      metaDescription: req.body.metaDescription,
      youtubeUrl: req.body.youtubeUrl,
      status: req.body.status,
      image: {
        data: req.file.filename,
        contentType: "image/png",
      },
      dateOfFormSubmission: new Date(),
    });
    await userData.save();
    console.log("New News Added in Database Successfully");
    res.redirect("/new-news");
  } catch (err) {
    console.log(err);
    res.redirect("/failure-message");
  }
});

app.post("/addEvent", upload1.single("contentImage"), async (req, res) => {
  try {
    // console.log(req.file);
    const userData = await new EventsDB({
      category: req.body.category,
      title: req.body.title,
      venue: req.body.venue,
      organiser: req.body.organiser,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      contentDescription: req.body.contentDescription,
      metaTitle: req.body.metaTitle,
      metaKeyword: req.body.metaKeyword,
      metaDescription: req.body.metaDescription,
      status: req.body.status,
      contentImage: {
        data: req.file.filename,
        contentType: "image/png",
      },
      dateOfFormSubmission: new Date(),
    });
    await userData.save();
    console.log("New Event Added in Database Successfully");
    res.send({ status: "Ok", data: "New Article Details Saved." });
  } catch (err) {
    console.log(err);
    res.redirect("/failure-message");
  }
});

// Change Official Website Info. like Phone NO. Email, social media, etc Starts here

app.post("/changeOfficialEmail", async (req, res) => {
  try {
    const id = "ID6656b308b6a726f891b166f9";

    await OfficalEmailDB.findOneAndUpdate(
      { id: id },
      {
        email: req.body.email,
        additionalComment: req.body.additionalComment,
        dateOfFormSubmission: new Date(),
      }
    );

    console.log("Email Updated Successfully");
    res.redirect("/change-official-email");
  } catch (err) {
    console.log(err);
    res.redirect("/failure-message");
  }
});

app.post("/changeOfficialPhoneNo", async (req, res) => {
  try {
    const id = "ID6656b7baf770c719fb92eecf";

    await OfficalPhoneNoDB.findOneAndUpdate(
      { id: id },
      {
        phoneNo: req.body.phoneNo,
        additionalComment: req.body.additionalComment,
        dateOfFormSubmission: new Date(),
      }
    );

    console.log("Phone Number Updated Successfully");
    res.redirect("/change-official-phoneNo");
  } catch (err) {
    console.log(err);
    res.redirect("/failure-message");
  }
});

app.post("/changeOfficialfacebookId", async (req, res) => {
  try {
    const id = "ID665822bc915fdaeca41189e5";

    await OfficialFacebookDB.findOneAndUpdate(
      { id: id },
      {
        FacebookId: req.body.FacebookId,
        additionalComment: req.body.additionalComment,
        dateOfFormSubmission: new Date(),
      }
    );

    console.log("Facebook Id Updated Successfully");
    res.redirect("/change-facebookID");
  } catch (err) {
    console.log(err);
    res.redirect("/failure-message");
  }
});

app.post("/changeOfficialInstagramId", async (req, res) => {
  try {
    const id = "ID6658236b915fdaeca41189e6";

    await OfficialInstagramDB.findOneAndUpdate(
      { id: id },
      {
        instagramId: req.body.instagramId,
        additionalComment: req.body.additionalComment,
        dateOfFormSubmission: new Date(),
      }
    );

    console.log("Facebook Id Updated Successfully");
    res.redirect("/change-instaID");
  } catch (err) {
    console.log(err);
    res.redirect("/failure-message");
  }
});

app.post("/changeOfficialTwitterId", async (req, res) => {
  try {
    const id = "ID665824cb915fdaeca41189e7";

    await OfficialTwitterDB.findOneAndUpdate(
      { id: id },
      {
        twitterId: req.body.twitterId,
        additionalComment: req.body.additionalComment,
        dateOfFormSubmission: new Date(),
      }
    );

    console.log("Facebook Id Updated Successfully");
    res.redirect("/change-twitterID");
  } catch (err) {
    console.log(err);
    res.redirect("/failure-message");
  }
});

app.post("/changeOfficialLinkedInId", async (req, res) => {
  try {
    const id = "ID66582613915fdaeca41189e8";

    await OfficialLinkedInDB.findOneAndUpdate(
      { id: id },
      {
        linkedInId: req.body.linkedInId,
        additionalComment: req.body.additionalComment,
        dateOfFormSubmission: new Date(),
      }
    );

    console.log("Facebook Id Updated Successfully");
    res.redirect("/change-likedInID");
  } catch (err) {
    console.log(err);
    res.redirect("/failure-message");
  }
});

app.post("/changeOfficialRedditId", async (req, res) => {
  try {
    const id = "ID6658263a915fdaeca41189e9";

    await OfficialRedditDB.findOneAndUpdate(
      { id: id },
      {
        redditId: req.body.redditId,
        additionalComment: req.body.additionalComment,
        dateOfFormSubmission: new Date(),
      }
    );

    console.log("Facebook Id Updated Successfully");
    res.redirect("/change-redditID");
  } catch (err) {
    console.log(err);
    res.redirect("/failure-message");
  }
});

// Change Official Website Info. like Phone NO. Email, social media, etc Ends here

// APIs Of Official Website Info. like Phone NO. Email, social media, etc Starts here
app.get("/phoneNoAPI", async (req, res) => {
  try {
    const data = await OfficalPhoneNoDB.find();
    res.send(data);
  } catch (err) {
    console.log(`Error during sending Properties List -${err}`);
  }
});

app.get("/emailAPI", async (req, res) => {
  try {
    const data = await OfficalEmailDB.find();
    res.send(data);
  } catch (err) {
    console.log(`Error during sending Properties List -${err}`);
  }
});

app.get("/bannersAPI", async (req, res) => {
  try {
    const data = await BannerDB.find();
    res.send(data);
  } catch (err) {
    console.log(`Error during sending Properties List -${err}`);
  }
});

app.get("/DevelopersAPI", async (req, res) => {
  try {
    const data = await DeveloperDB.find();
    res.send(data);
  } catch (err) {
    console.log(`Error during sending Properties List -${err}`);
  }
});

app.get("/BannersAPI", async (req, res) => {
  try {
    const data = await BannerDB.find();
    res.send(data);
  } catch (err) {
    console.log(`Error during sending Properties List -${err}`);
  }
});

app.get("/ArticlesAPI", async (req, res) => {
  try {
    const data = await ArticlesDB.find();
    res.send(data);
  } catch (err) {
    console.log(`Error during sending Properties List -${err}`);
  }
});
app.get("/NewsAPI", async (req, res) => {
  try {
    const data = await NewsDB.find();
    res.send(data);
  } catch (err) {
    console.log(`Error during sending Properties List -${err}`);
  }
});

app.get("/EventsAPI", async (req, res) => {
  try {
    const data = await EventsDB.find();
    res.send(data);
  } catch (err) {
    console.log(`Error during sending Properties List -${err}`);
  }
});

// APIs Of Official Website Info. like Phone NO. Email, social media, etc Ends here

app.post("/editLocality", async (req, res) => {
  try {
    const id = req.body.id;
    const city = req.body.city;
    const locality = req.body.location;
    const subLocality = req.body.sub_location;
    const AddedWithProperty = req.body.property_name;
    //  const fullLocality = (locality + " " + subLocality);
    await LocalitiesDB.findOneAndUpdate(
      { _id: id },
      {
        city: city,
        location: locality,
        sub_location: subLocality,
      }
    );

    console.log("Locality Updated Successfully");
    res.redirect("/show-sublocalities");
  } catch (err) {
    console.log(err);
    res.redirect("/failure-message");
  }
});

app.post("/deleteSubLocality", async (req, res) => {
  try {
    const city = req.body.city;
    const locality = req.body.location;
    const subLocality = req.body.sub_location;
    await LocalitiesDB.deleteOne({
      city: city,
      location: locality,
      sub_location: subLocality,
    });
    res.redirect("/show-sublocalities");
    console.log("Sublocation Deleted Successfully");
  } catch (e) {
    console.log("Error During Deleting Sublocation is:", e);
  }
});

app.post("/likeProperties", async (req, res) => {
  try {
    const propertyId = req.body.id;

    const userName = req.body.userName;

    const localityData = await LikedPropertyDB.findOne({
      id: propertyId,
      userName: userName,
    });
    if (!localityData) {
      const newLikedProperty = await new LikedPropertyDB({
        id: propertyId,
        userName: req.body.userName,
        propertyName: req.body.propertyName,
      });
      await newLikedProperty.save();
      console.log("Liked Property Saved in Database Successfully");
      res.sendStatus(200);
    } else {
      console.log("Sorry Property already saved into liked property list");
    }
  } catch (err) {
    console.log(`Error during sending Liked Property -${err}`);
  }
});

app.post("/likedProject", async (req, res) => {
  try {
    const propertyId = req.body.id;

    const userName = req.body.userName;

    const localityData = await LikedProjectsDB.findOne({
      id: propertyId,
      userName: userName,
    });
    if (!localityData) {
      const newLikedProperty = await new LikedProjectsDB({
        id: propertyId,
        userName: req.body.userName,
        projectName: req.body.projectName,
      });
      await newLikedProperty.save();
      console.log("Liked Project Saved in Database Successfully");
      res.sendStatus(200);
    } else {
      console.log("Sorry Project already saved into liked property list");
    }
  } catch (err) {
    console.log(`Error during sending Liked Project -${err}`);
  }
});
app.get("/likedPropertyList", async (req, res) => {
  try {
    const data = await LikedPropertyDB.find();
    res.send(data);
  } catch (err) {
    console.log(`Error during sending Localities List -${err}`);
  }
});

app.get("/localitiesList", async (req, res) => {
  try {
    const data = await LocalitiesDB.find();
    res.send(data);
  } catch (err) {
    console.log(`Error during sending Localities List -${err}`);
  }
});

app.get("/PropertiesList", async (req, res) => {
  try {
    const data = await PropertyListDB.find();
    res.send(data);
  } catch (err) {
    console.log(`Error during sending Properties List -${err}`);
  }
});

app.get("/ProjectsList", async (req, res) => {
  try {
    const data = await ProjectDB.find();

    res.send(data);
  } catch (err) {
    console.log(`Error during sending Properties List -${err}`);
  }
});

app.get("/bankOfferList", async (req, res) => {
  try {
    const data = await BankOfferDB.find();
    res.send(data);
  } catch (err) {
    console.log(`Error during sending Properties List -${err}`);
  }
});
app.get("/residentialProperties", async (req, res) => {
  try {
    const data = await ResidentialPropertyDB.find();
    res.send(data);
  } catch (err) {
    console.log(`Error during sending Residential Properties List -${err}`);
  }
});
app.get("/totalUsers", async (req, res) => {
  try {
    const data = await NewUserDB.find();
    res.send(data);
  } catch (err) {
    console.log(`Error during sending Residential Properties List -${err}`);
  }
});
app.get("/mainSettingsList", async (req, res) => {
  try {
    const data = await MainSettingsDB.find();
    res.send(data);
  } catch (err) {
    console.log(`Error during sending Residential Properties List -${err}`);
  }
});

app.post("/newBankOffer", async (req, res) => {
  try {
    const NewBankOffer = await new BankOfferDB({
      bankOfferName: req.body.bankOfferName,
      bankOfferDetails: req.body.bankOfferDetails,
      applyOnBank: req.body.applyOnBank,
      startingFrom: req.body.startingFrom,
      endedOn: req.body.endedOn,
      dateOfFormSubmission: req.body.dateOfFormSubmission,
    });

    await NewBankOffer.save();
    console.log("Saved in Database Successfully");

    res.redirect("/admin-dashboard");
  } catch (err) {
    console.log(`Error during sending Error Report -${err}`);
  }
});
app.get("/bankOfferDetails", async (req, res) => {
  try {
    const data = await BankOfferDB.find();
    res.send(data);
  } catch (err) {
    console.log(`Error during sending bank offer data from backend -${err}`);
  }
});

app.post("/updateBankOffer", async (req, res) => {
  try {
    const id = req.body.id;
    await BankOfferDB.findOneAndUpdate(
      { _id: id },
      {
        bankOfferName: req.body.bankOfferName,
        bankOfferDetails: req.body.bankOfferDetails,
        applyOnBank: req.body.applyOnBank,
        startingFrom: req.body.startingFrom,
        endedOn: req.body.endedOn,
        dateOfFormSubmission: req.body.dateOfFormSubmission,
      }
    );
    console.log("update done");
    res.redirect("/success-message");
  } catch (err) {
    console.log(`Error during updating bank offer -${err}`);
  }
});
app.post("/delete-bank-offer", async (req, res) => {
  try {
    const id = req.body.id;

    await BankOfferDB.deleteOne({ _id: id });
    console.log("update done");
    res.redirect("/success-message");
  } catch (err) {
    console.log(`Error during deleting bank offer -${err}`);
  }
});

app.get("/officalEmailsDetails", async (req, res) => {
  try {
    const data = await OfficalEmailDB.find();
    res.send(data);
  } catch (err) {
    console.log(`Error during sending bank offer data from backend -${err}`);
  }
});

app.post("/addOfficalEmail", async (req, res) => {
  try {
    const NewOfficalEmail = await new OfficalEmailDB({
      email: req.body.email,
      additionalComment: req.body.bankOfferDetails,
      dateOfFormSubmission: req.body.dateOfFormSubmission,
    });

    await NewOfficalEmail.save();
    console.log("Saved in Database Successfully");

    res.redirect("/admin-dashboard");
  } catch (err) {
    console.log(`Error during adding Offical Email -${err}`);
  }
});

app.post("/updateOfficalEmail", async (req, res) => {
  try {
    const id = req.body.id;
    await OfficalEmailDB.findOneAndUpdate(
      { _id: id },
      {
        email: req.body.email,
        additionalComment: req.body.bankOfferDetails,
        dateOfFormSubmission: req.body.dateOfFormSubmission,
      }
    );
    console.log("update done");
    res.redirect("/success-message");
  } catch (err) {
    console.log(`Error during updating Offical Email -${err}`);
  }
});
app.post("/delete-offical-email", async (req, res) => {
  try {
    const id = req.body.id;

    await OfficalEmailDB.deleteOne({ _id: id });
    console.log("update done");
    res.redirect("/success-message");
  } catch (err) {
    console.log(`Error during deleting bank offer -${err}`);
  }
});

app.get("/officalPhoneNoDetails", async (req, res) => {
  try {
    const data = await OfficalPhoneNoDB.find();
    res.send(data);
  } catch (err) {
    console.log(`Error during sending bank offer data from backend -${err}`);
  }
});

app.post("/addOfficalPhoneNo", async (req, res) => {
  try {
    const NewOfficalPhoneNo = await new OfficalPhoneNoDB({
      phoneNo: req.body.phoneNo,
      additionalComment: req.body.bankOfferDetails,
      dateOfFormSubmission: req.body.dateOfFormSubmission,
    });

    await NewOfficalPhoneNo.save();
    console.log("Saved in Database Successfully");

    res.redirect("/admin-dashboard");
  } catch (err) {
    console.log(`Error during adding Offical Phone No. -${err}`);
  }
});

app.post("/updateOfficalPhoneNo", async (req, res) => {
  try {
    const id = req.body.id;
    await OfficalPhoneNoDB.findOneAndUpdate(
      { _id: id },
      {
        phoneNo: req.body.phoneNo,
        additionalComment: req.body.bankOfferDetails,
        dateOfFormSubmission: req.body.dateOfFormSubmission,
      }
    );
    console.log("update done");
    res.redirect("/success-message");
  } catch (err) {
    console.log(`Error during updating Offical Phone No -${err}`);
  }
});
app.post("/delete-offical-phoneNo", async (req, res) => {
  try {
    const id = req.body.id;

    await OfficalPhoneNoDB.deleteOne({ _id: id });
    console.log("update done");
    res.redirect("/success-message");
  } catch (err) {
    console.log(`Error during deleting Phone No. -${err}`);
  }
});

app.post("/submitErrorReport", async (req, res) => {
  try {
    const ErrorReportData = await new ErrorReportDB({
      email: req.body.email,
      errorDetails: req.body.errorDetails,
      pageName: req.body.pageName,
      dateOfFormSubmission: req.body.dateOfFormSubmission,
    });

    await ErrorReportData.save();
    console.log("Saved in Database Successfully");

    res.redirect("/postNewResidentialProperty");
  } catch (err) {
    console.log(`Error during sending Error Report -${err}`);
  }
});

app.post("/submitFeedback", async (req, res) => {
  try {
    const FeedbackData = await new FeedbackDB({
      email: req.body.email,
      topic: req.body.topic,
      feedbackDetail: req.body.feedbackDetail,
      dateOfFormSubmission: req.body.dateOfFormSubmission,
    });

    await FeedbackData.save();
    console.log("Saved in Database Successfully");

    res.redirect("/postNewResidentialProperty");
  } catch (err) {
    console.log(`Error during Feedback -${err}`);
  }
});

app.post("/submitEnquiry", async (req, res) => {
  try {
    const EnquiryData = await new EnquiryDB({
      name: req.body.name,
      email: req.body.email,
      projectId: req.body.projectId,
      phoneNO: req.body.phoneNO,
      dateOfFormSubmission: req.body.dateOfFormSubmission,
    });

    await EnquiryData.save();
    console.log("New Enquiry Saved in Database Successfully");

      res.send({ status: "Ok", data: "New Developer Details Saved." });
    } catch (err) {
    console.log(`Error during Feedback -${err}`);
  }
});

app.post("/newAgentService", async (req, res) => {
  try {
    const NewAgentService = await new AgentServicesDB({
      businessName: req.body.businessName,
      businessCategory: req.body.businessCategory,
      businessCountry: req.body.businessCountry,
      businessState: req.body.businessState,
      businessCity: req.body.businessCity,
      businessLocation: req.body.businessLocation,
      companyUrl: req.body.companyUrl,
      companyMailId: req.body.companyMailId,
      experienceInField: req.body.experienceInField,
      ContactPerson: req.body.ContactPerson,
      businessLogo: req.body.businessLogo,
      aboutCompany: req.files.aboutCompany,
      dateOfFormSubmission: req.body.dateOfFormSubmission,
    });

    await NewAgentService.save();
    console.log("Saved in Database Successfully");

    res.redirect("/admin-dashboard");
  } catch (err) {
    console.log(`Error during sending Error Report -${err}`);
  }
});

app.listen(PORT, () => {
  console.log("Server is running on : ", PORT);
});
