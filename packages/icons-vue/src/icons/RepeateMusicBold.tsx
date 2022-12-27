// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RepeateMusicBoldSvg from '@ant-design/icons-svg/lib/asn/RepeateMusicBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RepeateMusicBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RepeateMusicBold: RepeateMusicBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RepeateMusicBoldSvg}></AntdIcon>;
};

RepeateMusicBold.displayName = 'RepeateMusicBold';
RepeateMusicBold.inheritAttrs = false;
export default RepeateMusicBold;