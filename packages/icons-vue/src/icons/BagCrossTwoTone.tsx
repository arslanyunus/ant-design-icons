// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagCrossTwoToneSvg from '@ant-design/icons-svg/lib/asn/BagCrossTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagCrossTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagCrossTwoTone: BagCrossTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagCrossTwoToneSvg}></AntdIcon>;
};

BagCrossTwoTone.displayName = 'BagCrossTwoTone';
BagCrossTwoTone.inheritAttrs = false;
export default BagCrossTwoTone;