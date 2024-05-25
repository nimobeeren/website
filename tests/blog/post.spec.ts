import { expect, test } from "@playwright/test";

test("can be reached from blog overview page", async ({ page }) => {
  await page.goto("/blog");
  await page
    .getByRole("main")
    .getByRole("listitem")
    .first()
    .getByRole("link")
    .click();
  expect(new URL(page.url()).pathname).toMatch(/\/blog\/.+/);
});

test("post content is shown", async ({ page }) => {
  await page.goto("/blog/about-me");

  await expect(page.getByRole("heading", { name: /About me/i })).toBeVisible();
  expect(
    (await page.getByRole("article").textContent())?.length
  ).toBeGreaterThan(1000); // Article contains more than 1000 characters
});
