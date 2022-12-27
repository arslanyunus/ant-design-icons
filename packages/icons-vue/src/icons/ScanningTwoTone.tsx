// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScanningTwoToneSvg from '@ant-design/icons-svg/lib/asn/ScanningTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScanningTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScanningTwoTone: ScanningTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScanningTwoToneSvg}></AntdIcon>;
};

ScanningTwoTone.displayName = 'ScanningTwoTone';
ScanningTwoTone.inheritAttrs = false;
export default ScanningTwoTone;