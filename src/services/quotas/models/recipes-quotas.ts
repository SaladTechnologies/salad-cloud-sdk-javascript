import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const recipesQuotas = z.lazy(() => {
  return z.object({
    maxCreatedRecipeDeployments: z.number(),
    recipeInstanceQuota: z.number(),
  });
});

/**
 *
 * @typedef  {RecipesQuotas} recipesQuotas
 * @property {number}
 * @property {number}
 */
export type RecipesQuotas = z.infer<typeof recipesQuotas>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const recipesQuotasResponse = z.lazy(() => {
  return z
    .object({
      max_created_recipe_deployments: z.number(),
      recipe_instance_quota: z.number(),
    })
    .transform((data) => ({
      maxCreatedRecipeDeployments: data['max_created_recipe_deployments'],
      recipeInstanceQuota: data['recipe_instance_quota'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const recipesQuotasRequest = z.lazy(() => {
  return z
    .object({ maxCreatedRecipeDeployments: z.number().nullish(), recipeInstanceQuota: z.number().nullish() })
    .transform((data) => ({
      max_created_recipe_deployments: data['maxCreatedRecipeDeployments'],
      recipe_instance_quota: data['recipeInstanceQuota'],
    }));
});
