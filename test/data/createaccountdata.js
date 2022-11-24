module.exports = [
    {
        scenario: "Empty Required Field - Firstname",
        firstname: "",
        lastname:"Trevor",
        newsletter:"No",
        email:"treveroney@gmail.com",
        password:"passowrd@1",
        confirmpassword:"passowrd@1",
        message:"This is a required field.",
        expectedUrl:"https://magento.softwaretestingboard.com/customer/account/create"
    },
    {
        scenario: "Mismatched password",
        firstname: "Leroy",
        lastname:"Shrinky",
        newsletter:"No",
        email:"leroyscott@gmail.com",
        password:"password@1",
        confirmpassword:"passowrd@1",
        message:"Please enter the same value again.",
        expectedUrl:"https://magento.softwaretestingboard.com/customer/account/create"
    },
    {

        scenario: "Email already registered",
        firstname: "Sigoney",
        lastname:"Trevor",
        newsletter:"No",
        email:"terry.scott@gmail.com",
        password:"passowrd@1",
        confirmpassword:"passowrd@1",
        message:"There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.",
        expectedUrl:"https://magento.softwaretestingboard.com/customer/account/create/"
    },
    {
        scenario: "Happy Path",
        firstname: "Hannah",
        lastname:"Trevor",
        newsletter:"No",
        email:"treveroney3@gmail.com",
        password:"passowrd@1",
        confirmpassword:"passowrd@1",
        message:"Thank you for registering with Fake Online Clothing Store.",
        expectedUrl:"https://magento.softwaretestingboard.com/customer/account/"
    },
];
