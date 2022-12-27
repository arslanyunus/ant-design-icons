// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagCross1LinearSvg from '@ant-design/icons-svg/lib/asn/BagCross1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagCross1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagCross1Linear: BagCross1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagCross1LinearSvg}></AntdIcon>;
};

BagCross1Linear.displayName = 'BagCross1Linear';
BagCross1Linear.inheritAttrs = false;
export default BagCross1Linear;