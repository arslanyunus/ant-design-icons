// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScanningOutlineSvg from '@ant-design/icons-svg/lib/asn/ScanningOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScanningOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScanningOutline: ScanningOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScanningOutlineSvg}></AntdIcon>;
};

ScanningOutline.displayName = 'ScanningOutline';
ScanningOutline.inheritAttrs = false;
export default ScanningOutline;