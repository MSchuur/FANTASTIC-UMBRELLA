const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagsData = await Tag.findAll({
      include: [
        { model: Product,
          through: ProductTag,
        }
      ],
    });
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [
        { model: Product,
          through: ProductTag,
        }],
    });
    console.log(req.params.id)
    if (!tagData) {
      res.status(404).json({ message: 'No library card found with that id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tagGetOne = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!tagGetOne) {
      res.status(404).json({message: 'No category found with that id!'});
      return;
    }

    res.status(200).json(tagGetOne);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const tagCreate = await Tag.create(req.body);
    res.status(200).json(tagCreate);
  } catch (err) {
    res.status(400),json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const tagUpdate = await Tag.update(req.body, {
      individualHooks: true,
      where: {
        id: req.params.id
      },
    });
    
    if(!tagUpdate) {
      res.status(404).json({message: 'No category found with that id!'});
      return;
    }
    res.status(200).json(tagUpdate);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const tagDelete = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if(!tagDelete) {
      res.status(404).json({message: 'No category found with that id!'});
      return;
    }
    res.status(200).json(tagDelete);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
