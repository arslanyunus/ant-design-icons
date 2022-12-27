// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StarSlashTwoToneSvg from '@ant-design/icons-svg/lib/asn/StarSlashTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StarSlashTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StarSlashTwoTone: StarSlashTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StarSlashTwoToneSvg}></AntdIcon>;
};

StarSlashTwoTone.displayName = 'StarSlashTwoTone';
StarSlashTwoTone.inheritAttrs = false;
export default StarSlashTwoTone;