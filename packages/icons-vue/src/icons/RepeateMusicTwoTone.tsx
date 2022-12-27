// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RepeateMusicTwoToneSvg from '@ant-design/icons-svg/lib/asn/RepeateMusicTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RepeateMusicTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RepeateMusicTwoTone: RepeateMusicTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RepeateMusicTwoToneSvg}></AntdIcon>;
};

RepeateMusicTwoTone.displayName = 'RepeateMusicTwoTone';
RepeateMusicTwoTone.inheritAttrs = false;
export default RepeateMusicTwoTone;