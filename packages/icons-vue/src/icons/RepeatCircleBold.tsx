// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RepeatCircleBoldSvg from '@ant-design/icons-svg/lib/asn/RepeatCircleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RepeatCircleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RepeatCircleBold: RepeatCircleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RepeatCircleBoldSvg}></AntdIcon>;
};

RepeatCircleBold.displayName = 'RepeatCircleBold';
RepeatCircleBold.inheritAttrs = false;
export default RepeatCircleBold;