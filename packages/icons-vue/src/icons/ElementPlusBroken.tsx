// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ElementPlusBrokenSvg from '@ant-design/icons-svg/lib/asn/ElementPlusBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ElementPlusBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ElementPlusBroken: ElementPlusBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ElementPlusBrokenSvg}></AntdIcon>;
};

ElementPlusBroken.displayName = 'ElementPlusBroken';
ElementPlusBroken.inheritAttrs = false;
export default ElementPlusBroken;