// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScanBrokenSvg from '@ant-design/icons-svg/lib/asn/ScanBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScanBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScanBroken: ScanBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScanBrokenSvg}></AntdIcon>;
};

ScanBroken.displayName = 'ScanBroken';
ScanBroken.inheritAttrs = false;
export default ScanBroken;