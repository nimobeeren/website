import { expect, test } from "@playwright/test";

test("can be reached from the home page", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: /about/i }).click();
  expect(new URL(page.url()).pathname).toBe("/about");
});

test("about heading is shown", async ({ page }) => {
  await page.goto("/about");

  await expect(page.getByRole("heading", { name: /about/i })).toBeVisible();
  // TODO: expect some more text
});
