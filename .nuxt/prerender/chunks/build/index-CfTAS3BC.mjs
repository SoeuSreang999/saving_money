import { _ as __nuxt_component_0 } from './nuxt-link-2X8I7ISh.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'file://D:/wamp64/www/sreang/saving_money/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file://D:/wamp64/www/sreang/saving_money/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file://D:/wamp64/www/sreang/saving_money/node_modules/ufo/dist/index.mjs';
import 'file://D:/wamp64/www/sreang/saving_money/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://D:/wamp64/www/sreang/saving_money/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://D:/wamp64/www/sreang/saving_money/node_modules/h3/dist/index.mjs';
import 'file://D:/wamp64/www/sreang/saving_money/node_modules/devalue/index.js';
import 'file://D:/wamp64/www/sreang/saving_money/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file://D:/wamp64/www/sreang/saving_money/node_modules/destr/dist/index.mjs';
import 'file://D:/wamp64/www/sreang/saving_money/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://D:/wamp64/www/sreang/saving_money/node_modules/hookable/dist/index.mjs';
import 'file://D:/wamp64/www/sreang/saving_money/node_modules/klona/dist/index.mjs';
import 'file://D:/wamp64/www/sreang/saving_money/node_modules/scule/dist/index.mjs';
import 'file://D:/wamp64/www/sreang/saving_money/node_modules/defu/dist/defu.mjs';
import 'file://D:/wamp64/www/sreang/saving_money/node_modules/ohash/dist/index.mjs';
import 'file://D:/wamp64/www/sreang/saving_money/node_modules/unstorage/dist/index.mjs';
import 'file://D:/wamp64/www/sreang/saving_money/node_modules/unstorage/drivers/fs.mjs';
import 'file:///D:/wamp64/www/sreang/saving_money/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://D:/wamp64/www/sreang/saving_money/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://D:/wamp64/www/sreang/saving_money/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://D:/wamp64/www/sreang/saving_money/node_modules/pathe/dist/index.mjs';
import 'file://D:/wamp64/www/sreang/saving_money/node_modules/unhead/dist/index.mjs';
import 'file://D:/wamp64/www/sreang/saving_money/node_modules/@unhead/shared/dist/index.mjs';
import 'file://D:/wamp64/www/sreang/saving_money/node_modules/unctx/dist/index.mjs';
import 'file://D:/wamp64/www/sreang/saving_money/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4 bg-blue-700 text-white" }, _attrs))}> Hello, Tailwind CSS! segtwet <div>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/users" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Users`);
      } else {
        return [
          createTextVNode("Users")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-CfTAS3BC.mjs.map
