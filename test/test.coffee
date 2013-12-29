findDupesIn = require '../quizlet-dupes'

describe 'quizlet duplicates finder', ->

  it 'alerts you to duplicates', ->

    test = """월요일	Monday
    있다	to be (existence)
    화요일	Tuesday
    토요일	Saturday
    화요일	Tuesday
    있다	to have"""

    dupes = findDupesIn test

    Object.keys(dupes).length.should.eql 2
    dupes['화요일'].should.eql ['Tuesday', 'Tuesday']
    dupes['있다'].should.eql ['to be (existence)', 'to have']
