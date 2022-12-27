// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagCross1BrokenSvg from '@ant-design/icons-svg/lib/asn/BagCross1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagCross1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagCross1Broken: BagCross1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagCross1BrokenSvg}></AntdIcon>;
};

BagCross1Broken.displayName = 'BagCross1Broken';
BagCross1Broken.inheritAttrs = false;
export default BagCross1Broken;