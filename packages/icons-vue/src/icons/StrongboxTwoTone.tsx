// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StrongboxTwoToneSvg from '@ant-design/icons-svg/lib/asn/StrongboxTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StrongboxTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StrongboxTwoTone: StrongboxTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StrongboxTwoToneSvg}></AntdIcon>;
};

StrongboxTwoTone.displayName = 'StrongboxTwoTone';
StrongboxTwoTone.inheritAttrs = false;
export default StrongboxTwoTone;