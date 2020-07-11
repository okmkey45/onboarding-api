# Onboarding API


This is the ALPS document for BigCo's **Onboarding API**.

## Properties


The following data properties are defined for this API.



#### identifier


_unique identifier for this record_

#### givenName


_Customer's first name_

#### familyName


_Customer's last name_

#### email


_Customer's primary email account_

#### telephone


_Customer's phone number_

#### status


_Account status (active, inactive, suspended)_

#### maxValue


_Account's maximum spending list_

#### discount


_Account's default sales discount (as a percentage)_

## Actions


The following actions, or state transitions, are defined for this API.



 | id | type | rt | args | notes | 
 | --- | --- | --- | --- | --- | 
 | **startOnboarding** | unsafe | wip |  | 
**collectCustomerData** | safe | wip | <a href='undefined'>undefined</a> | 
**SaveToWIP** | idempotent | wip | <a href='#identifier'>#identifier</a>,<a href='#givenName'>#givenName</a>,<a href='#familyName'>#familyName</a>,<a href='#email'>#email</a>,<a href='#telephone'>#telephone</a>,<a href='#status'>#status</a>,<a href='#maxValue'>#maxValue</a>,<a href='#discount'>#discount</a> | 
**collectAccountData** | safe | wip | <a href='#identifier'>#identifier</a> | 
**completeOnboarding** | idempotent | wip | <a href='#identifier'>#identifier</a> | 
**abandonOnboarding** | idempotent | wip | <a href='#identifier'>#identifier</a> | 
**goHome** | safe | na |  |  | 

## States


The following states (e.g. REST Resources) are defined for this API.


TK
