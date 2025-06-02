import { Actions, Resources } from "./permissions/constants";

export function generatePermissionKey(resource: string, action: string) {
  return `${resource.toUpperCase()}:${action.toUpperCase()}`;
}

export const Permissions = Resources.flatMap((resource) =>
  Actions.map((action) => ({
    key: generatePermissionKey(resource, action),
    resource,
    action,
    description: `${action} can ${resource}`,
  })),
);
export type Permission = (typeof Permissions)[number];
