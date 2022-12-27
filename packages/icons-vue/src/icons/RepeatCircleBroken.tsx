// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RepeatCircleBrokenSvg from '@ant-design/icons-svg/lib/asn/RepeatCircleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RepeatCircleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RepeatCircleBroken: RepeatCircleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RepeatCircleBrokenSvg}></AntdIcon>;
};

RepeatCircleBroken.displayName = 'RepeatCircleBroken';
RepeatCircleBroken.inheritAttrs = false;
export default RepeatCircleBroken;