// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RepeateMusicBrokenSvg from '@ant-design/icons-svg/lib/asn/RepeateMusicBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RepeateMusicBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RepeateMusicBroken: RepeateMusicBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RepeateMusicBrokenSvg}></AntdIcon>;
};

RepeateMusicBroken.displayName = 'RepeateMusicBroken';
RepeateMusicBroken.inheritAttrs = false;
export default RepeateMusicBroken;