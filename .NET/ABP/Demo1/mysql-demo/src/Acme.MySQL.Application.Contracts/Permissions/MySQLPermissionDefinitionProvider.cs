using Acme.MySQL.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace Acme.MySQL.Permissions
{
    public class MySQLPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(MySQLPermissions.GroupName);

            //Define your own permissions here. Example:
            //myGroup.AddPermission(MySQLPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<MySQLResource>(name);
        }
    }
}
