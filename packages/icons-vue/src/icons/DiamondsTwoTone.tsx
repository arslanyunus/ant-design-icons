// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DiamondsTwoToneSvg from '@ant-design/icons-svg/lib/asn/DiamondsTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DiamondsTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DiamondsTwoTone: DiamondsTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiamondsTwoToneSvg}></AntdIcon>;
};

DiamondsTwoTone.displayName = 'DiamondsTwoTone';
DiamondsTwoTone.inheritAttrs = false;
export default DiamondsTwoTone;