Feature: Demo Feature

    # @demo
    Scenario Outline: Run first demo feature
        Given Google page is opened
        When Search by <SearchItem>
        Then Click on the first link
        Then The url matches the <ExpectedURL>

        Examples:
            | TestID     | SearchItem | ExpectedURL                    |
            | Demo_TC001 | WDIO       | https://webdriver.io/          |
            # | Demo_TC002 | vs code    | https://code.visualstudio.com/ |

    Scenario Outline: Check system requirements
        Given Wdio site is opened on the home page
        When Click on the Get Started btn
        Then Click on System requirements
        Then Verify sentence matches <ExpectedValue>

        Examples:
            | TestID        | Data | ExpectedValue           |
            | sys_req_TC001 | null | need Node.js installed. |