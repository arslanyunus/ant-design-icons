// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScannerOutlineSvg from '@ant-design/icons-svg/lib/asn/ScannerOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScannerOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScannerOutline: ScannerOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScannerOutlineSvg}></AntdIcon>;
};

ScannerOutline.displayName = 'ScannerOutline';
ScannerOutline.inheritAttrs = false;
export default ScannerOutline;