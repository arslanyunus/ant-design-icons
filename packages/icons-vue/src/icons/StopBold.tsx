// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StopBoldSvg from '@ant-design/icons-svg/lib/asn/StopBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StopBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StopBold: StopBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StopBoldSvg}></AntdIcon>;
};

StopBold.displayName = 'StopBold';
StopBold.inheritAttrs = false;
export default StopBold;