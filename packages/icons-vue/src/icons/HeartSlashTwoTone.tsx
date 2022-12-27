// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartSlashTwoToneSvg from '@ant-design/icons-svg/lib/asn/HeartSlashTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartSlashTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartSlashTwoTone: HeartSlashTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartSlashTwoToneSvg}></AntdIcon>;
};

HeartSlashTwoTone.displayName = 'HeartSlashTwoTone';
HeartSlashTwoTone.inheritAttrs = false;
export default HeartSlashTwoTone;