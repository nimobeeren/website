import { expect, test } from "@playwright/test";

test.skip("can be reached from the home page", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: /about/i }).click();
  expect(new URL(page.url()).pathname).toBe("/about");
});

test("about text is shown", async ({ page }) => {
  await page.goto("/about");

  await expect(page.getByRole("heading", { name: /about/i })).toBeVisible();
  // Article contains more than 1000 characters
  expect(
    (await page.getByRole("article").textContent())?.length
  ).toBeGreaterThan(1000);
});
