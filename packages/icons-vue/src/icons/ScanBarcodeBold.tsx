// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScanBarcodeBoldSvg from '@ant-design/icons-svg/lib/asn/ScanBarcodeBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScanBarcodeBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScanBarcodeBold: ScanBarcodeBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScanBarcodeBoldSvg}></AntdIcon>;
};

ScanBarcodeBold.displayName = 'ScanBarcodeBold';
ScanBarcodeBold.inheritAttrs = false;
export default ScanBarcodeBold;