// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScanBoldSvg from '@ant-design/icons-svg/lib/asn/ScanBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScanBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScanBold: ScanBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScanBoldSvg}></AntdIcon>;
};

ScanBold.displayName = 'ScanBold';
ScanBold.inheritAttrs = false;
export default ScanBold;