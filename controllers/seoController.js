const SeoOptimizationSettings = require("../models/seo/seoModel");
const cloudinary = require("../config/cloudinary");

exports.getSeoOptimization = async (req, res) => {
  try {
    const seo = await SeoOptimizationSettings.findOne();

    if (!seo) {
      return res.status(404).json({ message: "SEO not found" });
    }

    res.json(seo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createSeoOptimization = async (req, res) => {
  try {
    const seo = await SeoOptimizationSettings.create(req.body);

    res.status(201).json(seo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateSeoOptimization = async (req, res) => {
  try {
    const { id } = req.params;
    const { meta_img, ...updateData } = req.body;
    const seo = await SeoOptimizationSettings.findById(id);

    if (!seo) {
      return res.status(404).json({ message: "SEO not found" });
    }

    if (meta_img && seo.meta_img.public_id) {
      const imgId = seo.meta_img.public_id;
      if (imgId) {
        await cloudinary.uploader.destroy(imgId);
      }
    }

    seo.set({ ...updateData, meta_img });

    await seo.save();

    res.json({ message: "SEO optimization updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
