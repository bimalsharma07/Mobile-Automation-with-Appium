interface UserCredentials {
  username: string;
  password: string;
}

interface CheckoutInformation {
  firstName: string;
  lastName: string;
  postalCode: string;
}

interface UserData {
  userCrentials: UserCredentials;
  checkoutInformation: CheckoutInformation;
}

const { 
  userCrentials, 
  checkoutInformation 
}: UserData = require('../../data/userData.json');

describe('SwagLabs Apk End to End test', () => {
  it('should login successfully', async () => {
    
    const usernameField = await $('~test-Username');
    const passwordField = await $('~test-Password');
    const loginButton = await $('~test-LOGIN');

    await usernameField.setValue(userCrentials.username);
    await passwordField.setValue(userCrentials.password);
    await loginButton.click();
  });

  it('should add products to cart', async () => {
    
    const firstProduct = await $('(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[1]');
    const secondProduct = await $('(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[2]');

    await firstProduct.click();
    await secondProduct.click();
  });

  it('should complete checkout process', async () => {
    const cartButton = await $('//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.ImageView');
    const checkoutButton = await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("test-CHECKOUT"))');
    
    await cartButton.click();
    await checkoutButton.click();
  });

  it('should fill checkout information', async () => {
    const firstNameField = await $('~test-First Name');
    const lastNameField = await $('~test-Last Name');
    const postalCodeField = await $('~test-Zip/Postal Code');
    const continueButton = await $('~test-CONTINUE');

    await firstNameField.setValue(checkoutInformation.firstName);
    await lastNameField.setValue(checkoutInformation.lastName);
    await postalCodeField.setValue(checkoutInformation.postalCode);
    await continueButton.click();
  });

  it('should confirm order overview', async () => {
    const finishButton = await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("test-FINISH"))');
    await finishButton.click();
  });

  it('should show order confirmation', async () => {
    
    const confirmationText = await $('//android.widget.TextView[contains(@text, "THANK YOU FOR YOU ORDER")]');
    const backHomeButton = await $('//android.view.ViewGroup[@content-desc="test-BACK HOME"]');
    
    await confirmationText.waitForExist({ timeout: 15000 });
    await backHomeButton.waitForExist({ timeout: 10000 });
  });
});