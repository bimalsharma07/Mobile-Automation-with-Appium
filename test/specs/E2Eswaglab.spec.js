 describe('SwagLabs Apk End to End test', () => {
    it('should enter username, password and tap login', async () => {

        // Enter username
        const usernameField = await $('~test-Username');
        await usernameField.setValue('standard_user');

        // Enter password
        const passwordField = await $('~test-Password'); 
        await passwordField.setValue('secret_sauce');

        // Tap Login button
        const loginButton = await $('~test-LOGIN');
        await loginButton.click();
    });
    it('should add products to cart', async () => {
       
        // Add first product to cart
        const firstProduct = await $('(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[1]'); 
        await firstProduct.click();

        // Add second product to cart
        const secondProduct = await $('(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])');
        await secondProduct.click();

    });
    it('open cart screen and checkout', async () => {

        // Click on cart icon
        const cartButton = await $('//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.ImageView');
        await cartButton.click();
    
        // Click on checkout button
        const checkoutButton = await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("test-CHECKOUT"))`);
        await checkoutButton.click();

    });

    it('Checkout user information', async () => {

        // Enter username
        const firstNameField = await $('~test-First Name');
        await firstNameField.setValue('John');
        
        // Enter last name
        const lastNameField = await $('~test-Last Name'); 
        await lastNameField.setValue('Doe');

        // Enter postal code
        const postalCodeField = await $('~test-Zip/Postal Code');
        await postalCodeField.setValue('12345');
        
        // Tap continue button
        const continueButton = await $('~test-CONTINUE');
        await continueButton.click();
    });

    it('Confirm Overview screen', async () => {

        // Click on Finish button
        const finishButton = await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("test-FINISH"))`);
        await finishButton.click();

    });
   it('Order Screen', async () => {
        // 1. Verify confirmation text
        const confirmationText = await $('//android.widget.TextView[contains(@text, "THANK YOU FOR YOU ORDER")]');
        await confirmationText.waitForExist({ timeout: 15000 });

        // 2. Verify Back Home button
        const backHomeButton = await $('//android.view.ViewGroup[@content-desc="test-BACK HOME"]');
         await backHomeButton.waitForExist({ timeout: 10000 });
        
    });
});
