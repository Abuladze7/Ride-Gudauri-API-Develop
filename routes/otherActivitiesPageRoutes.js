const {
  getAllData,
  createOtherActivitiesPageMainSection,
  createOtherActivitiesPageTransfersForm,
  updateOtherActivitiesPageTransfersForm,
  createOtherActivitiesPageSnowMobileForm,
  updateOtherActivitiesPageSnowMobileForm,
  createOtherActivitiesPageHorseRidingForm,
  updateOtherActivitiesPageHorseRidingForm,
  createOtherActivitiesPageQuadBikeForm,
  updateOtherActivitiesPageQuadBikeForm,
  createOtherActivitiesPageBanner,
  updateOtherActivitiesPageBanner,
  addImageToBanner,
  updateOtherActivitiesPageMainSection,
  createOtherActivitiesCarouselImage,
  updateOtherActivitiesCarouselImage,
} = require("../controllers/otherActivitiesPageController");

const router = require("express").Router();

// ========== All Data =========== //
router.get("/", getAllData);

// ========== Banner =========== //
/**
 * @swagger
 * /api/otherActivitiesPage/banner:
 *   post:
 *     summary: Creates a new Other Activities Page banner
 *     tags:
 *       - Other Activities Page
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the banner
 *                 example: "string"
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: The image URLs of the banner
 *                 example: ["string", "string"]
 *     responses:
 *       201:
 *         description: Successfully created the banner
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "string"
 *                 subtitle:
 *                   type: string
 *                   example: "string"
 *                 images:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["string", "string"]
 *                 createdAt:
 *                   type: string
 *                   example: "string"
 *                 updatedAt:
 *                   type: string
 *                   example: "string"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "string"
 *
 * /api/otherActivitiesPage/banner/add-image:
 *   post:
 *     summary: Adds an image to the existing Other Activities Page banner
 *     tags:
 *       - Other Activities Page
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               imgUrl:
 *                 type: string
 *                 description: The URL of the image to add
 *                 example: "string"
 *     responses:
 *       200:
 *         description: Successfully added the image to the banner
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "string"
 *                 subtitle:
 *                   type: string
 *                   example: "string"
 *                 images:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["string", "string", "string"]
 *                 createdAt:
 *                   type: string
 *                   example: "string"
 *                 updatedAt:
 *                   type: string
 *                   example: "string"
 *       404:
 *         description: Banner not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "string"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *
 * /api/otherActivitiesPage/banner/{id}:
 *   put:
 *     summary: Updates an existing Other Activities Page banner
 *     tags:
 *       - Other Activities Page
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the banner to update
 *       - in: query
 *         name: imgIndex
 *         schema:
 *           type: integer
 *         description: The index of the image to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the banner
 *                 example: "string"
 *               imgUrl:
 *                 type: string
 *                 description: The new image URL to update
 *                 example: "string"
 *     responses:
 *       200:
 *         description: Successfully updated the banner
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "string"
 *                 subtitle:
 *                   type: string
 *                   example: "string"
 *                 images:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["string", "string", "string"]
 *                 createdAt:
 *                   type: string
 *                   example: "string"
 *                 updatedAt:
 *                   type: string
 *                   example: "string"
 *       404:
 *         description: Banner not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "string"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.post("/banner", createOtherActivitiesPageBanner);
router.post("/banner/add-image", addImageToBanner);
router.put("/banner/:id", updateOtherActivitiesPageBanner);

// ========== Main Section =========== //
/**
 * @swagger
 * /api/otherActivitiesPage/mainSection:
 *   post:
 *     summary: Creates a new Other Activities Page main section
 *     tags:
 *       - Other Activities Page
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the main section
 *                 example: "string"
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the main section
 *                 example: "string"
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: The image URLs of the main section
 *                 example: ["string", "string"]
 *     responses:
 *       201:
 *         description: Successfully created the main section
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "string"
 *                 title:
 *                   type: string
 *                   example: "string"
 *                 subtitle:
 *                   type: string
 *                   example: "string"
 *                 images:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["string", "string"]
 *                 createdAt:
 *                   type: string
 *                   example: "string"
 *                 updatedAt:
 *                   type: string
 *                   example: "string"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "string"
 *
 * /api/otherActivitiesPage/mainSection/{id}:
 *   put:
 *     summary: Updates an existing Other Activities Page main section
 *     tags:
 *       - Other Activities Page
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the main section to update
 *       - in: query
 *         name: imgIndex
 *         schema:
 *           type: integer
 *         description: The index of the image to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the main section
 *                 example: "string"
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the main section
 *                 example: "string"
 *               imgUrl:
 *                 type: string
 *                 description: The new image URL to update
 *                 example: "string"
 *     responses:
 *       200:
 *         description: Successfully updated the main section
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "string"
 *                 title:
 *                   type: string
 *                   example: "string"
 *                 subtitle:
 *                   type: string
 *                   example: "string"
 *                 images:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["string", "string"]
 *                 createdAt:
 *                   type: string
 *                   example: "string"
 *                 updatedAt:
 *                   type: string
 *                   example: "string"
 *       404:
 *         description: Section not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "string"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.post("/mainSection", createOtherActivitiesPageMainSection);
router.put("/mainSection/:id", updateOtherActivitiesPageMainSection);

// ========== Transfers Form ========== //
/**
 * @swagger
 * /api/otherActivitiesPage/transfersForm:
 *   post:
 *     summary: Creates a new Other Activities Page transfers form
 *     tags:
 *       - Other Activities Page
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the transfers form
 *                 example: "string"
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the transfers form
 *                 example: "string"
 *               warning:
 *                 type: string
 *                 description: The warning of the transfers form
 *                 example: "string *OPTIONAL*"
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     description:
 *                       type: string
 *                       description: The description of the item
 *                       example: "string"
 *                     imgUrl:
 *                       type: string
 *                       description: The image URL of the item
 *                       example: "string"
 *     responses:
 *       201:
 *         description: Successfully created the transfers form
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "string"
 *                 title:
 *                   type: string
 *                   example: "string"
 *                 subtitle:
 *                   type: string
 *                   example: "string"
 *                 warning:
 *                    type: string
 *                    example: "string"
 *                 items:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       description:
 *                         type: string
 *                         example: "string"
 *                       imgUrl:
 *                         type: string
 *                         example: "string"
 *                 createdAt:
 *                   type: string
 *                   example: "string"
 *                 updatedAt:
 *                   type: string
 *                   example: "string"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "string"
 *
 *   put:
 *     summary: Updates an existing Other Activities Page transfers form
 *     tags:
 *       - Other Activities Page
 *     parameters:
 *       - in: query
 *         name: itemId
 *         schema:
 *           type: string
 *         description: The ID of the item to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the transfers form
 *                 example: "string"
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the transfers form
 *                 example: "string"
 *               warning:
 *                 type: string
 *                 description: The warning of the transfers form
 *                 example: "string *OPTIONAL*"
 *               description:
 *                 type: string
 *                 description: The description of the item
 *                 example: "string"
 *               imgUrl:
 *                 type: string
 *                 description: The image URL of the item
 *                 example: "string"
 *     responses:
 *       200:
 *         description: Successfully updated the transfers form
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "string"
 *                 title:
 *                   type: string
 *                   example: "string"
 *                 subtitle:
 *                   type: string
 *                   example: "string"
 *                 items:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       description:
 *                         type: string
 *                         example: "string"
 *                       imgUrl:
 *                         type: string
 *                         example: "string"
 *                 createdAt:
 *                   type: string
 *                   example: "string"
 *                 updatedAt:
 *                   type: string
 *                   example: "string"
 *       404:
 *         description: Section not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "string"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "string"
 */
router.post("/transfersForm", createOtherActivitiesPageTransfersForm);
router.put("/transfersForm", updateOtherActivitiesPageTransfersForm);

// ========== Snowmobile Form ========== //
/**
 * @swagger
 * /api/otherActivitiesPage/snowmobileForm:
 *   post:
 *     summary: Creates a new Other Activities Page Snowmobile form
 *     tags:
 *       - Other Activities Page
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the Snowmobile form
 *                 example: "string"
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the Snowmobile form
 *                 example: "string"
 *               warning:
 *                 type: string
 *                 description: The warning of the Snowmobile form
 *                 example: "string *OPTIONAL*"
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     description:
 *                       type: string
 *                       description: The description of the item
 *                       example: "string"
 *                     imgUrl:
 *                       type: string
 *                       description: The image URL of the item
 *                       example: "string"
 *     responses:
 *       201:
 *         description: Successfully created the Snowmobile form
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "string"
 *                 title:
 *                   type: string
 *                   example: "string"
 *                 subtitle:
 *                   type: string
 *                   example: "string"
 *                 warning:
 *                    type: string
 *                    example: "string"
 *                 items:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       description:
 *                         type: string
 *                         example: "string"
 *                       imgUrl:
 *                         type: string
 *                         example: "string"
 *                 createdAt:
 *                   type: string
 *                   example: "string"
 *                 updatedAt:
 *                   type: string
 *                   example: "string"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "string"
 *
 *   put:
 *     summary: Updates an existing Other Activities Page Snowmobile form
 *     tags:
 *       - Other Activities Page
 *     parameters:
 *       - in: query
 *         name: itemId
 *         schema:
 *           type: string
 *         description: The ID of the item to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the Snowmobile form
 *                 example: "string"
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the Snowmobile form
 *                 example: "string"
 *               warning:
 *                 type: string
 *                 description: The warning of the Snowmobile form
 *                 example: "string *OPTIONAL*"
 *               description:
 *                 type: string
 *                 description: The description of the item
 *                 example: "string"
 *               imgUrl:
 *                 type: string
 *                 description: The image URL of the item
 *                 example: "string"
 *     responses:
 *       200:
 *         description: Successfully updated the Snowmobile form
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "string"
 *                 title:
 *                   type: string
 *                   example: "string"
 *                 subtitle:
 *                   type: string
 *                   example: "string"
 *                 items:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       description:
 *                         type: string
 *                         example: "string"
 *                       imgUrl:
 *                         type: string
 *                         example: "string"
 *                 createdAt:
 *                   type: string
 *                   example: "string"
 *                 updatedAt:
 *                   type: string
 *                   example: "string"
 *       404:
 *         description: Section not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "string"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "string"
 */
router.post("/snowmobileForm", createOtherActivitiesPageSnowMobileForm);
router.put("/snowmobileForm", updateOtherActivitiesPageSnowMobileForm);

// ========== Horse riding form ========== //
/**
 * @swagger
 * /api/otherActivitiesPage/horseRidingForm:
 *   post:
 *     summary: Creates a new Other Activities Page Horse Riding form
 *     tags:
 *       - Other Activities Page
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the Horse Riding form
 *                 example: "string"
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the Horse Riding form
 *                 example: "string"
 *               warning:
 *                 type: string
 *                 description: The warning of the Horse Riding form
 *                 example: "string *OPTIONAL*"
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     description:
 *                       type: string
 *                       description: The description of the item
 *                       example: "string"
 *                     imgUrl:
 *                       type: string
 *                       description: The image URL of the item
 *                       example: "string"
 *     responses:
 *       201:
 *         description: Successfully created the Horse Riding form
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "string"
 *                 title:
 *                   type: string
 *                   example: "string"
 *                 subtitle:
 *                   type: string
 *                   example: "string"
 *                 warning:
 *                    type: string
 *                    example: "string"
 *                 items:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       description:
 *                         type: string
 *                         example: "string"
 *                       imgUrl:
 *                         type: string
 *                         example: "string"
 *                 createdAt:
 *                   type: string
 *                   example: "string"
 *                 updatedAt:
 *                   type: string
 *                   example: "string"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "string"
 *
 *   put:
 *     summary: Updates an existing Other Activities Page Horse Riding form
 *     tags:
 *       - Other Activities Page
 *     parameters:
 *       - in: query
 *         name: itemId
 *         schema:
 *           type: string
 *         description: The ID of the item to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the Horse Riding form
 *                 example: "string"
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the Horse Riding form
 *                 example: "string"
 *               warning:
 *                 type: string
 *                 description: The warning of the Horse Riding form
 *                 example: "string *OPTIONAL*"
 *               description:
 *                 type: string
 *                 description: The description of the item
 *                 example: "string"
 *               imgUrl:
 *                 type: string
 *                 description: The image URL of the item
 *                 example: "string"
 *     responses:
 *       200:
 *         description: Successfully updated the Horse Riding form
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "string"
 *                 title:
 *                   type: string
 *                   example: "string"
 *                 subtitle:
 *                   type: string
 *                   example: "string"
 *                 items:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       description:
 *                         type: string
 *                         example: "string"
 *                       imgUrl:
 *                         type: string
 *                         example: "string"
 *                 createdAt:
 *                   type: string
 *                   example: "string"
 *                 updatedAt:
 *                   type: string
 *                   example: "string"
 *       404:
 *         description: Section not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "string"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "string"
 */
router.post("/horseRidingForm", createOtherActivitiesPageHorseRidingForm);
router.put("/horseRidingForm", updateOtherActivitiesPageHorseRidingForm);

// ========== Quad Bike Form ========== //
/**
 * @swagger
 * /api/otherActivitiesPage/quadBikeForm:
 *   post:
 *     summary: Creates a new Other Activities Page Quad Bike form
 *     tags:
 *       - Other Activities Page
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the Quad Bike form
 *                 example: "string"
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the Quad Bike form
 *                 example: "string"
 *               warning:
 *                 type: string
 *                 description: The warning of the Quad Bike form
 *                 example: "string *OPTIONAL*"
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     description:
 *                       type: string
 *                       description: The description of the item
 *                       example: "string"
 *                     imgUrl:
 *                       type: string
 *                       description: The image URL of the item
 *                       example: "string"
 *     responses:
 *       201:
 *         description: Successfully created the Quad Bike form
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "string"
 *                 title:
 *                   type: string
 *                   example: "string"
 *                 subtitle:
 *                   type: string
 *                   example: "string"
 *                 warning:
 *                    type: string
 *                    example: "string"
 *                 items:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       description:
 *                         type: string
 *                         example: "string"
 *                       imgUrl:
 *                         type: string
 *                         example: "string"
 *                 createdAt:
 *                   type: string
 *                   example: "string"
 *                 updatedAt:
 *                   type: string
 *                   example: "string"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "string"
 *
 *   put:
 *     summary: Updates an existing Other Activities Page Quad Bike form
 *     tags:
 *       - Other Activities Page
 *     parameters:
 *       - in: query
 *         name: itemId
 *         schema:
 *           type: string
 *         description: The ID of the item to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the Quad Bike form
 *                 example: "string"
 *               subtitle:
 *                 type: string
 *                 description: The subtitle of the Quad Bike form
 *                 example: "string"
 *               warning:
 *                 type: string
 *                 description: The warning of the Quad Bike form
 *                 example: "string *OPTIONAL*"
 *               description:
 *                 type: string
 *                 description: The description of the item
 *                 example: "string"
 *               imgUrl:
 *                 type: string
 *                 description: The image URL of the item
 *                 example: "string"
 *     responses:
 *       200:
 *         description: Successfully updated the Quad Bike form
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "string"
 *                 title:
 *                   type: string
 *                   example: "string"
 *                 subtitle:
 *                   type: string
 *                   example: "string"
 *                 items:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       description:
 *                         type: string
 *                         example: "string"
 *                       imgUrl:
 *                         type: string
 *                         example: "string"
 *                 createdAt:
 *                   type: string
 *                   example: "string"
 *                 updatedAt:
 *                   type: string
 *                   example: "string"
 *       404:
 *         description: Section not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "string"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "string"
 */
router.post("/quadBikeForm", createOtherActivitiesPageQuadBikeForm);
router.put("/quadBikeForm", updateOtherActivitiesPageQuadBikeForm);

// ========== Carousel Image ========== //
/**
 * @swagger
 * /api/otherActivitiesPage/carouselImage:
 *   post:
 *     summary: Create new carousel images
 *     tags:
 *       - Other Activities Page
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: List of image URLs to be added to the carousel
 *                 example: ["string", "string"]
 *     responses:
 *       201:
 *         description: Successfully created carousel images
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "string"
 *                 images:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["string", "string"]
 *                 createdAt:
 *                   type: string
 *                   example: "string"
 *                 updatedAt:
 *                   type: string
 *                   example: "string"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "string"
 *
 *   put:
 *     summary: Update carousel images
 *     tags:
 *       - Other Activities Page
 *     parameters:
 *       - in: query
 *         name: index
 *         schema:
 *           type: integer
 *         required: true
 *         description: Index of the image to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               imgUrl:
 *                 type: string
 *                 description: The new image URL to update
 *                 example: "string"
 *     responses:
 *       200:
 *         description: Successfully updated carousel image
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "string"
 *                 images:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["string", "string"]
 *                 createdAt:
 *                   type: string
 *                   example: "string"
 *                 updatedAt:
 *                   type: string
 *                   example: "string"
 *       400:
 *         description: Invalid index
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "string"
 *       404:
 *         description: Images not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.post("/carouselImage", createOtherActivitiesCarouselImage);
router.put("/carouselImage", updateOtherActivitiesCarouselImage);

module.exports = router;
