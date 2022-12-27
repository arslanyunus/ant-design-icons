// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmartCarOutlineSvg from '@ant-design/icons-svg/lib/asn/SmartCarOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmartCarOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmartCarOutline: SmartCarOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmartCarOutlineSvg}></AntdIcon>;
};

SmartCarOutline.displayName = 'SmartCarOutline';
SmartCarOutline.inheritAttrs = false;
export default SmartCarOutline;