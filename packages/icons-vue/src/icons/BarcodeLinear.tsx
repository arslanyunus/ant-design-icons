// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BarcodeLinearSvg from '@ant-design/icons-svg/lib/asn/BarcodeLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BarcodeLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BarcodeLinear: BarcodeLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BarcodeLinearSvg}></AntdIcon>;
};

BarcodeLinear.displayName = 'BarcodeLinear';
BarcodeLinear.inheritAttrs = false;
export default BarcodeLinear;