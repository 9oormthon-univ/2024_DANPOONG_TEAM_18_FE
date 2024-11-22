function getFormatTime(seconds) {
    if (isNaN(seconds) || seconds === '-' || seconds === undefined) {
      return '-- 분 -- 초';
    }

    const minutes = Math.floor(seconds / 60);
    const remainSeconds = seconds % 60;
    return minutes > 0
      ? `${minutes}분 ${remainSeconds}초`
      : `${remainSeconds}초`
}

export default getFormatTime;