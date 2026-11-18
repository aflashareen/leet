class Solution(object):
    def countMatches(self, items, ruleKey, ruleValue):
        """
        :type items: List[List[str]]
        :type ruleKey: str
        :type ruleValue: str
        :rtype: int
        """
        count = 0
        for i in range(len(items)):
            if ruleKey == "type":
                index = 0
            elif ruleKey == "color":
                index = 1
            else:
                index = 2
            
            if items[i][index] == ruleValue:
                count += 1
        return count