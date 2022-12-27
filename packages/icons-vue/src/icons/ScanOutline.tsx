// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScanOutlineSvg from '@ant-design/icons-svg/lib/asn/ScanOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScanOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScanOutline: ScanOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScanOutlineSvg}></AntdIcon>;
};

ScanOutline.displayName = 'ScanOutline';
ScanOutline.inheritAttrs = false;
export default ScanOutline;