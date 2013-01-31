// Generated by CoffeeScript 1.4.0
(function(){var e,t,n,r,i,s,o,u,a,f,l,c,h,p,d={}.hasOwnProperty,v=function(e,t){function r(){this.constructor=e}for(var n in t)d.call(t,n)&&(e[n]=t[n]);r.prototype=t.prototype;e.prototype=new r;e.__super__=t.prototype;return e},m=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1};this.screenly=(l=window.screenly)!=null?l:{};this.screenly.collections=(c=window.screenly.collections)!=null?c:{};this.screenly.views=(h=window.screenly.views)!=null?h:{};this.screenly.models=(p=window.screenly.models)!=null?p:{};f=function(e){var t,n;t=new Date(e);n=t.getTimezoneOffset();return(new Date(t.getTime()-n*6e4)).toISOString()};r=function(e){function t(){return t.__super__.constructor.apply(this,arguments)}v(t,e);t.prototype.url=function(){if(this.get("asset_id"))return"/api/assets/"+this.get("asset_id")};return t}(Backbone.Model);screenly.models.Asset=r;i=function(e){function t(){return t.__super__.constructor.apply(this,arguments)}v(t,e);t.prototype.url="/api/assets";t.prototype.model=r;t.prototype.initialize=function(e){return this.on("reset",function(){screenly.ActiveAssets.reset();screenly.InactiveAssets.reset();return this.each(function(e){return e.get("is_active")?screenly.ActiveAssets.add(e):screenly.InactiveAssets.add(e)})})};return t}(Backbone.Collection);screenly.Assets=new i;t=function(e){function t(){return t.__super__.constructor.apply(this,arguments)}v(t,e);t.prototype.model=r;return t}(Backbone.Collection);a=function(e){function t(){return t.__super__.constructor.apply(this,arguments)}v(t,e);t.prototype.model=r;return t}(Backbone.Collection);screenly.collections.Assets=i;screenly.collections.ActiveAssets=t;screenly.collections.InactiveAssets=a;screenly.ActiveAssets=new t;screenly.InactiveAssets=new a;n=function(e){function t(){return t.__super__.constructor.apply(this,arguments)}v(t,e);t.prototype.events={"click #add-button":"addButtonWasClicked"};t.prototype.initialize=function(e){return this.template=_.template($("#add-asset-modal-template").html())};t.prototype.render=function(){$(this.el).html(this.template());this.$("input.date").datepicker({autoclose:!0});this.$("input.date").datepicker("setValue",new Date);this.$("input.time").timepicker({minuteStep:5,showInputs:!1,disableFocus:!0,defaultTime:"current",showMeridian:!1});return this};t.prototype.addButtonWasClicked=function(e){var t,n;e.preventDefault();console.log("You tried to add Asset");n=$("input[name='start_date_date']").val()+" "+$("input[name='start_date_time']").val();t=$("input[name='end_date_date']").val()+" "+$("input[name='end_date_time']").val();$("input[name='start_date']").val(f(n));$("input[name='end_date']").val(f(t));return this.$("form").submit()};return t}(Backbone.View);screenly.views.AddAssetModalView=n;o=function(e){function t(){return t.__super__.constructor.apply(this,arguments)}v(t,e);return t}(Backbone.View);s=function(e){function t(){return t.__super__.constructor.apply(this,arguments)}v(t,e);t.prototype.initialize=function(e){var t,n;(t=!1,m.call(e,t)>=0)&&console.log("You need to specify the template name for this AssetsView.");(n=!1,m.call(e,n)>=0)&&console.log("You must specify the child view class for this AssetsView.");this.template=_.template($("#"+e.templateName).html());this.collection.bind("reset",this.render,this);this.collection.bind("remove",this.render,this);return this.collection.bind("add",this.render,this)};t.prototype.render=function(){var e=this;$(this.el).html(this.template());this.$("tbody").empty();this.collection.each(function(t){return e.$("tbody").append((new e.options.childViewClass({model:t})).render().el)});return this};return t}(Backbone.View);e=function(e){function t(){return t.__super__.constructor.apply(this,arguments)}v(t,e);t.prototype.initialize=function(e){return this.template=_.template($("#active-asset-row-template").html())};t.prototype.events={"click #deactivate":"deactivateAsset"};t.prototype.tagName="tr";t.prototype.render=function(){$(this.el).html(this.template(this.model.toJSON()));return this};t.prototype.deactivateAsset=function(e){e.preventDefault();screenly.ActiveAssets.remove(this.model);return screenly.InactiveAssets.add(this.model)};return t}(Backbone.View);u=function(e){function t(){return t.__super__.constructor.apply(this,arguments)}v(t,e);t.prototype.initialize=function(e){return this.template=_.template($("#inactive-asset-row-template").html())};t.prototype.events={"click #activate":"activateAsset"};t.prototype.tagName="tr";t.prototype.render=function(){$(this.el).html(this.template(this.model.toJSON()));return this};t.prototype.activateAsset=function(e){e.preventDefault();screenly.InactiveAssets.remove(this.model);return screenly.ActiveAssets.add(this.model)};return t}(Backbone.View);screenly.views.AssetsView=s;screenly.views.ActiveAssetRowView=e;jQuery(function(){var t,r;screenly.Assets.fetch();t=new s({collection:screenly.ActiveAssets,templateName:"active-assets-template",childViewClass:e});r=new s({collection:screenly.InactiveAssets,templateName:"inactive-assets-template",childViewClass:u});$("#active-assets-container").append(t.render().el);$("#inactive-assets-container").append(r.render().el);return $("#add-asset-button").click(function(e){var t;e.preventDefault();t=new n;$("body").append(t.render().el);return $(t.el).children(":first").modal()})})}).call(this);