// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScanBarcodeTwoToneSvg from '@ant-design/icons-svg/lib/asn/ScanBarcodeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScanBarcodeTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScanBarcodeTwoTone: ScanBarcodeTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScanBarcodeTwoToneSvg}></AntdIcon>;
};

ScanBarcodeTwoTone.displayName = 'ScanBarcodeTwoTone';
ScanBarcodeTwoTone.inheritAttrs = false;
export default ScanBarcodeTwoTone;