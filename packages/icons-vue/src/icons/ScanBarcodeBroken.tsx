// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScanBarcodeBrokenSvg from '@ant-design/icons-svg/lib/asn/ScanBarcodeBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScanBarcodeBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScanBarcodeBroken: ScanBarcodeBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScanBarcodeBrokenSvg}></AntdIcon>;
};

ScanBarcodeBroken.displayName = 'ScanBarcodeBroken';
ScanBarcodeBroken.inheritAttrs = false;
export default ScanBarcodeBroken;