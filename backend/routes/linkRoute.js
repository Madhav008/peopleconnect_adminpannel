const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();
const Link = require("../models/Link");
const Company = require("../models/Company");
const Order = require("../models/Ecommerce");
const Template = require("../models/template");
const SelectedTemplate = require("../models/selectedTemplate");
const Product = require("../models/Services");
const Image = require("../models/Images");
const Payment = require("../models/payment");
const Social = require("../models/Social");

router.get("/", (req, res) => {
  res.render("templates/main");
});

router.post(
  "/link",
  protect,
  expressAsyncHandler(async (req, res) => {
    var link = await Link.create(req.body);
    if (link) {
      res.status(200).json({
        success: true,
        msg: link,
      });
    }
  })
);

router.post(
  "/newTemplate",
  protect,
  expressAsyncHandler(async (req, res) => {
    var template = await Template.create(req.body);
    if (template) {
      res.status(200).json({
        success: true,
        msg: template,
      });
    }
  })
);
router.get(
  "/template",

  expressAsyncHandler(async (req, res) => {
    var template = await Template.find();
    if (template) {
      res.status(200).json({
        success: true,
        msg: template,
      });
    }
  })
);
router.post(
  "/template",
  protect,
  expressAsyncHandler(async (req, res) => {
    var selectedTemplate = await SelectedTemplate.create(req.body);
    if (selectedTemplate) {
      res.status(200).json({
        success: true,
        msg: selectedTemplate,
      });
    }
  })
);

router.post(
  "/companydetail",
  protect,
  expressAsyncHandler(async (req, res) => {
    var companydetail = await Company.create(req.body);
    if (companydetail) {
      res.status(200).json({
        success: true,
        msg: companydetail,
      });
    }
  })
);

router.post(
  "/social",
  protect,
  expressAsyncHandler(async (req, res) => {
    var social = await Social.create(req.body);
    if (social) {
      res.status(200).json({
        success: true,
        msg: social,
      });
    }
  })
);

router.post(
  "/payment",
  protect,
  expressAsyncHandler(async (req, res) => {
    var payment = await Payment.create(req.body);
    if (payment) {
      res.status(200).json({
        success: true,
        msg: payment,
      });
    }
  })
);

router.post(
  "/product",
  protect,
  expressAsyncHandler(async (req, res) => {
    var services = await Product.create(req.body);
    if (services) {
      res.status(200).json({
        success: true,
        msg: services,
      });
    }
  })
);

router.post(
  "/order",
  protect,
  expressAsyncHandler(async (req, res) => {
    var order = await Order.create(req.body);
    if (order) {
      res.status(200).json({
        success: true,
        msg: order,
      });
    }
  })
);

router.post(
  "/image",
  protect,
  expressAsyncHandler(async (req, res) => {
    var image = await Image.create(req.body);
    if (image) {
      res.status(200).json({
        success: true,
        msg: image,
      });
    }
  })
);

router.get(
  "/preview/:id",
  expressAsyncHandler(async (req, res) => {
    var link = await Link.find({ _id: req.params.id });
    var template = await SelectedTemplate.find({ userId: link.userId });

    var companydetail = await Company.find({ userId: link.userId });
    var social = await Social.find({ userId: link.userId });
    var payment = await Payment.find({ userId: link.userId });
    var product = await Product.find({ userId: link.userId });
    var order = await Order.find({ userId: link.userId });
    var image = await Image.find({ userId: link.userId });

    var data = {
      link: link,
      template: template,

      company_Detail: companydetail,
      social: social,
      payment: payment,
      product: product,
      order: order,
      image: image,
    };
    if (link) {
      res.status(200).json({
        success: true,
        msg: data,
      });
    }
  })
);

router.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    var link = await Link.find({ companyUrl: req.params.id });
    var template = await SelectedTemplate.find({
      userId: link[0].userId,
    }).lean();
    var nameTemplate = await Template.findById(template[0].TemplateId).lean();
    var companydetail = await Company.find({ userId: link[0].userId }).lean();
    var social = await Social.find({ userId: link[0].userId }).lean();
    var payment = await Payment.find({ userId: link[0].userId }).lean();
    var product = await Product.find({ userId: link[0].userId }).lean();
    var order = await Order.find({ userId: link[0].userId }).lean();
    var image = await Image.find({ userId: link[0].userId }).lean();

    var data = {
      link: link,
      template: template,
      name: nameTemplate,
      company_Detail: companydetail,
      social: social,
      payment: payment,
      product: product,
      order: order,
      image: image,
    };
    if (link) {
      console.log(nameTemplate);
      res.render(`templates/${nameTemplate.name}`, {
        companyDetailsValue: companydetail[0],
        socialDetailsValue: social[0],
        // feedbackDetailsValue: FeedbackDetails[0],
        imagesDetailsValue: image[0],
        ecommerceDetailsValue: order[0].ecommerce,
        paymentDetailsValue: payment[0],
      });
    }
  })
);
module.exports = router;
