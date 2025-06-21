export const normalizeQuery = (query) => {
    return query.replace(/\s+/g, ' ').trim().toLowerCase();
  };
  
  export const validateQuery = (userQuery, correctQuery) => {
    const normalizedUser = normalizeQuery(userQuery);
    const normalizedCorrect = normalizeQuery(correctQuery);
    return normalizedUser === normalizedCorrect;
  };
  
  export const getQueryFeedback = (isCorrect, points, streak) => {
    if (isCorrect) {
      const bonusPoints = streak > 0 ? streak * 50 : 0;
      const totalPoints = points + bonusPoints;
      return {
        message: `🎉 Correct! +${totalPoints} points ${bonusPoints > 0 ? `(+${bonusPoints} streak bonus)` : ''}`,
        type: 'success',
        points: totalPoints
      };
    } else {
      return {
        message: '❌ Incorrect query. Try again!',
        type: 'error',
        points: 0
      };
    }
  };