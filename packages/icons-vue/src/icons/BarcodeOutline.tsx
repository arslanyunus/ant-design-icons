// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BarcodeOutlineSvg from '@ant-design/icons-svg/lib/asn/BarcodeOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BarcodeOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BarcodeOutline: BarcodeOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BarcodeOutlineSvg}></AntdIcon>;
};

BarcodeOutline.displayName = 'BarcodeOutline';
BarcodeOutline.inheritAttrs = false;
export default BarcodeOutline;