// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScannerTwoToneSvg from '@ant-design/icons-svg/lib/asn/ScannerTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScannerTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScannerTwoTone: ScannerTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScannerTwoToneSvg}></AntdIcon>;
};

ScannerTwoTone.displayName = 'ScannerTwoTone';
ScannerTwoTone.inheritAttrs = false;
export default ScannerTwoTone;