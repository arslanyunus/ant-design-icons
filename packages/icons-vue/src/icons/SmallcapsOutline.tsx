// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmallcapsOutlineSvg from '@ant-design/icons-svg/lib/asn/SmallcapsOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmallcapsOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmallcapsOutline: SmallcapsOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmallcapsOutlineSvg}></AntdIcon>;
};

SmallcapsOutline.displayName = 'SmallcapsOutline';
SmallcapsOutline.inheritAttrs = false;
export default SmallcapsOutline;