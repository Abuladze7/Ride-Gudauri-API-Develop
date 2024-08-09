const {
  createSeoOptimization,
  updateSeoOptimization,
  getSeoOptimization,
} = require("../controllers/seoController");

const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

const router = require("express").Router();

/**
 * @swagger
 * /api/seoSettings:
 *   get:
 *     summary: Retrieve the current SEO optimization settings
 *     tags: [SEO Settings]
 *     responses:
 *       200:
 *         description: Successfully retrieved SEO optimization settings
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 page_title:
 *                   type: string
 *                 meta_title:
 *                   type: string
 *                 meta_description:
 *                   type: string
 *                 meta_keywords:
 *                   type: string
 *                 meta_url:
 *                   type: string
 *                 meta_img:
 *                   type: object
 *                   properties:
 *                     public_id:
 *                       type: string
 *                     url:
 *                       type: string
 *                 createdAt:
 *                   type: string
 *                 updatedAt:
 *                   type: string
 *       404:
 *         description: SEO optimization entry not found
 *       500:
 *         description: Internal server error
 *
 * /api/seoSettings/{id}:
 *   put:
 *     summary: Update an existing SEO optimization entry
 *     tags: [SEO Settings]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the SEO optimization entry to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               page_title:
 *                 type: string
 *                 example: "Home - Best Services"
 *               meta_title:
 *                 type: string
 *                 example: "Home | Top Services Company"
 *               meta_description:
 *                 type: string
 *                 example: "Discover our top services and get the best deals."
 *               meta_keywords:
 *                 type: string
 *                 example: "home, services, best company"
 *               meta_url:
 *                 type: string
 *                 example: "https://example.com/home"
 *               meta_img:
 *                 type: object
 *                 properties:
 *                   public_id:
 *                     type: string
 *                     example: "sample_public_id"
 *                   url:
 *                     type: string
 *                     example: "https://example.com/images/home-meta.png"
 *     responses:
 *       200:
 *         description: Successfully updated SEO optimization entry
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "SEO optimization updated successfully"
 *       404:
 *         description: SEO optimization entry not found
 *       500:
 *         description: Internal server error
 */
router.get("/", getSeoOptimization);
// router.post("/", createSeoOptimization);
router.put("/:id", auth, admin, updateSeoOptimization);

module.exports = router;
