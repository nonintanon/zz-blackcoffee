using System.Web;
using System.Web.Optimization;

namespace ZZBlackCoffeeAzureAndGitDemo
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            //bundles.UseCdn = true;

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
                        "~/Scripts/jquery-ui-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.unobtrusive*",
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/libs").Include(
                        "~/Scripts/bootstrap.js", // don't bundle the min version, it will be broken
                        "~/Scripts/knockout-*"));
            //"~/Scrtips/jquery.isotope.js", // don't bundle the min version, it will be broken
            //"~/Scripts/jquery.magnific-popup.js"));

            bundles.Add(new ScriptBundle("~/bundles/main").Include("~/Scripts/main.js"));

            bundles.Add(new StyleBundle("~/styles").Include(
                //"~/Content/bootstrap.css", 
                //"~/Content/bootstrap-themes.css",
                        "~/Content/font-awesome.css",
                        "~/Content/font-awesome-ie7.css",
                        "~/Content/css/style.css"));

            bundles.Add(new StyleBundle("~/Content/themes/base/css").Include(
                        "~/Content/themes/base/jquery.ui.core.css",
                        "~/Content/themes/base/jquery.ui.resizable.css",
                        "~/Content/themes/base/jquery.ui.selectable.css",
                        "~/Content/themes/base/jquery.ui.accordion.css",
                        "~/Content/themes/base/jquery.ui.autocomplete.css",
                        "~/Content/themes/base/jquery.ui.button.css",
                        "~/Content/themes/base/jquery.ui.dialog.css",
                        "~/Content/themes/base/jquery.ui.slider.css",
                        "~/Content/themes/base/jquery.ui.tabs.css",
                        "~/Content/themes/base/jquery.ui.datepicker.css",
                        "~/Content/themes/base/jquery.ui.progressbar.css",
                        "~/Content/themes/base/jquery.ui.theme.css"));

            //BundleTable.EnableOptimizations = true;
        }
    }
}