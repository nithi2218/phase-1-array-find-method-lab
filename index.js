
function superbowlWin (record) {
    const result = record.find( row => row.result === "W" );
    return result ? result.year : undefined;
  }