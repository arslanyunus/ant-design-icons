// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RepeatTwoToneSvg from '@ant-design/icons-svg/lib/asn/RepeatTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RepeatTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RepeatTwoTone: RepeatTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RepeatTwoToneSvg}></AntdIcon>;
};

RepeatTwoTone.displayName = 'RepeatTwoTone';
RepeatTwoTone.inheritAttrs = false;
export default RepeatTwoTone;