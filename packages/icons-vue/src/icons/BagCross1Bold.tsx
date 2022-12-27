// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagCross1BoldSvg from '@ant-design/icons-svg/lib/asn/BagCross1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagCross1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagCross1Bold: BagCross1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagCross1BoldSvg}></AntdIcon>;
};

BagCross1Bold.displayName = 'BagCross1Bold';
BagCross1Bold.inheritAttrs = false;
export default BagCross1Bold;