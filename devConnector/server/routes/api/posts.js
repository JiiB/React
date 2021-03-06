const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Post = require('../../models/Post');
const Profile = require('../../models/Profile');

// Validation
const validatePostInput = require('../../validation/post');

// @route GET api/posts/
// @desc  Get posts
// @access Public
router.get('/', (req, res) => {
  const errors = {};
  Post.find()
    .sort({
      date: "desc"
    })
    .then(posts => res.json(posts))
    .catch(err => {
      errors.nopostsfound = 'No posts found'
      return res.status(404).json(errors);
    });
});


// @route GET api/posts/:id
// @desc  Get posts by id
// @access Public
router.get('/:id', (req, res) => {
  const errors = {};
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => {
      errors.nopostfound = 'No post found with that ID'
      return res.status(404).json(errors);
    });
});


// @route POST api/posts/
// @desc  Create post
// @access Private
router.post('/', passport.authenticate('jwt', {
  session: false
}), (req, res) => {

  const {
    errors,
    isValid
  } = validatePostInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newPost = new Post({
    text: req.body.text,
    name: req.body.name,
    avatar: req.body.avatar,
    user: req.user.id,
  });

  newPost.save().then(post => res.json(post));
});

// @route DELETE api/posts/:id
// @desc  Delete post
// @access Private
router.delete('/:id', passport.authenticate('jwt', {
  session: false
}), (req, res) => {
  const errors = {};
  Profile.findOne({
    user: req.user.id
  }).then(profile => {
    Post.findById(req.params.id)
      .then(post => {
        // Check for post owner
        if (post.user.toString() !== req.user.id) {
          errors.notauthorized = 'User not authorized';
          return res.status(401).json(errors);
        }

        // Delete
        post.remove().then(() => res.json({
          success: true
        }));
      })
      .catch(err => {
        errors.postnotfount = 'No post found';
        return res.status(404).json(errors);
      })
  })
});


// @route POST api/posts/like/:id
// @desc  Like post
// @access Private
router.post('/like/:id', passport.authenticate('jwt', {
  session: false
}), (req, res) => {
  const errors = {};
  Profile.findOne({
    user: req.user.id
  }).then(profile => {
    Post.findById(req.params.id)
      .then(post => {
        if (post.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
          errors.alreadyliked = 'User already liked this post';
          return res.status(400).json(errors);
        }

        // Add user id to likes array
        post.likes.push({
          user: req.user.id
        });

        post.save().then(() => res.json(post));

      })
      .catch(err => {
        errors.postnotfount = 'No post found';
        return res.status(404).json(errors);
      })
  })
});


// @route POST api/posts/unlike/:id
// @desc  Unlike post
// @access Private
router.post('/unlike/:id', passport.authenticate('jwt', {
  session: false
}), (req, res) => {
  const errors = {};
  Profile.findOne({
    user: req.user.id
  }).then(profile => {
    Post.findById(req.params.id)
      .then(post => {
        if (post.likes.filter(like => like.user.toString() === req.user.id).length === 0) {
          errors.notliked = 'You have not yet liked this post';
          return res.status(400).json(errors);
        }

        // Get remove index
        const removeIndex = post.likes.map(item => item.user.toString())
          .indexOf(req.user.id);

        // Splice out of array
        post.likes.splice(removeIndex, 1);

        post.save().then(() => res.json(post));

      })
      .catch(err => {
        errors.postnotfount = 'No post found';
        return res.status(404).json(errors);
      })
  })
});


// @route POST api/posts/comment/:id
// @desc  Add comment to post
// @access Private
router.post('/comment/:id', passport.authenticate('jwt', {
  session: false
}), (req, res) => {

  const {
    errors,
    isValid
  } = validatePostInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Post.findById(req.params.id)
    .then(post => {
      const newComment = {
        text: req.body.text,
        name: req.body.name,
        avatar: req.body.avatar,
        user: req.user.id,
      }

      // Add to comments array
      post.comments.unshift(newComment);

      post.save().then((post) => res.json(post));
    })
    .catch(err => {
      errors.postnotfount = 'No post found';
      return res.status(404).json(errors)
    })
});


// @route DELETE api/posts/comment/:id/:comment_id
// @desc  Remove comment from post
// @access Private
router.delete('/comment/:id/:comment_id', passport.authenticate('jwt', {
  session: false
}), (req, res) => {

  const errors = {};


  Post.findById(req.params.id)
    .then(post => {
      // Check if comment exists
      if (post.comments.filter(comment => comment._id.toString() === req.params.comment_id).length === 0) {
        errors.commentnotexists = 'Comment does not exist';
        return res.status(404).json(errors);
      }

      // Get remove index
      const removeIndex = post.comments
        .map(item => item._id.toString())
        .indexOf(req.params.comment_id)

      // Splice comment out of array
      post.comments.splice(removeIndex, 1);

      post.save().then(post => res.json(post));

    })
    .catch(err => {
      errors.postnotfount = 'No post found';
      return res.status(404).json(errors)
    })
});

module.exports = router;