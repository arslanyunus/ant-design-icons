// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ElementEqualOutlineSvg from '@ant-design/icons-svg/lib/asn/ElementEqualOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ElementEqualOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ElementEqualOutline: ElementEqualOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ElementEqualOutlineSvg}></AntdIcon>;
};

ElementEqualOutline.displayName = 'ElementEqualOutline';
ElementEqualOutline.inheritAttrs = false;
export default ElementEqualOutline;