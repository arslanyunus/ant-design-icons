// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StopOutlineSvg from '@ant-design/icons-svg/lib/asn/StopOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StopOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StopOutline: StopOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StopOutlineSvg}></AntdIcon>;
};

StopOutline.displayName = 'StopOutline';
StopOutline.inheritAttrs = false;
export default StopOutline;