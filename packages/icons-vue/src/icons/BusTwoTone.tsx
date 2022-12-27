// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BusTwoToneSvg from '@ant-design/icons-svg/lib/asn/BusTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BusTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BusTwoTone: BusTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BusTwoToneSvg}></AntdIcon>;
};

BusTwoTone.displayName = 'BusTwoTone';
BusTwoTone.inheritAttrs = false;
export default BusTwoTone;