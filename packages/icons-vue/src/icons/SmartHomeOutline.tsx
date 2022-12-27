// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmartHomeOutlineSvg from '@ant-design/icons-svg/lib/asn/SmartHomeOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmartHomeOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmartHomeOutline: SmartHomeOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmartHomeOutlineSvg}></AntdIcon>;
};

SmartHomeOutline.displayName = 'SmartHomeOutline';
SmartHomeOutline.inheritAttrs = false;
export default SmartHomeOutline;