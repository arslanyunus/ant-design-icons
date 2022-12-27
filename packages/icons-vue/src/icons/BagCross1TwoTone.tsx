// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagCross1TwoToneSvg from '@ant-design/icons-svg/lib/asn/BagCross1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagCross1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagCross1TwoTone: BagCross1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagCross1TwoToneSvg}></AntdIcon>;
};

BagCross1TwoTone.displayName = 'BagCross1TwoTone';
BagCross1TwoTone.inheritAttrs = false;
export default BagCross1TwoTone;