// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RepeatCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/RepeatCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RepeatCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RepeatCircleTwoTone: RepeatCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RepeatCircleTwoToneSvg}></AntdIcon>;
};

RepeatCircleTwoTone.displayName = 'RepeatCircleTwoTone';
RepeatCircleTwoTone.inheritAttrs = false;
export default RepeatCircleTwoTone;