// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagCross1OutlineSvg from '@ant-design/icons-svg/lib/asn/BagCross1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagCross1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagCross1Outline: BagCross1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagCross1OutlineSvg}></AntdIcon>;
};

BagCross1Outline.displayName = 'BagCross1Outline';
BagCross1Outline.inheritAttrs = false;
export default BagCross1Outline;