// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RepeatBrokenSvg from '@ant-design/icons-svg/lib/asn/RepeatBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RepeatBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RepeatBroken: RepeatBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RepeatBrokenSvg}></AntdIcon>;
};

RepeatBroken.displayName = 'RepeatBroken';
RepeatBroken.inheritAttrs = false;
export default RepeatBroken;