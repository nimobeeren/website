import { expect, test } from "@playwright/test";

test("can be reached from the home page", async ({ page }) => {
  await page.goto("/");
  const navigation = page.getByRole("navigation");
  await navigation.getByRole("link", { name: /blog/i }).click();
  expect(new URL(page.url()).pathname).toBe("/blog");
});

test("blog posts are shown", async ({ page }) => {
  await page.goto("/blog");

  await expect(page.getByRole("heading", { name: /blog/i })).toBeVisible();
  await expect(
    page.getByRole("main").getByRole("listitem").first()
  ).toBeVisible();
});
