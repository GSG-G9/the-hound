const { deleteOrder } = require('../../database/queries');

const deleteOrderController = async (req, res, next) => {
  const { id: userId } = req.user;
  const { orderReqId } = req.params;
  try {
    await deleteOrder(orderReqId, userId);
    res
      .status(200)
      .json({ status: 200, message: 'order deleted successfully' });
  } catch (err) {
    next(err);
  }
};

module.exports = deleteOrderController;