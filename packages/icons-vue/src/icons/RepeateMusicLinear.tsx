// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RepeateMusicLinearSvg from '@ant-design/icons-svg/lib/asn/RepeateMusicLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RepeateMusicLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RepeateMusicLinear: RepeateMusicLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RepeateMusicLinearSvg}></AntdIcon>;
};

RepeateMusicLinear.displayName = 'RepeateMusicLinear';
RepeateMusicLinear.inheritAttrs = false;
export default RepeateMusicLinear;