using Volo.Abp.Settings;

namespace Acme.MySQL.Settings
{
    public class MySQLSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(MySQLSettings.MySetting1));
        }
    }
}
