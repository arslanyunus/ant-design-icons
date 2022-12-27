// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StopCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/StopCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StopCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StopCircleTwoTone: StopCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StopCircleTwoToneSvg}></AntdIcon>;
};

StopCircleTwoTone.displayName = 'StopCircleTwoTone';
StopCircleTwoTone.inheritAttrs = false;
export default StopCircleTwoTone;